import type { Cta, FeatureCard, PageMeta } from "./types";

export const servicesMeta: PageMeta = {
  title: "Services",
  description:
    "Digital transformation consulting, AI strategy, cloud and Microsoft solutions advisory, digital growth, executive training and advisory engagements.",
};

export const hero = {
  eyebrow: "Services",
  heading: "Helping Organizations Navigate the Future of Business",
  description:
    "Through advanced Technology, pragmatic AI integration, and holistic Digital Transformation. Delivering strategic direction that yields measurable, high-impact outcomes.",
  cta: { label: "Book a Consultation", href: "/contact" } satisfies Cta,
};

/**
 * The six competencies. These are the same six options offered in the contact
 * form's "Service of Interest" select — see `content/contact.ts`, which derives
 * its options from this list so the two can never fall out of step.
 */
export const coreCompetencies = {
  heading: "Core Competencies",
  cards: [
    {
      icon: "sitemap",
      title: "Digital Transformation Consulting",
      description:
        "Guiding legacy organizations through comprehensive modernization. Aligning technology investments with overarching business objectives for sustainable growth.",
    },
    {
      icon: "ai",
      title: "AI Strategy & Adoption",
      description:
        "Pragmatic integration of Artificial Intelligence to automate processes, enhance decision-making, and create new value streams while managing risk.",
    },
    {
      icon: "cloud",
      title: "Cloud & Microsoft Solutions Advisory",
      description:
        "Leveraging experience at Expervia to architect scalable cloud infrastructures and maximize ROI on Microsoft ecosystem deployments.",
    },
    {
      icon: "trending-up",
      title: "Digital Marketing & Growth",
      description:
        "Data-driven growth strategies honed by managing $500k+ in ad spend. Combining analytics, performance marketing, and brand positioning.",
    },
    {
      icon: "education",
      title: "Executive Training",
      description:
        "Equipping leadership teams with the technological literacy required to govern digital initiatives and foster a culture of innovation.",
    },
    {
      icon: "microphone",
      title: "Executive Speaking & Advisory",
      description:
        "Delivering high-impact keynotes and boardroom advisory on technological disruption, public sector innovation, and the future of work.",
    },
    // `as const` keeps the titles as string literals so the contact form can
    // derive a union type from them rather than accepting any string.
  ] as const satisfies readonly FeatureCard[],
};

export const closingCta = {
  heading: "Let's Build the Future Together",
  description:
    "Ready to transform your organization's digital trajectory? Connect to discuss strategic consulting or speaking engagements.",
  primaryCta: { label: "Book a Consultation", href: "/contact" } satisfies Cta,
  secondaryCta: { label: "Invite Me to Speak", href: "/speaking" } satisfies Cta,
};
