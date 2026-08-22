import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";
import { homeMeta } from "@/content/home";

export const metadata: Metadata = {
  // `absolute` opts out of the "%s | Name" template — the home title already
  // carries the full name and would otherwise repeat it.
  title: { absolute: homeMeta.title },
  description: homeMeta.description,
};

export default function HomePage() {
  return <PagePlaceholder title="Home" phase="Phase 3.1" />;
}
