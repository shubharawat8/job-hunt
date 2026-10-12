import { GitBranch } from "lucide-react";
import type { JobStatus } from "@/lib/types";
import { ClayCard, IconBubble } from "@/components/ui";
import { PIPELINE, statusMeta } from "./labels";

/** Single-series horizontal bar chart of applications per pipeline stage. */
export function PipelineChart({ counts }: { counts: Record<JobStatus, number> }) {
  const max = Math.max(1, ...PIPELINE.map((s) => counts[s]));
  return (
    <ClayCard>
      <div className="mb-4 flex items-center gap-3">
        <IconBubble icon={GitBranch} tone="primary" size="sm" />
        <h3 className="font-black text-ink">Application pipeline</h3>
      </div>
      <table className="sr-only">
        <caption>Listings per pipeline stage</caption>
        <tbody>
          {PIPELINE.map((s) => (
            <tr key={s}><th>{statusMeta[s].label}</th><td>{counts[s]}</td></tr>
          ))}
        </tbody>
      </table>
      <ul className="space-y-3" aria-hidden>
        {PIPELINE.map((s) => {
          const n = counts[s];
          return (
            <li key={s} className="group grid grid-cols-[6.5rem_1fr_2rem] items-center gap-3" title={`${statusMeta[s].label}: ${n}`}>
              <span className="text-sm font-bold text-ink-muted">{statusMeta[s].label}</span>
              <span className="h-5 rounded-full bg-sunken p-0.5 shadow-clay-inset">
                {n > 0 && (
                  <span
                    className="block h-full rounded-full bg-primary transition-[width] duration-700 group-hover:brightness-110"
                    style={{ width: `${(n / max) * 100}%` }}
                  />
                )}
              </span>
              <span className="text-right text-sm font-black text-ink tabular-nums">{n}</span>
            </li>
          );
        })}
      </ul>
    </ClayCard>
  );
}
