# Bonnie Schedule Web + Sync Backend

# Bonnie Schedule Web (Supabase Sync)

Bonnie 行程網站，支援：

- 本機離線儲存（localStorage）
- Supabase 雲端同步
- 網頁版與手機版共享同一份活動資料

## 架構

- 前端：index.html + script.js
- 雲端資料：Supabase table public.schedule_snapshots

同步策略：

- 前端每次儲存都會寫入 localStorage（可離線）
- 上線後會自動 push 到 Supabase
- 每 30 秒與切回頁面時自動 pull 最新資料
- 若衝突（另一裝置有更新），會拉回較新的雲端快照

## Supabase 初始化（一次性）

在 Supabase SQL Editor 執行：

```sql
create table if not exists public.schedule_snapshots (
  dataset_id text primary key,
  events jsonb not null default '[]'::jsonb,
  updated_at bigint not null default 0
);

alter table public.schedule_snapshots enable row level security;

drop policy if exists "anon can read snapshots" on public.schedule_snapshots;
create policy "anon can read snapshots"
on public.schedule_snapshots
for select
to anon
using (true);

drop policy if exists "anon can upsert snapshots" on public.schedule_snapshots;
create policy "anon can upsert snapshots"
on public.schedule_snapshots
for all
to anon
using (true)
with check (true);
```

注意：以上 policy 方便你快速測試，正式上線建議限制 dataset_id 或改由 server-side 寫入。

## 前端設定

在網站後台（右下角 🔧）的「跨裝置同步」輸入：

- Supabase Project URL
- Supabase Publishable Key
- 資料集名稱（預設 bonnie-schedule-main）

按「儲存同步設定」後頁面會自動重載。

## 手機同步

手機與電腦只要使用相同：

- Supabase Project URL
- Supabase Publishable Key
- 資料集名稱

就會看到同一份活動資料。
