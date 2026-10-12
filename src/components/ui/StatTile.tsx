import type { LucideIcon } from "lucide-react";
import { ClayCard } from "./ClayCard";
import { IconBubble } from "./IconBubble";
import type { Tone } from "./tones";

interface StatTileProps {
  label: string;
  value: string | number;
  hint?: string;
  icon: LucideIcon;
  tone?: Tone;
}

export function StatTile({ label, value, hint, icon, tone = "primary" }: StatTileProps) {
  return (
    <ClayCard className="flex items-center gap-4" interactive>
      <IconBubble icon={icon} tone={tone} size="lg" />
      <div className="min-w-0">
        <p className="text-3xl font-black leading-none text-ink tabular-nums">{value}</p>
        <p className="mt-1 text-sm font-bold text-ink-muted">{label}</p>
        {hint && <p className="text-xs text-ink-subtle">{hint}</p>}
      </div>
    </ClayCard>
  );
}
