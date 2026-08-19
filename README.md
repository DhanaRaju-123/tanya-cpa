# Tanya Brewer, CPA — React Website

A full redesign of the cpatanya.com site, rebuilt in React (Vite + Tailwind CSS +
Framer Motion + React Router), matching the original's layout, sections, and
scroll animations with a new blue color theme.

## Pages
- **Home** — hero, stats, services grid, resources preview, testimonials, photo gallery, contact form
- **About Us** — bio, photo, secondary contact section
- **Resources** — blog/news grid
- **Services** — detail section per service (alternating image/text layout)
- **Our Team** — Tanya & Thomas Brewer profile cards
- **Contact Us** — contact details + form

## Color theme
| Token | Hex |
|---|---|
| Primary | `#1565C0` |
| Primary Dark | `#0D47A1` |
| Primary Light | `#E3F2FD` |
| Background | `#FFFFFF` |
| Section Background | `#F8FAFC` |
| Text | `#263238` |
| Secondary Text | `#607D8B` |
| Border | `#E2E8F0` |
| Success | `#2E7D32` |
| Error | `#D32F2F` |

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

The production build is output to `dist/` — deploy that folder to any static
host (Netlify, Vercel, GitHub Pages, S3, etc.).

## Responsive breakpoints
Built mobile-first with Tailwind's default breakpoints:
- Mobile: base styles (< 640px)
- Tablet: `sm:` / `md:` (≥ 640px / ≥ 768px)
- Laptop: `lg:` (≥ 1024px)
- Desktop: `xl:` and the `max-w-7xl` content container (≥ 1280px)

## Customizing content
All copy (services, blog posts, team bios, testimonials, contact info) lives
in `src/data/content.js` — edit that one file to update text across the site
without touching any component markup.

## Notes
- Replace the gradient placeholder blocks (hero background, gallery tiles,
  service icons, team photos) with real photography — swap in an `<img>` or a
  `background-image` where you see the gradient `div`s in `src/pages/*.jsx`.
- The contact forms are front-end only; wire the `handleSubmit` function in
  `src/components/ContactForm.jsx` to your email service or backend (e.g.
  Formspree, EmailJS, or a serverless function) to make them functional.
