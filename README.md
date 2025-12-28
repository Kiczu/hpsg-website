# HPSG Website

Marketing website for **HPS Group (HPSG)** built with **Next.js (App Router)** and **Tailwind CSS**.

The project currently focuses on the **homepage (hero + sections)**. Backend/API (e.g. contact form handler) is planned and will be added later.

---

## Tech stack

- Next.js `16.0.10`
- React `19`
- TypeScript
- Tailwind CSS `v4`
- Swiper (sliders)
- `react-markdown` + `remark-gfm` (legal pages)

---

## What’s included

- **Homepage sections**: hero slider, stats, product categories, services, realizations slider, blog preview, contact section
- **Blog**: `/blog` + `/blog/[slug]` (mock posts by default, optional WordPress integration)
- **Legal pages**: Markdown-based pages + downloadable PDFs
- **Contact form UI**: validation + honeypot, optional Turnstile widget (API endpoint TODO)

---

## Getting started

- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build` → `npm run start`
- Lint: `npm run lint`

---

## Environment variables (optional)

Create `.env.local` in the project root.

- WordPress blog: `WORDPRESS_API_URL` (example: `https://example.com/wp-json/wp/v2`)
- Turnstile: `NEXT_PUBLIC_TURNSTILE_SITE_KEY`

---

## Notes

- Swiper can cause hydration mismatches in the App Router — hero slider uses `HeroSliderNoSSR` (`ssr: false`) to avoid SSR issues.
- Legal PDFs expected at:
  - `public/legal/polityka-prywatnosci.pdf`
  - `public/legal/regulamin-serwisu.pdf`
  - `public/legal/przetwarzanie-danych.pdf`

---

## Deployment

Recommended: **Vercel** (set env vars in Project Settings if needed).

---

## Roadmap / TODO

- Implement `POST /api/contact` (email sending + Turnstile verification)
- Final content + imagery replacement
- Optional: connect blog to WordPress + ensure safe HTML handling
- SEO polish (OG tags, sitemap, robots, structured data)

---

## License

TBD
