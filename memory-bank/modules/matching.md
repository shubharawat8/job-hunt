# Module: Matching Engine

**Code:** `src/lib/match.ts`

## Score (0–100)
| Part | Max | Rule |
|---|---|---|
| Domain keywords | 60 | Sum of `KEYWORD_WEIGHTS` for job keywords, capped |
| Experience | 20 | `minExperience ≤ 9` → 20; `≤ 11` → 10; else 0 |
| Location tier | 20 | national 20 · international 15 · state 8 |

## Keyword weights (excerpt)
nutrition 20 · sam/cmam/imam/imsam/malnutrition 15 · iycf/iycn/icds/poshan 10 · public health/fortification/program management 8 · m&e/monitoring/maternal and child health 6 · capacity building/convergence/government liaison 5 · training/health 4 · unicef 3

## Bands
Strong ≥ 75 (teal) · Good ≥ 50 (sky) · Stretch < 50 (neutral).

## Sort order
Fit desc, then level (national → international → state). Matches the stated location preference.

## Tuning
Change weights in one place; the UI meters read the same breakdown. Record weight changes in CHANGELOG.
