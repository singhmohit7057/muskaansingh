# Muskaan Singh — Portfolio Website

Personal portfolio and brand site for **Muskaan Singh**, founder of [Label Muskaan Singh](https://labelmuskaansingh.in) and Ibtida — contemporary ethnic fashion brands rooted in Indian craftsmanship.

Live: [muskaansingh.in](https://muskaansingh.in) · [muskaansingh.vercel.app](https://muskaansingh.vercel.app)

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v3 — Neumorphic / Soft UI design system
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Forms**: Web3Forms API
- **Deployment**: Vercel

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, as seen on, Instagram grid |
| `/about` | About Muskaan Singh |
| `/brand` | Label Muskaan Singh & Ibtida |
| `/collection` | All collections |
| `/content` | Brand collaborations |
| `/press` | Press & media coverage |
| `/contact` | Contact & collaboration forms |
| `/privacy` | Privacy policy |
| `/terms` | Terms of use |
| `/cookies` | Cookies policy |

## Getting Started

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the root (see `.env.example`):

```
VITE_WEB3FORMS_CONTACT_KEY=your_key_here
VITE_WEB3FORMS_COLLAB_KEY=your_key_here
```

Get your free access key at [web3forms.com](https://web3forms.com).

## Build & Deploy

```bash
npm run build
```

Deploy to Vercel — import the GitHub repo, add env vars in the Vercel dashboard, and deploy. SPA routing is handled by `vercel.json`.

## SEO & AEO

- Per-page `<title>`, `<meta description>`, and canonical via `useSEO` hook
- Per-page structured data (WebPage, BreadcrumbList, FAQPage, ItemList, ContactPage) via `useSchema` hook
- Global schemas: `Person`, `Organization`, `WebSite` + `SearchAction`
- `sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt`
- PWA `manifest.json`
- OG + Twitter card meta tags

## Design System

Neumorphic Soft UI built on:
- Background: `#E0E5EC`
- Accent: `#6C63FF` (violet)
- Secondary: `#38B2AC` (teal)
- Extruded shadow: `9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)`
- Inset shadow: `inset 6px 6px 10px rgb(163,177,198,0.6), inset -6px -6px 10px rgba(255,255,255,0.5)`
- Fonts: Plus Jakarta Sans (display) + DM Sans (body)
