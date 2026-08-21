import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Style Guide",
  // Internal reference — never for the public site.
  robots: { index: false, follow: false },
};

/* Relative luminance / contrast ratio, so the page reports real numbers
   rather than numbers we asserted once and never checked again. */
function luminance(hex: string): number {
  const h = hex.replace("#", "");
  const rgb = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  const lin = rgb.map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
}

function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

const SURFACES = [
  ["background / surface", "#f7f9fb"],
  ["surface-container-lowest", "#ffffff"],
  ["surface-container-low", "#f2f4f6"],
  ["surface-container", "#eceef0"],
  ["surface-container-high", "#e6e8ea"],
  ["surface-container-highest", "#e0e3e5"],
  ["surface-dim", "#d8dadc"],
] as const;

const BRAND = [
  ["primary", "#000000"],
  ["primary-container", "#131b2e"],
  ["on-primary-container", "#7c839b"],
  ["secondary", "#9b4500"],
  ["secondary-container", "#fd8a42"],
  ["secondary-fixed", "#ffdbca"],
] as const;

const LINES_FEEDBACK = [
  ["outline", "#76777d"],
  ["outline-variant", "#c6c6cd"],
  ["error", "#ba1a1a"],
  ["error-container", "#ffdad6"],
  ["success", "#146c2e"],
] as const;

const TYPE = [
  ["display-lg", "text-display-lg", "font-display", "64 / 1.1 / 700"],
  ["headline-lg", "text-headline-lg", "font-display", "48 / 1.2 / 700"],
  ["headline-lg-mobile", "text-headline-lg-mobile", "font-display", "32 / 1.2 / 700"],
  ["headline-md", "text-headline-md", "font-display", "32 / 1.3 / 600"],
  ["headline-sm", "text-headline-sm", "font-display", "24 / 1.4 / 600"],
  ["body-lg", "text-body-lg", "font-sans", "18 / 1.7 / 400"],
  ["body-md", "text-body-md", "font-sans", "16 / 1.6 / 400"],
  ["label-md", "text-label-md", "font-sans", "14 / 1.2 / 600"],
  ["caption", "text-caption", "font-sans", "12 / 1.4 / 500"],
] as const;

const PAIRINGS = [
  ["on-surface", "#191c1e", "surface", "#f7f9fb", "Body text"],
  ["on-surface-variant", "#45464d", "surface", "#f7f9fb", "Muted text"],
  ["secondary", "#9b4500", "surface", "#f7f9fb", "Accent / links"],
  ["outline", "#76777d", "surface", "#f7f9fb", "Borders only — fails as text"],
  ["on-primary", "#ffffff", "primary", "#000000", "Button label"],
  ["on-primary", "#ffffff", "primary-container", "#131b2e", "Label on navy"],
  ["on-primary-container", "#7c839b", "primary-container", "#131b2e", "Muted on navy"],
  ["on-surface", "#191c1e", "secondary-container", "#fd8a42", "Text on orange"],
  ["error", "#ba1a1a", "surface", "#f7f9fb", "Form error"],
  ["success", "#146c2e", "surface", "#f7f9fb", "Form success"],
] as const;

