import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { IconBubble } from "./IconBubble";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  children?: ReactNode;
}

export function EmptyState({ icon, title, children }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center rounded-3xl bg-sunken px-6 py-10 text-center shadow-clay-inset">
      <IconBubble icon={icon} tone="sky" size="lg" />
      <h3 className="mt-4 text-lg font-black text-ink">{title}</h3>
      {children && <div className="mt-2 max-w-md text-sm text-ink-muted">{children}</div>}
    </div>
  );
}
