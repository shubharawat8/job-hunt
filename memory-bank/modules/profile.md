# Module: Profile & Journey

**Data:** `src/data/profile.ts` (`profile`, `roles`)
**UI:** `src/components/journey/*`, rendered by `src/app/page.tsx`

## Source
Adapted from "Dr. Sundeep Seth – CV 2026" (.docx). Content was rewritten for impact (summary, highlights, role summaries) without inventing metrics. All claims trace back to the CV.

## Not published (privacy)
Phone numbers, flat/home address and referee names/contacts.

## Fields
- `summary`, `headline`, `tagline`: hero copy
- `stats`: 4 hero stat tiles
- `achievements`: 4 highlight cards (icons assigned in `Highlights.tsx` by index)
- `competencies`, `partners`: carousels
- `targetRoles`: dashboard carousel
- `states`: footprint grid
- `roles[]`: timeline; `sector` picks icon/tone (development vs healthcare)

## Links
- LinkedIn: https://www.linkedin.com/in/dr-sundeep-seth

## Updating
Edit `profile.ts`, then add a CHANGELOG entry. `yearsExperience` also feeds the matching engine.
