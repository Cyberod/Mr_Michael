import { legalNav, mainNav, siteConfig, socialNav } from "@/content/site";
import { Container } from "./Container";
import { NavLink } from "./NavLink";

/**
 * One footer for every page. The Stitch build shipped four variants that
 * disagreed on the tagline, the link set and even the copyright casing.
 *
 * Note on colour: the original applied `opacity-80` / `opacity-60` to text on
 * the navy ground, which drops on-primary-container from 4.56:1 to 3.39:1 and
 * 2.47:1 — both below WCAG AA. Text here runs at full strength instead.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-container text-on-primary-container">
      <Container className="py-section-mobile md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-headline-sm text-on-primary italic">
            &ldquo;{siteConfig.tagline}&rdquo;
          </p>
          <p className="font-display text-headline-md text-on-primary mt-6 tracking-tight">
            {siteConfig.name}
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          <nav aria-labelledby="footer-nav-heading">
            <h2 id="footer-nav-heading" className="text-label-md text-on-primary uppercase">
              Navigate
            </h2>
            <ul className="mt-4 space-y-3">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <NavLink
                    item={item}
                    className={
                      item.pending
                        ? "text-body-md text-on-primary-container/60 block cursor-default"
                        : "text-body-md hover:text-secondary-fixed transition-colors"
                    }
                  />
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-social-heading">
            <h2 id="footer-social-heading" className="text-label-md text-on-primary uppercase">
              Connect
            </h2>
            <ul className="mt-4 space-y-3">
              {socialNav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-md hover:text-secondary-fixed transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-label-md text-on-primary uppercase">Contact</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-body-md hover:text-secondary-fixed break-words transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="text-body-md hover:text-secondary-fixed transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-on-primary-container/30 mt-16 border-t pt-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-caption">
              © {year} {siteConfig.name}. All rights reserved.
            </p>
            <ul className="flex flex-wrap justify-center gap-6">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <NavLink
                    item={item}
                    className={
                      item.pending
                        ? "text-caption text-on-primary-container/60 block cursor-default"
                        : "text-caption hover:text-secondary-fixed transition-colors"
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
