import type { Cta, FeatureCard, PageMeta, Stat } from "./types";

export const homeMeta: PageMeta = {
  // The root title is composed in app/layout.tsx from siteConfig, so the home
  // page opts out of the "%s | Name" template rather than repeating the name.
  title: "Michael Onyeka Ezeadichie — Digital Transformation Leader",
  description:
    "Digital Transformation Executive, Chief Marketing Officer and Technology Entrepreneur helping organizations leverage AI, cloud and digital strategy to accelerate growth.",
};

export const hero = {
  eyebrow: "Executive Profile",
  heading: "Michael Onyeka Ezeadichie",
  // Stored as an array so the separators between roles are rendered as styling
  // rather than literal "|" characters a screen reader would announce.
  roles: [
    "Digital Transformation Executive",
    "Chief Marketing Officer",
    "Technology Entrepreneur",
    "Executive Educator",
  ],
  description:
    "Helping organizations leverage Artificial Intelligence, Cloud Technologies, Digital Strategy, and Innovation to accelerate business growth and digital transformation.",
  primaryCta: { label: "Book a Consultation", href: "/contact" } satisfies Cta,
  secondaryCta: { label: "Explore My Work", href: "/impact" } satisfies Cta,
};

export const intro = {
  heading: "Building Businesses That Thrive in the Digital Economy",
  body: "The world is changing faster than ever, and technology is at the heart of this shift. I partner with visionary leaders and forward-thinking organizations to navigate complexity, build resilient strategies, and implement transformative solutions that deliver real-world impact.",
};

export const stats: Stat[] = [
  { value: "10+", label: "Years Experience" },
  { value: "10,500+", label: "Professionals Trained" },
  { value: "15+", label: "Major Organizations" },
  { value: "220+", label: "Countries Reached" },
];

export const whatIDo = {
  heading: "What I Do",
  description: "Expertise across the digital spectrum to drive meaningful growth and innovation.",
  cards: [
    {
      icon: "transform",
      title: "Digital Transformation",
      description:
        "Guiding organizations through comprehensive digital shifts to optimize operations and customer experience.",
    },
    {
      icon: "ai",
      title: "AI Strategy",
      description:
        "Developing actionable AI roadmaps that integrate intelligent solutions for competitive advantage.",
    },
    {
      icon: "trending-up",
      title: "Digital Growth",
      description:
        "Creating scalable frameworks for revenue generation and market expansion in the digital era.",
    },
    {
      icon: "education",
      title: "Executive Education",
      description:
        "Empowering leadership teams with the knowledge and tools to drive tech-enabled innovation.",
    },
    {
      icon: "government",
      title: "Public Sector Innovation",
      description:
        "Partnering with governments to build resilient digital infrastructure and services.",
    },
  ] satisfies FeatureCard[],
};

export const philosophy = {
  heading: "Philosophy & Approach",
  paragraphs: [
    "My approach is rooted in the belief that technology is an enabler, not an end in itself. I focus on results-driven strategies that align technical capabilities with core business objectives.",
    "Whether it's upskilling thousands of professionals or designing a digital blueprint for a major institution, my goal is always sustainable, scalable impact.",
  ],
};

export const speakingTeaser = {
  heading: "Speaking & Engagements",
  description:
    "Delivering compelling keynotes and masterclasses that demystify technology and inspire action.",
  topics: [
    "The Future of Work in an AI-Driven World",
    "Digital Transformation Strategy for Legacy Businesses",
    "Innovation Frameworks for Public Sector",
    "Building Resilient Tech Ecosystems in Africa",
  ],
  cta: { label: "Explore Speaking", href: "/speaking" } satisfies Cta,
};

export const thoughtTeaser = {
  heading: "Thought Leadership",
  cards: [
    {
      title: "Navigating the AI Era",
      description: "Insights on how emerging technologies are reshaping industry landscapes.",
    },
    {
      title: "The Digital Economy Blueprint",
      description: "Strategic perspectives on building sustainable growth models.",
    },
  ],
  cta: { label: "Read the Insights", href: "/thought-leadership" } satisfies Cta,
};

export const closingCta = {
  heading: "Let's Build the Future Together",
  description:
    "Ready to transform your organization's digital trajectory? Let's discuss how we can partner for success.",
  cta: { label: "Let's Start a Conversation", href: "/contact" } satisfies Cta,
};
