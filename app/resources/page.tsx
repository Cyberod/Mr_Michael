import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section, SectionHeading } from "@/components/layout/Section";
import { CtaLink, type ButtonVariant } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/Card";
import { ExternalCta } from "@/components/ui/ExternalCta";
import { Icon } from "@/components/ui/Icon";
import {
  affiliateUrl,
  audience,
  closing,
  comparison,
  competencies,
  contactCta,
  ctaLabel,
  disclosure,
  faqs,
  hero,
  programDetails,
  resourcesMeta,
  whyMiniMba,
  whyRecommending,
} from "@/content/resources";

export const metadata: Metadata = {
  title: resourcesMeta.title,
  description: resourcesMeta.description,
};

function MbaCta({ variant, className }: { variant?: ButtonVariant; className?: string }) {
  return (
    <ExternalCta href={affiliateUrl} variant={variant} className={className}>
      {ctaLabel}
    </ExternalCta>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <Container className="py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-label-md text-secondary uppercase">{hero.eyebrow}</p>
          <h1 className="font-display text-headline-lg-mobile md:text-headline-lg mt-4">
            {hero.heading}
          </h1>
          <p className="text-body-lg text-on-surface-variant mt-6">{hero.description}</p>
          <MbaCta className="mt-10" />

          {/* Disclosure sits with the first CTA, at reading size. A relationship
              a visitor has to hunt for has not been disclosed. */}
          <aside
            aria-labelledby="disclosure-heading"
            className="border-outline-variant bg-surface-container mt-10 rounded-lg border p-6"
          >
            <h2 id="disclosure-heading" className="text-label-md text-on-surface uppercase">
              {disclosure.heading}
            </h2>
            <p className="text-body-md text-on-surface-variant mt-3">{disclosure.body}</p>
          </aside>
        </div>
      </Container>

      <Section tone="muted" labelledBy="why-mini-mba-heading">
        <SectionHeading id="why-mini-mba-heading" title={whyMiniMba.heading} />
        <div className="mt-8 max-w-3xl">
          {whyMiniMba.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-body-lg text-on-surface-variant mt-5 first:mt-0">
              {paragraph}
            </p>
          ))}
        </div>
        <MbaCta className="mt-10" />
      </Section>

      <Section labelledBy="why-recommending-heading">
        <SectionHeading id="why-recommending-heading" title={whyRecommending.heading} />
        <div className="mt-8 max-w-3xl">
          {whyRecommending.intro.map((paragraph) => (
            <p key={paragraph} className="text-body-lg text-on-surface-variant mt-5 first:mt-0">
              {paragraph}
            </p>
          ))}

          <p className="text-body-lg text-on-surface mt-8">{whyRecommending.coverageHeading}</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {whyRecommending.coverage.map((item) => (
              <li key={item} className="text-body-md flex items-start gap-3">
                <Icon name="check" className="text-secondary mt-1 size-5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <p className="text-body-lg text-on-surface-variant mt-8">{whyRecommending.outro}</p>
        </div>
        <MbaCta className="mt-10" />
      </Section>

      <Section tone="muted" labelledBy="comparison-heading">
        <SectionHeading id="comparison-heading" title={comparison.heading} />
        {/* The table scrolls inside its own box rather than widening the page. */}
        <div className="border-outline-variant/70 bg-surface-container-lowest mt-10 overflow-x-auto rounded-xl border">
          <table className="w-full min-w-xl border-collapse text-left">
            <thead>
              <tr className="border-outline-variant/70 border-b">
                {comparison.columns.map((column, index) => (
                  <th
                    key={column}
                    scope="col"
                    className={
                      index === 0
                        ? "text-label-md text-on-surface px-6 py-5 uppercase"
                        : "text-label-md text-secondary px-6 py-5 uppercase"
                    }
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map(([feature, traditional, asap]) => (
                <tr key={feature} className="border-outline-variant/70 border-b last:border-b-0">
                  <th scope="row" className="text-body-md text-on-surface px-6 py-5 font-normal">
                    {feature}
                  </th>
                  <td className="text-body-md text-on-surface-variant px-6 py-5">{traditional}</td>
                  <td className="text-body-md text-on-surface px-6 py-5">{asap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <MbaCta className="mt-10" />
      </Section>

      <Section labelledBy="competencies-heading">
        <SectionHeading id="competencies-heading" title={competencies.heading} />
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {competencies.cards.map((card) => (
            <li key={card.title}>
              <FeatureCard {...card} className="h-full" />
            </li>
          ))}
        </ul>
        <MbaCta className="mt-12" />
      </Section>

      <Section tone="muted" labelledBy="audience-heading">
        <SectionHeading id="audience-heading" title={audience.heading} />
        <ul className="mt-10 grid max-w-3xl gap-6">
          {audience.items.map((item) => (
            <li key={item.title} className="flex items-start gap-4">
              <Icon name="check" className="text-secondary mt-1 size-6 shrink-0" />
              <p className="text-body-lg">
                <span className="text-on-surface font-medium">{item.title}:</span>{" "}
                <span className="text-on-surface-variant">{item.description}</span>
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="inverse" labelledBy="program-details-heading">
        <SectionHeading
          id="program-details-heading"
          title={programDetails.heading}
          tone="inverse"
        />
        <dl className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {programDetails.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="font-display text-headline-lg text-secondary-fixed block">
                  {stat.value}
                </span>
                <span className="text-body-md text-on-primary-container mt-2 block">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
        <MbaCta variant="inverse" className="mt-12" />
      </Section>

      <Section labelledBy="faq-heading">
        <SectionHeading id="faq-heading" title={faqs.heading} />
        {/* Native details/summary: an accordion that works with no JavaScript,
            is keyboard operable and is announced correctly, for free. */}
        <ul className="mt-10 grid max-w-3xl gap-4">
          {faqs.items.map((faq) => (
            <li key={faq.question}>
              <details className="border-outline-variant/70 bg-surface-container-lowest group rounded-xl border">
                <summary className="text-body-lg text-on-surface flex cursor-pointer items-center justify-between gap-6 px-6 py-5">
                  {faq.question}
                  <Icon
                    name="arrow-right"
                    className="text-secondary size-5 shrink-0 rotate-90 transition-transform group-open:-rotate-90"
                  />
                </summary>
                <p className="text-body-md text-on-surface-variant px-6 pb-6">{faq.answer}</p>
              </details>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted" labelledBy="resources-closing-heading" containerClassName="text-center">
        <SectionHeading
          id="resources-closing-heading"
          title={closing.heading}
          description={closing.description}
          align="center"
        />
        <MbaCta className="mt-10" />
      </Section>

      <Section labelledBy="resources-contact-heading" containerClassName="text-center">
        <SectionHeading
          id="resources-contact-heading"
          title={contactCta.heading}
          description={contactCta.description}
          align="center"
        />
        <CtaLink href={contactCta.cta.href} variant="outline" withArrow className="mt-10">
          {contactCta.cta.label}
        </CtaLink>
      </Section>
    </>
  );
}
