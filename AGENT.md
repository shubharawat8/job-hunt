# AGENT.md

Guide for AI agents working in this repo.

## Read first
1. `memory-bank/INDEX.md`, then the module you are touching.
2. `memory-bank/modules/job-sources.md` before syncing any portal.

## What this is
A Next.js 16 site for **Dr. Sundeep Seth** (Public Health Nutrition Specialist): a career-journey page (`/`) and a job hunt dashboard (`/dashboard`) with fit-scored listings. Deployed on Vercel.

## Common tasks
| Task | Where |
|---|---|
| Add/update a job | `src/data/jobs.ts` (see `memory-bank/modules/jobs.md`) |
| Add a job portal | `src/data/sources.ts` + `memory-bank/modules/job-sources.md` |
| Change profile copy | `src/data/profile.ts` |
| Tune scoring | `src/lib/match.ts` + `memory-bank/modules/matching.md` |
| New shared UI | `src/components/ui/` + `memory-bank/modules/ui-components.md` |

## Rules
- **Location preference:** national > international > state. State-level roles are included but ranked low.
- **No invented listings.** Only add jobs actually seen; mark `verification: "unverified"` unless the listing page was opened. Close jobs past their deadline.
- **Privacy:** never publish phone numbers, home address or referee contacts from the CV.
- Use design tokens and existing UI components; keep claymorphism consistent in both themes (`memory-bank/DESIGNS.md`).
- Keep components server-side unless they need state/effects.
- Before committing: `npm run build` must pass.
- Every change gets a `memory-bank/CHANGELOG.md` entry; portal syncs also go in the sync log.
