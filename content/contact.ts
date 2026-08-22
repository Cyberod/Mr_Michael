import { coreCompetencies } from "./services";
import { siteConfig } from "./site";
import type { PageMeta } from "./types";

export const contactMeta: PageMeta = {
  title: "Contact",
  description:
    "Get in touch about digital transformation consulting, AI strategy, executive training or a speaking engagement.",
};

export const hero = {
  eyebrow: "Contact",
  heading: "Let's Start a Conversation",
  description:
    "Ready to elevate your organization's strategy or planning an impactful event? Reach out to discuss strategic consulting, speaking engagements, or digital transformation initiatives tailored to your specific needs.",
};

export const directContact = {
  heading: "Direct Contact",
  email: siteConfig.email,
  phone: siteConfig.phone,
  phoneHref: siteConfig.phoneHref,
};

/**
 * The select options are derived from the services page rather than retyped, so
 * renaming a service updates the form and its server-side validation in the
 * same edit. `serviceOptions` is a union of the exact strings, which lets the
 * Phase 4 server action reject anything the form could not have produced.
 */
export const serviceOptions = coreCompetencies.cards.map((card) => card.title);
export type ServiceOption = (typeof coreCompetencies.cards)[number]["title"];

export const form = {
  placeholderOption: "Select a service",
  submitLabel: "Request Consultation",
  fields: {
    name: { label: "Full Name", required: true, autoComplete: "name" },
    email: { label: "Email Address", required: true, autoComplete: "email" },
    phone: { label: "Phone Number", required: false, autoComplete: "tel" },
    service: { label: "Service of Interest", required: false },
    message: { label: "Message / Project Details", required: true },
  },
  /** Copy for every state the form can be in. The source form had no states
   *  at all — no action, no handler, nothing happened on submit (SPEC §9 #5). */
  messages: {
    submitting: "Sending…",
    successHeading: "Message sent",
    success: "Thank you — your message has been sent. I'll be in touch shortly.",
    sendAnother: "Send another message",
    errorHeading: "Your message was not sent",
    error: "Something went wrong sending your message.",
    errorFallback: "Email me directly instead",
    /** Shown when the mail provider is not configured. Distinct from a
     *  delivery failure so the cause is not guessed from a generic message. */
    unavailable: "The contact form is not connected to a mail provider yet.",
    invalidHeading: "Please check the highlighted fields",
    required: "This field is required.",
    invalidEmail: "Please enter a valid email address.",
    invalidService: "Please choose one of the listed services.",
    tooLong: "This is longer than the form accepts.",
    messageTooShort: "Please give me a little more detail — at least 20 characters.",
  },
};
