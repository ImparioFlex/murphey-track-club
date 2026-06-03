# Murphey Track Club Website

## Tech Stack
- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- Fonts: Barlow Condensed (headings) + DM Sans (body)
- Icons: Lucide React
- Images: Local in `/public/images/` (from Grassroots Elite starter, swap for real MTC photos)

## Local Development
```bash
cd "Impario Flex/demos/murphey-track-club"
npm run dev    # Dev server on port 46500
npm run build  # Production build
```
Local dev server runs on: http://localhost:46500

## Key Files
- `src/app/globals.css` — Color tokens and Tailwind theme
- `src/lib/images.ts` — All image paths (single file to swap images)
- `src/components/Navbar.tsx` — Sticky nav with mobile menu
- `src/components/Footer.tsx` — Site footer with contact info
- `src/components/SponsorStrip.tsx` — Scrolling sponsor marquee

## Color Palette
- Charcoal: #1A1A1E | Charcoal Mid: #3D3D42
- Orange: #F5901B | Orange Dark: #D4770A | Orange Light: #FFB347
- Cream: #FFF8F0 | Cream Dark: #FFE8CC
- Deep: #0D0D0F (near black for dark sections)

## Pages
- `/` — Home (hero, stats, pillars, mission, schedule preview, training info, sponsors, CTA)
- `/about` — History, mission, community impact, Ed Murphey legacy
- `/coaches` — 10 coaching staff with roles
- `/schedule` — Training schedule + 2026 competition calendar
- `/join` — Registration details, $100 fee, link to registration
- `/donate` — Individual + corporate donation options
- `/meet` — Ed Murphey Classic info + links back to edmurpheyclassic.com

## Key Content
- Tagline: "Keep Our Kids On The Right Track"
- Location: Halle Stadium, Memphis, TN
- Training: Mon/Tue/Thu 5:30-7:00 PM, starts June 1
- Fee: $100 (USATF membership + uniform)
- Ages: Elementary, middle, high school
- Executive Director: Alisa Seymour
- Founder: Eddie Murphey
- AAU + USATF sanctioned, Est. 2023
