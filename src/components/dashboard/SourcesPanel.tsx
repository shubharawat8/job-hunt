import { CheckCircle2, Clock, Globe, PlusCircle } from "lucide-react";
import type { JobSource } from "@/lib/types";
import { formatDate } from "@/lib/dates";
import { Badge, ClayCard, IconBubble } from "@/components/ui";

const stateMeta = {
  synced: { label: "Synced", tone: "teal" as const, icon: CheckCircle2 },
  pending: { label: "Sync pending", tone: "lemon" as const, icon: Clock },
  planned: { label: "Planned", tone: "neutral" as const, icon: PlusCircle },
};

export function SourcesPanel({ sources }: { sources: JobSource[] }) {
  return (
    <ClayCard>
      <div className="mb-4 flex items-center gap-3">
        <IconBubble icon={Globe} tone="sky" size="sm" />
        <h3 className="font-black text-ink">Job portals tracked</h3>
      </div>
      <ul className="space-y-3">
        {sources.map((s) => {
          const meta = stateMeta[s.state];
          return (
            <li key={s.id} className="rounded-2xl bg-sunken p-4 shadow-clay-inset">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-black text-ink hover:text-primary">
                  {s.name}
                </a>
                <Badge tone={meta.tone} icon={<meta.icon className="h-3.5 w-3.5" />}>{meta.label}</Badge>
              </div>
              <p className="mt-1 text-xs font-bold text-ink-subtle">
                {s.sections.join(" · ")}
                {s.lastChecked && ` · checked ${formatDate(s.lastChecked)}`}
              </p>
              {s.note && <p className="mt-2 text-sm text-ink-muted">{s.note}</p>}
            </li>
          );
        })}
      </ul>
      <p className="mt-3 text-xs font-bold text-ink-subtle">More portals will be added as they are shared.</p>
    </ClayCard>
  );
}
