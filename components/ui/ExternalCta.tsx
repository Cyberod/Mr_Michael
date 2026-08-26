import { Icon } from "./Icon";
import { buttonClasses, type ButtonVariant } from "./Button";

/**
 * A call to action pointing off-site to a commercial partner.
 *
 * Separate from CtaLink because the two have opposite requirements: CtaLink
 * takes a typed `Route` and must resolve to a page we built, while this one
 * takes an arbitrary URL and must declare the commercial relationship to search
 * engines via rel="sponsored". `nofollow` accompanies it for crawlers that
 * predate the sponsored token, and `noopener` closes the reverse-tabnabbing
 * hole that target="_blank" otherwise opens.
 *
 * An empty `href` renders inert text rather than a dead `href="#"` — the state
 * the source page shipped in, where all seven CTAs led nowhere.
 */
export function ExternalCta({
  href,
  variant = "primary",
  withArrow = true,
  className,
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const content = (
    <>
      {children}
      {withArrow ? <Icon name="arrow-right" className="size-4" /> : null}
    </>
  );

  if (!href) {
    return <span className={buttonClasses(variant, className)}>{content}</span>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      className={buttonClasses(variant, className)}
    >
      {content}
    </a>
  );
}
