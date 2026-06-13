# Universal Gym Website — Full Codebase Context

## Project Overview

**What it is:** Next.js 16 marketing website for Universal Gym, located on Main Road, Umred (Nagpur district, Maharashtra).  
**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 3 · Framer Motion · Lucide React · Zod · React Hook Form · Resend (email) · Lenis (smooth scroll)  
**Run:** `npm run dev` → http://localhost:3000  

---

## Site-Wide Config — The Single Source of Truth

### `src/lib/site.ts`
**Contains everything about the gym: name, phone, WhatsApp number, email, address, Google Maps embed, opening hours, and a helper `waLink()` for generating WhatsApp deep links.**

Change gym phone/email/address/hours **only here** — everything else reads from this file.

```
site.name        → "Universal Gym"
site.location    → "Umred"
site.tagline     → "Biggest & Most Affordable Gym in Nagpur & Umred"
site.taglineMr   → Marathi version of tagline
site.phone       → "+91 90000 00000"        ← PLACEHOLDER — update with real number
site.whatsapp    → "919000000000"            ← PLACEHOLDER — wa.me format (no +)
site.email       → "contact@universalgymumred.com"
site.address     → "Main Road, Umred, Nagpur, Maharashtra 441204"
site.mapsEmbed   → Google Maps embed URL    ← PLACEHOLDER — replace with real embed
site.hours       → Array of { day, time } objects
waLink(msg?)     → Generates "https://wa.me/..." URL with encoded message
```

---

## Design System

### `tailwind.config.ts`
All custom tokens. **Token names are kept from the original design; values were remapped to a warm "iron & chalk" palette.**

| Token | Value | Notes |
|---|---|---|
| `brand.navy` | `#1A1613` | Espresso charcoal — main dark bg |
| `brand.slate` | `#2A241E` | Warm dark card surface |
| `brand.cyan` | `#E2552B` | Ember accent (CTA orange-red) |
| `brand.cyan-dim` | `#B23E1B` | Deeper ember — for accent text on light bg |
| `surface.base` | `#F3EFE7` | Warm paper — body background |
| `surface.card` | `#FBF9F4` | Card backgrounds |
| `surface.alt` | `#EAE3D5` | Alternate section backgrounds |
| `ink.900` | `#1C1917` | Darkest text |
| `ink.800` | `#2D2823` | Body text |
| `ink.500` | `#6F675B` | Muted text / subtitles |
| `ink.300` | `#CFC7B9` | Borders / dividers |
| `state.success` | `#3F8F4F` | |
| `state.warn` | `#D08A1E` | |
| `state.error` | `#C2412B` | |

**Fonts:**
- Display: `Oswald` → CSS var `--font-display` → Tailwind class `font-display`
- Body: `Inter` → CSS var `--font-body` → Tailwind class `font-sans`

**Custom box shadows:** `shadow-card`, `shadow-lift`, `shadow-glow`  
**Custom animations:** `animate-fade-up`, `animate-pulse-glow`

### `src/app/globals.css`
Global styles and reusable component classes (defined with `@layer components`):

| Class | Purpose |
|---|---|
| `.btn-primary` | Ember filled CTA button |
| `.btn-outline` | Outlined button for dark-on-light contexts |
| `.btn-outline-light` | Outlined button for light-on-dark contexts |
| `.btn-dark` | Navy bg with cyan text |
| `.section` | Standard page section padding + max-width container (`max-w-7xl`) |
| `.h-display` | Oswald uppercase heading utility |
| `.card` | White bordered card with hover lift |
| `.card-dark` | Dark slate card |
| `.glass` | Solid dark panel (class name kept from glassmorphism era) |
| `.eyebrow` | Small uppercase label above headings |
| `.form-input` | Styled form input field |
| `.text-gradient-cyan` | Ember accent colour (class name kept from gradient era) |
| `.no-scrollbar` | Hides scrollbar on horizontal scrollers |

---

## Root Layout

### `src/app/layout.tsx`
Wraps every page. Sets up:
- Fonts (Inter + Oswald)
- Global metadata (title template, description, keywords, OpenGraph)
- Persistent layout components: `<Navbar>`, `<Footer>`, `<WhatsAppFAB>`, `<MobileCtaBar>`, `<SmoothScroll>`
- JSON-LD structured data (`HealthClub` schema) injected in `<body>`
- Accessibility skip link (`#main-content`)

**To change site-wide SEO** (title, description, keywords): edit the `metadata` object here.

---

## Pages

### Home — `src/app/page.tsx`
The homepage assembles sections in order. Some sections are lazy-loaded with `next/dynamic` for performance.

