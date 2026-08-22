import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section, SectionHeading } from "@/components/layout/Section";
import { CtaLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { caseStudies, closingCta, flagship, hero, impactMeta } from "@/content/impact";
import { flagshipProjects } from "@/content/organizations";

export const metadata: Metadata = {
  title: impactMeta.title,
  description: impactMeta.description,
};

export default function ImpactPage() {
  return (
    <>
      {/* Hero and case studies share one Container. As separate blocks the
          hero's bottom padding stacked on the section's top padding and left
          roughly 200px of dead space above the only card on the page. */}
      <Container className="py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-label-md text-secondary uppercase">{hero.eyebrow}</p>
          <h1 className="font-display text-headline-lg-mobile md:text-headline-lg mt-4">
            {hero.heading}
          </h1>
          <p className="text-body-lg text-on-surface-variant mt-6">{hero.description}</p>
        </div>

        <section aria-labelledby="case-studies-heading" className="mt-14">
          <h2 id="case-studies-heading" className="sr-only">
            Case studies
          </h2>
          <ul className="grid gap-8">
            {caseStudies.map((study) => (
              <li key={study.slug}>
                {/* The whole card is one link rather than a card with a link
                  inside it: a single large target, and nothing nested that a
                  keyboard user has to tab past twice. */}
                <Link
                  href={study.href}
                  className="group border-outline-variant/70 bg-surface-container-lowest grid overflow-hidden rounded-2xl border md:grid-cols-[minmax(0,1fr)_1.6fr]"
                >
                  {/* Stands in for the case-study image. The source used an
                    AI-generated photograph carrying a mangled GIZ logo; see
                    docs/SPEC.md §11. */}
                  <div className="bg-primary-container text-on-primary flex flex-col justify-between gap-8 p-8 md:p-10">
                    <span className="font-display text-headline-md">{study.client}</span>
                    <span className="text-label-md text-on-primary-container uppercase">
                      {study.year}
                    </span>
                  </div>
                  <div className="flex flex-col p-8 md:p-10">
                    <span className="text-label-md text-secondary uppercase">{study.category}</span>
                    <h3 className="font-display text-headline-sm md:text-headline-md mt-4">
                      {study.title}
                    </h3>
                    <p className="text-body-lg text-on-surface-variant mt-4">{study.summary}</p>
                    <span className="text-label-md text-primary mt-8 inline-flex items-center gap-2 group-hover:underline">
                      {study.cta}
                      <Icon name="arrow-right" className="size-4" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Container>

      <Section tone="muted" labelledBy="flagship-heading">
        <SectionHeading id="flagship-heading" title={flagship.heading} />
        <ul className="mt-12 flex flex-wrap gap-3">
          {flagshipProjects.map((name) => (
            <li
              key={name}
              className="border-outline-variant bg-surface-container-lowest text-body-md rounded-full border px-5 py-2.5"
            >
              {name}
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="impact-closing-heading" containerClassName="text-center">
        <SectionHeading
          id="impact-closing-heading"
          title={closingCta.heading}
          description={closingCta.description}
          align="center"
        />
        <CtaLink href={closingCta.cta.href} className="mt-10">
          {closingCta.cta.label}
        </CtaLink>
      </Section>
    </>
  );
}
