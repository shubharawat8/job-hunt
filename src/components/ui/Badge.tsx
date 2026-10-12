import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { toneClasses, type Tone } from "./tones";

interface BadgeProps {
  tone?: Tone;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Badge({ tone = "neutral", icon, children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold",
        toneClasses[tone],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
