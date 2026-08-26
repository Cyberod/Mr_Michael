import type { PageMeta, Stat } from "./types";
import type { FeatureCard } from "./types";

/**
 * The MBA ASAP recommendation page, ported from the Netlify source archived at
 * reference/stitch/resources.html.
 *
 * This is the one page on the site that carries a commercial relationship, so
 * two things differ from the rest of the content layer: the affiliate
 * destination lives in a single constant below, and the disclosure is treated
 * as required content rather than decoration.
 */

export const resourcesMeta: PageMeta = {
  title: "Recommended Learning",
  description:
    "Michael Onyeka Ezeadichie's recommendation of MBA ASAP — a self-paced online Mini MBA covering accounting, finance, marketing, strategy, investing and business decision-making.",
};

/**
 * The MBA ASAP referral destination.
 *
 * BLOCKED: the source page never carried one. All seven of its "Explore MBA
 * ASAP" buttons pointed at `#explore`, a dead in-page anchor. Until the real
 * referral URL is supplied every CTA on this page renders as inert text rather
 * than shipping a link that goes nowhere — see components/ui/ExternalCta.tsx.
 *
 * Filling this string in is the only change needed to activate the page.
 */
export const affiliateUrl = "";

/** Repeated at each section break, as a landing page conventionally does. */
export const ctaLabel = "Explore MBA ASAP";

export const hero = {
  eyebrow: "Executive Recommendation",
  heading: "Mini MBA & Micro MBA Online: Learn the Business Skills That Matter.",
  description:
    "Master the essential frameworks of finance, strategy, and marketing through the highly acclaimed MBA ASAP program. Designed for professionals who need actionable insights, not just theory.",
};

/**
 * The source buried this as an asterisked footnote under the hero. Affiliate
 * relationships carry disclosure obligations (FTC in the US, ASA in the UK) and
 * burying the notice is the specific failure those rules target, so it is
 * promoted to a readable statement in the hero itself.
 */
export const disclosure = {
  heading: "Affiliate disclosure",
  body: "This page contains a referral link. Michael may earn a commission if you purchase through it, at no additional cost to you. The recommendation reflects his own assessment of the program.",
};

export const whyMiniMba = {
  heading: "Why a Mini MBA?",
  paragraphs: [
    "In today's fast-paced business environment, traditional two-year MBA programs often don't make sense for driven entrepreneurs and busy professionals. They require significant time away from work, saddle you with debt, and often focus heavily on academic theory rather than practical application.",
    "That's where the Mini MBA or Micro MBA comes in. These intensive, condensed programs extract the core competencies taught in top business schools and deliver them in a format you can consume on your schedule.",
    "I highly recommend the MBA ASAP program because it strips away the fluff. It focuses purely on the mental models, frameworks, and hard skills that actually move the needle in business. Whether you are scaling a startup, managing a corporate team, or aiming for the C-suite, understanding the language of business is non-negotiable.",
  ],
};

export const whyRecommending = {
  heading: "Why I'm Recommending MBA ASAP",
  intro: [
    "I've always believed that business knowledge should be accessible to people who want to build better businesses, advance their careers or simply understand how businesses work.",
    "That's what caught my attention about MBA ASAP.",
    "Rather than requiring learners to commit to a traditional multi-year MBA programme, MBA ASAP focuses on the practical foundations of business through a structured online learning experience.",
  ],
  coverageHeading: "It covers important areas including:",
  coverage: [
    "Accounting and financial statements",
    "Corporate finance",
    "Marketing",
    "Business strategy",
    "Investing",
    "Business decision-making",
  ],
  outro:
    "The programme is designed for people who want to learn at their own pace and build a stronger understanding of how businesses operate.",
};

export const comparison = {
  heading: "Traditional MBA vs MBA ASAP",
  columns: ["Feature", "Traditional MBA", "MBA ASAP"],
  rows: [
    ["Cost", "$60,000 - $120,000+", "Under $100"],
    ["Time Commitment", "2 Years (Full-time)", "~6 Hours (Self-paced)"],
    ["Focus", "Theory & Networking", "Actionable Skills & Frameworks"],
    ["Accessibility", "GMAT, Applications, Relocation", "Instant Online Access"],
  ],
};

