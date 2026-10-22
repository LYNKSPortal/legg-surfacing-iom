# LEGG Surfacing Ltd — Website

A production-quality, multi-page Next.js (App Router) website for LEGG
Surfacing Ltd, a specialist surfacing and groundwork contractor on the
Isle of Man.

## Tech stack

- **Next.js 16** (App Router) + React 19 + TypeScript
- **Tailwind CSS v4** for styling (CSS-based theme in `src/app/globals.css`)
- **Framer Motion** for scroll-triggered reveals (respects `prefers-reduced-motion`)
- **Lucide React** for icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/                  Routes (App Router) — one folder per page
    services/[slug]/    Dynamic service detail pages
    projects/[slug]/    Dynamic project detail pages
    api/contact/        Server-side contact form handler
    sitemap.ts, robots.ts
  components/
    ui/                 Design system primitives (Button, Section, Heading, Card, FaqAccordion...)
    layout/             Navbar, Footer, Logo
    sections/           Page sections (Hero, WhyChooseUs, CTASection...)
    gallery/            Projects gallery grid + lightbox
    forms/              Contact form
  lib/
    business.ts         Single source of truth for verified contact/business info
    content/            Structured content: services, projects, faqs, testimonials, nav
    validation/         Zod schemas shared by client + server
    email.ts            Email provider integration point
    seo.ts              JSON-LD structured data helpers
```

All business copy (services, FAQs, projects, testimonials) lives in
`src/lib/content/`, so new pages, projects and reviews can be added by
editing data files rather than components.

## Content notes

- **Testimonials**: `src/lib/content/testimonials.ts` is intentionally
  empty until genuine, verified customer reviews are supplied — no
  reviews have been fabricated.
- **Project photography**: `src/lib/content/projects.ts` currently uses
  professional stock photography as placeholders for the four known
  project examples (flagged via `isPlaceholderImage: true`). Replace the
  `image` URLs with real before/after project photography as it becomes
  available.
- **Facebook link**: `business.facebookUrl` is `null` until the correct
  Facebook page URL is confirmed.

## Contact form / email provider

`POST /api/contact` validates submissions server-side with Zod, applies
honeypot + timing-based spam protection, and calls
`src/lib/email.ts#sendEnquiryEmail`. That function is wired up for
[Resend](https://resend.com) but is intentionally provider-agnostic —
swap in any transactional email API without touching the route.

Set these environment variables (e.g. in Vercel project settings, not
committed to the repo):

| Variable            | Purpose                                             |
| ------------------- | ---------------------------------------------------- |
| `RESEND_API_KEY`    | API key for the email provider. Unset = enquiries are logged server-side instead of emailed (safe for local dev). |
| `CONTACT_TO_EMAIL`  | Address enquiries are sent to. Defaults to the business email. |
| `CONTACT_FROM_EMAIL`| Verified "from" address for the email provider.     |

Optional photo attachments are validated (type/size/count) but not yet
persisted anywhere — the route has a documented extension point for
uploading to an S3 bucket via short-lived, least-privilege presigned
URLs if/when that's needed.

## Deployment

Designed for [Vercel](https://vercel.com). No secrets are committed;
configure the environment variables above in the hosting provider.
