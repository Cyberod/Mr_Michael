import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";
import { servicesMeta } from "@/content/services";

export const metadata: Metadata = {
  title: servicesMeta.title,
  description: servicesMeta.description,
};

export default function ServicesPage() {
  return <PagePlaceholder title="Services" phase="Phase 3.3" />;
}