export const competencies = {
  heading: "Core Competencies You Will Master",
  cards: [
    {
      icon: "government",
      title: "Accounting",
      description:
        "Learn to read and interpret balance sheets, income statements, and cash flow statements. Understand the language of business without getting bogged down in bookkeeping minutiae.",
    },
    {
      icon: "trending-up",
      title: "Finance",
      description:
        "Master concepts like NPV (Net Present Value), ROI, and capital allocation. Make strategic decisions backed by solid financial reasoning.",
    },
    {
      icon: "megaphone",
      title: "Marketing",
      description:
        "Understand the 4 Ps, positioning, market segmentation, and how to create genuine value propositions that resonate with your target audience.",
    },
    {
      icon: "sitemap",
      title: "Strategy",
      description:
        "Deploy frameworks like Porter's Five Forces and SWOT analysis to build sustainable competitive advantages in your industry.",
    },
    {
      icon: "currency",
      title: "Investing",
      description:
        "Grasp the fundamentals of corporate valuation, equity, and debt financing to better manage company resources and growth.",
    },
    {
      icon: "idea",
      title: "Decision-Making",
      description:
        "Learn quantitative and qualitative models to make better, faster, and more rational business decisions under uncertainty.",
    },
  ] as const satisfies readonly FeatureCard[],
};

export const audience = {
  heading: "Who Is This For?",
  items: [
    {
      title: "Entrepreneurs & Founders",
      description: "Need to manage finances and strategy without a specialized degree.",
    },
    {
      title: "Business Owners",
      description: "Want to scale their operations using proven corporate frameworks.",
    },
    {
      title: "Professionals & Managers",
      description:
        "Looking to upskill, transition to management, or better understand company-wide objectives.",
    },
    {
      title: "Creatives & Freelancers",
      description: "Want to treat their craft as a serious, profitable business.",
    },
  ],
};

export const programDetails = {
  heading: "Program Details",
  stats: [
    { value: "70+", label: "Video Lessons" },
    { value: "6+", label: "Hours of Content" },
    { value: "Lifetime", label: "Access" },
    { value: "Certificate", label: "of Completion" },
  ] satisfies Stat[],
};

export const faqs = {
  heading: "Frequently Asked Questions",
  items: [
    {
      question: "Is MBA ASAP a real MBA degree?",
      answer:
        "No, MBA ASAP is a non-degree certificate program. It is designed for skill acquisition and practical business knowledge rather than academic credentials.",
    },
    {
      question: "Is MBA ASAP an online Mini MBA?",
      answer:
        "Yes, MBA ASAP is a comprehensive online Mini MBA program that delivers the core competencies of a traditional MBA in a condensed, accessible format.",
    },
    {
      question: "Is MBA ASAP worth it?",
      answer:
        "Absolutely. For a fraction of the cost of a traditional MBA, you gain actionable frameworks and business skills that can be immediately applied to your career or business.",
    },
    {
      question: "Can I study MBA ASAP online?",
      answer:
        "Yes, the entire program is delivered online, allowing you to learn at your own pace from anywhere in the world.",
    },
    {
      question: "How long does MBA ASAP take?",
      answer:
        "The core program consists of over 6 hours of high-impact video content. Most students complete the curriculum within a few days to a week, depending on their schedule.",
    },
    {
      question: "Does MBA ASAP provide a certificate?",
      answer:
        "Yes, upon successful completion of the program, you will receive a certificate of completion to showcase your new business competencies.",
    },
    {
      question: "Is MBA ASAP accredited?",
      answer:
        "MBA ASAP is a professional development program focused on practical skills. While it is highly respected by practitioners, it is not an accredited academic degree program.",
    },
    {
      question: "Is there a free Mini MBA?",
      answer:
        "While some platforms offer free introductory business courses, MBA ASAP provides a structured, comprehensive curriculum for a very low cost (under $100) to ensure high-quality production and content.",
    },
    {
      question: "Is MBA ASAP suitable for Nigerians?",
      answer:
        "Absolutely. The business principles taught—finance, strategy, marketing—are universal and highly applicable to building and scaling businesses in the Nigerian and broader African markets.",
    },
  ],
};

export const closing = {
  heading: "Ready to Build Your Business Knowledge?",
  description:
    "You don't necessarily need to spend years in business school before you start learning how businesses work. Whether you're an entrepreneur, professional, manager, aspiring business owner or simply someone who wants to understand business better, the right learning programme can help you develop a stronger foundation. Explore MBA ASAP and see whether it fits your goals.",
};

/**
 * The source repeated the site's contact form here. One form, one server action
 * and one inbox is the whole point of /contact, so this section points at it
 * instead of duplicating it.
 */
export const contactCta = {
  heading: "Have Questions About the Program?",
  description:
    "Reach out for a consultation to see if this or other business education paths are right for your career goals.",
  cta: { label: "Get in touch", href: "/contact" },
} as const;
