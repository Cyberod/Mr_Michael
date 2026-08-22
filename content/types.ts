import type { Route } from "next";

/**
 * Shared shapes for the content layer. Pages in `app/` import data from
 * `content/` and render it — no copy is written inline in a component, so a
 * wording change is a one-line edit in one file rather than a search across
 * seven pages (which is exactly how the Stitch build drifted).
 */

/**
 * Every icon the site uses. Phase 3 ships a single inline-SVG `Icon` component
 * keyed by this union, so referencing an icon we never drew is a type error
 * instead of a blank square. The Stitch build pulled the Material Symbols font
 * from a CDN and rendered the raw ligature text — "transform", "psychology" —
 * as visible words until the font finished loading.
 */
export type IconName =
  | "ai"
  | "arrow-right"
  | "briefcase"
  | "building"
  | "check"
  | "cloud"
  | "currency"
  | "education"
  | "eye"
  | "government"
  | "idea"
  | "laptop"
  | "mail"
  | "megaphone"
  | "microphone"
  | "network"
  | "people"
  | "phone"
  | "quote"
  | "rocket"
  | "sitemap"
  | "transform"
  | "trending-up"
  | "verified";

/** Per-route `<title>` and meta description. Consumed by each page's exported
 *  `metadata`, so the SEO layer in Phase 5 has one place to read from. */
export type PageMeta = {
  title: string;
  description: string;
};

/** An internal call to action. `Route` is compile-time checked, so a CTA can
 *  never point at a page that does not exist. */
export type Cta = {
  label: string;
  href: Route;
};

export type Stat = {
  value: string;
  label: string;
};

/** Icon + heading + prose. The dominant card shape across the site. */
export type FeatureCard = {
  icon: IconName;
  title: string;
  description: string;
};

/** Icon + heading + bullet list. Used where a card enumerates sub-topics. */
export type TopicCard = {
  icon: IconName;
  title: string;
  points: readonly string[];
};

export type Quote = {
  text: string;
  attribution: string;
};

/** A heading plus one or more paragraphs of prose. */
export type ProseSection = {
  heading: string;
  paragraphs: readonly string[];
};
