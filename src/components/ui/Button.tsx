import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "soft";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-ink",
  soft: "bg-surface text-ink",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-extrabold shadow-clay-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:shadow-clay-inset";

interface ButtonLinkProps extends ComponentProps<typeof Link> {
  variant?: Variant;
  icon?: ReactNode;
  external?: boolean;
}

export function ButtonLink({ variant = "primary", icon, external, className, children, ...props }: ButtonLinkProps) {
  return (
    <Link
      className={cn(base, variants[variant], className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {icon}
      {children}
    </Link>
  );
}

interface ButtonProps extends ComponentProps<"button"> {
  variant?: Variant;
}

export function Button({ variant = "soft", className, ...props }: ButtonProps) {
  return <button type="button" className={cn(base, variants[variant], className)} {...props} />;
}
