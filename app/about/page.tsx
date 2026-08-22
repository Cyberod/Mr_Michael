import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";
import { aboutMeta } from "@/content/about";

export const metadata: Metadata = {
  title: aboutMeta.title,
  description: aboutMeta.description,
};

export default function AboutPage() {
  return <PagePlaceholder title="About" phase="Phase 3.2" />;
}
