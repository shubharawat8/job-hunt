import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface ClayCardProps extends HTMLAttributes<HTMLElement> {
  as?: "div" | "section" | "article" | "li";
  size?: "sm" | "md";
  interactive?: boolean;
}

/** The base claymorphism surface: soft, puffy, rounded. */
export function ClayCard({
  as: Tag = "div",
  size = "md",
  interactive = false,
  className,
  ...props
}: ClayCardProps) {
  return (
    <Tag
      className={cn(
        "bg-surface",
        size === "md" ? "rounded-clay p-6 shadow-clay" : "rounded-3xl p-4 shadow-clay-sm",
        interactive &&
          "transition-transform duration-300 hover:-translate-y-1 focus-within:-translate-y-1",
        className,
      )}
      {...props}
    />
  );
}
