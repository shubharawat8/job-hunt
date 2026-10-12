# Changelog

All notable changes. Newest first. Format: `## [version] - YYYY-MM-DD`.

## [0.2.0] - 2026-10-12
### Added
- 7 DevNetJobsIndia listings relevant to the profile (Nutrition International, NHSRC/MoHFW, MAMTA, KGMU UP, Piramal Foundation, SNEHA), all closed and unverified, sourced from a search-engine index.

### Changed
- LinkedIn URL → https://www.linkedin.com/in/dr-sundeep-seth
- `isActive()` now treats a job as closed once its deadline has passed, whatever its status.

### Notes
- DevNetJobsIndia is still blocked from the build environment; the Premium Jobs section remains unsynced. No open listing matching the profile was found in the search index.

## [0.1.0] - 2026-10-12
### Added
- Next.js 16 + Tailwind v4 project with claymorphism design system and light/dark mode.
- Journey page built from the 2026 CV with an enhanced summary, highlights, timeline, footprint, education and skills.
- Moving carousels (competencies, organisations, target roles) via a reusable `Marquee`.
- Job hunt dashboard: KPI tiles, filterable/sortable job board, fit-score engine, pipeline chart, location-preference card, portals panel.
- Memory bank (PRD, TRD, DESIGNS, CHANGELOG, modules), `AGENT.md`, `README.md`.
- Job source: DevNetJobsIndia (Premium Jobs).

### Notes
- DevNetJobsIndia could not be reached from the build environment (network policy). The Premium Jobs section is **not yet synced**. Two closed, unverified listings found via a search-engine index are kept for reference.
- Phone numbers, home address and referee details from the CV are intentionally not published.
