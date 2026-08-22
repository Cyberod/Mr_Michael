"use client";

import { useActionState, useEffect, useId, useRef, useState } from "react";
import { submitContactForm } from "@/app/contact/actions";
import {
  HONEYPOT_FIELD,
  initialContactState,
  type ContactField,
  type ContactFormState,
} from "@/lib/contact-form";
import { Icon } from "@/components/ui/Icon";
import { form, serviceOptions } from "@/content/contact";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

const inputClasses = "bg-surface-container-lowest text-body-md w-full rounded-md border px-4 py-3";

/** The border colour is chosen here rather than layered over a base colour:
 *  cn() joins classes without resolving conflicts, so `border-outline` and
 *  `border-error` on one element would be settled by CSS order, not by intent. */
const borderClasses = (hasError: boolean) => (hasError ? "border-error" : "border-outline");

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-label-md text-on-surface-variant block uppercase">
        {label}
        {required ? (
          <>
            {" "}
            <span className="text-error" aria-hidden="true">
              *
            </span>
            <span className="sr-only">(required)</span>
          </>
        ) : null}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} className="text-body-md text-error mt-2">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/**
 * Remounts the inner form after a successful send, which is the simplest way
 * to return `useActionState` to its initial state and clear every field.
 */
export function ContactForm() {
  const [instance, setInstance] = useState(0);
  return <ContactFormFields key={instance} onReset={() => setInstance((n) => n + 1)} />;
}

