import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";
import { speakingMeta } from "@/content/speaking";

export const metadata: Metadata = {
  title: speakingMeta.title,
  description: speakingMeta.description,
};

export default function SpeakingPage() {
  return <PagePlaceholder title="Speaking" phase="Phase 3.3" />;
}
