# DESIGNS: Claymorphism Design System

## Principles
1. **Puffy, tactile surfaces.** Every card is a soft "clay" block: large radius, an outer drop shadow, an outer highlight and inner highlights.
2. **Pressed vs raised.** Raised = interactive/content (`shadow-clay`). Inset = wells, tracks, inactive chips, inputs (`shadow-clay-inset`). Active buttons press in.
3. **Pastel tints, strong ink.** Accents are used as soft backgrounds with strong-ink foregrounds; body text always uses ink tokens.
4. **Gentle motion.** Hover lifts (−2 to −4px), floating blobs, marquees; all disabled under `prefers-reduced-motion`.

## Tokens (`src/app/globals.css`)
| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | `#eef1f8` | `#161a2c` | Page background |
| `--surface` | `#f6f7fc` | `#1f2439` | Raised cards |
| `--surface-sunken` | `#e6e9f3` | `#191d30` | Wells, inputs, tracks |
| `--ink` / `-muted` / `-subtle` | `#1f2340` / `#5b6180` / `#8a90ad` | `#e9ebf8` / `#a6acc8` / `#7d84a6` | Text hierarchy |
| `--primary` | `#6c5ce7` | `#9b8cff` | Brand, primary actions, chart bars |
| `--teal` `--peach` `--sky` `--lemon` `--rose` | + `-soft` variants | tuned per theme | Accent tones |

Tailwind exposes them as `bg-surface`, `text-ink-muted`, `bg-primary-soft`, etc.

## Shadows
- `shadow-clay`: cards (10px offset, 24px blur, plus inner highlights)
- `shadow-clay-sm`: buttons, chips, icon bubbles
- `shadow-clay-inset`: pressed/sunken elements

Dark mode uses deeper black drop shadows and a faint white (3–6%) highlight, so clay still reads on dark surfaces.

## Radius
`rounded-clay` = 2rem for cards; `rounded-3xl` for small cards; `rounded-2xl` for buttons/chips; `rounded-full` for badges and meters.

## Typography
Nunito Variable. Headings `font-black`, labels `font-extrabold`, body regular. Eyebrows: 12px uppercase, `tracking-[0.18em]`, `text-ink-subtle`.

## Components
See `modules/ui-components.md`.

## Data viz
- Pipeline chart: single-series horizontal bars in `--primary`, inset tracks, value labels in ink (never the series colour), with a screen-reader table.
- Fit meters: same single hue; score band is shown by the fit badge colour **and** text label (Strong / Good / Stretch).

## Motion
| Animation | Where | Duration |
|---|---|---|
| `animate-marquee` | Competencies, partners, target roles | 30–55s loop, pauses on hover |
| `animate-float` | Hero blobs | 6s |
| hover lift | Interactive cards/buttons | 200–300ms |
