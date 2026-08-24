import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Privacy Policy",
  // Unlinked while the page is a placeholder — keep it out of search results.
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return <PagePlaceholder title="Privacy Policy" phase="Phase 3.6" />;
}
