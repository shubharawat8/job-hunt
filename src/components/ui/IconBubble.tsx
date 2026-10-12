import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import { toneClasses, type Tone } from "./tones";

interface IconBubbleProps {
  icon: LucideIcon;
  tone?: Tone;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "h-9 w-9 rounded-xl [&>svg]:h-4 [&>svg]:w-4",
  md: "h-12 w-12 rounded-2xl [&>svg]:h-5 [&>svg]:w-5",
  lg: "h-16 w-16 rounded-3xl [&>svg]:h-7 [&>svg]:w-7",
};

/** A puffy, tinted icon container. */
export function IconBubble({ icon: Icon, tone = "primary", size = "md", className }: IconBubbleProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex shrink-0 items-center justify-center shadow-clay-sm",
        sizes[size],
        toneClasses[tone],
        className,
      )}
    >
      <Icon strokeWidth={2.25} />
    </span>
  );
}
