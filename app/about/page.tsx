import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section, SectionHeading } from "@/components/layout/Section";
import { CtaLink } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import {
  aboutMeta,
  closingCta,
  hero,
  journey,
  leadership,
  marketing,
  vision,
} from "@/content/about";
import { portraitImage } from "@/content/images";

export const metadata: Metadata = {
  title: aboutMeta.title,
  description: aboutMeta.description,
};

export default function AboutPage() {
  return (
    <>
      <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <div>
          <ul className="text-label-md text-secondary flex flex-wrap gap-x-6 gap-y-1 uppercase">
            {hero.roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
          <h1 className="font-display text-headline-lg-mobile md:text-headline-lg mt-5">
            {hero.heading}
          </h1>
          <p className="text-body-lg text-on-surface-variant mt-6 max-w-xl">{hero.description}</p>
          <CtaLink href={hero.cta.href} variant="outline" withArrow className="mt-10">
            {hero.cta.label}
          </CtaLink>
        </div>

        <div className="bg-surface-container-low mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl">
          <Image
            src={portraitImage.src}
            alt={portraitImage.alt}
            sizes="(min-width: 520px) 440px, 90vw"
            quality={90}
            placeholder="blur"
            loading="eager"
            className="h-auto w-full"
          />
        </div>
      </Container>

      <Section tone="muted" labelledBy="journey-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <SectionHeading id="journey-heading" title={journey.heading} />
          <div>
            {journey.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-body-lg text-on-surface-variant">
                {paragraph}
              </p>
            ))}
            <FeatureCard
              icon={journey.highlight.icon}
              title={journey.highlight.title}
              description={journey.highlight.description}
              className="mt-10"
            />
          </div>
        </div>
      </Section>

      <Section labelledBy="leadership-heading">
        <SectionHeading
          id="leadership-heading"
          eyebrow={leadership.eyebrow}
          title={leadership.heading}
        />
        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {leadership.ventures.map((venture) => (
            <li
              key={venture.name}
              className="border-outline-variant/70 bg-surface-container-lowest flex h-full flex-col rounded-xl border p-8"
            >
              <span className="bg-secondary-fixed text-secondary mb-6 inline-flex size-14 items-center justify-center rounded-lg">
                <Icon name={venture.icon} className="size-7" />
              </span>
              <h3 className="font-display text-headline-sm">{venture.name}</h3>
              <p className="text-label-md text-secondary mt-2 uppercase">{venture.role}</p>
              <p className="text-body-md text-on-surface-variant mt-4">{venture.description}</p>
              {venture.credentials ? (
                <ul className="border-outline-variant/70 mt-6 space-y-3 border-t pt-6">
                  {venture.credentials.map((credential) => (
                    <li key={credential} className="text-body-md flex items-start gap-3">
                      <Icon name="verified" className="text-secondary mt-0.5 size-5" />
                      {credential}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted" labelledBy="marketing-heading">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              id="marketing-heading"
              eyebrow={marketing.eyebrow}
              title={marketing.heading}
            />
            {/* The figure is marked up as emphasis rather than shipped as HTML
                inside a content string — see content/about.ts. */}
            <p className="text-body-lg text-on-surface-variant mt-6">
              {marketing.body.before}
              <strong className="text-on-surface font-semibold">{marketing.body.emphasis}</strong>
              {marketing.body.after}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {[marketing.industries, marketing.ecosystem].map((group) => (
              <div key={group.heading}>
                <h3 className="text-label-md text-on-surface-variant uppercase">{group.heading}</h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="text-body-md flex items-start gap-3">
                      <Icon name="check" className="text-secondary mt-0.5 size-5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="inverse" labelledBy="vision-heading">
        {/* Width is constrained on an inner element, not by adding a max-w
            utility to Container — cn() joins classes without resolving
            conflicts, so two max-w-* on one element would be a coin toss. */}
        <div className="max-w-4xl">
          <Icon name={vision.icon} className="text-secondary-fixed size-10" />
          <h2
            id="vision-heading"
            className="font-display text-headline-lg-mobile md:text-headline-lg mt-6"
          >
            {vision.heading}
          </h2>
          <p className="text-body-lg text-on-primary-container mt-6">{vision.body}</p>
        </div>
      </Section>

      <Section tone="muted" labelledBy="about-closing-heading" containerClassName="text-center">
        <SectionHeading
          id="about-closing-heading"
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