| Section Component | Description |
|---|---|
| `<Hero>` | Full-screen hero with gym photo, headline, stats counters, pricing panel, CTA buttons |
| `<TrustBadges>` | 6-item icon strip: rating, coach, sq ft, hours, ladies batch, hygiene |
| `<AboutTeaser>` | 4-card "why people stay" with link to /about |
| `<EquipmentTabs>` | Tabbed equipment grid (muscle groups) — data from `getEquipment()` |
| `<LadiesBatch>` | Dark section promoting the ladies-only 4–5 PM batch |
| `<PlansGrid>` | Membership plans with monthly/annual toggle |
| `<GoogleReviews>` | Horizontal scroll card list of reviews + aggregate rating |
| `<TestimonialCarousel>` | Auto-advancing before/after testimonial with prev/next |
| `<TransformationGrid>` | Grid of 3 transformation cards |
| `<FaqAccordion>` | Expandable FAQ list |
| `<CtaBand>` | Dark CTA banner: "Come try it for a day" |

---

### About — `src/app/about/page.tsx`
- Dark hero band with page heading
- 2-column Vision / Mission cards
- 4-column "Why Choose Us" cards (certified coaching, ladies batch, sq ft, pricing)
- All content is **hardcoded inline** in this file — edit directly here

---

### Coach — `src/app/coach/page.tsx`
- Data sourced from `src/data/coach.ts`
- Dark hero with coach photo + bio + specialisation pills
- Achievements list (card per achievement)
- Certifications grid (4 cards with image + title + issuer)

**To update coach info:** edit `src/data/coach.ts`

---

### Equipment — `src/app/equipment/page.tsx`
- Uses `getEquipment()` from `src/lib/equipment.ts` to build tabs
- Tabbed muscle-group grid via `<EquipmentTabs>`
- Below the tabs: Cardio Zone, Warm-Up / Mobility Zone, Posing Room — each with `ImageStrip` (3 Unsplash placeholder images)
- **Real equipment photos:** drop image files into `public/images/equipment/<category>/` — categories: `chest`, `back`, `shoulders`, `legs`, `arms`, `core`, `cardio`

---

### Ladies Batch — `src/app/ladies-batch/page.tsx`
- Renders `<LadiesBatch>` component (also used on homepage)
- 4-column benefits grid (Women-Only Hour, Beginner Friendly, Personalised Plans, Supportive Community)
- Content is **hardcoded inline** in both the page and the LadiesBatch component

---

### Membership — `src/app/membership/page.tsx`
- Dark hero band
- `<PlansGrid>` component (also used on homepage)
- Plan comparison table — hardcoded 9-row feature matrix for Starter / Pro / Elite plans

**To update plan prices or features:** edit `src/data/plans.ts`

---

### Transformations — `src/app/transformations/page.tsx`
- Data sourced from `transformations` array in `src/data/testimonials.ts`
- Featured transformation: `transformations[0]` displayed in `<BeforeAfterSlider>`
- Full grid via `<TransformationGrid>`
- Ends with `<CtaBand>`

**To add a transformation:** add an entry to `src/data/testimonials.ts`

---

### Gallery — `src/app/gallery/page.tsx`
- **Client component** (`"use client"`)
- Filterable masonry grid with 7 category buttons: All, Interior, Equipment, Cardio, Warm-Up, Posing, Transformations
- 12 photos hardcoded in the `photos` array — all Unsplash placeholders
- **To add real photos:** replace `src` values in the `photos` array with real image paths or URLs

---

### FAQ — `src/app/faq/page.tsx`
- Data from `src/data/faqs.ts`
- `<FaqAccordion>` component
- JSON-LD FAQPage schema injected via `<script>` tag
- "Didn't find your answer?" section with WhatsApp and Contact links

**To add/edit FAQ questions:** edit `src/data/faqs.ts`

---

### Free Trial — `src/app/free-trial/page.tsx`
- 5-item perks list (hardcoded inline)
- `<BmiCalculator>` interactive widget
- `<TrialForm>` multi-step form (3 steps: Name → Phone → Goal & Timing)
- Form submits to `/api/lead` and simultaneously opens WhatsApp

---

### Contact — `src/app/contact/page.tsx`
- 4 contact cards: Call, WhatsApp, Email, Visit (all data from `site`)
- Google Maps iframe (embed URL from `site.mapsEmbed`)
- Opening hours list (data from `site.hours`)

---

## API

### `src/app/api/lead/route.ts`
**POST `/api/lead`** — receives free trial form submissions.

- Validates payload with Zod: `{ name, phone, goal, timing }`
- Rate limits: 1 lead per IP per 20 seconds (in-memory Map)
- Sends email via **Resend** if `RESEND_API_KEY` env var is set
- Falls back to `console.log` if no API key (dev mode)
- Email recipient: `LEAD_INBOX` env var, defaults to `contact@universalgymumred.com`
- Always returns `{ ok: true }` so the WhatsApp fallback (opened client-side) still works

