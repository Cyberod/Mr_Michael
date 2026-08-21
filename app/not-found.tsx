import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { mainNav } from "@/content/site";

export default function NotFound() {
  return (
    <Container className="py-section-mobile md:py-section">
      <p className="text-label-md text-on-surface-variant uppercase">404</p>
      <h1 className="font-display text-headline-lg-mobile md:text-headline-lg mt-4">
        This page doesn&rsquo;t exist
      </h1>
      <p className="text-body-lg text-on-surface-variant mt-4 max-w-2xl">
        The link may be out of date. Here is everything on the site:
      </p>
      <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
        {mainNav.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-label-md text-secondary border-secondary border-b-2 pb-1"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
