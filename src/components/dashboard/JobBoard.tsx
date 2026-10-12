"use client";

import { useMemo, useState } from "react";
import { Inbox, Search } from "lucide-react";
import type { Job, JobLevel } from "@/lib/types";
import type { FitBreakdown } from "@/lib/match";
import { cn } from "@/lib/cn";
import { EmptyState } from "@/components/ui";
import { JobCard } from "./JobCard";
import { levelMeta } from "./labels";

export interface ScoredJob {
  job: Job;
  fit: FitBreakdown;
  active: boolean;
  sourceName: string;
}

type LevelFilter = "all" | JobLevel;
type StatusFilter = "active" | "closed" | "all";
type SortKey = "fit" | "deadline";

const levelOrder: Record<JobLevel, number> = { national: 0, international: 1, state: 2 };

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "rounded-2xl px-3.5 py-2 text-sm font-extrabold transition-all",
        active ? "bg-primary text-primary-ink shadow-clay-sm" : "bg-sunken text-ink-muted shadow-clay-inset hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}

export function JobBoard({ items }: { items: ScoredJob[] }) {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<LevelFilter>("all");
  const [status, setStatus] = useState<StatusFilter>("active");
  const [sort, setSort] = useState<SortKey>("fit");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items
      .filter(({ job, active }) => {
        if (level !== "all" && job.level !== level) return false;
        if (status === "active" && !active) return false;
        if (status === "closed" && active) return false;
        if (!q) return true;
        return [job.title, job.organization, job.location, ...job.keywords].join(" ").toLowerCase().includes(q);
      })
      .sort((a, b) => {
        if (sort === "deadline") return (a.job.deadline ?? "9999").localeCompare(b.job.deadline ?? "9999");
        // Fit first, then national before state (location preference).
        return b.fit.total - a.fit.total || levelOrder[a.job.level] - levelOrder[b.job.level];
      });
  }, [items, query, level, status, sort]);

  return (
    <div>
      <div className="mb-5 flex flex-col gap-3 rounded-3xl bg-surface p-4 shadow-clay-sm">
        <label className="flex items-center gap-2 rounded-2xl bg-sunken px-4 py-2.5 shadow-clay-inset">
          <Search className="h-4 w-4 text-ink-subtle" />
          <span className="sr-only">Search jobs</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title, organisation, keyword…"
            className="w-full bg-transparent text-sm font-bold text-ink placeholder:text-ink-subtle focus:outline-none"
          />
        </label>
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Location level">
          <Chip active={level === "all"} onClick={() => setLevel("all")}>All levels</Chip>
          {(Object.keys(levelMeta) as JobLevel[]).map((l) => (
            <Chip key={l} active={level === l} onClick={() => setLevel(l)}>{levelMeta[l].label}</Chip>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Status">
            <Chip active={status === "active"} onClick={() => setStatus("active")}>Open</Chip>
            <Chip active={status === "closed"} onClick={() => setStatus("closed")}>Closed / archived</Chip>
            <Chip active={status === "all"} onClick={() => setStatus("all")}>Everything</Chip>
          </div>
          <label className="flex items-center gap-2 text-sm font-bold text-ink-muted">
            Sort
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-2xl bg-sunken px-3 py-2 font-extrabold text-ink shadow-clay-inset focus:outline-none"
            >
              <option value="fit">Best fit</option>
              <option value="deadline">Deadline</option>
            </select>
          </label>
        </div>
      </div>

      <p className="mb-3 text-sm font-bold text-ink-muted" aria-live="polite">
        {visible.length} of {items.length} listings
      </p>

      {visible.length === 0 ? (
        <EmptyState icon={Inbox} title={status === "active" ? "No open matches yet" : "Nothing here"}>
          {status === "active"
            ? "No open listings that match the profile are tracked right now. Closed and unverified leads are under “Closed / archived”."
            : "Try a different filter."}
        </EmptyState>
      ) : (
        <ul className="space-y-5">
          {visible.map((s) => (
            <JobCard key={s.job.id} job={s.job} fit={s.fit} sourceName={s.sourceName} />
          ))}
        </ul>
      )}
    </div>
  );
}
