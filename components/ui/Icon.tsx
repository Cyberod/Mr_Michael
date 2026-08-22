import type { ReactNode } from "react";
import type { IconName } from "@/content/types";
import { cn } from "@/lib/utils";

/**
 * The complete icon set, drawn inline. `Record<IconName, ReactNode>` is what
 * makes this exhaustive: adding a name to the union without drawing it fails
 * the build. Nothing is fetched at runtime — the Stitch build pulled the
 * Material Symbols font from a CDN and displayed the raw ligature text
 * ("transform", "psychology") on screen until it arrived.
 *
 * All geometry is on a 24x24 grid, stroked in `currentColor`, so an icon
 * inherits its colour and optical weight from the text beside it.
 */
const paths: Record<IconName, ReactNode> = {
  ai: (
    <>
      <rect x="7.5" y="7.5" width="9" height="9" rx="1.5" />
      <path d="M10 4v3.5M14 4v3.5M10 16.5V20M14 16.5V20M4 10h3.5M4 14h3.5M16.5 10H20M16.5 14H20" />
    </>
  ),
  "arrow-right": <path d="M4.5 12h15m-6.5-6.5L19.5 12 13 18.5" />,
  briefcase: (
    <>
      <rect x="2.5" y="7" width="19" height="13.5" rx="2" />
      <path d="M8.5 7V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2M2.5 12.5h19" />
    </>
  ),
  building: (
    <>
      <path d="M4 20.5V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16.5M14 10h5a1 1 0 0 1 1 1v9.5M2.5 20.5h19" />
      <path d="M7.5 7h3M7.5 11h3M7.5 15h3M17 14h.01M17 17.5h.01" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.25 12.25 2.5 2.5 5-5.5" />
    </>
  ),
  cloud: <path d="M17.5 19.5H8.75a6.25 6.25 0 1 1 6-8h2.75a4 4 0 1 1 0 8Z" />,
  currency: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 5.75v12.5M14.75 9a2.25 2.25 0 0 0-2.05-1.25h-1.2a2.13 2.13 0 0 0 0 4.25h.9a2.13 2.13 0 0 1 0 4.25h-1.2A2.25 2.25 0 0 1 9.25 15" />
    </>
  ),
  education: (
    <>
      <path d="M12 4 2.5 9 12 14l9.5-5z" />
      <path d="M6.5 11.5V17c0 1.4 2.46 2.75 5.5 2.75s5.5-1.35 5.5-2.75v-5.5M21.5 9v5.5" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.75" />
    </>
  ),
  government: (
    <>
      <path d="m2.5 9.5 9.5-6 9.5 6M2.5 20.5h19M4.5 17.5h15" />
      <path d="M6 9.5v8M10 9.5v8M14 9.5v8M18 9.5v8" />
    </>
  ),
  idea: (
    <>
      <path d="M12 3a6.25 6.25 0 0 0-3.75 11.25c.55.42.9 1.05 1 1.75h5.5c.1-.7.45-1.33 1-1.75A6.25 6.25 0 0 0 12 3Z" />
      <path d="M9.5 19h5M10.5 21.5h3" />
    </>
  ),
  laptop: (
    <>
      <rect x="3.5" y="4.5" width="17" height="12" rx="2" />
      <path d="M2 19.5h20" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3 6.5 9 6.5 9-6.5" />
    </>
  ),
  megaphone: (
    <>
      <path d="M3.5 10.5 20 5.5v13l-16.5-5z" />
      <path d="M3.5 10.5H3a2 2 0 0 0-2 2v-.5a2 2 0 0 0 2 2h.5zM7 14.5v3.25a2.25 2.25 0 0 0 4.4.7" />
    </>
  ),
  microphone: (
    <>
      <rect x="9" y="2.5" width="6" height="11.5" rx="3" />
      <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3.5M8.5 21.5h7" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="12" r="2.75" />
      <circle cx="12" cy="4" r="1.75" />
      <circle cx="5" cy="19" r="1.75" />
      <circle cx="19" cy="19" r="1.75" />
      <path d="M12 5.75v3.5M10.4 14.25 6.3 17.6M13.6 14.25l4.1 3.35" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="7.5" r="3.75" />
      <path d="M2.5 20.5v-1.25A4.25 4.25 0 0 1 6.75 15h4.5a4.25 4.25 0 0 1 4.25 4.25v1.25M16 4.25a3.75 3.75 0 0 1 0 7M18 15.4a4.25 4.25 0 0 1 3.5 4.18v.92" />
    </>
  ),
  phone: (
    <path d="M6.6 3.5h-2A1.6 1.6 0 0 0 3 5.2c0 8.6 7.2 15.8 15.8 15.8a1.6 1.6 0 0 0 1.7-1.6v-2a1.6 1.6 0 0 0-1.35-1.58l-2.5-.42a1.6 1.6 0 0 0-1.6.75l-.6 1a12.4 12.4 0 0 1-5.4-5.4l1-.6a1.6 1.6 0 0 0 .75-1.6l-.42-2.5A1.6 1.6 0 0 0 6.6 3.5Z" />
  ),
  // The only filled glyph — a quote mark reads as a shape, not an outline.
  quote: (
    <path d="M10 6.6c-3.4 1.2-5.6 4.3-5.6 7.8 0 2.2 1.45 3.8 3.5 3.8a3.3 3.3 0 0 0 3.3-3.3c0-1.75-1.25-3.1-3-3.1-.3 0-.6.05-.85.13.45-1.65 2-3.4 3.75-4.25zM20 6.6c-3.4 1.2-5.6 4.3-5.6 7.8 0 2.2 1.45 3.8 3.5 3.8a3.3 3.3 0 0 0 3.3-3.3c0-1.75-1.25-3.1-3-3.1-.3 0-.6.05-.85.13.45-1.65 2-3.4 3.75-4.25z" />
  ),
  rocket: (
    <>
      <path d="M12.5 15 9 11.5a21 21 0 0 1 2-3.9A12.6 12.6 0 0 1 21.5 2.5c0 2.7-.75 7.4-5.9 10.9a21 21 0 0 1-3.1 1.6Z" />
      <path d="M9 11.5H4.5s.55-3 2-3.95c1.6-1.05 4.9 0 4.9 0M12.5 15v4.5s3-.55 3.95-2c1.05-1.6 0-4.9 0-4.9" />
      <path d="M5 17c-1.5 1.25-2 5-2 5s3.75-.5 5-2a1.9 1.9 0 1 0-3-3Z" />
    </>
  ),
  sitemap: (
    <>
      <rect x="9" y="2.5" width="6" height="5" rx="1" />
      <rect x="2.5" y="16.5" width="6" height="5" rx="1" />
      <rect x="15.5" y="16.5" width="6" height="5" rx="1" />
      <path d="M12 7.5v3.5M5.5 16.5V13h13v3.5" />
    </>
  ),
  transform: (
    <>
      <path d="M3.5 8.5h12.25a4.25 4.25 0 0 1 0 8.5H3.5" />
      <path d="m7 5 -3.5 3.5L7 12M17 14l3.5 3-3.5 3.5" />
    </>
  ),
  "trending-up": <path d="m3.5 17 6-6 4 4 7-7.5M15 7.5h5.5V13" />,
  verified: (
    <>
      <path d="M12 3 4.5 5.75v6c0 4.4 3.1 7.6 7.5 9 4.4-1.4 7.5-4.6 7.5-9v-6z" />
      <path d="m9.25 11.75 2 2 3.5-4" />
    </>
  ),
};

/** Icons here are always paired with adjacent text, so they are hidden from
 *  assistive technology rather than duplicating a label. */
export function Icon({ name, className }: { name: IconName; className?: string }) {
  const isFilled = name === "quote";
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill={isFilled ? "currentColor" : "none"}
      stroke={isFilled ? "none" : "currentColor"}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-6 shrink-0", className)}
    >
      {paths[name]}
    </svg>
  );
}
