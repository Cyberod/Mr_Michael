import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Terms of Service",
  // Unlinked while the page is a placeholder — keep it out of search results.
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return <PagePlaceholder title="Terms of Service" phase="Phase 3.6" />;
}
