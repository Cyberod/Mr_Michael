import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // All imagery is statically imported from assets/ — no remote patterns
  // needed. The Stitch build relied on an expiring Google CDN; see SPEC §11.
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 768, 1024, 1280, 1600, 1920],
    // Next 16 requires quality values to be allowlisted; the default is [75]
    // and anything not listed silently falls back to it. 90 is here for the
    // portrait, whose 512px source cannot afford a second lossy pass.
    qualities: [75, 90],
  },

  typedRoutes: true,
};

export default nextConfig;
