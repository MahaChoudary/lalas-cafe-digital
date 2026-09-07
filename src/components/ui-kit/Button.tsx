import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50";

const variants = {
  ember:
    "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_var(--primary)]",
  neon: "bg-accent text-accent-foreground hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_var(--accent)]",
  outline:
    "border border-border bg-transparent text-foreground hover:border-primary hover:text-primary",
  ghost: "text-foreground/80 hover:text-primary",
} as const;

export type LuxVariant = keyof typeof variants;

export function luxButton(variant: LuxVariant = "ember", className?: string) {
  return cn(base, variants[variant], className);
}

export function LuxButton({
  variant = "ember",
  className,
  children,
  ...props
}: ComponentProps<"button"> & { variant?: LuxVariant; children: ReactNode }) {
  return (
    <button className={luxButton(variant, className)} {...props}>
      {children}
    </button>
  );
}

export function LuxLink({
  variant = "ember",
  className,
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: LuxVariant; children: ReactNode }) {
  return (
    <Link className={luxButton(variant, className)} {...props}>
      {children}
    </Link>
  );
}
