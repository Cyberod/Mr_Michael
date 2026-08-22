import type { FeatureCard, PageMeta, TopicCard } from "./types";

export const thoughtMeta: PageMeta = {
  title: "Thought Leadership",
  description:
    "Perspectives on digital transformation, artificial intelligence, marketing, leadership, cloud and entrepreneurship in the African digital economy.",
};

export const hero = {
  eyebrow: "Thought Leadership",
  heading: "Ideas That Inspire Innovation. Perspectives That Drive Transformation.",
  description:
    "True transformation goes beyond technology. It's about empowering people, rethinking processes, and leading with strategic clarity. Discover actionable insights designed for the digital economy.",
};

export const perspective = {
  heading: "My Perspective",
  paragraphs: [
    "Africa stands at the precipice of a digital renaissance. The opportunity is immense, but capitalizing on it requires a deep fusion of technological acumen and strategic foresight. My commitment is to lead conversations that bridge this gap, offering perspectives that are as practical as they are visionary. Technology alone is not enough; it must be combined with strategy, people, and culture to create lasting impact.",
  ],
};

/** One card carries a metric callout; the rest do not, hence the optional field. */
export type InsightArea = TopicCard & { metric?: string };

export const insightAreas = {
  heading: "Core Areas of Insight",
  description: "Navigating the complexities of modern business.",
  cards: [
    {
      icon: "network",
      title: "Digital Transformation",
      points: ["Strategy & Execution", "Change Management", "Enterprise Agility"],
    },
    {
      icon: "ai",
      title: "Artificial Intelligence",
      points: ["Practical Applications", "Ethical AI", "AI for Business Value"],
    },
    {
      icon: "megaphone",
      title: "Marketing Beyond Advertising",
      points: [
        "Customer Experience (CX)",
        "Data-Driven Insights",
        "Brand Storytelling",
        "Omnichannel Strategy",
      ],
      metric: "Impact Metric: Drove $500k+ through targeted marketing.",
    },
    {
      icon: "people",
      title: "Leadership",
      points: ["Digital Economy Leadership", "Building High-Performing Teams"],
    },
    {
      icon: "cloud",
      title: "Cloud & Data",
      points: ["Infrastructure Innovation", "Data Strategy"],
    },
    {
      icon: "rocket",
      title: "Entrepreneurship",
      points: ["Scaling Ventures", "Innovation Ecosystems"],
    },
  ] satisfies InsightArea[],
};

/** These cards are heading + prose only; no glyph is assigned to them. */
export type ContentTypeCard = Omit<FeatureCard, "icon">;

export const contentTypes = {
  heading: "What You'll Find Here",
  description: "Explore insights tailored for the digital economy.",
  cards: [
    {
      title: "Articles",
      description:
        "In-depth explorations of industry trends, technological shifts, and strategic frameworks.",
    },
    {
      title: "Executive Perspectives",
      description: "High-level analysis on the future of business, AI, and digital disruption.",
    },
    {
      title: "Research & Analysis",
      description: "Data-backed reports and findings on emerging market opportunities.",
    },
    {
      title: "Case Studies",
      description: "Real-world examples of successful digital transformations and business growth.",
    },
    {
      title: "Event Highlights",
      description:
        "Key takeaways and summaries from industry conferences and speaking engagements.",
    },
    {
      title: "Videos & Interviews",
      description: "Multimedia content featuring expert discussions and thought leadership panels.",
    },
  ] satisfies ContentTypeCard[],
};

export const featuredTopics = {
  heading: "Featured Topics",
  items: [
    "Digital Transformation in African Enterprises",
    "Search Is Changing: AI, Intent, and the Future of Discovery",
    "The Intersection of Data and Business Strategy",
    "Building Agile Marketing Teams",
    "Leadership in an Era of Disruption",
  ],
};

export const commitment = {
  heading: "My Commitment",
  pillars: [
    {
      title: "Practical",
      description: "Insights grounded in real-world experience, not just theory.",
    },
    {
      title: "Strategic",
      description: "Focusing on the 'why' and the long-term implications.",
    },
    {
      title: "Actionable",
      description: "Equipping you with the knowledge to make informed decisions today.",
    },
  ],
};

export const categories = {
  heading: "Explore by Category",
  items: [
    "Digital Transformation",
    "Artificial Intelligence",
    "Marketing Strategy",
    "Leadership",
    "Cloud Computing",
    "Data & Analytics",
    "Entrepreneurship",
    "Business Innovation",
    "Customer Experience (CX)",
    "Tech Policy & Ethics",
    "Future of Work",
    "Industry Insights (e.g., FinTech, SaaS)",
    "Case Studies",
    "Speaking & Events",
  ],
};

/**
 * The source page ended with a newsletter signup that had no form action and no
 * provider behind it. Copy is preserved here, but `enabled` is false until a
 * provider is chosen (SPEC §8) — Phase 3 skips the section rather than shipping
 * a subscribe button that silently does nothing.
 */
export const newsletter = {
  enabled: false,
  heading: "Stay Connected",
  description:
    "Join a community of forward-thinking professionals. Subscribe to my newsletter for the latest insights, exclusive content, and event updates delivered directly to your inbox.",
  submitLabel: "Subscribe",
};
