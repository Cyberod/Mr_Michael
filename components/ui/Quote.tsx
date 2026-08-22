import { Icon } from "./Icon";
import type { Quote as QuoteContent } from "@/content/types";
import { cn } from "@/lib/utils";

/**
 * Pull quote. Text colour is inherited from the surrounding section so the same
 * component works on a light band and on navy; only the quote mark needs to
 * know which, since the accent that reads on navy disappears on `surface`.
 *
 * Marked up as `blockquote` + `cite` rather than styled paragraphs: the Stitch
 * build used a decorative quotation-mark glyph and told assistive technology
 * nothing about the attribution. No opacity on the text either — that is what
 * pushed the footer below AA (SPEC §9 #14).
 */
export function Quote({
  quote,
  tone = "default",
  className,
}: {
  quote: QuoteContent;
  tone?: "default" | "inverse";
  className?: string;
}) {
  return (
    <figure className={cn("max-w-4xl", className)}>
      <Icon
        name="quote"
        className={cn("size-9", tone === "inverse" ? "text-secondary-fixed" : "text-secondary")}
      />
      <blockquote className="font-display text-headline-sm md:text-headline-md mt-6">
        <p>{quote.text}</p>
      </blockquote>
      <figcaption
        className={cn(
          "text-label-md mt-6 uppercase",
          tone === "inverse" ? "text-on-primary-container" : "text-on-surface-variant"
        )}
      >
        <cite className="not-italic">{quote.attribution}</cite>
      </figcaption>
    </figure>
  );
}
