import type { Route } from "next";

/**
 * Single source of truth for site-wide identity, navigation and contact data.
 * Every header, footer and metadata tag reads from here — which is what makes
 * the Stitch build's header/footer drift structurally impossible to reproduce.
 */

export const siteConfig = {
  name: "Michael Onyeka Ezeadichie",
  role: "Digital Transformation Leader",
  tagline: "Technology is not the destination. It is the bridge between vision and impact.",
  description:
    "Digital Transformation Executive, Chief Marketing Officer and Technology Entrepreneur helping organizations navigate the future of business.",
  // TODO: replace once the domain is chosen (docs/SPEC.md §8).
  url: "https://michaelezeadichie.com",
  email: "onyekam.ezeadichie@gmail.com",
  phone: "+234 706 282 7560",
  phoneHref: "tel:+2347062827560",
} as const;

/** Internal links. `Route` is validated against real routes at compile time,
 *  so a typo or a link to a page we never built fails the build rather than
 *  shipping as a dead link — defect #3 in docs/SPEC.md §9. */
export type NavItem = {
  label: string;
  href: Route;
  /** The route exists and type-checks, but holds only a placeholder. Rendered
   *  as inert text instead of a link so nothing in the chrome leads a visitor
   *  to an empty page. Drop the flag when the real page ships. */
  pending?: boolean;
};

/** External links are plain strings — they are not app routes. */
export type ExternalNavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Impact", href: "/impact" },
  { label: "Services", href: "/services" },
  { label: "Speaking", href: "/speaking" },
  { label: "Thought Leadership", href: "/thought-leadership", pending: true },
];

export const primaryCta: NavItem = {
  label: "Book a Consultation",
  href: "/contact",
};

// Copy pending from the client (docs/SPEC.md §8); inert until it arrives.
export const legalNav: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy", pending: true },
  { label: "Terms of Service", href: "/terms", pending: true },
];

// TODO: real URLs pending from the client (docs/SPEC.md §8).
export const socialNav: ExternalNavItem[] = [
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
  { label: "Medium", href: "#" },
];
