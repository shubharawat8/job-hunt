# Module: Jobs

**Data:** `src/data/jobs.ts` · **Type:** `Job` in `src/lib/types.ts`
**UI:** `JobBoard` (client filters/sort) → `JobCard`

## Adding a job
Append an object to `jobs`:
```ts
{
  id: "devnet-123456",                // <source>-<portal job id>
  title: "National Nutrition Specialist",
  organization: "UNICEF",
  location: "New Delhi",
  level: "national",                  // national | international | state
  sourceId: "devnetjobsindia",        // must exist in sources.ts
  section: "Premium Jobs",
  url: "https://www.devnetjobsindia.org/jobdescription.aspx?job_id=123456",
  deadline: "2026-11-15",             // ISO
  addedOn: "2026-10-12",
  minExperience: 8,
  keywords: ["nutrition", "sam", "iycf", "program management"],
  status: "new",
  verification: "verified",           // verified once opened on the portal
  notes: "Optional",
}
```
Keywords should use the keys in `KEYWORD_WEIGHTS` (`src/lib/match.ts`) so they score.

## Level rules
- **national**: India-wide/country office/national programme roles (e.g. Delhi CO, "National ... Consultant")
- **international**: regional/global or overseas roles
- **state**: state field-office or single-state roles (low preference)

## Status lifecycle
`new → shortlisted → applied → interview → offer`, or `rejected` / `closed`. "Open" filter = the first five.

## Housekeeping
- Jobs past their `deadline` are automatically excluded from "Open" (`isActive` in `src/lib/match.ts`); still set `status: "closed"` for clarity.
- Never add a listing that was not actually seen on a portal or search result; mark anything not opened on the portal as `unverified`.
