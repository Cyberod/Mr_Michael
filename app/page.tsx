import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section, SectionHeading } from "@/components/layout/Section";
import { CtaLink } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import {
  closingCta,
  hero,
  homeMeta,
  intro,
  philosophy,
  speakingTeaser,
  stats,
  thoughtTeaser,
  whatIDo,
} from "@/content/home";
import { portraitImage } from "@/content/images";
import { organizations } from "@/content/organizations";

export const metadata: Metadata = {
  // `absolute` opts out of the "%s | Name" template — the home title already
  // carries the full name and would otherwise repeat it.
  title: { absolute: homeMeta.title },
  description: homeMeta.description,
};

export default function HomePage() {
  return (
    <>
      {/* Hero. Deliberately not a full-bleed background image: the only
          portrait we have is 512px square, which cannot fill a hero without
          going soft. It runs at portrait scale in its own column instead. */}
      <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <div>
          <p className="text-label-md text-secondary uppercase">{hero.eyebrow}</p>
          <h1 className="font-display text-headline-lg-mobile md:text-headline-lg lg:text-display-lg mt-4">
            {hero.heading}
          </h1>
          {/* Separated by spacing, not by an interpunct: any glyph between
              items dangles at the end of a wrapped line and reads as a typo,
              and this list wraps at most widths. */}
          <ul className="text-body-md text-on-surface-variant mt-6 flex flex-wrap gap-x-7 gap-y-1">
            {hero.roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
          <p className="text-body-lg text-on-surface-variant mt-6 max-w-xl">{hero.description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CtaLink href={hero.primaryCta.href}>{hero.primaryCta.label}</CtaLink>
            <CtaLink href={hero.secondaryCta.href} variant="outline" withArrow>
              {hero.secondaryCta.label}
            </CtaLink>
          </div>
        </div>

        <div className="bg-surface-container-low mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl">
          <Image
            src={portraitImage.src}
            alt={portraitImage.alt}
            sizes="(min-width: 520px) 440px, 90vw"
            quality={90}
            placeholder="blur"
            // Above the fold, so never lazy. `priority` is deprecated in Next
            // 16; eager loading is the replacement and next/image emits the
            // head preload for it either way (verified in the rendered HTML).
            loading="eager"
            className="h-auto w-full"
          />
        </div>
      </Container>

      {/* Positioning statement and the numbers behind it. */}
      <Section tone="inverse" labelledBy="intro-heading">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <h2
            id="intro-heading"
            className="font-display text-headline-lg-mobile md:text-headline-lg"
          >
            {intro.heading}
          </h2>
          <p className="text-body-lg text-on-primary-container">{intro.body}</p>
        </div>
        <dl className="border-on-primary/20 mt-16 grid grid-cols-2 gap-x-8 gap-y-10 border-t pt-12 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="font-display text-headline-md md:text-headline-lg block">
                  {stat.value}
                </span>
                <span className="text-label-md text-on-primary-container mt-2 block uppercase">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section labelledBy="what-i-do-heading">
        <SectionHeading
          id="what-i-do-heading"
          title={whatIDo.heading}
          description={whatIDo.description}
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatIDo.cards.map((card) => (
            <li key={card.title}>
              <FeatureCard {...card} className="h-full" />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted" labelledBy="organizations-heading">
        <SectionHeading id="organizations-heading" title="Organizations I've Worked With" />
        <ul className="mt-12 flex flex-wrap gap-3">
          {organizations.map((name) => (
            <li
              key={name}
              className="border-outline-variant bg-surface-container-lowest text-body-md rounded-full border px-5 py-2.5"
            >
              {name}
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="philosophy-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <SectionHeading id="philosophy-heading" title={philosophy.heading} />
          <div className="space-y-6">
            {philosophy.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-body-lg text-on-surface-variant">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="muted" labelledBy="speaking-heading">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              id="speaking-heading"
              title={speakingTeaser.heading}
              description={speakingTeaser.description}
            />
            <CtaLink href={speakingTeaser.cta.href} variant="outline" withArrow className="mt-10">
              {speakingTeaser.cta.label}
            </CtaLink>
          </div>
          <ul className="space-y-5">
            {speakingTeaser.topics.map((topic) => (
              <li key={topic} className="flex items-start gap-4">
                <Icon name="check" className="text-secondary mt-0.5 size-5" />
                <span className="text-body-lg">{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section labelledBy="thought-heading">
        <SectionHeading id="thought-heading" title={thoughtTeaser.heading} />
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {thoughtTeaser.cards.map((card) => (
            <li key={card.title}>
              <FeatureCard title={card.title} description={card.description} className="h-full" />
            </li>
          ))}
        </ul>
        <CtaLink href={thoughtTeaser.cta.href} variant="outline" withArrow className="mt-12">
          {thoughtTeaser.cta.label}
        </CtaLink>
      </Section>

      <Section tone="muted" labelledBy="closing-heading" containerClassName="text-center">
        <SectionHeading
          id="closing-heading"
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
