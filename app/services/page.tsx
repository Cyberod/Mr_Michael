import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section, SectionHeading } from "@/components/layout/Section";
import { CtaLink } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/Card";
import { closingCta, coreCompetencies, hero, servicesMeta } from "@/content/services";

export const metadata: Metadata = {
  title: servicesMeta.title,
  description: servicesMeta.description,
};

export default function ServicesPage() {
  return (
    <>
      <Container className="py-16 md:py-24">
        {/* Width constrained on an inner element — Container already sets
            max-w-page, and cn() joins classes without resolving conflicts. */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-label-md text-secondary uppercase">{hero.eyebrow}</p>
          <h1 className="font-display text-headline-lg-mobile md:text-headline-lg mt-4">
            {hero.heading}
          </h1>
          <p className="text-body-lg text-on-surface-variant mt-6">{hero.description}</p>
          <CtaLink href={hero.cta.href} className="mt-10">
            {hero.cta.label}
          </CtaLink>
        </div>
      </Container>

      <Section tone="muted" labelledBy="competencies-heading">
        <SectionHeading id="competencies-heading" title={coreCompetencies.heading} />
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coreCompetencies.cards.map((card) => (
            <li key={card.title}>
              <FeatureCard {...card} className="h-full" />
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="services-closing-heading" containerClassName="text-center">
        <SectionHeading
          id="services-closing-heading"
          title={closingCta.heading}
          description={closingCta.description}
          align="center"
        />
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <CtaLink href={closingCta.primaryCta.href}>{closingCta.primaryCta.label}</CtaLink>
          <CtaLink href={closingCta.secondaryCta.href} variant="outline" withArrow>
            {closingCta.secondaryCta.label}
          </CtaLink>
        </div>
      </Section>
    </>
  );
}
