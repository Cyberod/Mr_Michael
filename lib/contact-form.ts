import { form, serviceOptions } from "@/content/contact";

/**
 * Shape and validation for the contact form. Kept out of `app/contact/actions.ts`
 * because a `"use server"` module may only export async functions — a constant
 * or a type exported alongside the action breaks the build.
 *
 * The same rules run on the client (through the native constraint attributes
 * the form sets) and here on the server, which is the only side that counts.
 */

export type ContactField = "name" | "email" | "phone" | "service" | "message";

export type ContactFormState = {
  status: "idle" | "invalid" | "error" | "success";
  /** Field-level errors, rendered next to the input and tied to it by id. */
  errors?: Partial<Record<ContactField, string>>;
  /** Submitted values, echoed back so a failed submit does not lose the
   *  message someone just spent five minutes writing. */
  values?: Partial<Record<ContactField, string>>;
};

export const initialContactState: ContactFormState = { status: "idle" };

/** Field name for the honeypot. Innocuous enough that a bot will fill it in. */
export const HONEYPOT_FIELD = "company";

export const LIMITS: Record<ContactField, number> = {
  name: 100,
  email: 200,
  phone: 40,
  service: 100,
  message: 5000,
};

export const MESSAGE_MIN = 20;

export function readField(formData: FormData, field: ContactField): string {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Deliberately conservative. Anything stricter rejects addresses that are
 * legal — the only real proof an address works is mail arriving at it.
 */
export function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function validate(values: Record<ContactField, string>) {
  const errors: Partial<Record<ContactField, string>> = {};

  for (const field of Object.keys(LIMITS) as ContactField[]) {
    if (values[field].length > LIMITS[field]) errors[field] = form.messages.tooLong;
  }

  if (!values.name) errors.name = form.messages.required;
  if (!values.email) errors.email = form.messages.required;
  else if (!looksLikeEmail(values.email)) errors.email = form.messages.invalidEmail;
  if (!values.message) errors.message = form.messages.required;
  else if (values.message.length < MESSAGE_MIN) errors.message = form.messages.messageTooShort;

  // The select is rendered from this same list, so a value outside it did not
  // come from the form.
  if (
    values.service &&
    !serviceOptions.includes(values.service as (typeof serviceOptions)[number])
  ) {
    errors.service = form.messages.invalidService;
  }

  return errors;
}
