import type { Route } from "next";
import { siteConfig } from "./site";
import type { Cta, FeatureCard, PageMeta, ProseSection, Quote } from "./types";

export const impactMeta: PageMeta = {
  title: "Impact",
  description:
    "Case studies in digital transformation — including the GIZ SME capacity-building partnership that led to the founding of Haelsoft EdTech.",
};

export const hero = {
  eyebrow: "Impact",
  heading: "Work That Changed How Organizations Operate",
  description:
    "Selected engagements where strategy, technology and education combined to produce measurable, lasting change.",
};

export type CaseStudySummary = {
  slug: string;
  href: Route;
  client: string;
  category: string;
  year: string;
  title: string;
  summary: string;
  cta: string;
};

/** One entry today. The list shape is deliberate: adding a second case study
 *  should be a data change, not a page rewrite. */
export const caseStudies: CaseStudySummary[] = [
  {
    slug: "giz",
    href: "/impact/giz",
    client: "GIZ",
    category: "Digital Transformation",
    year: "2020",
    title: "Empowering SMEs Through Digital Transformation",
    summary: "How a Government Development Partnership Inspired the Creation of Haelsoft EdTech.",
    cta: "Read the Full Report",
  },
];

export const gizMeta: PageMeta = {
  title: "GIZ — Empowering SMEs Through Digital Transformation",
  description:
    "A 2020 GIZ development partnership that closed the digital skills gap for African SMEs and became the origin of Haelsoft EdTech.",
};

export const giz = {
  client: "GIZ",
  category: "Digital Transformation",
  year: "2020",
  heading: "Empowering SMEs Through Digital Transformation",
  subheading: "How a Government Development Partnership Inspired the Creation of Haelsoft EdTech.",
  sections: [
    {
      heading: "The Challenge",
      paragraphs: [
        "In 2020, African Small and Medium-sized Enterprises (SMEs) faced a significant digital gap. While global markets rapidly adopted digital tools for resilience and growth, many local businesses lacked the necessary infrastructure, skills, and strategic frameworks to compete effectively in the digital economy. GIZ recognized this critical barrier to sustainable economic development.",
      ],
    },
    {
      heading: "My Role",
      paragraphs: [
        "As the Founder and Principal Consultant at Haelsoft Digital, I led the strategic partnership with GIZ. My role involved assessing the specific digital needs of the target SMEs, designing a comprehensive capacity-building framework, and overseeing the execution of a scalable training program that directly addressed these skill deficits.",
      ],
    },
  ] satisfies ProseSection[],
  vision: {
    icon: "idea",
    title: "The Vision That Changed Everything",
    description:
      "The GIZ project was a catalyst. While the immediate goal was capacity building, witnessing the profound impact of structured digital education sparked a larger vision. It revealed the urgent need for a dedicated, accessible platform tailored to the African context. This realization birthed Haelsoft EdTech and Marketplace—transitioning our focus from specialized consultancy to creating scalable educational infrastructure.",
  } satisfies FeatureCard,
  outcomes: {
    heading: "Key Outcomes",
    description: "Strategic deliverables that drove measurable change across the SME ecosystem.",
    cards: [
      {
        icon: "trending-up",
        title: "Digital Skills Uplift",
        description:
          "Equipped hundreds of SMEs with actionable digital marketing and operational strategies, directly improving their market reach.",
      },
      {
        icon: "education",
        title: "Sustainable Learning",
        description:
          "Developed a reusable, localized curriculum that ensured continuous knowledge transfer beyond the initial project lifecycle.",
      },
      {
        icon: "people",
        title: "Entrepreneur Empowerment",
        description:
          "Fostered a community of tech-enabled business owners, increasing resilience against economic fluctuations.",
      },
      {
        icon: "network",
        title: "Innovation Ecosystem",
        description:
          "Laid the groundwork for a broader digital ecosystem, validating the market need for platforms like Haelsoft EdTech.",
      },
    ] satisfies FeatureCard[],
  },
  quote: {
    text: "The GIZ project wasn't just about training; it was about revealing potential. It showed us that to truly transform an economy, you must build the systems that democratize knowledge.",
    attribution: siteConfig.name,
  } satisfies Quote,
};

export const flagship = {
  heading: "More Flagship Projects",
};

export const closingCta = {
  heading: "Let's Build the Future Together",
  description: "Ready to see what a focused digital strategy could do for your organization?",
  cta: { label: "Book a Consultation", href: "/contact" } satisfies Cta,
};