function ContactFormFields({ onReset }: { onReset: () => void }) {
  const [state, formAction, pending] = useActionState<ContactFormState, FormData>(
    submitContactForm,
    initialContactState
  );
  const prefix = useId();
  const alertRef = useRef<HTMLDivElement>(null);

  // React resets a form after its action completes — and it does so *after*
  // the re-render, so a controlled field is cleared with nothing left to
  // re-assert it. Verified: a failed submit came back with the chosen service
  // lost while the text inputs kept theirs (a dirty text input survives because
  // `defaultValue` only sets the value attribute; a select has no equivalent).
  //
  // Remounting the fields on each result sidesteps the ordering entirely: every
  // field mounts fresh with `defaultValue` already set to the echoed value, so
  // whenever the reset lands it resets to exactly that.
  const [resultKey, setResultKey] = useState(0);
  const [lastResult, setLastResult] = useState(state);
  if (lastResult !== state) {
    // useActionState returns a new object per result, so identity comparison
    // fires correctly even across two failed submits in a row.
    setLastResult(state);
    setResultKey((key) => key + 1);
  }

  const fieldId = (field: ContactField) => `${prefix}-${field}`;
  const errorFor = (field: ContactField) => state.errors?.[field];
  const valueFor = (field: ContactField) => state.values?.[field] ?? "";

  // Move focus to the alert so the outcome is announced and reachable, rather
  // than leaving a keyboard user on a submit button with no idea what changed.
  useEffect(() => {
    if (state.status === "invalid" || state.status === "error") alertRef.current?.focus();
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="border-outline-variant bg-surface-container-lowest rounded-xl border p-8"
      >
        <span className="bg-surface-container text-success inline-flex size-14 items-center justify-center rounded-lg">
          <Icon name="check" className="size-7" />
        </span>
        <h3 className="font-display text-headline-sm mt-6">{form.messages.successHeading}</h3>
        <p className="text-body-md text-on-surface-variant mt-3">{form.messages.success}</p>
        <button
          type="button"
          onClick={onReset}
          className="text-label-md text-secondary mt-6 underline-offset-4 hover:underline"
        >
          {form.messages.sendAnother}
        </button>
      </div>
    );
  }

  const failed = state.status === "invalid" || state.status === "error";

  return (
    <form key={resultKey} action={formAction} className="grid gap-6">
      {failed ? (
        <div
          ref={alertRef}
          tabIndex={-1}
          role="alert"
          className="border-error bg-error-container text-on-surface rounded-md border p-5"
        >
          <p className="text-label-md uppercase">
            {state.status === "invalid" ? form.messages.invalidHeading : form.messages.errorHeading}
          </p>
          {state.status === "error" ? (
            <p className="text-body-md mt-2">
              {/* RESEND_API_KEY absent and delivery failure are separate states
                  in the action, but both leave the sender with the same next
                  step, so both offer the direct address. */}
              {form.messages.error}{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-secondary underline underline-offset-4"
              >
                {form.messages.errorFallback}
              </a>
              .
            </p>
          ) : null}
        </div>
      ) : null}

      {/* Not display:none — some bots skip hidden fields. Off-screen, removed
          from the tab order and hidden from assistive technology instead. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${prefix}-${HONEYPOT_FIELD}`}>Company</label>
        <input
          id={`${prefix}-${HONEYPOT_FIELD}`}
          name={HONEYPOT_FIELD}
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id={fieldId("name")}
          label={form.fields.name.label}
          required
          error={errorFor("name")}
        >
          <input
            id={fieldId("name")}
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete={form.fields.name.autoComplete}
            defaultValue={valueFor("name")}
            aria-invalid={errorFor("name") ? true : undefined}
            aria-describedby={errorFor("name") ? `${fieldId("name")}-error` : undefined}
            className={cn(inputClasses, borderClasses(Boolean(errorFor("name"))))}
          />
        </Field>

        <Field
          id={fieldId("email")}
          label={form.fields.email.label}
          required
          error={errorFor("email")}
        >
          <input
            id={fieldId("email")}
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete={form.fields.email.autoComplete}
            defaultValue={valueFor("email")}
            aria-invalid={errorFor("email") ? true : undefined}
            aria-describedby={errorFor("email") ? `${fieldId("email")}-error` : undefined}
            className={cn(inputClasses, borderClasses(Boolean(errorFor("email"))))}
          />
        </Field>

        <Field id={fieldId("phone")} label={form.fields.phone.label} error={errorFor("phone")}>
          <input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            maxLength={40}
            autoComplete={form.fields.phone.autoComplete}
            defaultValue={valueFor("phone")}
            aria-invalid={errorFor("phone") ? true : undefined}
            aria-describedby={errorFor("phone") ? `${fieldId("phone")}-error` : undefined}
            className={cn(inputClasses, borderClasses(Boolean(errorFor("phone"))))}
          />
        </Field>

        <Field
          id={fieldId("service")}
          label={form.fields.service.label}
          error={errorFor("service")}
        >
          <select
            id={fieldId("service")}
            name="service"
            defaultValue={valueFor("service")}
            aria-invalid={errorFor("service") ? true : undefined}
            aria-describedby={errorFor("service") ? `${fieldId("service")}-error` : undefined}
            className={cn(inputClasses, borderClasses(Boolean(errorFor("service"))))}
          >
            <option value="">{form.placeholderOption}</option>
            {/* Rendered from the services page's own list — see content/contact.ts. */}
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        id={fieldId("message")}
        label={form.fields.message.label}
        required
        error={errorFor("message")}
      >
        <textarea
          id={fieldId("message")}
          name="message"
          required
          rows={6}
          maxLength={5000}
          defaultValue={valueFor("message")}
          aria-invalid={errorFor("message") ? true : undefined}
          aria-describedby={errorFor("message") ? `${fieldId("message")}-error` : undefined}
          className={cn(inputClasses, "resize-y", borderClasses(Boolean(errorFor("message"))))}
        />
      </Field>

      <div>
        <button
          type="submit"
          disabled={pending}
          className="bg-primary text-on-primary text-label-md hover:bg-primary/90 inline-flex min-h-12 items-center justify-center rounded-md px-7 transition-colors disabled:cursor-not-allowed disabled:opacity-70"
        >
          {pending ? form.messages.submitting : form.submitLabel}
        </button>
      </div>
    </form>
  );
}
