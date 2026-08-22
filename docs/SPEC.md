# Michael Onyeka Ezeadichie — Portfolio Site Spec

**Status:** locked at Phase 0.3 · **Date:** 2026-08-20
This is the contract we build against. Changes to it are deliberate decisions, not drift.

---

## 1. Stack

| Concern    | Decision                                                                |
| ---------- | ----------------------------------------------------------------------- |
| Framework  | Next.js (App Router) + TypeScript                                       |
| Styling    | Tailwind CSS v4 (CSS-first `@theme`)                                    |
| Dev server | Turbopack — optimized for fast in-browser recompiles                    |
| Content    | Typed TypeScript files in `content/` — no CMS                           |
| Forms      | Server action → Resend → `onyekam.ezeadichie@gmail.com`                 |
| Hosting    | Vercel, preview deploy per branch                                       |
| Fonts      | Playfair Display (headings) + Inter (body), self-hosted via `next/font` |
| Icons      | Inline SVG — no icon font, no Material Symbols CDN                      |
| Dark mode  | **Not shipped.** Dead `dark:` variants removed.                         |

---

## 2. Sitemap

| Route                 | Page                      | Source                       |
| --------------------- | ------------------------- | ---------------------------- |
| `/`                   | Home                      | `reference/stitch/home.html` |
| `/about`              | About                     | `about.html`                 |
| `/impact`             | Impact — case study index | `impact.html`                |
| `/impact/giz`         | GIZ case study            | `impact.html`                |
| `/services`           | Services                  | `services.html`              |
| `/speaking`           | Speaking                  | `speaking.html`              |
| `/thought-leadership` | Thought Leadership        | `thought.html`               |
| `/contact`            | Contact                   | `contact.html`               |
| `/privacy`, `/terms`  | Legal                     | to be written                |
| `/404`                | Not found                 | new                          |

---

## 3. Canonical Header

Identical on every page. Defined once in `app/layout.tsx`.

**Brand:** `Michael Onyeka Ezeadichie` → `/`
**Nav:** Home · About · Impact · Services · Speaking · Thought Leadership
**CTA:** `Book a Consultation` → `/contact`

Requirements: sticky, active-route indication, **working mobile menu** (focus trap, Escape to close, `aria-expanded`, body scroll lock), keyboard navigable, `aria-label` on every icon-only control.

## 4. Canonical Footer

Identical on every page.

**Tagline:** _"Technology is not the destination. It is the bridge between vision and impact."_
**Columns:** navigation · social (LinkedIn, X, Medium — URLs pending) · contact
**Contact:** `onyekam.ezeadichie@gmail.com` · `+234 706 282 7560`
**Legal:** Privacy Policy · Terms of Service
**Copyright:** `© {currentYear} Michael Onyeka Ezeadichie. All rights reserved.` — sentence case, year computed not hardcoded.

---

## 5. Design Tokens

Extracted from the Stitch source and normalized. Full set: `reference/tokens.json`.

### Type scale

| Token                | Size | Line height | Weight | Tracking |
| -------------------- | ---- | ----------- | ------ | -------- |
| `display-lg`         | 64px | 1.1         | 700    | -0.02em  |
| `headline-lg`        | 48px | 1.2         | 700    | -0.01em  |
| `headline-lg-mobile` | 32px | 1.2         | 700    | —        |
| `headline-md`        | 32px | 1.3         | 600    | —        |
| `headline-sm`        | 24px | 1.4         | 600    | —        |
| `body-lg`            | 18px | 1.7         | 400    | —        |
| `body-md`            | 16px | 1.6         | 400    | —        |
| `label-md`           | 14px | 1.2         | 600    | 0.05em   |
| `caption`            | 12px | 1.4         | 500    | —        |

### Layout

`container-max` 1200px · `gutter` 32px · `margin-mobile` 20px
`section-padding-desktop` 120px · `section-padding-mobile` 64px · base `unit` 8px

### Radii

`DEFAULT` 2px · `lg` 4px · `xl` 8px · `full` 12px

### Core colors

`background`/`surface` `#f7f9fb` · `on-surface` `#191c1e` · `on-surface-variant` `#45464d`
`primary` `#131b2e` · `primary-container` `#131b2e` · `on-primary` `#ffffff` · `on-primary-container` `#7c839b`
`secondary` `#9b4500` · `secondary-container` `#fd8a42`
`outline` `#76777d` · `outline-variant` `#c6c6cd` · `error` `#ba1a1a`

> Thought Leadership's `primary: #0f172a` override is **discarded**.
> `primary` was changed from Stitch's `#000000` to brand navy `#131b2e` at Phase 1.2 —
> contrast is equivalent (16.26:1 vs 16.23:1) and navy pairs better with the accent.

### Feedback colors (added — Stitch had none usable)

`error` `#ba1a1a` · `on-error` `#ffffff` · `error-container` `#ffdad6` · `success` `#146c2e`

### Radii

