# Nithid Guntasin — Portfolio

Personal portfolio site for an AI Engineer role. Built with Next.js and Tailwind CSS.

## Live site

[https://portfolio-topaz-kappa-94.vercel.app/](https://portfolio-topaz-kappa-94.vercel.app/)

## Sections

- **Nav** — sticky header with links to each section
- **Hero** — intro, Resume download, GitHub / LinkedIn / Email links
- **About** — profile summary
- **Experience** — AIAT contract role and Jasmine Technology Solution internship with key results
- **Voice Cloning Demo** — Thai TTS audio samples
- **Research** — JaiTTS (arXiv) publication
- **Projects** — Scrybe RAG academic chatbot and Thai Sentiment Analysis web app
- **Achievements** — Super AI Engineer Season 6 (Level 3 / Bronze Medal) and hackathons
- **Skills** — technical stack
- **Education** — SIIT, Computer Engineering, scholarship
- **Footer** — contact details (email, phone)

## Tech stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4

## Getting started

```bash
node --version # Use Node 24 LTS
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project structure

```
app/              # Next.js app router (layout, page, social preview image)
components/       # UI sections (Hero, About, Experience, etc.)
  ui.tsx          # Shared Section, Card, BulletList, ... building blocks
  icons.tsx       # Shared SVG icons
data/profile.ts   # All site content (text, links, metrics)
public/           # Static assets (photo, Resume, audio, camp photos)
  audio/          # Voice cloning demo samples
  super-ai/       # Super AI Engineer camp photos
```

## Updating content

Almost all text lives in `data/profile.ts`, so a CV update is usually a one-file edit.

| What to change | Where |
|---|---|
| Name, title, tagline, about, contact links | `profile` in `data/profile.ts` |
| Work experience & key results | `jobs` in `data/profile.ts` |
| Research, projects, achievements, skills, education | matching export in `data/profile.ts` |
| Camp photos | `superAI` in `data/profile.ts` + files in `public/super-ai/` |
| Colours | `@theme` block in `app/globals.css` |
| Resume file | replace `public/Resume_NithidGuntasin.pdf` |
| Profile photo | replace `public/photo.jpg` (also used in the social preview image) |
| Page title / SEO description | built from `profile` in `app/layout.tsx` |

## Deploy

Compatible with [Vercel](https://vercel.com/) and other Next.js hosts. Push to `main` to trigger deployment if CI/CD is connected.
