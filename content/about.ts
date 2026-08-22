import type { Cta, FeatureCard, PageMeta } from "./types";

export const aboutMeta: PageMeta = {
  title: "About",
  description:
    "A decade bridging technology and business strategy — Chief Marketing Officer at Expervia Technologies and founder of Haelsoft Digital and Haelsoft EdTech.",
};

export const hero = {
  // An array rather than a pipe-separated string, so the separators are
  // styling instead of characters a screen reader reads aloud.
  roles: [
    "Digital Transformation Executive",
    "Chief Marketing Officer",
    "Business and Technology Leader",
  ],
  heading: "Building Businesses. Empowering People. Transforming Africa Through Technology.",
  description:
    "For over a decade, my career has been dedicated to bridging the gap between technology and business strategy. I believe technology creates unprecedented opportunities. Currently serving as the Chief Marketing Officer of Expervia Technologies (a premier Microsoft & Huawei partner) and leading Haelsoft Digital and Haelsoft EdTech, I am focused on fostering innovation, driving AI adoption, and executing data-driven solutions to build resilient enterprises across the continent.",
  cta: { label: "Explore My Journey", href: "/impact" } satisfies Cta,
};

export const journey = {
  heading: "My Journey",
  paragraphs: [
    "My path began as a software developer, where I quickly discovered the powerful intersection of technology, business strategy, and marketing. This realization inspired me to found Haelsoft, a specialized digital agency, and Haelsoft EdTech, a platform dedicated to empowering the next generation. Today, I continue to expand my strategic perspective and leadership capabilities by pursuing a Master's degree at the prestigious Rome Business School.",
  ],
  highlight: {
    icon: "education",
    title: "Continuous Growth",
    description:
      "Currently pursuing a Master's degree at Rome Business School, blending advanced business acumen with deep technological expertise to drive strategic growth.",
  } satisfies FeatureCard,
};

/** Certifications sit on the Expervia venture. Typed separately so the venture
 *  card can render them as a badge list rather than free prose. */
export type Venture = {
  icon: FeatureCard["icon"];
  name: string;
  role: string;
  description: string;
  credentials?: readonly string[];
};

export const leadership = {
  eyebrow: "Executive Leadership",
  heading: "Leading Digital Transformation at Scale",
  ventures: [
    {
      icon: "briefcase",
      name: "Expervia Technologies",
      role: "Chief Marketing Officer",
      description:
        "At Expervia Technologies, I lead the strategy to drive the adoption of comprehensive Cloud, AI, and Cybersecurity solutions across enterprise sectors. We are proud to hold elite partner statuses, enabling us to deliver robust digital transformation for major clients across the region.",
      credentials: [
        "Microsoft AI Cloud Partner",
        "Microsoft Cloud Solutions Partner",
        "Huawei Enterprise Partner",
      ],
    },
    {
      icon: "megaphone",
      name: "Haelsoft Digital",
      role: "Founder & Leadership",
      description:
        "A specialized digital agency delivering high-impact growth strategies and data-driven marketing solutions tailored for modern businesses aiming to scale rapidly.",
    },
    {
      icon: "laptop",
      name: "Haelsoft EdTech",
      role: "Founder & Leadership",
      description:
        "Empowering the next generation of African tech talent through specialized education, skills development platforms, and accessible technological resources.",
    },
  ] satisfies Venture[],
};

export const marketing = {
  eyebrow: "Driving Growth Through Data",
  heading: "Digital Marketing Expertise",
  // Split around the emphasised figure so the page can mark it up as <strong>
  // instead of shipping HTML in a content string.
  body: {
    before: "With a proven track record of managing over ",
    emphasis: "$500,000+ in media investment",
    after:
      ", I leverage the full power of the Google ecosystem to deliver measurable results. My strategic approach has consistently driven high-impact growth for businesses across diverse sectors.",
  },
  industries: {
    heading: "Industries Transformed",
    items: ["Banking", "Fintech", "Healthcare", "Technology", "Education"],
  },
  ecosystem: {
    heading: "Ecosystem Mastery",
    items: [
      "Google Search Ads",
      "Performance Max",
      "Google Analytics (GA)",
      "Google Tag Manager (GTM)",
    ],
  },
};

export const vision = {
  icon: "idea",
  heading: "Thought Leadership & Vision",
  body: "I am deeply committed to Africa's economic growth. Through the strategic application of technology and artificial intelligence, my mission is to empower the next generation of tech talent, foster sustainable and resilient business models, and ultimately position the continent as a global leader in digital innovation and economic prosperity.",
} satisfies { icon: FeatureCard["icon"]; heading: string; body: string };

/**
 * Newly written, not ported: the source About page simply stopped after the
 * vision statement with no next step, while every other page ends with one.
 * Flagged for client review in SPEC §8.
 */
export const closingCta = {
  heading: "Let's Talk About Where You're Headed",
  description:
    "Whether it's a transformation programme, an AI roadmap or an executive session, the first step is a conversation.",
  cta: { label: "Book a Consultation", href: "/contact" } satisfies Cta,
};
