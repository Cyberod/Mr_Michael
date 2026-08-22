import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";
import { impactMeta } from "@/content/impact";

export const metadata: Metadata = {
  title: impactMeta.title,
  description: impactMeta.description,
};

export default function ImpactPage() {
  return <PagePlaceholder title="Impact" phase="Phase 3.4" />;
}
