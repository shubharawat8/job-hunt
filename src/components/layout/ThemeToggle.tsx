"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // Theme is only known on the client; render a stable placeholder on the server.
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-surface text-ink shadow-clay-sm transition-transform hover:-translate-y-0.5 active:shadow-clay-inset"
    >
      {mounted ? (isDark ? <Sun className="h-5 w-5 text-lemon" /> : <Moon className="h-5 w-5 text-primary" />) : <span className="h-5 w-5" />}
    </button>
  );
}
