import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";
import { thoughtMeta } from "@/content/thought-leadership";

export const metadata: Metadata = {
  title: thoughtMeta.title,
  description: thoughtMeta.description,
  // Unlinked while the page is a placeholder — keep it out of search results.
  robots: { index: false, follow: false },
};

export default function ThoughtLeadershipPage() {
  return <PagePlaceholder title="Thought Leadership" phase="Phase 3.3" />;
}
