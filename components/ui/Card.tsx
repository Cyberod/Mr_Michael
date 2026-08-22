import { Icon } from "./Icon";
import type { IconName } from "@/content/types";
import { cn } from "@/lib/utils";

/**
 * The dominant card shape across the site: icon, heading, prose. The heading
 * level is a prop because a card's rank depends on the section it sits in — a
 * card under an `h2` is an `h3`. The Stitch pages hardcoded these and produced
 * a heading order that skipped levels.
 */
export function FeatureCard({
  icon,
  title,
  description,
  as: Heading = "h3",
  className,
  children,
}: {
  icon?: IconName;
  title: string;
  description?: string;
  as?: "h3" | "h4";
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "border-outline-variant/70 bg-surface-container-lowest flex h-full flex-col rounded-xl border p-8",
        className
      )}
    >
      {icon ? (
        <span className="bg-secondary-fixed text-secondary mb-6 inline-flex size-14 items-center justify-center rounded-lg">
          <Icon name={icon} className="size-7" />
        </span>
      ) : null}
      <Heading className="font-display text-headline-sm">{title}</Heading>
      {description ? (
        <p className="text-body-md text-on-surface-variant mt-3">{description}</p>
      ) : null}
      {children}
    </div>
  );
}
