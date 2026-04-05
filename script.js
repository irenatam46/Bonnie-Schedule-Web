const LANGS = {
  zh: {
    subtitle: '大家可輸入活動名稱搜尋、按月份檢視 event',
    search: '搜尋',
    searchPlaceholder: '搜尋活動名，例如：GMMTV FANIVAL',
    monthLabel: '選擇月份查看活動：',
    clear: '清除',
    searchResults: '搜尋結果',
    adminTitle: '後台管理活動區',
    fieldName: '活動名稱',
    fieldLocation: '地點',
    fieldCoArtists: '同場藝人（可不填）',
    adminAdd: '新增活動',
    adminUpdate: '更新活動',
    adminCancel: '取消編輯',
    adminExisting: '現有活動',
    adminEmpty: '目前沒有活動。',
    adminEdit: '編輯',
    adminDelete: '刪除',
    adminAdded: '活動已新增。',
    adminUpdated: '活動已更新。',
    adminConfirmDelete: (name) => `確定刪除「${name}」？`,
    noEvents: '目前無符合條件的活動。',
    notFound: (kw) => `找不到活動：「${kw}」`,
    records: (n) => `${n} 筆`,
    fieldVenue: '地點：',
    fieldStart: '開始時間：',
    fieldCoArtistsLabel: '同場藝人：',
    fieldKeyword: 'Keyword & Tag Trending：',
    calendarAlert: (name) => `活動完整名稱：${name}`,
    bgmPlay: '播放背景音樂',
    bgmStop: '停止背景音樂',
    bgmHint: '如果瀏覽器封鎖自動播放，按一下即可開始。',
    bgmPending: '點擊頁面播放背景音樂',
    adminGateQuestion: 'Bonnie 過敏食物係咩？（請輸入其中一樣）',
    adminGateDenied: '驗證失敗，無法進入後台管理區。',
    weekHeaders: ['日', '一', '二', '三', '四', '五', '六'],
    monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    yearLabel: (y, m) => `${y} 年 ${m}`,
  },
  en: {
    subtitle: 'Search events by name or browse by month',
    search: 'Search',
    searchPlaceholder: 'Search event name, e.g.: GMMTV FANIVAL',
    monthLabel: 'Filter by month:',
    clear: 'Clear',
    searchResults: 'Search Results',
    adminTitle: 'Admin — Manage Events',
    fieldName: 'Event name',
    fieldLocation: 'Venue',
    fieldCoArtists: 'Co-artists (optional)',
    adminAdd: 'Add Event',
    adminUpdate: 'Update Event',
    adminCancel: 'Cancel Edit',
    adminExisting: 'Existing Events',
    adminEmpty: 'No events yet.',
    adminEdit: 'Edit',
    adminDelete: 'Delete',
    adminAdded: 'Event added.',
    adminUpdated: 'Event updated.',
    adminConfirmDelete: (name) => `Delete "${name}"?`,
    noEvents: 'No events found.',
    notFound: (kw) => `No events found: "${kw}"`,
    records: (n) => `${n} record(s)`,
    fieldVenue: 'Venue: ',
    fieldStart: 'Start: ',
    fieldCoArtistsLabel: 'Co-artists: ',
    fieldKeyword: 'Keyword & Tag Trending: ',
    calendarAlert: (name) => `Event: ${name}`,
    bgmPlay: 'Play BGM',
    bgmStop: 'Stop BGM',
    bgmHint: 'If autoplay is blocked, click here to start.',
    bgmPending: 'Click anywhere to play BGM',
    adminGateQuestion: 'What food is Bonnie allergic to? (Enter one)',
    adminGateDenied: 'Verification failed. Access denied.',
    weekHeaders: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    yearLabel: (y, m) => `${y} — ${m}`,
  },
  ja: {
    subtitle: 'イベント名で検索、月別で閲覧できます',
    search: '検索',
    searchPlaceholder: 'イベント名を入力（例：GMMTV FANIVAL）',
    monthLabel: '月を選択：',
    clear: 'クリア',
    searchResults: '検索結果',
    adminTitle: '管理画面 — イベント管理',
    fieldName: 'イベント名',
    fieldLocation: '会場',
    fieldCoArtists: '共演アーティスト（任意）',
    adminAdd: 'イベントを追加',
    adminUpdate: 'イベントを更新',
    adminCancel: '編集をキャンセル',
    adminExisting: '既存のイベント',
    adminEmpty: 'イベントはありません。',
    adminEdit: '編集',
    adminDelete: '削除',
    adminAdded: 'イベントを追加しました。',
    adminUpdated: 'イベントを更新しました。',
    adminConfirmDelete: (name) => `「${name}」を削除しますか？`,
    noEvents: '該当するイベントはありません。',
    notFound: (kw) => `イベントが見つかりません：「${kw}」`,
    records: (n) => `${n} 件`,
    fieldVenue: '会場：',
    fieldStart: '開始時間：',
    fieldCoArtistsLabel: '共演アーティスト：',
    fieldKeyword: 'Keyword & Tag Trending：',
    calendarAlert: (name) => `イベント名：${name}`,
    bgmPlay: 'BGM を再生',
    bgmStop: 'BGM を停止',
    bgmHint: '自動再生がブロックされた場合はここをクリックしてください。',
    bgmPending: 'クリックして BGM を再生',
    adminGateQuestion: 'Bonnie のアレルギー食品は何ですか？（一つ入力）',
    adminGateDenied: '認証に失敗しました。管理画面に入れません。',
    weekHeaders: ['日', '月', '火', '水', '木', '金', '土'],
    monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    yearLabel: (y, m) => `${y}年 ${m}`,
  },
};

