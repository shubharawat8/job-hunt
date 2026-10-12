import type { Metadata } from "next";
import { Briefcase, Flame, Globe, LayoutDashboard, Send } from "lucide-react";
import { jobs } from "@/data/jobs";
import { sources } from "@/data/sources";
import { isActive, scoreJob } from "@/lib/match";
import type { JobStatus } from "@/lib/types";
import { SectionHeading, StatTile } from "@/components/ui";
import { JobBoard, type ScoredJob } from "@/components/dashboard/JobBoard";
import { PipelineChart } from "@/components/dashboard/PipelineChart";
import { PreferencesCard } from "@/components/dashboard/PreferencesCard";
import { SourcesPanel } from "@/components/dashboard/SourcesPanel";
import { TargetRoles } from "@/components/dashboard/TargetRoles";

export const metadata: Metadata = { title: "Job Hunt Dashboard" };

// Re-render daily so deadline countdowns stay current.
export const revalidate = 86400;

export default function DashboardPage() {
  const sourceName = Object.fromEntries(sources.map((s) => [s.id, s.name]));
  const items: ScoredJob[] = jobs.map((job) => ({
    job,
    fit: scoreJob(job),
    active: isActive(job),
    sourceName: sourceName[job.sourceId] ?? job.sourceId,
  }));

  const open = items.filter((i) => i.active);
  const counts = jobs.reduce(
    (acc, j) => ({ ...acc, [j.status]: acc[j.status] + 1 }),
    { new: 0, shortlisted: 0, applied: 0, interview: 0, offer: 0, rejected: 0, closed: 0 } as Record<JobStatus, number>,
  );
  const inProgress = counts.applied + counts.interview + counts.offer;

  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Command centre"
        title="Job hunt dashboard"
        description="Nutrition and public health roles matched against the profile, with national-level roles ranked above state-level ones."
        icon={LayoutDashboard}
        tone="primary"
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatTile label="Open matches" value={open.length} icon={Briefcase} tone="primary" />
        <StatTile label="Strong fit (75+)" value={open.filter((i) => i.fit.total >= 75).length} icon={Flame} tone="peach" />
        <StatTile label="Applications in flight" value={inProgress} icon={Send} tone="teal" />
        <StatTile label="Portals tracked" value={sources.length} icon={Globe} tone="sky" />
      </div>

      <div>
        <p className="mb-1 text-xs font-extrabold uppercase tracking-[0.18em] text-ink-subtle">Target roles</p>
        <TargetRoles />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_22rem]">
        <JobBoard items={items} />
        <aside className="space-y-6">
          <PipelineChart counts={counts} />
          <PreferencesCard />
          <SourcesPanel sources={sources} />
        </aside>
      </div>
    </div>
  );
}
