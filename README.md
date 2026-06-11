# Nithid Guntasin — Portfolio

Personal portfolio site for an AI/ML Engineer role. Built with Next.js and Tailwind CSS.

## Live site

[https://portfolio-topaz-kappa-94.vercel.app/](https://portfolio-topaz-kappa-94.vercel.app/)

## Sections

- **Hero** — intro, contact links, CV download
- **About** — profile summary
- **Experience** — Jasmine Technology Solution internship and key results
- **Research** — JaiTTS (arXiv) publication
- **Voice Cloning Demo** — Thai TTS audio samples
- **Projects** — Thai Sentiment Analysis web app
- **Achievements** — hackathons, scholarship, Super AI Engineer camp highlights
- **Skills** — technical stack
- **Education** — SIIT, Computer Engineering

## Tech stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4

## Getting started

```bash
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
app/              # Next.js app router (layout, page)
components/       # UI sections (Hero, About, Experience, etc.)
public/           # Static assets (photo, CV, audio, camp photos)
  audio/          # Voice cloning demo samples
  super-ai/       # Super AI Engineer camp photos
```

## Updating content

Most site content lives in `components/`. Common updates:

| What to change | File |
|---|---|
| Profile / about text | `components/About.tsx` |
| Work experience | `components/Experience.tsx` |
| Achievements & camp photos | `components/Achievements.tsx` |
| Skills | `components/Skills.tsx` |
| CV file | replace `public/CV_NithidGuntasin.pdf` |
| Profile photo | replace `public/photo.jpg` |
| Page title / SEO description | `app/layout.tsx` |

## Deploy

Compatible with [Vercel](https://vercel.com/) and other Next.js hosts. Push to `main` to trigger deployment if CI/CD is connected.
