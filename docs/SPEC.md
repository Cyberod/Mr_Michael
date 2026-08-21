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

Service options: Digital Transformation Consulting · AI Strategy & Adoption · Cloud & Microsoft Solutions · Digital Marketing & Growth · Executive Training · Executive Speaking & Advisory

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

| Item                              | Owner  | Blocks                               |
| --------------------------------- | ------ | ------------------------------------ |
| Social URLs (LinkedIn, X, Medium) | Client | Phase 1.3 footer                     |
| High-res photography (≥2000px)    | Client | Phase 2.2 — current asset is 512×512 |
| Domain name                       | Client | Phase 6.2                            |
| Privacy Policy + Terms copy       | Client | Phase 3.6                            |
| Resend API key                    | Client | Phase 4.2                            |

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
