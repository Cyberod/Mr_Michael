import Link from "next/link";
import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/layout/Section";
import { CtaLink } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Quote } from "@/components/ui/Quote";
import { closingCta, giz, gizMeta } from "@/content/impact";

export const metadata: Metadata = {
  title: gizMeta.title,
  description: gizMeta.description,
};

export default function GizCaseStudyPage() {
  return (
    <>
      {/*
        A typographic hero, not a photograph. The source page used an
        AI-generated stock image whose GIZ wordmark and on-screen text were
        both mangled — on a case study that reads as documentation of the real
        engagement. It is archived in reference/assets but not shipped; see
        docs/SPEC.md §11. Real project photography would replace this.
      */}
      <Section tone="inverse" labelledBy="giz-heading">
        <Link
          href="/impact"
          className="text-label-md text-on-primary-container hover:text-on-primary inline-flex items-center gap-2 uppercase"
        >
          <Icon name="arrow-right" className="size-4 rotate-180" />
          Back to Impact
        </Link>
        <ul className="text-label-md mt-10 flex flex-wrap gap-x-6 gap-y-2 uppercase">
          <li className="text-secondary-fixed">{giz.client}</li>
          <li className="text-on-primary-container">{giz.category}</li>
          <li className="text-on-primary-container">{giz.year}</li>
        </ul>
        <h1
          id="giz-heading"
          className="font-display text-headline-lg-mobile md:text-headline-lg lg:text-display-lg mt-6 max-w-4xl"
        >
          {giz.heading}
        </h1>
        <p className="text-body-lg text-on-primary-container mt-6 max-w-3xl">{giz.subheading}</p>
      </Section>

      <Section labelledBy="giz-narrative-heading">
        <h2 id="giz-narrative-heading" className="sr-only">
          Background
        </h2>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {giz.sections.map((section) => (
            <div key={section.heading}>
              <h3 className="font-display text-headline-sm md:text-headline-md">
                {section.heading}
              </h3>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body-lg text-on-surface-variant mt-5">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted" labelledBy="giz-vision-heading">
        <div className="max-w-4xl">
          <span className="bg-secondary-fixed text-secondary mb-6 inline-flex size-14 items-center justify-center rounded-lg">
            <Icon name={giz.vision.icon} className="size-7" />
          </span>
          <h2
            id="giz-vision-heading"
            className="font-display text-headline-lg-mobile md:text-headline-lg"
          >
            {giz.vision.title}
          </h2>
          <p className="text-body-lg text-on-surface-variant mt-6">{giz.vision.description}</p>
        </div>
      </Section>

      <Section labelledBy="giz-outcomes-heading">
        <SectionHeading
          id="giz-outcomes-heading"
          title={giz.outcomes.heading}
          description={giz.outcomes.description}
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {giz.outcomes.cards.map((card) => (
            <li key={card.title}>
              <FeatureCard {...card} className="h-full" />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="inverse">
        <Quote quote={giz.quote} tone="inverse" />
      </Section>

      <Section tone="muted" labelledBy="giz-closing-heading" containerClassName="text-center">
        <SectionHeading
          id="giz-closing-heading"
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