**Required env vars (`.env.local`):**
```
RESEND_API_KEY=re_...
LEAD_INBOX=your@email.com
LEAD_FROM=Universal Gym Leads <noreply@yourdomain.com>
```

---

## Components

### Layout Components (`src/components/layout/`)

| File | Description |
|---|---|
| `Navbar.tsx` | Fixed header. Transparent when at top, white/blur when scrolled. Hamburger menu on mobile. 10 nav links + "Free Trial" button. **Client component.** |
| `Footer.tsx` | 4-column dark footer: brand, quick links, contact info, social + WhatsApp CTA. |
| `WhatsAppFAB.tsx` | Floating WhatsApp button (bottom-right). Shows "Chat with us" label after 3s delay; dismissible via sessionStorage. **Client component.** |
| `MobileCtaBar.tsx` | Fixed bottom bar on mobile only (hidden on lg+). Call Now / Free Trial split. Hidden on `/free-trial` page. **Client component.** |
| `SmoothScroll.tsx` | Mounts Lenis smooth scroll library. Renders nothing visible. **Client component.** |
| `AngleDivider.tsx` | SVG angled section divider (utility, not currently used in any page). |

**Navbar links array** (edit in `Navbar.tsx` lines 7–18):
```
Home / About / Coach / Equipment / Ladies Batch / Results / Membership / Gallery / FAQ / Contact
```

---

### Section Components (`src/components/sections/`)

| File | Description | Data source |
|---|---|---|
| `Hero.tsx` | Homepage hero. Background image: `public/images/hero_gym_dark_neon.png`. Stats counters (10000, 500, 50). Hours panel uses `site.hours`. **Client component.** | `site.ts` |
| `TrustBadges.tsx` | 6-badge icon strip. Content hardcoded inline. | — |
| `AboutTeaser.tsx` | 4-card "why" grid + "Read Our Story" link. Content hardcoded inline. | — |
| `LadiesBatch.tsx` | Dark section with ladies batch promo. Background image from Unsplash. Content hardcoded inline. | — |
| `PlansGrid.tsx` | Monthly/annual toggle + 3 plan cards. Highlight card for "Pro". **Client component.** | `src/data/plans.ts` |
| `CtaBand.tsx` | Dark CTA banner at bottom of pages. | `site.ts` (WhatsApp link) |
| `SectionHeader.tsx` | Reusable eyebrow + h2 + description block. Props: `eyebrow`, `title`, `description`, `center`, `dark`. | — |
| `GoogleReviews.tsx` | Horizontal scroll review cards + aggregate badge. Prev/next buttons. **Client component.** | `src/data/reviews.ts` |
| `TestimonialCarousel.tsx` | Auto-advancing before/after carousel. 5.5s interval. **Client component.** | `src/data/testimonials.ts` |
| `TransformationGrid.tsx` | 3-column before/after grid cards. **Client component.** | `src/data/testimonials.ts` |
| `BeforeAfterSlider.tsx` | Draggable image comparison slider. Keyboard accessible (arrow keys). **Client component.** | props: `before`, `after`, `alt` |
| `FaqAccordion.tsx` | Animated accordion. First item open by default. **Client component.** | `src/data/faqs.ts` |
| `EquipmentTabs.tsx` | Tab buttons per muscle group + animated grid of equipment cards. Clicks open `<Lightbox>`. **Client component.** | `src/lib/equipment.ts` |
| `Lightbox.tsx` | Full-screen image overlay. Prev/next navigation. **Client component.** | props from EquipmentTabs |
| `TrialForm.tsx` | 3-step form: Name → Phone → Goal & Timing. Submits to `/api/lead` + opens WhatsApp. **Client component.** | `site.ts`, `/api/lead` |
| `BmiCalculator.tsx` | Interactive BMI slider widget with category + advice. **Client component.** | — |

---

### Motion Components (`src/components/motion/`)

| File | Description |
|---|---|
| `Reveal.tsx` | Fade-up animation on scroll-into-view. Props: `delay` (seconds), `y` (px offset, default 24), `className`. Respects `prefers-reduced-motion`. |
| `Counter.tsx` | Animated number counter (counts up when in view). Props: `to` (number), `suffix` (string), `duration` (seconds, default 1.6). Respects `prefers-reduced-motion`. |

---

## Data Files (`src/data/`)

### `src/data/plans.ts`
Three membership plans: **Starter**, **Pro** (highlighted, "Most Popular"), **Elite**.

```typescript
Plan = { name, monthly (₹), annual (₹ total), features[], highlight?, badge? }
```

Current prices:
- Starter: ₹800/mo · ₹6,500/yr
- Pro: ₹1,000/mo · ₹8,500/yr
- Elite: ₹1,500/mo · ₹13,000/yr


Helper `planPrice(plan, billing)` returns `{ display, unit, save }`.

---

