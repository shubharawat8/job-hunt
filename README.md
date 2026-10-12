# Dr. Sundeep Seth · Job Hunt Journey & Dashboard

A claymorphism-styled Next.js site with two pages:

- **`/` Journey**: career story built from the 2026 CV: summary, highlights, experience timeline, six-state footprint, education and skills, with moving carousels.
- **`/dashboard` Job hunt dashboard**: openings from job portals scored against the profile (domain fit, experience, location preference: national first, state low), with filters, deadlines, pipeline and portal sync status.

Light and dark mode are included and follow the system setting by default.

## Tech
Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · lucide-react · react-icons · next-themes · Nunito (self-hosted)

## Getting started
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build + type-check
```

## Deploy to Vercel
1. Push this repo to GitHub.
2. In Vercel, **Add New → Project → Import** the repo.
3. Framework preset: Next.js (auto). No environment variables needed. Click **Deploy**.

## Updating jobs
Add listings to `src/data/jobs.ts` and portals to `src/data/sources.ts`. The fit score is computed automatically. See `memory-bank/modules/jobs.md`.

## Project docs
- `AGENT.md`: rules for AI agents
- `memory-bank/`: PRD, TRD, DESIGNS, CHANGELOG, INDEX and per-module notes
