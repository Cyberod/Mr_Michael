import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";
import { gizMeta } from "@/content/impact";

export const metadata: Metadata = {
  title: gizMeta.title,
  description: gizMeta.description,
};

export default function GizCaseStudyPage() {
  return <PagePlaceholder title="GIZ Case Study" phase="Phase 3.4" />;
}
