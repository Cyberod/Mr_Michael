import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section, SectionHeading } from "@/components/layout/Section";
import { CtaLink } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Quote } from "@/components/ui/Quote";
import { siteConfig } from "@/content/site";
import {
  closingCta,
  expertise,
  hero,
  keynotes,
  quote,
  speakingMeta,
  topics,
} from "@/content/speaking";

export const metadata: Metadata = {
  title: speakingMeta.title,
  description: speakingMeta.description,
};

export default function SpeakingPage() {
  return (
    <>
      <Container className="py-16 md:py-24">
        <div className="max-w-3xl">
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

      <Section tone="muted" labelledBy="expertise-heading">
        <SectionHeading id="expertise-heading" title={expertise.heading} />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {expertise.cards.map((card) => (
            <li key={card.title}>
              <FeatureCard {...card} className="h-full" />
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="topics-heading">
        <SectionHeading
          id="topics-heading"
          title={topics.heading}
          description={topics.description}
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.cards.map((card) => (
            <li
              key={card.title}
              className="border-outline-variant/70 bg-surface-container-lowest flex h-full flex-col rounded-xl border p-8"
            >
              <span className="bg-secondary-fixed text-secondary mb-6 inline-flex size-14 items-center justify-center rounded-lg">
                <Icon name={card.icon} className="size-7" />
              </span>
              <h3 className="font-display text-headline-sm">{card.title}</h3>
              <ul className="mt-5 space-y-3">
                {card.points.map((point) => (
                  <li key={point} className="text-body-md text-on-surface-variant flex gap-3">
                    <Icon name="arrow-right" className="text-secondary mt-1.5 size-4" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      {/* Keynotes carry no link. The source gave each a "View Details" pointing
          at `#`, and there are no detail pages — see content/speaking.ts. */}
      <Section tone="muted" labelledBy="keynotes-heading">
        <SectionHeading
          id="keynotes-heading"
          title={keynotes.heading}
          description={keynotes.description}
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {keynotes.items.map((keynote, index) => (
            <li
              key={keynote.title}
              className="border-outline-variant/70 bg-surface-container-lowest flex h-full flex-col rounded-xl border p-8"
            >
              <span className="text-label-md text-secondary" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-headline-sm mt-4">{keynote.title}</h3>
              <p className="text-body-md text-on-surface-variant mt-3">{keynote.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="inverse">
        <Quote quote={quote} tone="inverse" />
      </Section>

      <Section labelledBy="speaking-closing-heading" containerClassName="text-center">
        <SectionHeading
          id="speaking-closing-heading"
          title={closingCta.heading}
          description={closingCta.description}
          align="center"
        />
        <ul className="text-body-lg mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
          <li>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-secondary inline-flex items-center gap-3 underline-offset-4 hover:underline"
            >
              <Icon name="mail" className="text-secondary size-5" />
              {siteConfig.email}
            </a>
          </li>
          <li>
            <a
              href={siteConfig.phoneHref}
              className="hover:text-secondary inline-flex items-center gap-3 underline-offset-4 hover:underline"
            >
              <Icon name="phone" className="text-secondary size-5" />
              {siteConfig.phone}
            </a>
          </li>
        </ul>
        <CtaLink href={closingCta.cta.href} className="mt-10">
          {closingCta.cta.label}
        </CtaLink>
      </Section>
    </>
  );
}
