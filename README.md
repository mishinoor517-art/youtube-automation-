# AutoTube — YouTube Automation Landing Page

A single-page, dark-themed landing page built with Next.js 15 (App Router),
TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view it.

## Structure

```
app/
 ├── layout.tsx      # Fonts, metadata, scroll-progress bar
 ├── page.tsx        # Assembles all sections
 └── globals.css     # Tailwind layers, glass/gradient utilities
components/
 ├── Navbar.tsx        # Sticky nav with mobile menu
 ├── ScrollProgress.tsx # Signature red scroll indicator
 ├── Hero.tsx           # Headline, CTAs, ambient background
 ├── Services.tsx       # 6 service cards
 ├── Features.tsx       # 4 "Why Choose Us" cards
 ├── Contact.tsx         # Form + email/WhatsApp/Instagram
 └── Footer.tsx          # Copyright, social icons, quick links
```

## Notes

- Update the placeholder email, WhatsApp, and Instagram links in
  `components/Contact.tsx` and `components/Footer.tsx`.
- Wire `handleSubmit` in `Contact.tsx` to your email service, form
  backend, or CRM of choice — it currently just shows a success state.
- Colors and fonts are defined as design tokens in `tailwind.config.ts`.