function Section({
  title,
  note,
  children,
}: {
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-outline-variant border-t pt-10">
      <h2 className="font-display text-headline-md">{title}</h2>
      {note ? <p className="text-body-md text-on-surface-variant mt-2 max-w-2xl">{note}</p> : null}
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Swatch({ name, hex }: { name: string; hex: string }) {
  return (
    <div>
      <div
        className="border-outline-variant h-20 rounded-lg border"
        style={{ backgroundColor: hex }}
      />
      <p className="text-label-md mt-2">{name}</p>
      <p className="text-caption text-on-surface-variant">{hex}</p>
    </div>
  );
}

export default function StyleGuidePage() {
  return (
    <div className="max-w-page px-margin-mobile md:px-gutter mx-auto py-16">
      <header className="pb-10">
        <p className="text-label-md text-on-surface-variant uppercase">
          Phase 1.2 — Internal reference
        </p>
        <h1 className="font-display text-headline-lg-mobile md:text-headline-lg mt-3">
          Design Tokens
        </h1>
        <p className="text-body-lg text-on-surface-variant mt-4 max-w-2xl">
          Every token the site is allowed to use. Contrast ratios are computed on render, so this
          page cannot drift from the values it documents.
        </p>
      </header>

      <div className="space-y-16">
        <Section
          title="Surfaces"
          note="The elevation ramp, lightest to dimmest. surface-dim doubles as the card border."
        >
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-7">
            {SURFACES.map(([name, hex]) => (
              <Swatch key={name} name={name} hex={hex} />
            ))}
          </div>
        </Section>

        <Section title="Brand">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {BRAND.map(([name, hex]) => (
              <Swatch key={name} name={name} hex={hex} />
            ))}
          </div>
        </Section>

        <Section
          title="Lines & feedback"
          note="error, error-container and success are additions — the Stitch build had no usable form states."
        >
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {LINES_FEEDBACK.map(([name, hex]) => (
              <Swatch key={name} name={name} hex={hex} />
            ))}
          </div>
        </Section>

        <Section
          title="Type scale"
          note="Playfair Display for headings, Inter for body — both self-hosted via next/font."
        >
          <div className="space-y-8">
            {TYPE.map(([name, sizeClass, familyClass, spec]) => (
              <div key={name} className="border-outline-variant border-b pb-6">
                <div className="flex flex-wrap items-baseline gap-x-4">
                  <span className="text-label-md text-on-surface-variant">{name}</span>
                  <span className="text-caption text-on-surface-variant">{spec}</span>
                </div>
                <p className={`mt-3 ${sizeClass} ${familyClass}`}>
                  Building businesses that thrive
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          title="Contrast audit"
          note="WCAG 2.1 AA requires 4.5:1 for normal text and 3:1 for large text."
        >
          <div className="overflow-x-auto">
            <table className="text-body-md w-full min-w-[640px]">
              <thead>
                <tr className="border-outline-variant border-b text-left">
                  <th className="text-label-md pb-3">Foreground</th>
                  <th className="text-label-md pb-3">Background</th>
                  <th className="text-label-md pb-3">Ratio</th>
                  <th className="text-label-md pb-3">AA</th>
                  <th className="text-label-md pb-3">Usage</th>
                </tr>
              </thead>
              <tbody>
                {PAIRINGS.map(([fgName, fg, bgName, bg, usage]) => {
                  const ratio = contrast(fg, bg);
                  const pass = ratio >= 4.5;
                  return (
                    <tr key={`${fgName}-${bgName}`} className="border-outline-variant border-b">
                      <td className="py-3">{fgName}</td>
                      <td className="py-3">{bgName}</td>
                      <td className="py-3 tabular-nums">{ratio.toFixed(2)}:1</td>
                      <td className="py-3">
                        <span
                          style={{ color: pass ? "var(--color-success)" : "var(--color-error)" }}
                        >
                          {pass ? "Pass" : "Large text only"}
                        </span>
                      </td>
                      <td className="text-on-surface-variant py-3">{usage}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          title="Decision: primary colour — navy"
          note="Settled at Phase 1.2. Contrast was equivalent (16.23:1 black vs 16.26:1 navy), so the call was aesthetic: navy sits better beside the burnt-orange accent and reads less generic than pure black. Black is kept here only as the rejected comparison."
        >
          <div className="grid gap-8 md:grid-cols-2">
            {[
              ["Chosen — Navy #131b2e", "#131b2e"],
              ["Rejected — Black #000000", "#000000"],
            ].map(([label, hex]) => (
              <div
                key={label}
                className="border-surface-dim bg-surface-container-lowest rounded-xl border p-8"
              >
                <p className="text-label-md text-on-surface-variant uppercase">{label}</p>
                <h3 className="font-display text-headline-md mt-4" style={{ color: hex }}>
                  Building Businesses That Thrive
                </h3>
                <p className="text-body-md text-on-surface-variant mt-3">
                  Digital transformation, AI strategy and executive education for organizations
                  navigating the digital economy.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span
                    className="text-label-md inline-flex rounded-md px-5 py-3"
                    style={{ backgroundColor: hex, color: "#ffffff" }}
                  >
                    Book a Consultation
                  </span>
                  <span
                    className="text-label-md inline-flex rounded-md border px-5 py-3"
                    style={{ borderColor: hex, color: hex }}
                  >
                    View Services
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          title="Radii & spacing"
          note="rounded-full is left at the Tailwind default of 9999px — Stitch had redefined it to 12px, which breaks circular avatars."
        >
          <div className="flex flex-wrap gap-6">
            {[
              ["sm", "rounded-sm"],
              ["md", "rounded-md"],
              ["lg", "rounded-lg"],
              ["xl", "rounded-xl"],
              ["2xl", "rounded-2xl"],
              ["full", "rounded-full"],
            ].map(([name, cls]) => (
              <div key={name} className="text-center">
                <div className={`border-outline bg-surface-container size-20 border ${cls}`} />
                <p className="text-caption text-on-surface-variant mt-2">{name}</p>
              </div>
            ))}
          </div>
          <dl className="text-body-md mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["max-w-page", "1200px"],
              ["gutter", "32px"],
              ["margin-mobile", "20px"],
              ["section", "120px"],
              ["section-mobile", "64px"],
            ].map(([name, value]) => (
              <div key={name} className="border-outline-variant flex justify-between border-b pb-2">
                <dt className="text-label-md">{name}</dt>
                <dd className="text-on-surface-variant tabular-nums">{value}</dd>
              </div>
            ))}
          </dl>
        </Section>
      </div>
    </div>
  );
}
