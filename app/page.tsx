import { siteConfig } from "@/content/site";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8">
      <p className="text-on-surface-variant text-sm font-semibold tracking-[0.05em] uppercase">
        Phase 1.1 — Foundation
      </p>
      <h1 className="font-display mt-4 text-4xl leading-tight font-bold md:text-6xl">
        {siteConfig.name}
      </h1>
      <p className="text-on-surface-variant mt-4 max-w-2xl text-lg leading-relaxed">
        Toolchain verified. Design tokens land in Phase 1.2, the canonical header and footer in
        Phase 1.3, and real page content from Phase 3.
      </p>
    </div>
  );
}
