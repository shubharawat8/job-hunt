# TRD: Technical Requirements

## Stack
| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 16 (App Router), React 19 | Static generation, Vercel native |
| Language | TypeScript 5.9 (strict) | Typed data files catch bad entries at build |
| Styling | Tailwind CSS v4 (`@theme inline` over CSS variables) | Tokens switch per theme without duplicate classes |
| Icons | `lucide-react` (UI), `react-icons/fa6` (brand: LinkedIn) | Lucide has no brand icons |
| Theme | `next-themes` (class strategy) | No flash, system preference |
| Font | `@fontsource-variable/nunito` (self-hosted) | Rounded type suits clay; no runtime Google fetch |
| Utils | `clsx` + `tailwind-merge` → `cn()` | Safe class composition |

## Directory layout
```
src/
  app/
    layout.tsx          Root layout: fonts, ThemeProvider, Navbar, Footer
    globals.css         Design tokens (light/dark), Tailwind theme, keyframes
    page.tsx            Journey page
    dashboard/page.tsx  Dashboard (server component, revalidate daily)
    icon.svg            Favicon
  components/
    ui/                 Reusable kit (ClayCard, Badge, Button, IconBubble, Marquee, Meter, StatTile, SectionHeading, EmptyState)
    layout/             Navbar, Footer, ThemeProvider, ThemeToggle
    journey/            Hero, CompetencyCarousel, Highlights, Timeline, Footprint, Skills
    dashboard/          JobBoard (client), JobCard, PipelineChart, PreferencesCard, SourcesPanel, TargetRoles, labels
  data/
    profile.ts          Candidate profile + roles
    jobs.ts             Job listings
    sources.ts          Job portals
  lib/
    types.ts            Job, JobSource, Role types
    match.ts            Fit-score engine
    dates.ts            daysUntil, formatDate
    cn.ts               Class helper
```

## Data model
See `src/lib/types.ts`. Key `Job` fields: `level` (national | international | state), `status` (new → offer, rejected, closed), `verification` (verified | unverified), `keywords` (drives score), `minExperience`, `deadline` (ISO).

## Scoring
`scoreJob(job)` in `src/lib/match.ts` returns 0–100:
- Keywords: sum of weights for matched keywords, capped at 60
- Experience: 20 if `minExperience ≤ 9`, 10 if ≤ 11, else 0
- Location: national 20, international 15, state 8

Bands: high ≥ 75, medium ≥ 50, low < 50. Details: `modules/matching.md`.

## Rendering
- Both pages are statically prerendered.
- `/dashboard` uses `revalidate = 86400` so deadline countdowns refresh daily on Vercel.
- Only `JobBoard`, `Navbar` and `ThemeToggle` are client components.

## Commands
| Command | Purpose |
|---|---|
| `npm run dev` | Local dev server |
| `npm run build` | Production build (also type-checks) |
| `npm run typecheck` | `tsc --noEmit` |

## Deployment (Vercel)
Import the GitHub repo in Vercel → framework auto-detected as Next.js → Deploy. No env vars needed.
