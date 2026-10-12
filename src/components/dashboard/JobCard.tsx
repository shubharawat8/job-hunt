import { AlertTriangle, Building2, CalendarClock, ExternalLink, MapPin, ShieldCheck } from "lucide-react";
import type { Job } from "@/lib/types";
import type { FitBreakdown } from "@/lib/match";
import { fitBand } from "@/lib/match";
import { daysUntil, formatDate } from "@/lib/dates";
import { Badge, ClayCard, Meter } from "@/components/ui";
import { cn } from "@/lib/cn";
import { levelMeta, statusMeta } from "./labels";

const bandStyle = {
  high: { ring: "bg-teal text-primary-ink", label: "Strong fit" },
  medium: { ring: "bg-sky text-primary-ink", label: "Good fit" },
  low: { ring: "bg-sunken text-ink-muted", label: "Stretch" },
};

export function JobCard({ job, fit, sourceName }: { job: Job; fit: FitBreakdown; sourceName: string }) {
  const band = bandStyle[fitBand(fit.total)];
  const days = job.deadline ? daysUntil(job.deadline) : undefined;
  const level = levelMeta[job.level];
  const status = statusMeta[job.status];

  return (
    <ClayCard as="li" interactive className={cn(job.status === "closed" && "opacity-80")}>
      <div className="flex flex-wrap items-start gap-4">
        <div
          className={cn("flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-3xl shadow-clay-sm", band.ring)}
          aria-label={`Fit score ${fit.total} out of 100, ${band.label}`}
        >
          <span className="text-xl font-black leading-none tabular-nums">{fit.total}</span>
          <span className="text-[10px] font-extrabold uppercase">fit</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap gap-2">
            <Badge tone={level.tone}>{level.label}</Badge>
            <Badge tone={status.tone}>{status.label}</Badge>
            {job.verification === "unverified" ? (
              <Badge tone="lemon" icon={<AlertTriangle className="h-3.5 w-3.5" />}>Verify on portal</Badge>
            ) : (
              <Badge tone="teal" icon={<ShieldCheck className="h-3.5 w-3.5" />}>Verified</Badge>
            )}
          </div>
          <h3 className="mt-2 text-lg font-black leading-snug text-ink">{job.title}</h3>
          <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-bold text-ink-muted">
            <span className="inline-flex items-center gap-1"><Building2 className="h-4 w-4" />{job.organization}</span>
            <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />{job.location}</span>
            {job.deadline && (
              <span className={cn("inline-flex items-center gap-1", days !== undefined && days >= 0 && days <= 7 && "text-rose")}>
                <CalendarClock className="h-4 w-4" />
                {formatDate(job.deadline)}
                {days !== undefined && (days >= 0 ? ` · ${days}d left` : " · passed")}
              </span>
            )}
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <Meter label="Domain match" value={fit.keywords} max={60} fillClass="bg-primary" />
        <Meter label="Experience" value={fit.experience} max={20} fillClass="bg-primary" />
        <Meter label="Location tier" value={fit.location} max={20} fillClass="bg-primary" />
      </div>

      {fit.matched.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {fit.matched.map((k) => (
            <span key={k} className="rounded-full bg-sunken px-2.5 py-0.5 text-xs font-bold text-ink-muted shadow-clay-inset">
              {k}
            </span>
          ))}
        </div>
      )}

      {job.notes && <p className="mt-3 text-sm text-ink-muted">{job.notes}</p>}

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-bold text-ink-subtle">
          {sourceName}{job.section ? ` · ${job.section}` : ""} · added {formatDate(job.addedOn)}
        </span>
        <a
          href={job.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-2xl bg-primary-soft px-4 py-2 text-sm font-extrabold text-primary shadow-clay-sm transition-transform hover:-translate-y-0.5"
        >
          View listing <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </ClayCard>
  );
}
