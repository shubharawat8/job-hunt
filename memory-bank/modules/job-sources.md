# Module: Job Sources

**Data:** `src/data/sources.ts` · **UI:** `SourcesPanel`

## Portals
| id | Portal | Sections | State | Last synced |
|---|---|---|---|---|
| devnetjobsindia | https://www.devnetjobsindia.org/ | Premium Jobs | pending | never |

## Sync log
- **2026-10-12**: Attempted sync of DevNetJobsIndia Premium Jobs. The host was denied by the build environment's network policy, so the Premium section could not be read. Search-engine results for the domain returned only expired listings; two relevant ones were added as `closed` + `unverified`.

- **2026-10-12 (2nd pass)**: Portal still blocked (direct and fetcher). Ran 5 targeted searches of the domain's index. Added 7 relevant recent listings, all past deadline (closed, unverified). Open listings in the index (SNEHA Program Officer, Nashik, 23 Oct; SNEHA Documentation Coordinator, Malwani, 30 Oct) were skipped as poor profile fits (junior/community-level). Senior Technical Officer – Public Health, New Delhi (closed 11 Oct) was skipped as epidemiology-focused.

## Sync procedure (for agents)
1. Open the portal section (e.g. Premium Jobs).
2. For each listing, check relevance against `modules/matching.md` (nutrition / public health / SAM / ICDS / M&E / programme management).
3. Classify `level` per `modules/jobs.md`. Prefer national; still include state-level.
4. Add to `src/data/jobs.ts`, set `verification: "verified"` only when the listing page was opened.
5. Set the source's `state: "synced"` and `lastChecked`.
6. Append to this sync log and CHANGELOG.

## Adding a portal
Add a `JobSource` to `sources.ts` (`state: "planned"` until first sync) and a row above.
