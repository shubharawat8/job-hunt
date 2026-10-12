"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Route, Stethoscope } from "lucide-react";
import { cn } from "@/lib/cn";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/", label: "Journey", icon: Route },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 px-4 pt-4">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-3xl bg-surface/90 px-3 py-2 shadow-clay-sm backdrop-blur sm:px-4"
      >
        <Link href="/" className="flex min-w-0 items-center gap-3 font-black text-ink">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-ink shadow-clay-sm">
            <Stethoscope className="h-5 w-5" />
          </span>
          <span className="hidden truncate sm:inline">{profile.name}</span>
        </Link>
        <div className="flex items-center gap-2">
          {links.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-extrabold transition-all sm:px-4",
                  active ? "bg-primary-soft text-primary shadow-clay-inset" : "text-ink-muted hover:text-ink",
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
