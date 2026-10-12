import { cn } from "@/lib/cn";

interface MeterProps {
  value: number;
  max?: number;
  label: string;
  /** Tailwind bg-* class for the fill. */
  fillClass?: string;
  showValue?: boolean;
}

/** Inset clay track with a rounded fill. */
export function Meter({ value, max = 100, label, fillClass = "bg-primary", showValue = true }: MeterProps) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className="w-full">
      <div className="mb-1 flex justify-between text-xs font-bold text-ink-muted">
        <span>{label}</span>
        {showValue && (
          <span className="tabular-nums text-ink">
            {value}/{max}
          </span>
        )}
      </div>
      <div
        role="meter"
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        className="h-3 w-full rounded-full bg-sunken p-0.5 shadow-clay-inset"
      >
        <div className={cn("h-full rounded-full transition-[width] duration-700", fillClass)} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