let currentLang = localStorage.getItem('bonnieLang') || 'zh';

function t(key, ...args) {
  const val = LANGS[currentLang][key];
  return typeof val === 'function' ? val(...args) : (val ?? key);
}

function applyLang() {
  document.documentElement.lang = currentLang === 'zh' ? 'zh-Hant' : currentLang === 'ja' ? 'ja' : 'en';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  if (bgmToggle) {
    if (isBgmPlaying) bgmToggle.textContent = t('bgmStop');
    else if (hasPendingAutoplay) bgmToggle.textContent = t('bgmPending');
    else bgmToggle.textContent = t('bgmPlay');
  }

  if (editingId !== null && adminSubmitBtn) adminSubmitBtn.textContent = t('adminUpdate');
  else if (adminSubmitBtn) adminSubmitBtn.textContent = t('adminAdd');

  renderEvents(typeof monthPicker !== 'undefined' ? monthPicker.value : '');
  if (typeof renderAdminEventList === 'function' && adminPanel && adminPanel.classList.contains('open')) renderAdminEventList();
  if (typeof currentCalendarYear !== 'undefined') renderMonthCalendar(currentCalendarYear, currentCalendarMonth);
}

const DEFAULT_EVENTS = [
  {
    id: 0,
    name: 'Bonnie 生日會 (已結束)',
    location: 'Bangkok Central',
    start: '2026-02-14T17:00',
    keyword: '#BonnieBirthday',
    coArtists: '',
  },
  {
    id: 1,
    name: 'GMMTV FANIVAL 2026',
    location: 'CENTRALWORLD PULSE 7th FLOOR',
    start: '2026-04-04T18:00',
    keyword: '#GMMTVFANIVAL2026xEmiBonnie',
    coArtists: '',
  },
  {
    id: 2,
    name: 'GMMTV FANIVAL 2026',
    location: 'CENTRALWORLD PULSE 7th FLOOR',
    start: '2026-04-05T20:00',
    keyword: '#GMMTVFANIVAL2026xEmiBonnie',
    coArtists: '',
  },
  {
    id: 3,
    name: 'Bonnie 新歌發表會',
    location: 'Bangkok Arena',
    start: '2026-05-10T19:00',
    keyword: '#BonnieDebut',
    coArtists: '',
  },
  {
    id: 4,
    name: 'Bonnie 直播訪談',
    location: 'Online',
    start: '2026-06-08T20:30',
    keyword: '#BonnieTalk',
    coArtists: '',
  },
];

function loadEventData() {
  try {
    const saved = localStorage.getItem('bonnieEventData');
    if (saved) return JSON.parse(saved);
  } catch {}
  return DEFAULT_EVENTS.map((e) => ({ ...e }));
}

function saveEventData() {
  try {
    localStorage.setItem('bonnieEventData', JSON.stringify(eventData));
  } catch {}
  markLocalUpdatedAt();
  scheduleCloudPush();
}

const eventData = loadEventData();
const LOCAL_UPDATED_AT_KEY = 'bonnieEventDataUpdatedAt';
const SYNC_POLL_INTERVAL_MS = 30000;
const SUPABASE_SYNC_TABLE = 'schedule_snapshots';

let cloudSyncReady = false;
let isApplyingCloudSnapshot = false;
let syncPollTimer = null;
let syncPushTimer = null;
let localUpdatedAt = loadLocalUpdatedAt();
let supabaseClient = null;

function setSyncStatus(state, text) {
  const el = document.getElementById('syncStatus');
  if (!el) return;
  el.className = `sync-status ${state}`;
  el.textContent = text;
}

