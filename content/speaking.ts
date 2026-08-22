import { siteConfig } from "./site";
import type { Cta, FeatureCard, PageMeta, Quote, TopicCard } from "./types";

export const speakingMeta: PageMeta = {
  title: "Speaking",
  description:
    "Keynotes and masterclasses on digital transformation, AI for business, cloud, leadership and entrepreneurship — delivered to over 10,500 professionals across Africa.",
};

export const hero = {
  eyebrow: "Speaking",
  heading: "Inspiring Leaders. Transforming Organizations. Shaping Africa's Digital Future.",
  description:
    "Delivering high-impact keynotes and actionable insights that empower organizations to navigate the complexities of digital transformation and emerging technologies.",
  cta: { label: "Request Michael to Speak", href: "/contact" } satisfies Cta,
};

export const expertise = {
  heading: "The Expertise Behind the Insights",
  cards: [
    {
      icon: "building",
      title: "Enterprise Experience",
      description:
        "Strategic roles executing high-value projects with global leaders including Google Nigeria, Zenith Bank, MTN, and GTB. Proven track record in complex corporate environments.",
    },
    {
      // Source copy read "Chief Operating Officer" here while the home and
      // about pages both say Chief Marketing Officer. Normalised to the title
      // used everywhere else; flagged for client confirmation in SPEC §8.
      icon: "currency",
      title: "Scale & Impact",
      description:
        "Currently serving as Chief Marketing Officer at Expervia Technologies (a Microsoft & Huawei partner). Managed $500k+ in ad spend with measurable ROI.",
    },
    {
      icon: "people",
      title: "Proven Educator",
      description:
        "Trained and empowered over 10,500 professionals across Africa, translating complex technological concepts into actionable business strategies.",
    },
  ] satisfies FeatureCard[],
};

export const topics = {
  heading: "Core Speaking Topics",
  description:
    "Tailored presentations designed to address the specific challenges and opportunities within modern organizations.",
  cards: [
    {
      icon: "transform",
      title: "Digital Transformation",
      points: [
        "Navigating legacy systems",
        "Building agile cultures",
        "Data-driven decision making",
      ],
    },
    {
      icon: "ai",
      title: "AI for Business",
      points: ["Practical implementation", "Ethical AI frameworks", "ROI of machine learning"],
    },
    {
      icon: "megaphone",
      title: "Digital Marketing",
      points: [
        "Omnichannel strategies",
        "Performance marketing at scale",
        "Brand positioning in digital age",
      ],
    },
    {
      icon: "eye",
      title: "Leadership",
      points: [
        "Leading through disruption",
        "Managing remote/hybrid teams",
        "Executive tech fluency",
      ],
    },
    {
      icon: "cloud",
      title: "Cloud Computing",
      points: ["Migration strategies", "Security & compliance", "Cost optimization"],
    },
    {
      icon: "rocket",
      title: "Entrepreneurship",
      points: ["Scaling tech startups", "Innovation frameworks", "Navigating African markets"],
    },
  ] satisfies TopicCard[],
};

/**
 * Keynotes carry no `href`. The source markup gave each a "View Details" link
 * pointing at `#`, and there are no detail pages to point at — a dead link is
 * worse than no link, so Phase 3 renders these as plain cards.
 */
export const keynotes = {
  heading: "Signature Keynotes",
  description: "Flagship presentations delivered with authority and actionable depth.",
  items: [
    {
      title: "The Future-Ready Organization",
      description:
        "How to build resilience, foster continuous innovation, and structure teams to thrive in an era of rapid technological disruption.",
    },
    {
      title: "Digital Transformation Beyond Technology",
      description:
        "Shifting focus from tools to people. A deep dive into the cultural shifts and leadership mindset required for successful digital adoption.",
    },
    {
      title: "AI Without the Hype",
      description:
        "A pragmatic executive's guide to separating artificial intelligence reality from marketing noise, focusing on tangible use cases and ROI.",
    },
  ],
};

export const quote: Quote = {
  text: "Great conversations don't just inspire new ideas—they create the confidence to lead change.",
  attribution: siteConfig.name,
};

export const closingCta = {
  heading: "Let's Start the Conversation",
  description: "Ready to elevate your next event or executive retreat?",
  cta: { label: "Book a Briefing Call", href: "/contact" } satisfies Cta,
};
