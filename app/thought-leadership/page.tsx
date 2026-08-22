import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";
import { thoughtMeta } from "@/content/thought-leadership";

export const metadata: Metadata = {
  title: thoughtMeta.title,
  description: thoughtMeta.description,
};

export default function ThoughtLeadershipPage() {
  return <PagePlaceholder title="Thought Leadership" phase="Phase 3.3" />;
}
