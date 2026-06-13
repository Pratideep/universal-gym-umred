# Universal Gym, Umred — Website

Modern, responsive gym website built with Next.js 16 + Tailwind + Framer Motion.

## Getting Started

```bash
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## Add Your Equipment Photos

Drop images into the matching folder — the website picks them up automatically at build time. No code changes needed.

```
public/images/equipment/
├── chest/         <- drop chest machine photos here
├── back/
├── shoulders/
├── legs/
├── arms/
├── core/
└── cardio/
```

Filenames become the displayed label (e.g. `incline-bench-press.jpg` → "Incline Bench Press").

## Swap Other Assets

| Asset | Location |
|---|---|
| Hero background image/video | edit `src/components/sections/Hero.tsx` |
| Coach photo, bio, certifications | `src/data/coach.ts` |
| Membership pricing | `src/data/plans.ts` |
| Transformations | `src/data/testimonials.ts` |
| Phone / WhatsApp / Address / Hours / Map | `src/lib/site.ts` |

## Tech Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS 3
- Framer Motion
- React Hook Form + Zod
- lucide-react icons

## Email Lead Capture (Resend)

Free-trial submissions hit `POST /api/lead`. Without env vars, the route logs to the server console and the user still gets the WhatsApp deep link. To receive real emails:

1. Get an API key from [resend.com](https://resend.com) (free tier: 3,000 emails/mo).
2. Copy `.env.example` → `.env.local` and fill in `RESEND_API_KEY` and `LEAD_INBOX`.
3. Restart `npm run dev`. Submit a test lead — check the inbox.

On Vercel: add the same env vars under Project Settings → Environment Variables.

## Deploy

Push to GitHub, connect repo on [Vercel](https://vercel.com), done. SSL + CDN automatic.

## Pages

`/` Home · `/about` · `/coach` · `/equipment` · `/ladies-batch` · `/transformations` · `/membership` · `/gallery` · `/contact` · `/free-trial`
