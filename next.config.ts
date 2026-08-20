import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // All imagery is self-hosted in /public — no remote patterns needed.
  // The Stitch build relied on an expiring Google CDN; see docs/SPEC.md §9.
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 768, 1024, 1280, 1600, 1920],
  },

  typedRoutes: true,
};

export default nextConfig;
