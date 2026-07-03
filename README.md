# SocioLearn AI 

Theme system + page shells for "Understand the World, Not Just the News."
This is **Phase 1 of the frontend track**: layout, theming, and page
structure against mock data. No live backend, AI, or WebSocket calls are
wired yet — those land in the next phases per the master prompt's workflow.

## What's here
- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- `ThemeProvider` (React Context) — light/dark/system, persisted to
  localStorage, with a stubbed profile-sync call ready for once auth exists
- Design tokens as CSS variables (`app/globals.css`) matching the spec's
  light/dark palette exactly
- Signature visual device: a hand-drawn "highlighter" underline (`.mark`)
  and a `01 / 02 / 03` What–Why–Matters ledger structure used across cards
  and the article page
- All 15 pages from the spec as working shells: Landing, Home, Explore,
  Trending, Categories (+ dynamic `[slug]`), Article Detail (+ dynamic
  `[id]`), Profile, Bookmarks, Quiz (playable against mock questions),
  Leaderboard, Achievements, Settings, Admin Dashboard
- Mock data in `lib/mock-data.ts` standing in for the MongoDB-backed API

## Run locally
```bash
cp .env.example .env.local
npm install
npm run dev
```
Visit http://localhost:3000

## Not yet wired (next phases)
- Backend API (`/news`, `/auth`, `/quiz`, etc.) — currently mock data only
- Socket.IO live trending rail (`LiveTrendingRail.tsx` has the UI + a code
  comment marking exactly where the socket subscription goes)
- AI features (simplification, chat, quiz generation) — `AskAiBox.tsx` is a
  UI placeholder
- Auth (JWT + Google OAuth) — Profile page is static for now

## Notes on secrets
Do not put real API keys in `.env.local` and commit it — it's git-ignored
by default. See the master prompt's "Secrets Hygiene" section for rotation
guidance if a key was ever pasted somewhere shared.
