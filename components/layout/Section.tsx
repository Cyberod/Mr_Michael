import { Container } from "./Container";
import { cn } from "@/lib/utils";

/**
 * One vertical rhythm for the whole site: 64px of padding on mobile, 120px from
 * `md` up, from the `section` spacing tokens. Sections declare a surface tone
 * rather than a colour, so alternating bands stay consistent page to page.
 */
type Tone = "default" | "muted" | "inverse";

const toneClasses: Record<Tone, string> = {
  default: "bg-surface text-on-surface",
  muted: "bg-surface-container text-on-surface",
  inverse: "bg-primary-container text-on-primary",
};

export function Section({
  tone = "default",
  className,
  containerClassName,
  labelledBy,
  children,
}: {
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  /** id of the heading that names this section, for assistive technology. */
  labelledBy?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      aria-labelledby={labelledBy}
      className={cn("py-section-mobile md:py-section", toneClasses[tone], className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

/**
 * Section heading block. `id` is required so the surrounding `Section` can
 * point `aria-labelledby` at it — an unlabelled landmark is just noise in a
 * screen reader's region list.
 */
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "start",
  tone = "default",
  className,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  tone?: Tone;
  className?: string;
}) {
  const inverse = tone === "inverse";
  return (
    <div
      className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-label-md uppercase",
            inverse ? "text-secondary-fixed" : "text-secondary"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "font-display text-headline-lg-mobile md:text-headline-lg",
          eyebrow && "mt-3"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-body-lg mt-5",
            inverse ? "text-on-primary-container" : "text-on-surface-variant"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
