# Module: UI Components

All in `src/components/ui`, exported from `index.ts`.

| Component | Props | Notes |
|---|---|---|
| `ClayCard` | `as`, `size` (sm/md), `interactive` | Base surface. `interactive` adds hover lift |
| `Badge` | `tone`, `icon` | Pill label |
| `IconBubble` | `icon` (Lucide), `tone`, `size` | Puffy tinted icon |
| `Button` / `ButtonLink` | `variant` (primary/soft), `icon`, `external` | Presses in when active |
| `SectionHeading` | `eyebrow`, `title`, `description`, `icon`, `tone`, `action` | Section header |
| `StatTile` | `label`, `value`, `hint`, `icon`, `tone` | KPI tile |
| `Marquee` | `duration`, `reverse`, `label` | Moving carousel; duplicates children, pauses on hover |
| `Meter` | `value`, `max`, `label`, `fillClass` | Inset progress bar with `role="meter"` |
| `EmptyState` | `icon`, `title`, children | Sunken empty panel |

`Tone` = primary · teal · peach · sky · lemon · rose · neutral (`tones.ts`).

## Rules
- Use tokens, never raw hex in components.
- Text stays in ink tokens; accents go on backgrounds and icons.
- New shared pieces go in `ui/` and get a row here.
