# Bonnie Schedule Web + Sync Backend

Bonnie 行程網站，支援：

- 本機離線儲存（localStorage）
- 後端 SQLite 資料庫同步
- 網頁版與手機版共享同一份活動資料

## 架構

- 前端：`index.html` + `script.js`
- 後端：`server.js`（Express + SQLite）
- 同步 API：`/api/sync/:datasetId`

同步策略：

- 前端每次儲存都會寫入 localStorage（可離線）
- 上線後會自動 push 到後端
- 每 30 秒與切回頁面時自動 pull 最新資料
- 若衝突（另一裝置有更新），以前端拉回最新伺服器快照解決

## 快速開始

1. 安裝依賴

```bash
npm install
```

2. 啟動同步後端

```bash
npm start
```

預設會啟動在：`http://localhost:4000`

3. 開啟前端頁面

- 用瀏覽器打開 `index.html`
- 或放到任何靜態網站主機

## 前端同步設定

在 `index.html`（以及 `calendar.html`）底部可見：

```html
<script>
	window.BONNIE_SYNC_API_BASE = 'http://localhost:4000';
	window.BONNIE_SYNC_DATASET = 'bonnie-schedule-main';
</script>
```

- `BONNIE_SYNC_API_BASE`：你的同步後端網址
- `BONNIE_SYNC_DATASET`：資料集名稱（同名即共用同一份資料）

如果你有手機版（H5/WebView/PWA），只要用相同 API Base + Dataset，就會同資料。

## 後端環境變數

- `PORT`：預設 `4000`
- `DB_PATH`：SQLite 檔案路徑（預設 `./data/schedule.sqlite`）
- `ALLOWED_ORIGINS`：CORS 白名單，逗號分隔；預設 `*`
- `MAX_JSON_SIZE`：請求 JSON 大小上限，預設 `1mb`

## API

1. `GET /api/health`
2. `GET /api/sync/:datasetId`
3. `PUT /api/sync/:datasetId`

`PUT` 範例 body：

```json
{
	"events": [
		{
			"id": 1,
			"name": "GMMTV FANIVAL 2026",
			"location": "CENTRALWORLD PULSE 7th FLOOR",
			"start": "2026-04-04T18:00",
			"keyword": "#GMMTVFANIVAL2026xEmiBonnie",
			"coArtists": ""
		}
	],
	"clientUpdatedAt": 1712400000000
}
```