`rounded-full` is left at Tailwind's default. Stitch had redefined it to `0.75rem`,
which silently breaks circular avatars and pills.

### Breakpoints

375 · 768 · 1280 · 1920

---

## 6. Contact Form

Fields: Full Name\*, Email\*, Phone, Service of Interest (select), Message\*

Service options are **derived** from `content/services.ts` (`coreCompetencies.cards`) rather than
retyped, so renaming a service updates the form and its server-side validation in one edit. The
titles are `as const`, giving the server action a literal union to validate against.

Digital Transformation Consulting · AI Strategy & Adoption · Cloud & Microsoft Solutions Advisory ·
Digital Marketing & Growth · Executive Training · Executive Speaking & Advisory

Behaviour: client + server validation, honeypot + rate limiting, real loading/success/error states, accessible error messaging tied to inputs via `aria-describedby`.

---

## 7. Quality Gates

- Lighthouse ≥ 95 — Performance, Accessibility, Best Practices, SEO
- WCAG 2.1 AA — keyboard navigable, visible focus, AA contrast, `prefers-reduced-motion` honoured
- Every page: unique title, meta description, Open Graph + Twitter card, canonical URL
- JSON-LD `Person` + `ProfessionalService`
- `sitemap.xml` + `robots.txt`
- Zero `href="#"` in production
- All images self-hosted, `next/image`, explicit dimensions, real alt text

---

## 8. Open Items

| Item                                     | Owner  | Blocks                                              |
| ---------------------------------------- | ------ | --------------------------------------------------- |
| Social URLs (LinkedIn, X, Medium)        | Client | Phase 1.3 footer                                    |
| High-res photography (≥2000px)           | Client | Phase 2.2 — current asset is 512×512                |
| Domain name                              | Client | Phase 6.2                                           |
| Privacy Policy + Terms copy              | Client | Phase 3.6                                           |
| Resend API key                           | Client | Phase 4.2                                           |
| Confirm title: CMO vs COO at Expervia    | Client | Copy on `/speaking` — normalised to CMO             |
| Real photography from the GIZ engagement | Client | `/impact/giz` hero — source image rejected, see §11 |
| Newsletter provider (or drop it)         | Client | `/thought-leadership` signup section                |
| Approve newly written About closing CTA  | Client | `/about` — the source page ended with no next step  |

---

## 9. Defects Being Corrected

From the Phase 0.2 audit of the Stitch build:

1. Four different headers across seven pages → one canonical Header
2. Four different footers → one canonical Footer
3. Every link `href="#"` (zero working links) → real routing
4. Mobile menu non-functional on all pages → working accessible menu
5. Contact form inert → server action + email delivery
6. Dark mode dead code → removed
7. Expiring 512×512 CDN images → self-hosted, optimized, correctly sized
8. No SEO metadata anywhere → full metadata layer
9. Privacy/Terms linked but nonexistent → real pages
10. Broken heading hierarchy → semantic, single `h1` per page
11. Token drift on Thought Leadership → single token source
12. Zero `aria-label` site-wide → full accessible naming
13. "Impact" / "GIZ Case Study" / hero title mismatch → consistent naming
14. Footer `opacity-80` / `opacity-60` on navy → 3.39:1 and 2.47:1, both fail AA → opacity removed
15. Job title contradicted itself — "Chief Operating Officer" on `/speaking`, "Chief Marketing
    Officer" on `/` and `/about` → normalised to CMO, pending client confirmation (§8)
16. Newsletter signup with no form action and no provider → section gated behind a flag until a
    provider exists, rather than shipping a button that does nothing
17. "View Details" links on all three signature keynotes pointed at `#` with no detail pages to
    reach → keynotes render as plain cards, no dead links

---

## 10. Content Layer (Phase 2.1)

All copy lives in `content/`. Pages in `app/` import and render it; **no copy is written inline in
a component**. This is what makes a wording change a one-line edit in one file instead of a search
across seven pages.

| File                    | Owns                                                       |
| ----------------------- | ---------------------------------------------------------- |
| `site.ts`               | Identity, navigation, contact details                      |
| `types.ts`              | Shared shapes + the `IconName` union                       |
| `organizations.ts`      | Organisation names shared by `/` and `/impact`             |
| `home.ts`               | `/`                                                        |
| `about.ts`              | `/about`                                                   |
| `services.ts`           | `/services` — and the contact form's service options       |
| `speaking.ts`           | `/speaking`                                                |
| `impact.ts`             | `/impact` and `/impact/giz`                                |
| `thought-leadership.ts` | `/thought-leadership`                                      |
| `contact.ts`            | `/contact`, form field labels and every form state message |

Rules:

- Every content file exports a `PageMeta` consumed by its route's `metadata`. One place per page
  owns the `<title>` and description.
- Icons are referenced by an `IconName` key, never by markup. A single inline-SVG component maps
  key → path in Phase 3, so naming an icon we never drew is a compile error. Stitch loaded Material
  Symbols from a CDN and rendered the raw ligature text ("transform", "psychology") until the font
  arrived.
