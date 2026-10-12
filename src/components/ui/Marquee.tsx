import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface MarqueeProps {
  children: ReactNode;
  /** Seconds for one full loop. */
  duration?: number;
  reverse?: boolean;
  className?: string;
  label?: string;
}

/**
 * Infinite, auto-moving carousel. Children are rendered twice so the
 * -50% translate loops seamlessly. Pauses on hover/focus and stops
 * under prefers-reduced-motion (see globals.css).
 */
export function Marquee({ children, duration = 40, reverse = false, className, label }: MarqueeProps) {
  return (
    <div
      role="region"
      aria-label={label}
      className={cn(
        "group relative overflow-hidden py-4",
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className,
      )}
    >
      <div
        className="flex w-max animate-marquee gap-5 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]"
        style={{ "--marquee-duration": `${duration}s`, animationDirection: reverse ? "reverse" : "normal" } as CSSProperties}
      >
        <div className="flex shrink-0 gap-5">{children}</div>
        <div className="flex shrink-0 gap-5" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
