import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { Icon } from "@/components/ui/Icon";
import { contactMeta, directContact, hero } from "@/content/contact";

export const metadata: Metadata = {
  title: contactMeta.title,
  description: contactMeta.description,
};

export default function ContactPage() {
  return (
    <Container className="py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-label-md text-secondary uppercase">{hero.eyebrow}</p>
        <h1 className="font-display text-headline-lg-mobile md:text-headline-lg mt-4">
          {hero.heading}
        </h1>
        <p className="text-body-lg text-on-surface-variant mt-6">{hero.description}</p>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <section aria-labelledby="direct-contact-heading">
          <h2 id="direct-contact-heading" className="font-display text-headline-sm">
            {directContact.heading}
          </h2>
          <ul className="mt-6 space-y-5">
            <li>
              <a
                href={`mailto:${directContact.email}`}
                className="text-body-md hover:text-secondary inline-flex items-start gap-3 underline-offset-4 hover:underline"
              >
                <Icon name="mail" className="text-secondary mt-0.5 size-5" />
                {directContact.email}
              </a>
            </li>
            <li>
              <a
                href={directContact.phoneHref}
                className="text-body-md hover:text-secondary inline-flex items-start gap-3 underline-offset-4 hover:underline"
              >
                <Icon name="phone" className="text-secondary mt-0.5 size-5" />
                {directContact.phone}
              </a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="contact-form-heading">
          <h2 id="contact-form-heading" className="sr-only">
            Send a message
          </h2>
          <ContactForm />
        </section>
      </div>
    </Container>
  );
}
