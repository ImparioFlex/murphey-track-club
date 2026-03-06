# Grassroots Elite Website

## Tech Stack
- Next.js (App Router) + TypeScript + Tailwind CSS v4
- Fonts: Barlow Condensed (headings) + DM Sans (body)
- Icons: Lucide React
- Images: Unsplash (URLs in `src/lib/images.ts`)

## Local Development
```bash
cd "Grassroots Running/grassroots-elite"
npm run dev    # Dev server on port 46283
npm run build  # Production build
```
Local dev server runs on: http://localhost:46283

## Key Files
- `src/app/globals.css` — Color tokens and Tailwind theme
- `src/lib/images.ts` — All Unsplash image URLs (single file to swap images)
- `src/components/GrassDivider.tsx` — Signature grass blade SVG section divider
- `src/components/Navbar.tsx` — Sticky nav with mobile menu
- `src/components/Footer.tsx` — Site footer

## Color Palette
- Dark Green: #1a3d2b | Forest Green: #1e5c38 | Mid Green: #2d8a4e
- Neon Green: #6dff6d | Light Neon: #a8ff78
- Off White: #f8faf8 | Mint BG: #f0f7f2 | Light Grey: #e8ede9

## Pages
- `/` — Home (hero, pillars, story, athletes teaser, coach, gear, sponsors, CTA)
- `/about` — Our story, Why Greenville, Coach bio, Inspirations
- `/train` — Elite group, Community squad, Weekly schedule
- `/athletes` — 4 fictional athlete profiles
- `/camps` — Elite Development Camp + Community Camp
- `/gear` — VS Athletics team store
- `/join` — 3-path join forms (Community, Elite, Camp)
