import Link from "next/link";
import type { Route } from "next";
import { Icon } from "./Icon";
import { cn } from "@/lib/utils";

/**
 * Shared button styling. Every variant is at least 48px tall so it clears the
 * 44px minimum touch target, and every one carries a visible focus ring from
 * the global `:focus-visible` rule in globals.css.
 */
export type ButtonVariant = "primary" | "outline" | "inverse" | "quiet";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-on-primary hover:bg-primary/90",
  outline: "border-outline text-primary hover:bg-surface-container border",
  inverse: "bg-surface text-primary hover:bg-surface-container",
  quiet: "text-secondary hover:text-primary underline-offset-4 hover:underline px-0",
};

export function buttonClasses(variant: ButtonVariant = "primary", className?: string) {
  return cn(
    "text-label-md inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-7 transition-colors",
    variantClasses[variant],
    className
  );
}

/**
 * Internal call to action. `href` is typed `Route`, so a CTA pointing at a page
 * that does not exist fails the build rather than shipping as a dead link —
 * every link in the Stitch build pointed at `#`.
 */
export function CtaLink({
  href,
  variant = "primary",
  withArrow = false,
  className,
  children,
}: {
  href: Route;
  variant?: ButtonVariant;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={buttonClasses(variant, className)}>
      {children}
      {withArrow ? <Icon name="arrow-right" className="size-4" /> : null}
    </Link>
  );
}