### `src/data/faqs.ts`
8 FAQ entries. Type: `Faq = { q: string, a: string }`.  
**Topics covered:** membership inclusions, joining fee, freeze policy, diet plans, ladies batch, experience level, timings, location.

---

### `src/data/coach.ts`
Two exports:

**`coach`** object:
```
name / title / photo (Unsplash placeholder) / bio / experience / achievements[] / specializations[]
```

**`certifications`** array (4 items):
```
{ title, issuer, image }
```
Issuers: ISSA, NSCA, K11 Academy, IBBF.  
**All photos are Unsplash placeholders — replace with real coach photo and cert images.**

---

### `src/data/testimonials.ts`
`transformations` array — 3 entries.  
Type: `Transformation = { name, duration, result, quote, before (img url), after (img url) }`

Current members: Rahul S. (lost 18 kg, 6 months), Priya M. (toned, 4 months), Amit K. (gained 12 kg lean, 8 months).  
**All before/after images are Unsplash placeholders.**

---

### `src/data/reviews.ts`
`reviews` array — 5 review entries.  
Type: `Review = { author, initial, rating, date, text }`

`reviewStats` object: `{ source: "Google", total: 127, average: 4.8 }`

**These are placeholder reviews. Replace with real Google reviews and update `reviewStats`.**

---

## Library Files (`src/lib/`)

| File | Purpose |
|---|---|
| `site.ts` | Single source of truth for all gym info (see above) |
| `equipment.ts` | Reads `public/images/equipment/<slug>/` folders for real photos; falls back to Unsplash placeholders. Categories: chest, back, shoulders, legs, arms, core, cardio. |
| `utils.ts` | `cn(...classes)` — Tailwind class merger (clsx + tailwind-merge). `BLUR_DATA_URL` — base64 blur placeholder for next/image. |

---

## SEO & Crawling

| File | Purpose |
|---|---|
| `src/app/robots.ts` | robots.txt — controls crawler access |
| `src/app/sitemap.ts` | Generates XML sitemap |

---

## Public Assets

```
public/
  images/
    hero_gym_dark_neon.png          ← Hero background image
    equipment/
      arms/       ← Drop real equipment photos here (.jpg/.png/.webp)
      back/
      cardio/
      chest/
      core/
      legs/
      shoulders/
```

All equipment subdirectories currently contain only a `.gitkeep` placeholder.  
The `getEquipment()` function automatically picks up any image files dropped in these folders.

---

## Common Edit Scenarios

### Change phone / WhatsApp / email / address
→ Edit `src/lib/site.ts` — everything updates everywhere automatically.

### Change opening hours
→ Edit `site.hours` array in `src/lib/site.ts`.

### Change membership prices or features
→ Edit `src/data/plans.ts`.

### Add or edit FAQ items
→ Edit `src/data/faqs.ts`.

### Update coach profile
→ Edit `src/data/coach.ts` — replace `photo` URL with real image, update `name`, `bio`, `achievements`, `certifications`.

### Add a transformation story
→ Add entry to `transformations` array in `src/data/testimonials.ts`.

### Add real equipment photos
→ Drop `.jpg`/`.png`/`.webp` files into `public/images/equipment/<category>/`. Filenames become the display name (e.g. `flat-bench-press.jpg` → "Flat Bench Press").

### Replace Google reviews
→ Edit `src/data/reviews.ts` array and update `reviewStats.total` / `reviewStats.average`.

### Update social media links
→ Edit `src/components/layout/Footer.tsx` — the Instagram and Facebook `href="#"` placeholders (lines 46, 49).

### Update hero background image
→ Replace `public/images/hero_gym_dark_neon.png` with a new file (keep the same filename), or change the `POSTER` constant in `src/components/sections/Hero.tsx` line 8.

### Add a nav link
→ Edit the `links` array in `src/components/layout/Navbar.tsx` lines 7–18.

### Enable email leads
→ Create `.env.local` with `RESEND_API_KEY`, `LEAD_INBOX`, and optionally `LEAD_FROM`.

---

## Key Patterns

- **`"use client"` boundary:** All interactive components are client components. Static page shells and purely visual server components are server components (no directive).
- **`<Reveal>` wrapper:** Used on almost every card/section to provide scroll-triggered fade-up animation. Wrap any element: `<Reveal delay={0.1}>...</Reveal>`
- **`<SectionHeader>` pattern:** Most sections start with `<SectionHeader eyebrow="..." title="..." description="..." />`. Pass `dark` prop on navy backgrounds. Pass `center` for centred alignment.
- **Dynamic imports:** `GoogleReviews`, `TestimonialCarousel`, `TransformationGrid`, `FaqAccordion` are lazy-loaded on the homepage to improve LCP.
- **Equipment images:** Server-side file read via `fs` in `src/lib/equipment.ts`. Only runs at build time / SSR.
