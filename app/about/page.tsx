import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return <PagePlaceholder title="About" phase="Phase 3.2" />;
}
