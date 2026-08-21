import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return <PagePlaceholder title="Contact" phase="Phase 3.5" />;
}
