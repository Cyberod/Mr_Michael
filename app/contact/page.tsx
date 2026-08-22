import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";
import { contactMeta } from "@/content/contact";

export const metadata: Metadata = {
  title: contactMeta.title,
  description: contactMeta.description,
};

export default function ContactPage() {
  return <PagePlaceholder title="Contact" phase="Phase 3.5" />;
}