- Internal CTAs are typed `Route`. A CTA pointing at a page that does not exist fails the build.
- Prose that needs emphasis is split into parts (see `about.ts` `marketing.body`) rather than
  embedding HTML in a string.

---

## 11. Asset Pipeline (Phase 2.2)

### Where images live

Sources are **statically imported** from `assets/images/`, not referenced by path from `public/`.
A static import makes `next/image` fill in intrinsic `width`, `height` and a blur placeholder
automatically, so no page can ship an image without dimensions and none of them shift layout while
loading. `public/` is not used for images at all.

`content/images.ts` is the manifest: each image is one entry carrying its import, its alt text and
a `maxDisplayWidth`. Alt text lives with the image rather than being retyped at each usage site —
the Stitch build described the same photograph five different ways.

Pristine originals stay in `reference/assets/`, untouched, so an encoding decision is always
reversible.

### The CDN is no longer a dependency

All six image URLs pointed at `lh3.googleusercontent.com/aida-public/…`, a Google-internal CDN with
no uptime guarantee. All six were downloaded and checksummed:

- **Five of them are the same file.** The portrait was served from five different URLs on five
  pages, byte-identical (`md5 390d5bf8…`). One image, five cache entries.
- The sixth is the GIZ hero (`3770037e…`).

Both match the copies archived at Phase 0, so nothing needs to be fetched from Google again.

### Portrait

512×512 is the only photograph of Michael that exists, and it is small. It is preserved as lossless
PNG (304KB → 117KB, no quality lost) rather than re-encoded lossily — a low-resolution source should
not also be a degraded one, since `next/image` re-encodes to AVIF/WebP for delivery anyway.

`maxDisplayWidth: 512` caps it. Phase 3 builds the home hero around a portrait at portrait scale,
**not** a full-bleed background image, because 512px cannot fill a hero without going visibly soft.
Swapping in the high-resolution photography requested in §8 is a one-line change in the manifest.

### GIZ hero — rejected, not shipped

The 512×279 image on the case study is **AI-generated stock**, and identifiably so: the text on the
tablet is gibberish, and both the GIZ wordmark on the wall and the branding on the mug are mangled
approximations of a real organisation's logo.

Two problems, either one sufficient:

1. On a case study page it reads as documentation of the actual engagement. It is not.
2. It reproduces a real development agency's branding inside a fabricated photograph.

It is archived in `reference/assets/` but not imported. `/impact/giz` gets a typographic hero —
navy, with the client / year / category metadata — which is also the only treatment that works at
512×279. Reversible the moment real project photography arrives (§8).

### Icons

`app/icon.svg` and `app/apple-icon.png` — a navy monogram drawn as a stroked path, so it needs no
font and stays crisp at 16px. Next.js emits the `<link>` tags from the file convention; no manual
`<head>` markup.

---

## 12. Component Layer (Phase 3)

Pages compose primitives; they do not re-declare layout or colour.

| Component                 | Responsibility                                                       |
| ------------------------- | -------------------------------------------------------------------- |
| `layout/Container`        | The one horizontal rhythm: 1200px max, 20px / 32px gutters           |
| `layout/Section`          | The one vertical rhythm: 64px mobile / 120px desktop, plus tone      |
| `layout/SectionHeading`   | Eyebrow + `h2` + description, with the id its section is labelled by |
| `ui/Icon`                 | All 24 icons, inline SVG, exhaustive over `IconName`                 |
| `ui/Button` (`CtaLink`)   | CTA styling; `href` typed `Route`; min 48px tall                     |
| `ui/Card` (`FeatureCard`) | Icon + heading + prose; heading level is a prop                      |

### Section tones

Sections declare a tone, not a colour, so alternating bands stay consistent across pages:

| Tone      | Surface                       | Used for                      |
| --------- | ----------------------------- | ----------------------------- |
| `default` | `surface` `#f7f9fb`           | Standard band                 |
| `muted`   | `surface-container` `#eceef0` | Alternating band              |
| `inverse` | `primary-container` `#131b2e` | Emphasis band (stats, quotes) |

`muted` is `surface-container` rather than `surface-container-low`: against `surface` the lighter
step was too close to read as a band at all.

The closing CTA on every page is deliberately **not** `inverse` — the footer is already navy, and
two navy bands in a row merge into one.

### Heading rank

`SectionHeading` always renders `h2`; `FeatureCard` takes its level as a prop and defaults to `h3`.
Every `Section` points `aria-labelledby` at its heading, so the region list in a screen reader is
navigable rather than a run of unnamed "section" entries. The Stitch pages hardcoded heading levels
and skipped ranks (SPEC §9 #10).

### Images

Above-the-fold images use `loading="eager"`, not `priority` — deprecated in Next 16. next/image
emits the head preload for eager images either way. `quality` values must be listed in
`next.config.ts` `images.qualities`; the default allowlist is `[75]` and anything absent from it
falls back silently.
