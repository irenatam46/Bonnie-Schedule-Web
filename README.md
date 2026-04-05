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

## 上雲部署（手機外網同步）

你要做到「任何裝置、任何網絡都同步」，重點係：

- 後端要部署到公開網址（HTTPS）
- 前端 `BONNIE_SYNC_API_BASE` 要改成公開網址
- `ALLOWED_ORIGINS` 要設成你前端網域

### 方法 A：Render（簡單）

1. 將專案 push 到 GitHub
2. Render 建立新服務：`Web Service`
3. 選擇此 repo，設定：
	- Build Command: `npm install`
	- Start Command: `npm start`
4. 環境變數建議：
	- `PORT`：由 Render 自動提供（不用手動填）
	- `DB_PATH=/tmp/schedule.sqlite`（注意：`/tmp` 在免費方案可能非持久）
	- `ALLOWED_ORIGINS=https://你的前端網域`
5. 部署完成後得到例如：`https://bonnie-sync.onrender.com`
6. 將前端設定改成：

```html
<script>
  window.BONNIE_SYNC_API_BASE = 'https://bonnie-sync.onrender.com';
  window.BONNIE_SYNC_DATASET = 'bonnie-schedule-main';
</script>
```

### 方法 B：Railway（較易持久化）

1. 將專案連到 Railway
2. 新增服務並部署
3. 設定環境變數：
	- `PORT=4000`
	- `DB_PATH=/app/data/schedule.sqlite`
	- `ALLOWED_ORIGINS=https://你的前端網域`
4. 如平台支援，掛載 Volume 到 `/app/data`（確保 SQLite 持久化）
5. 拿到公開網址後，同樣更新前端 `BONNIE_SYNC_API_BASE`

### Docker 部署（VPS / 雲主機）

專案已提供：

- `Dockerfile`
- `.dockerignore`

在伺服器可用以下指令：

```bash
docker build -t bonnie-sync .
docker run -d \
  --name bonnie-sync \
  -p 4000:4000 \
  -e PORT=4000 \
  -e DB_PATH=/app/data/schedule.sqlite \
  -e ALLOWED_ORIGINS=https://你的前端網域 \
  -v bonnie-sync-data:/app/data \
  bonnie-sync
```

## 部署後檢查清單

1. 打開 `https://你的API網域/api/health` 應回傳 `{ "ok": true, ... }`
2. 前端頁面載入後，狀態應顯示「已同步」
3. 手機新增活動後，電腦 30 秒內或切回頁面應看到更新
4. 若無法同步，先檢查 `ALLOWED_ORIGINS` 是否包含前端網域

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
