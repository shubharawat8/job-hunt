import { Compass } from "lucide-react";
import type { JobLevel } from "@/lib/types";
import { LEVEL_SCORE } from "@/lib/match";
import { Badge, ClayCard, IconBubble } from "@/components/ui";
import { levelMeta } from "./labels";

const order: JobLevel[] = ["national", "international", "state"];

export function PreferencesCard() {
  return (
    <ClayCard>
      <div className="mb-4 flex items-center gap-3">
        <IconBubble icon={Compass} tone="teal" size="sm" />
        <h3 className="font-black text-ink">Location preference</h3>
      </div>
      <ol className="space-y-2">
        {order.map((l, i) => (
          <li key={l} className="flex items-center justify-between gap-2 rounded-2xl bg-sunken px-4 py-2.5 shadow-clay-inset">
            <span className="font-extrabold text-ink">
              {i + 1}. {levelMeta[l].label}
            </span>
            <Badge tone={levelMeta[l].tone}>
              {levelMeta[l].priority} · +{LEVEL_SCORE[l]}
            </Badge>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-xs font-bold text-ink-subtle">
        Location adds up to 20 of the 100-point fit score.
      </p>
    </ClayCard>
  );
}
