# Ahmad Al Arab — Portfolio

Personal portfolio site. Rebuilt in 2026 on Vite + React + TypeScript +
Tailwind CSS, replacing the original Create React App version.

## Stack

- [Vite](https://vite.dev) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (via `@tailwindcss/vite`)
- Deployed on Netlify (`netlify.toml` — `npm run build`, publishes `dist/`)

## Structure

```
src/
├── components/     # Nav, Hero, Work, ProjectCard, Skills, About, Contact, Footer
├── data/           # profile.ts (contact/links), projects.ts (project + skills content)
├── assets/         # optimized images
└── index.css       # Tailwind + design tokens (colors, fonts) via @theme
```

Project content lives in `src/data/projects.ts` — add or edit an entry
there to change what shows up in the Work section, no component changes
needed for routine updates.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
```
