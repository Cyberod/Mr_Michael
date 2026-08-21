import { Container } from "./Container";

/**
 * Temporary body for routes that exist so navigation is real and type-checked,
 * but whose content arrives in Phase 3. Each of these is replaced wholesale by
 * the built page — nothing here survives to production.
 */
export function PagePlaceholder({ title, phase }: { title: string; phase: string }) {
  return (
    <Container className="py-section-mobile md:py-section">
      <p className="text-label-md text-on-surface-variant uppercase">Awaiting {phase}</p>
      <h1 className="font-display text-headline-lg-mobile md:text-headline-lg mt-4">{title}</h1>
      <p className="text-body-lg text-on-surface-variant mt-4 max-w-2xl">
        This route exists so the header, footer and navigation can be built and verified against
        real links. Content is ported from the audited Stitch source in {phase}.
      </p>
    </Container>
  );
}
