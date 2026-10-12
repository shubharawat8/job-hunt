# Module: Theming

- `next-themes` with `attribute="class"`, `defaultTheme="system"`.
- `globals.css` defines tokens on `:root` (light) and `.dark` (dark). Tailwind's `dark:` variant is mapped to `.dark` via `@custom-variant`.
- Components use token classes, so most need no `dark:` variants at all.
- `ThemeToggle` uses `useSyncExternalStore` to avoid hydration mismatch.
- `<html suppressHydrationWarning>` is required by next-themes.
- `viewport.themeColor` matches `--bg` per scheme.
