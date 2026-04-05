const fs = require('node:fs');
const path = require('node:path');
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

const PORT = Number.parseInt(process.env.PORT || '4000', 10);
const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'data', 'schedule.sqlite');
const MAX_JSON_SIZE = process.env.MAX_JSON_SIZE || '1mb';

function getAllowedOrigins() {
  const raw = (process.env.ALLOWED_ORIGINS || '*').trim();
  if (!raw || raw === '*') return '*';
  return raw.split(',').map((x) => x.trim()).filter(Boolean);
}

function normalizeEventList(rawList) {
  if (!Array.isArray(rawList)) return { ok: false, error: 'events must be an array' };

  const normalized = rawList.map((ev, index) => {
    if (!ev || typeof ev !== 'object') return null;
    if (typeof ev.name !== 'string' || typeof ev.location !== 'string' || typeof ev.start !== 'string') return null;

    const idValue = Number(ev.id);
    return {
      id: Number.isFinite(idValue) ? idValue : Date.now() + index,
      name: ev.name.trim(),
      location: ev.location.trim(),
      start: ev.start,
      keyword: typeof ev.keyword === 'string' && ev.keyword.trim() ? ev.keyword.trim() : '未設定',
      coArtists: typeof ev.coArtists === 'string' ? ev.coArtists.trim() : '',
    };
  });

  if (normalized.includes(null)) {
    return {
      ok: false,
      error: 'every event must include string fields: name, location, start',
    };
  }

  return { ok: true, events: normalized };
}

function sanitizeDatasetId(datasetId) {
  return String(datasetId || '').trim().slice(0, 80);
}

async function initDb() {
  fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });

  const db = await open({
    filename: DB_PATH,
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS schedules (
      dataset_id TEXT PRIMARY KEY,
      payload TEXT NOT NULL,
      updated_at INTEGER NOT NULL
    )
  `);

  return db;
}

async function readDataset(db, datasetId) {
  const row = await db.get(
    'SELECT payload, updated_at FROM schedules WHERE dataset_id = ?',
    datasetId,
  );

  if (!row) {
    return { events: [], updatedAt: 0 };
  }

  let events = [];
  try {
    events = JSON.parse(row.payload);
  } catch {
    events = [];
  }

  return {
    events: Array.isArray(events) ? events : [],
    updatedAt: Number(row.updated_at) || 0,
  };
}

async function upsertDataset(db, datasetId, events, updatedAt) {
  await db.run(
    `
      INSERT INTO schedules (dataset_id, payload, updated_at)
      VALUES (?, ?, ?)
      ON CONFLICT(dataset_id)
      DO UPDATE SET payload = excluded.payload, updated_at = excluded.updated_at
    `,
    datasetId,
    JSON.stringify(events),
    updatedAt,
  );
}

async function bootstrap() {
  const db = await initDb();

  const app = express();
  app.use(cors({ origin: getAllowedOrigins() }));
  app.use(express.json({ limit: MAX_JSON_SIZE }));

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true, time: new Date().toISOString() });
  });

  app.get('/api/sync/:datasetId', async (req, res) => {
    const datasetId = sanitizeDatasetId(req.params.datasetId);
    if (!datasetId) {
      return res.status(400).json({ error: 'datasetId is required' });
    }

    try {
      const snapshot = await readDataset(db, datasetId);
      return res.json({
        datasetId,
        events: snapshot.events,
        updatedAt: snapshot.updatedAt,
        serverTime: Date.now(),
      });
    } catch (error) {
      console.error('GET /api/sync failed:', error);
      return res.status(500).json({ error: 'internal server error' });
    }
  });

  app.put('/api/sync/:datasetId', async (req, res) => {
    const datasetId = sanitizeDatasetId(req.params.datasetId);
    if (!datasetId) {
      return res.status(400).json({ error: 'datasetId is required' });
    }

    const { events, clientUpdatedAt, force } = req.body || {};
    const normalized = normalizeEventList(events);
    if (!normalized.ok) {
      return res.status(400).json({ error: normalized.error });
    }

    try {
      const current = await readDataset(db, datasetId);
      const parsedClientUpdatedAt = Number(clientUpdatedAt);
      const hasClientTimestamp = Number.isFinite(parsedClientUpdatedAt);

      if (!force && hasClientTimestamp && parsedClientUpdatedAt < current.updatedAt) {
        return res.status(409).json({
          error: 'conflict',
          events: current.events,
          updatedAt: current.updatedAt,
          message: 'Server has newer data. Pull latest snapshot first.',
        });
      }

      const updatedAt = Date.now();
      await upsertDataset(db, datasetId, normalized.events, updatedAt);

      return res.json({
        ok: true,
        datasetId,
        events: normalized.events,
        updatedAt,
      });
    } catch (error) {
      console.error('PUT /api/sync failed:', error);
      return res.status(500).json({ error: 'internal server error' });
    }
  });

  app.listen(PORT, () => {
    console.log(`Bonnie sync server running on http://localhost:${PORT}`);
    console.log(`Database file: ${DB_PATH}`);
  });
}

bootstrap().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