function getSyncTimeLabel() {
  return new Date().toLocaleTimeString('zh-Hant', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

function loadLocalUpdatedAt() {
  const raw = Number.parseInt(localStorage.getItem(LOCAL_UPDATED_AT_KEY) || '0', 10);
  return Number.isFinite(raw) ? raw : 0;
}

function markLocalUpdatedAt(ts = Date.now()) {
  localUpdatedAt = ts;
  try {
    localStorage.setItem(LOCAL_UPDATED_AT_KEY, String(ts));
  } catch {}
}

function hasCloudConfig() {
  return typeof window.BONNIE_SUPABASE_URL === 'string'
    && window.BONNIE_SUPABASE_URL.trim().length > 0
    && typeof window.BONNIE_SUPABASE_ANON_KEY === 'string'
    && window.BONNIE_SUPABASE_ANON_KEY.trim().length > 0;
}

function getCloudDataPath() {
  const path = window.BONNIE_SYNC_DATASET;
  if (typeof path === 'string' && path.trim()) return path.trim();
  return 'bonnie-schedule-main';
}

function getSupabaseClient() {
  if (supabaseClient) return supabaseClient;
  if (!window.supabase || typeof window.supabase.createClient !== 'function') return null;
  if (!hasCloudConfig()) return null;

  supabaseClient = window.supabase.createClient(
    String(window.BONNIE_SUPABASE_URL).trim(),
    String(window.BONNIE_SUPABASE_ANON_KEY).trim(),
  );
  return supabaseClient;
}

async function readSnapshotFromSupabase() {
  const client = getSupabaseClient();
  if (!client) throw new Error('Supabase client not ready.');

  const { data, error } = await client
    .from(SUPABASE_SYNC_TABLE)
    .select('events, updated_at')
    .eq('dataset_id', getCloudDataPath())
    .maybeSingle();

  if (error) throw error;

  if (!data) {
    return { events: [], updatedAt: 0 };
  }

  return {
    events: normalizeEventList(data.events),
    updatedAt: Number(data.updated_at) || 0,
  };
}

async function writeSnapshotToSupabase(updatedAt) {
  const client = getSupabaseClient();
  if (!client) throw new Error('Supabase client not ready.');

  const { error } = await client
    .from(SUPABASE_SYNC_TABLE)
    .upsert({
      dataset_id: getCloudDataPath(),
      events: eventData,
      updated_at: updatedAt,
    }, { onConflict: 'dataset_id' });

  if (error) throw error;
}

function normalizeEventList(rawList) {
  if (!Array.isArray(rawList)) return [];
  return rawList
    .filter((ev) => ev && typeof ev === 'object')
    .filter((ev) => typeof ev.name === 'string' && typeof ev.location === 'string' && typeof ev.start === 'string')
    .map((ev, index) => ({
      id: Number.isFinite(Number(ev.id)) ? Number(ev.id) : Date.now() + index,
      name: ev.name.trim(),
      location: ev.location.trim(),
      start: ev.start,
      keyword: typeof ev.keyword === 'string' && ev.keyword.trim() ? ev.keyword.trim() : '未設定',
      coArtists: typeof ev.coArtists === 'string' ? ev.coArtists.trim() : '',
    }));
}

function refreshAllEventViews() {
  if (monthPicker) {
    if (!monthPicker.value) monthPicker.value = getCurrentYearMonthValue();
    renderEvents(monthPicker.value);
  }
  if (typeof searchInput !== 'undefined' && searchInput) renderSearch(searchInput.value);
  if (typeof renderAdminEventList === 'function') renderAdminEventList();
  if (typeof renderMonthCalendar === 'function') renderMonthCalendar(currentCalendarYear, currentCalendarMonth);
}

function applyCloudSnapshot(incoming, incomingUpdatedAt = Date.now()) {
  isApplyingCloudSnapshot = true;
  eventData.splice(0, eventData.length, ...incoming);
  try {
    localStorage.setItem('bonnieEventData', JSON.stringify(eventData));
  } catch {}
  markLocalUpdatedAt(incomingUpdatedAt);
  refreshAllEventViews();
  isApplyingCloudSnapshot = false;
}

async function pullEventDataFromCloud() {
  if (!cloudSyncReady && !hasCloudConfig()) return;

  try {
    const snapshot = await readSnapshotFromSupabase();
    const incoming = snapshot.events;
    const incomingUpdatedAt = snapshot.updatedAt;

    if (incomingUpdatedAt > localUpdatedAt) {
      applyCloudSnapshot(incoming, incomingUpdatedAt);
      setSyncStatus('ok', `已同步 ${getSyncTimeLabel()}`);
    }
  } catch (error) {
    setSyncStatus('error', '同步拉取失敗（已保留本機資料）');
    console.warn('Cloud sync pull failed:', error);
  }
}

async function pushEventDataToCloud() {
  if (!cloudSyncReady || isApplyingCloudSnapshot) return;

  if (syncPushTimer) {
    clearTimeout(syncPushTimer);
    syncPushTimer = null;
  }

  try {
    setSyncStatus('syncing', '同步中...');
    const serverSnapshot = await readSnapshotFromSupabase();
    if (serverSnapshot.updatedAt > localUpdatedAt) {
      applyCloudSnapshot(serverSnapshot.events, serverSnapshot.updatedAt);
      setSyncStatus('ok', `衝突已解決 ${getSyncTimeLabel()}`);
      return;
    }

    const updatedAt = Date.now();
    await writeSnapshotToSupabase(updatedAt);
    markLocalUpdatedAt(updatedAt);

    setSyncStatus('ok', `已同步 ${getSyncTimeLabel()}`);
  } catch (error) {
    setSyncStatus('error', '同步失敗（已保留本機資料）');
    console.warn('Cloud sync push failed:', error);
  }
}

function scheduleCloudPush() {
  if (!cloudSyncReady || isApplyingCloudSnapshot) return;
  if (syncPushTimer) clearTimeout(syncPushTimer);
  syncPushTimer = setTimeout(() => {
    syncPushTimer = null;
    void pushEventDataToCloud();
  }, 800);
}

async function initCloudSync() {
  if (!hasCloudConfig()) {
    setSyncStatus('local', '本機模式（未設定 Supabase）');
    console.info('Cloud sync disabled: missing Supabase config.');
    return;
  }

  try {
    if (!getSupabaseClient()) {
      throw new Error('Supabase SDK missing or config invalid.');
    }

    setSyncStatus('syncing', 'Supabase 連線中...');

    const snapshot = await readSnapshotFromSupabase();
    const initialIncoming = snapshot.events;
    const initialUpdatedAt = snapshot.updatedAt;

    if (initialUpdatedAt > localUpdatedAt) {
      applyCloudSnapshot(initialIncoming, initialUpdatedAt);
    } else if (eventData.length) {
      cloudSyncReady = true;
      await pushEventDataToCloud();
    }

    cloudSyncReady = true;

    if (syncPollTimer) clearInterval(syncPollTimer);
    syncPollTimer = setInterval(() => {
      void pullEventDataFromCloud();
    }, SYNC_POLL_INTERVAL_MS);

    window.addEventListener('online', () => {
      setSyncStatus('syncing', '網絡已恢復，同步中...');
      void pullEventDataFromCloud();
      void pushEventDataToCloud();
    });

    window.addEventListener('offline', () => {
      setSyncStatus('offline', '離線模式（稍後自動同步）');
    });

    window.addEventListener('focus', () => {
      if (!navigator.onLine) return;
      void pullEventDataFromCloud();
    });

    if (navigator.onLine) setSyncStatus('ok', `已同步 ${getSyncTimeLabel()}`);
    else setSyncStatus('offline', '離線模式（稍後自動同步）');
  } catch (error) {
    setSyncStatus('error', 'Supabase 連線失敗（本機模式）');
    console.warn('Cloud sync init failed:', error);
  }
}

let currentCalendarYear = new Date().getFullYear();
let currentCalendarMonth = new Date().getMonth();
let isAdminVerified = false;

function requestAdminAccess() {
  const answer = window.prompt(t('adminGateQuestion'));
  if (answer === null) return false;
  const normalized = answer.trim().toLowerCase().replace(/\s+/g, '');
  return normalized === '牛肉'
    || normalized === '牛奶'
    || normalized === '牛肉同牛奶'
    || normalized === '牛奶同牛肉';
}

const adminPanel = document.getElementById('adminPanel');
const adminToggle = document.getElementById('adminToggle');
const adminBackdrop = document.getElementById('adminBackdrop');
const adminCloseBtn = document.getElementById('adminCloseBtn');
const bgmToggle = document.getElementById('bgmToggle');
const bgmAudio = document.getElementById('bgmAudio');

// 頁面主要元素
const calendarToggle = document.getElementById('calendarToggle');
const calendarPanel = document.getElementById('calendarPanel');
const monthPicker = document.getElementById('monthPicker');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const clearMonth = document.getElementById('clearMonth');
const eventList = document.getElementById('eventList');
const searchResults = document.getElementById('searchResults');
const resultItems = document.getElementById('resultItems');
const resultList = document.getElementById('searchResults');
const adminForm = document.getElementById('adminForm');

let isBgmPlaying = false;
let hasPendingAutoplay = false;

async function setBackgroundMusicPlaying(playing) {
  if (!bgmAudio || !bgmToggle) return;

  if (playing) {
    try {
      bgmAudio.volume = 1;
      await bgmAudio.play();
      bgmToggle.textContent = t('bgmStop');
      isBgmPlaying = true;
      hasPendingAutoplay = false;
    } catch {
      bgmToggle.textContent = t('bgmPending');
      isBgmPlaying = false;
      hasPendingAutoplay = true;
    }
    return;
  }

  bgmAudio.pause();
  bgmAudio.currentTime = 0;
  bgmToggle.textContent = t('bgmPlay');
  isBgmPlaying = false;
}

function initBackgroundMusic() {
  if (!bgmAudio || !bgmToggle) return;

  bgmAudio.volume = 1;
  bgmToggle.disabled = false;
  bgmToggle.textContent = t('bgmPlay');

  bgmToggle.addEventListener('click', () => {
    void setBackgroundMusicPlaying(!isBgmPlaying);
  });

  const resumeAutoplay = () => {
    if (!hasPendingAutoplay || isBgmPlaying) return;
    void setBackgroundMusicPlaying(true);
  };

  document.addEventListener('pointerdown', resumeAutoplay, { passive: true });
  document.addEventListener('keydown', resumeAutoplay);
  window.addEventListener('load', () => {
    void setBackgroundMusicPlaying(true);
  });

  void setBackgroundMusicPlaying(true);
}

function canEditAdminData() {
  return isAdminVerified;
}

function formatStart(ts) {
  const formatted = new Date(ts).toLocaleString('zh-Hant', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
  return `${formatted} GMT+7`;
}

function buildXPostUrl(keyword) {
  return `https://x.com/intent/post?text=${encodeURIComponent(keyword)}`;
}

function normalizeSearchText(value) {
  return (value || '')
    .toString()
    .toLowerCase()
    .replace(/[#_\-]+/g, ' ')
    .replace(/[^\w\s\u4e00-\u9fff\u3040-\u30ff]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function splitSearchTokens(value) {
  const normalized = normalizeSearchText(value);
  return normalized ? normalized.split(' ') : [];
}

function levenshteinDistance(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  const prev = new Array(b.length + 1);
  const curr = new Array(b.length + 1);

  for (let j = 0; j <= b.length; j += 1) prev[j] = j;

  for (let i = 1; i <= a.length; i += 1) {
    curr[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(
        curr[j - 1] + 1,
        prev[j] + 1,
        prev[j - 1] + cost,
      );
    }
    for (let j = 0; j <= b.length; j += 1) prev[j] = curr[j];
  }

  return prev[b.length];
}

function stringSimilarity(a, b) {
  if (!a || !b) return 0;
  const maxLen = Math.max(a.length, b.length);
  if (!maxLen) return 1;
  return 1 - (levenshteinDistance(a, b) / maxLen);
}

function getYearMonthValueFromStart(startValue) {
  const date = new Date(startValue);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

function getEventSearchScore(keyword, event) {
  const query = normalizeSearchText(keyword);
  if (!query) return 0;

  const fields = [event.name, event.location, event.keyword, event.coArtists, event.start];
  const joined = normalizeSearchText(fields.join(' '));
  const queryTokens = splitSearchTokens(query);
  const eventTokens = splitSearchTokens(joined);

  let score = 0;

  if (joined.includes(query)) score += 120;

  queryTokens.forEach((token) => {
    let bestTokenScore = 0;

    eventTokens.forEach((eventToken) => {
      if (eventToken === token) {
        bestTokenScore = Math.max(bestTokenScore, 42);
        return;
      }

      if (eventToken.includes(token) || token.includes(eventToken)) {
        bestTokenScore = Math.max(bestTokenScore, 26);
        return;
      }

      const similarity = stringSimilarity(token, eventToken);
      if (similarity >= 0.84) bestTokenScore = Math.max(bestTokenScore, 18);
      else if (similarity >= 0.74 && token.length >= 4) bestTokenScore = Math.max(bestTokenScore, 12);
    });

    score += bestTokenScore;
  });

  return score;
}

function isEventExpired(startTime) {
  // 將開始時間和當前時間都轉換為相同格式進行比較
  const eventDate = new Date(startTime);
  const now = new Date();
  
  // 使用毫秒級別比較，確保跨設備一致
  return eventDate.getTime() < now.getTime();
}

function buildEventCard(event) {
  const eventDate = new Date(event.start);
  const monthLabel = t('monthNames')[eventDate.getMonth()];
  const monthText = currentLang === 'en' ? monthLabel.toUpperCase() : monthLabel;
  const dayText = String(eventDate.getDate()).padStart(2, '0');
  const el = document.createElement('article');
  el.className = 'event-card';
  el.dataset.eventId = event.id;
  if (isEventExpired(event.start)) {
    el.classList.add('is-expired');
  }
  el.innerHTML = `
    <div class="event-date">
      <span class="event-date-month">${monthText}</span>
      <span class="event-date-day">${dayText}</span>
    </div>
    <div class="event-content">
      <h3>${event.name}</h3>
      <p><strong>${t('fieldVenue')}</strong>${event.location}</p>
      <p><strong>${t('fieldStart')}</strong>${formatStart(event.start)}</p>
      ${event.coArtists ? `<p class="event-coartists"><span class="event-coartists-icon">🎤</span><strong>${t('fieldCoArtistsLabel')}</strong>${event.coArtists}</p>` : ''}
      <p class="event-keyword"><strong>${t('fieldKeyword')}</strong><a class="event-keyword-link" href="${buildXPostUrl(event.keyword)}" target="_blank" rel="noopener noreferrer">${event.keyword}</a></p>
    </div>
  `;
  return el;
}

function getEventsByMonth(monthStr) {
  if (!monthStr) return eventData;
  return eventData.filter((ev) => {
    const date = new Date(ev.start);
    const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    return yearMonth === monthStr;
  });
}

function getEventsByYearMonth(year, month) {
  return eventData.filter((ev) => {
    const date = new Date(ev.start);
    return date.getFullYear() === year && date.getMonth() === month;
  });
}

function getCurrentYearMonthValue() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
}

function renderEvents(monthStr = getCurrentYearMonthValue()) {
  const events = getEventsByMonth(monthStr).sort((a, b) => new Date(a.start) - new Date(b.start));
  eventList.innerHTML = '';

  if (!events.length) {
    eventList.innerHTML = `<p>${t('noEvents')}</p>`;
    return;
  }

  events.forEach((ev) => eventList.appendChild(buildEventCard(ev)));
}

function buildCalendar() {
  const calendarMonths = document.getElementById('calendarMonths');
  if (!calendarMonths) return;

  const now = new Date();
  const year = now.getFullYear();
  calendarMonths.innerHTML = '';

  for (let m = 1; m <= 12; m += 1) {
    const btn = document.createElement('button');
    btn.className = 'month-button';
    const monthText = `${m.toString().padStart(2, '0')}月`;
    btn.textContent = `${year} ${monthText}`;
    btn.dataset.month = `${year}-${m.toString().padStart(2, '0')}`;
    btn.addEventListener('click', () => {
      monthPicker.value = btn.dataset.month;
      renderEvents(btn.dataset.month);
      document.querySelectorAll('.month-button').forEach((x) => x.classList.remove('active'));
      btn.classList.add('active');
    });
    calendarMonths.appendChild(btn);
  }
}

function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function getDateDiffDays(a, b) {
  const dayMs = 24 * 60 * 60 * 1000;
  const utcA = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utcB = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.round((utcA - utcB) / dayMs);
}

function renderMonthCalendar(year, month) {
  const monthLabel = document.getElementById('currentMonthLabel');
  const grid = document.getElementById('calendarGrid');
  if (!monthLabel || !grid) return;
  monthLabel.textContent = t('yearLabel', year, t('monthNames')[month]);

  const firstDay = new Date(year, month, 1);
  const lastDate = new Date(year, month + 1, 0).getDate();
  const startWeekday = firstDay.getDay();

  grid.innerHTML = '';

  t('weekHeaders').forEach((d) => {
    const cell = document.createElement('div');
    cell.className = 'calendar-cell calendar-header-cell';
    cell.textContent = d;
    grid.appendChild(cell);
  });

  for (let i = 0; i < startWeekday; i += 1) {
    const empty = document.createElement('div');
    empty.className = 'calendar-cell calendar-empty-cell';
    grid.appendChild(empty);
  }

  const today = new Date();

  for (let date = 1; date <= lastDate; date += 1) {
    const cell = document.createElement('div');
    cell.className = 'calendar-cell calendar-day-cell';
    const cellDate = new Date(year, month, date);

    const dayEvents = getEventsByYearMonth(year, month).filter((ev) => {
      const evDate = new Date(ev.start);
      return evDate.getDate() === date;
    });

    const dateLabel = document.createElement('div');
    dateLabel.className = 'calendar-day-number';
    dateLabel.textContent = date;

    const diffFromToday = getDateDiffDays(cellDate, today);

    if (dayEvents.length > 0 && isSameDay(cellDate, today)) {
      cell.classList.add('calendar-today-event');
    } else if (dayEvents.length > 0 && diffFromToday < 0) {
      cell.classList.add('calendar-past-event');
    }

    if (dayEvents.length > 0 && diffFromToday > 0 && diffFromToday <= 7) {
      const star = document.createElement('span');
      star.className = 'calendar-soon-star';
      star.textContent = ' ★';
      dateLabel.appendChild(star);
      cell.classList.add('calendar-soon-event');
    }

    cell.appendChild(dateLabel);

    if (dayEvents.length > 0) {
      dayEvents.forEach((ev) => {
        const item = document.createElement('div');
        item.className = 'calendar-event-item';
        if (isEventExpired(ev.start)) {
          item.classList.add('is-expired');
        }
        item.textContent = `${ev.name} - ${ev.location}`;
        item.addEventListener('click', () => {
          const targetMonth = getYearMonthValueFromStart(ev.start);
          monthPicker.value = targetMonth;
          renderEvents(targetMonth);
          requestAnimationFrame(() => {
            const card = document.querySelector(`[data-event-id="${ev.id}"]`);
            if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          });
        });
        cell.appendChild(item);
      });
    }

    grid.appendChild(cell);
  }
}

const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');
prevMonthBtn.addEventListener('click', () => {
  if (currentCalendarMonth === 0) {
    currentCalendarMonth = 11;
    currentCalendarYear -= 1;
  } else {
    currentCalendarMonth -= 1;
  }
  renderMonthCalendar(currentCalendarYear, currentCalendarMonth);
});
nextMonthBtn.addEventListener('click', () => {
  if (currentCalendarMonth === 11) {
    currentCalendarMonth = 0;
    currentCalendarYear += 1;
  } else {
    currentCalendarMonth += 1;
  }
  renderMonthCalendar(currentCalendarYear, currentCalendarMonth);
});

function renderSearch(keyword) {
  const term = (keyword || '').trim().toLowerCase();
  if (!term) {
    resultList.hidden = true;
    return;
  }

  const ranked = eventData
    .map((ev) => ({ ev, score: getEventSearchScore(term, ev) }))
    .filter((item) => item.score >= 18)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return new Date(a.ev.start) - new Date(b.ev.start);
    });

  if (!ranked.length) {
    resultList.hidden = false;
    resultItems.innerHTML = `<li>${t('notFound', keyword)}</li>`;
    return;
  }

  const topMatchMonth = getYearMonthValueFromStart(ranked[0].ev.start);
  monthPicker.value = topMatchMonth;
  renderEvents(topMatchMonth);

  const byName = ranked.map((item) => item.ev).reduce((acc, ev) => {
    (acc[ev.name] = acc[ev.name] || []).push(ev);
    return acc;
  }, {});

  resultList.hidden = false;
  resultItems.innerHTML = '';

  Object.entries(byName).forEach(([name, records]) => {
    const heading = document.createElement('li');
    heading.innerHTML = `<strong>${name}</strong> (${t('records', records.length)})`;
    heading.style.background = '#f5d8f6';
    heading.style.border = '1px solid #cfa7d7';
    resultItems.appendChild(heading);

    records.forEach((ev) => {
      const item = document.createElement('li');
      if (isEventExpired(ev.start)) {
        item.classList.add('is-expired');
      }
      item.innerHTML = `- ${formatStart(ev.start)} | ${ev.location} | ${ev.keyword}`;
      resultItems.appendChild(item);
    });
  });
}

calendarToggle.addEventListener('click', () => {
  calendarPanel.hidden = !calendarPanel.hidden;
  if (!calendarPanel.hidden) renderMonthCalendar(currentCalendarYear, currentCalendarMonth);
});

function triggerSearch() {
  renderSearch(searchInput.value);
}

searchBtn.addEventListener('click', triggerSearch);
searchInput.addEventListener('keydown', (event) => {
  if (event.isComposing) return;
  if (event.key === 'Enter' || event.code === 'NumpadEnter') {
    event.preventDefault();
    triggerSearch();
  }
});

monthPicker.addEventListener('change', () => {
  renderEvents(monthPicker.value);
  document.querySelectorAll('.month-button').forEach((x) => x.classList.remove('active'));
  const activeBtn = document.querySelector(`[data-month='${monthPicker.value}']`);
  if (activeBtn) activeBtn.classList.add('active');
});

clearMonth.addEventListener('click', () => {
  const currentMonth = getCurrentYearMonthValue();
  monthPicker.value = currentMonth;
  renderEvents(currentMonth);
  document.querySelectorAll('.month-button').forEach((x) => x.classList.remove('active'));
});

function openAdminDrawer() {
  adminPanel.classList.add('open');
  adminPanel.setAttribute('aria-hidden', 'false');
  if (adminBackdrop) {
    adminBackdrop.classList.add('open');
    adminBackdrop.setAttribute('aria-hidden', 'false');
  }
  document.body.classList.add('drawer-open');
  renderAdminEventList();
}

function closeAdminDrawer() {
  adminPanel.classList.remove('open');
  adminPanel.setAttribute('aria-hidden', 'true');
  if (adminBackdrop) {
    adminBackdrop.classList.remove('open');
    adminBackdrop.setAttribute('aria-hidden', 'true');
  }
  document.body.classList.remove('drawer-open');
}

adminToggle.addEventListener('click', () => {
  const isOpening = !adminPanel.classList.contains('open');
  if (isOpening && !isAdminVerified) {
    const verified = requestAdminAccess();
    if (!verified) {
      alert(t('adminGateDenied'));
      return;
    }
    isAdminVerified = true;
  }
  if (isOpening) openAdminDrawer();
  else closeAdminDrawer();
});

if (adminBackdrop) {
  adminBackdrop.addEventListener('click', closeAdminDrawer);
}

if (adminCloseBtn) {
  adminCloseBtn.addEventListener('click', closeAdminDrawer);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && adminPanel.classList.contains('open')) {
    closeAdminDrawer();
  }
});

let editingId = null;

const adminSubmitBtn = document.getElementById('adminSubmitBtn');
const adminCancelBtn = document.getElementById('adminCancelBtn');
const exportEventsBtn = document.getElementById('exportEventsBtn');
const importEventsBtn = document.getElementById('importEventsBtn');
const syncPayload = document.getElementById('syncPayload');
const syncDatasetInput = document.getElementById('syncDatasetInput');
const supabaseUrlInput = document.getElementById('supabaseUrlInput');
const supabaseKeyInput = document.getElementById('supabaseKeyInput');
const saveSyncConfigBtn = document.getElementById('saveSyncConfigBtn');
const clearSyncConfigBtn = document.getElementById('clearSyncConfigBtn');

function getDefaultSyncDataset() {
  return 'bonnie-schedule-main';
}

function initSyncConfigPanel() {
  if (syncDatasetInput) {
    syncDatasetInput.value = String(window.BONNIE_SYNC_DATASET || getDefaultSyncDataset());
  }

  if (supabaseUrlInput) {
    supabaseUrlInput.value = String(window.BONNIE_SUPABASE_URL || '');
  }

  if (supabaseKeyInput) {
    supabaseKeyInput.value = String(window.BONNIE_SUPABASE_ANON_KEY || '');
  }

  if (saveSyncConfigBtn) {
    saveSyncConfigBtn.addEventListener('click', () => {
      const dataset = (syncDatasetInput ? syncDatasetInput.value : '').trim();
      const supabaseUrl = (supabaseUrlInput ? supabaseUrlInput.value : '').trim();
      const supabaseKey = (supabaseKeyInput ? supabaseKeyInput.value : '').trim();

      if (!supabaseUrl || !supabaseKey) {
        alert('請輸入 Supabase URL 同 Publishable Key。');
        return;
      }

      try {
        const parsed = new URL(supabaseUrl);
        if (!/^https?:$/.test(parsed.protocol)) {
          alert('Supabase URL 只支援 http 或 https。');
          return;
        }
      } catch {
        alert('Supabase URL 格式不正確。');
        return;
      }

      localStorage.setItem('bonnieSyncDataset', dataset || getDefaultSyncDataset());
      localStorage.setItem('bonnieSupabaseUrl', supabaseUrl.replace(/\/+$/, ''));
      localStorage.setItem('bonnieSupabaseAnonKey', supabaseKey);
      alert('同步設定已儲存，頁面將重新載入。');
      window.location.reload();
    });
  }

  if (clearSyncConfigBtn) {
    clearSyncConfigBtn.addEventListener('click', () => {
      localStorage.removeItem('bonnieSyncDataset');
      localStorage.removeItem('bonnieSupabaseUrl');
      localStorage.removeItem('bonnieSupabaseAnonKey');
      // 同步清除舊版 API 模式遺留設定
      localStorage.removeItem('bonnieSyncProvider');
      localStorage.removeItem('bonnieSyncApiBase');
      alert('已重設為預設同步設定，頁面將重新載入。');
      window.location.reload();
    });
  }
}

function renderAdminEventList() {
  const list = document.getElementById('adminEventList');
  if (!list) return;
  list.innerHTML = '';

  if (!eventData.length) {
    list.innerHTML = `<p style="color:#888;font-size:0.9rem;">${t('adminEmpty')}</p>`;
    return;
  }

  const sorted = [...eventData].sort((a, b) => new Date(a.start) - new Date(b.start));
  const disabledAttr = canEditAdminData() ? '' : 'disabled';
  sorted.forEach((ev) => {
    const row = document.createElement('div');
    row.className = 'admin-event-row';
    row.innerHTML = `
      <span class="admin-event-name">${ev.name}<br><small>${ev.start.replace('T', ' ')}</small></span>
      <div class="admin-event-actions">
        <button class="admin-edit-btn" data-id="${ev.id}" ${disabledAttr}>${t('adminEdit')}</button>
        <button class="admin-delete-btn" data-id="${ev.id}" ${disabledAttr}>${t('adminDelete')}</button>
      </div>
    `;
    list.appendChild(row);
  });

  list.querySelectorAll('.admin-edit-btn').forEach((btn) => {
    btn.addEventListener('click', () => startEditEvent(Number(btn.dataset.id)));
  });
  list.querySelectorAll('.admin-delete-btn').forEach((btn) => {
    btn.addEventListener('click', () => deleteEvent(Number(btn.dataset.id)));
  });
}

async function copyTextToClipboard(text) {
  if (!text) return false;
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  }
  return false;
}

function exportEventsData() {
  const payload = JSON.stringify(eventData, null, 2);
  if (syncPayload) syncPayload.value = payload;

  void copyTextToClipboard(payload).then((copied) => {
    if (copied) {
      alert('活動資料已匯出，並已複製到剪貼簿。');
    } else {
      alert('活動資料已匯出到文字框，請手動複製。');
    }
  });
}

function isValidImportedEvent(ev) {
  return ev
    && typeof ev === 'object'
    && typeof ev.name === 'string'
    && typeof ev.location === 'string'
    && typeof ev.start === 'string';
}

function importEventsData() {
  if (!canEditAdminData()) {
    alert('請先通過管理員問題驗證，再匯入資料。');
    return;
  }

  if (!syncPayload) return;
  const raw = syncPayload.value.trim();
  if (!raw) {
    alert('請先貼上要匯入的 JSON 資料。');
    return;
  }

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch {
    alert('JSON 格式錯誤，請確認資料內容。');
    return;
  }

  if (!Array.isArray(parsed)) {
    alert('匯入失敗：資料必須是活動陣列。');
    return;
  }

  const normalized = normalizeEventList(parsed);

  if (!normalized.length) {
    alert('匯入失敗：沒有有效活動資料。');
    return;
  }

  eventData.splice(0, eventData.length, ...normalized);
  saveEventData();

  monthPicker.value = getCurrentYearMonthValue();
  renderEvents(monthPicker.value);
  renderSearch(searchInput.value);
  renderMonthCalendar(currentCalendarYear, currentCalendarMonth);
  renderAdminEventList();

  alert(`匯入成功，共 ${normalized.length} 筆活動。`);
}

function startEditEvent(id) {
  if (!canEditAdminData()) {
    alert('請先通過管理員問題驗證，再編輯活動。');
    return;
  }

  const ev = eventData.find((e) => e.id === id);
  if (!ev) return;
  editingId = id;
  document.getElementById('newName').value = ev.name;
  document.getElementById('newLocation').value = ev.location;
  document.getElementById('newStart').value = ev.start;
  document.getElementById('newKeyword').value = ev.keyword !== '未設定' ? ev.keyword : '';
  document.getElementById('newCoArtists').value = ev.coArtists || '';
  adminSubmitBtn.textContent = t('adminUpdate');
  adminCancelBtn.hidden = false;
  document.getElementById('adminPanel').scrollTop = 0;
}

function cancelEditEvent() {
  editingId = null;
  adminForm.reset();
  adminSubmitBtn.textContent = t('adminAdd');
  adminCancelBtn.hidden = true;
}

function deleteEvent(id) {
  if (!canEditAdminData()) {
    alert('請先通過管理員問題驗證，再刪除活動。');
    return;
  }

  const ev = eventData.find((e) => e.id === id);
  if (!ev) return;
  if (!confirm(t('adminConfirmDelete', ev.name))) return;
  const idx = eventData.findIndex((e) => e.id === id);
  eventData.splice(idx, 1);
  saveEventData();
  renderEvents(monthPicker.value);
  renderSearch(searchInput.value);
  renderAdminEventList();
  if (editingId === id) cancelEditEvent();
}

adminCancelBtn.addEventListener('click', cancelEditEvent);

if (exportEventsBtn) {
  exportEventsBtn.addEventListener('click', exportEventsData);
}

if (importEventsBtn) {
  importEventsBtn.addEventListener('click', importEventsData);
}

adminForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!canEditAdminData()) {
    alert('請先通過管理員問題驗證，再新增或更新活動。');
    return;
  }

  const name = document.getElementById('newName').value.trim();
  const location = document.getElementById('newLocation').value.trim();
  const start = document.getElementById('newStart').value;
  const keyword = document.getElementById('newKeyword').value.trim() || '未設定';

  if (!name || !location || !start) return;

  const coArtists = document.getElementById('newCoArtists').value.trim();

  if (editingId !== null) {
    const ev = eventData.find((ev) => ev.id === editingId);
    if (ev) {
      ev.name = name;
      ev.location = location;
      ev.start = start;
      ev.keyword = keyword;
      ev.coArtists = coArtists;
    }
    cancelEditEvent();
    alert(t('adminUpdated'));
  } else {
    eventData.push({ id: Date.now(), name, location, start, keyword, coArtists });
    adminForm.reset();
    alert(t('adminAdded'));
    // 新增活動後自動跳轉到該活動所在的月份
    const newEventMonth = getYearMonthValueFromStart(start);
    monthPicker.value = newEventMonth;
  }

  saveEventData();
  renderEvents(monthPicker.value);
  renderSearch(searchInput.value);
  renderAdminEventList();
});

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    currentLang = btn.dataset.lang;
    localStorage.setItem('bonnieLang', currentLang);
    applyLang();
  });
});

monthPicker.value = getCurrentYearMonthValue();
renderEvents(monthPicker.value);
buildCalendar();
initBackgroundMusic();
applyLang();
initSyncConfigPanel();
initCloudSync();
