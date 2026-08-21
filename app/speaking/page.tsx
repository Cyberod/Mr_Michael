import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = { title: "Speaking" };

export default function SpeakingPage() {
  return <PagePlaceholder title="Speaking" phase="Phase 3.3" />;
}
