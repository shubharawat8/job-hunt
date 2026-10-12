# PRD: Job Hunt Journey & Dashboard

## 1. Problem
Dr. Sundeep Seth is looking for the next senior role in public health nutrition. Openings are scattered across development-sector portals, deadlines are short, and there is no single place that shows the career story and how each opening fits it.

## 2. Goals
1. **Showcase** the career journey (CV → polished public portfolio) for recruiters.
2. **Track** matching openings from job portals in one dashboard, with fit scores.
3. **Prioritise** national-level roles over state-level roles.
4. **Grow**: new portals can be added over time without code restructuring.

## 3. Users
| User | Need |
|---|---|
| Candidate (primary) | See matched jobs, deadlines and pipeline at a glance |
| Recruiters / hiring managers | Understand experience, impact and competencies quickly |
| AI agents maintaining the repo | Clear data files + docs to add jobs/portals safely |

## 4. Features
### 4.1 Journey page (`/`)
- Hero: name, headline, enhanced summary, current role, key stats
- Moving carousels: core competencies; organisations & programmes
- Career highlights (4 impact cards)
- Experience timeline (6 roles)
- Six-state footprint
- Education, certifications, tools, languages

### 4.2 Dashboard (`/dashboard`)
- KPI tiles: open matches, strong fit (75+), applications in flight, portals tracked
- Target-roles moving carousel
- Job board: search, level filter (National / International / State), status filter (Open / Closed / Everything), sort (fit / deadline)
- Job card: fit score + breakdown meters, matched keywords, deadline countdown, verification flag, source link
- Application pipeline chart
- Location preference card
- Portals tracked panel with sync state

### 4.3 Cross-cutting
- Claymorphism design, light + dark mode (system default + toggle)
- Responsive down to 360px; no horizontal scroll
- Accessible: semantic landmarks, focus rings, aria labels, reduced-motion support

## 5. Out of scope (for now)
- Automatic scraping (portals are synced by an agent/human editing `src/data/jobs.ts`)
- Authentication / private notes
- Application document generation

## 6. Privacy
The site is public. Phone numbers, home address and referee contact details from the CV are **not** published.

## 7. Success criteria
- Builds and deploys on Vercel with no configuration
- Adding a job = adding one object to `src/data/jobs.ts`
- Lighthouse accessibility ≥ 95
