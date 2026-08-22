"use server";

import { siteConfig } from "@/content/site";
import {
  HONEYPOT_FIELD,
  readField,
  validate,
  type ContactField,
  type ContactFormState,
} from "@/lib/contact-form";

/**
 * The only export here is the action itself: a `"use server"` module may export
 * nothing but async functions. Types, constants and validation live in
 * `lib/contact-form.ts`.
 */
export async function submitContactForm(
  _previous: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const values: Record<ContactField, string> = {
    name: readField(formData, "name"),
    email: readField(formData, "email"),
    phone: readField(formData, "phone"),
    service: readField(formData, "service"),
    message: readField(formData, "message"),
  };

  // Bots fill every field they can see. A human never sees this one, so
  // anything in it is automated — reported as success rather than rejected, so
  // the sender learns nothing about why nothing arrived.
  if (String(formData.get(HONEYPOT_FIELD) ?? "").length > 0) {
    return { status: "success" };
  }

  const errors = validate(values);
  if (Object.keys(errors).length > 0) {
    return { status: "invalid", errors, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  // Distinguished from a delivery failure in the log, though both leave the
  // sender the same next step. What it must never do is silently discard.
  if (!apiKey) {
    console.warn("Contact form: RESEND_API_KEY is not set; message was not delivered.");
    return { status: "error", values };
  }

  const lines = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    values.phone ? `Phone: ${values.phone}` : null,
    values.service ? `Service of interest: ${values.service}` : null,
    "",
    values.message,
  ].filter((line): line is string => line !== null);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev",
        to: [siteConfig.email],
        // So a reply goes to the sender, not to the sending domain.
        reply_to: values.email,
        subject: `Website enquiry from ${values.name}`,
        text: lines.join("\n"),
      }),
    });

    if (!response.ok) {
      console.error("Contact form: Resend returned", response.status, await response.text());
      return { status: "error", values };
    }
  } catch (error) {
    console.error("Contact form: delivery threw", error);
    return { status: "error", values };
  }

  return { status: "success" };
}
