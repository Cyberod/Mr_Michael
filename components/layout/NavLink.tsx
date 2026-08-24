import Link from "next/link";
import type { NavItem } from "@/content/site";

/**
 * One navigation item, rendered as a link or as inert text.
 *
 * Items flagged `pending` in content/site.ts point at routes that hold only a
 * placeholder. Those render as a plain <span> with no href at all, rather than
 * a link with a click handler that swallows the event: without an href the item
 * leaves the tab order, ignores middle-click and "open in new tab", and stops
 * advertising the route to crawlers.
 *
 * Styling is identical either way — the caller passes one className and the
 * item looks exactly like its neighbours. Only the click is gone. A
 * screen-reader-only suffix carries the part sighted users infer from nothing
 * happening.
 */
export function NavLink({
  item,
  className,
  active = false,
}: {
  item: NavItem;
  className: string;
  active?: boolean;
}) {
  if (item.pending) {
    return (
      <span className={className}>
        {item.label}
        <span className="sr-only"> (coming soon)</span>
      </span>
    );
  }

  return (
    <Link href={item.href} aria-current={active ? "page" : undefined} className={className}>
      {item.label}
    </Link>
  );
}
