import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { IconBubble } from "./IconBubble";
import type { Tone } from "./tones";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  icon?: LucideIcon;
  tone?: Tone;
  action?: ReactNode;
}

export function SectionHeading({ eyebrow, title, description, icon, tone, action }: SectionHeadingProps) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div className="flex items-start gap-4">
        {icon && <IconBubble icon={icon} tone={tone} />}
        <div>
          {eyebrow && (
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-ink-subtle">{eyebrow}</p>
          )}
          <h2 className="text-2xl font-black tracking-tight text-ink sm:text-3xl">{title}</h2>
          {description && <p className="mt-1 max-w-2xl text-ink-muted">{description}</p>}
        </div>
      </div>
      {action}
    </div>
  );
}
