# Abdul Rahman Alyoussef — portfolio

A one-page Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Motion portfolio for AI engineering and research work.

## Content map

- `data/profile.ts` — name, positioning, current focus, and contact details
- `data/education.ts` — education entries
- `data/experience.ts` — professional timeline entries
- `data/projects.ts` — featured and supporting project entries
- `data/interests.ts` — hobbies shown in the compact profile rail
- `data/schema.ts` — shared content types

Project reports can optionally be placed in `public/projects/` and referenced from a project as:

```ts
report: "/projects/project-name.pdf"
```

Report links open in a new tab automatically when the `report` field is present. The supplied source reports are intentionally not included in the public build; the portfolio uses them only as source material for concise project summaries.

## Local development

```bash
npm install
npm run dev
```

Use `npm run lint` and `npm run build` for the production checks.

## GitHub Pages

The site is configured as a static Next.js export and is automatically deployed by GitHub Actions from the `main` branch. The Pages build command is:

```bash
npm run build:pages
```

The generated static site is written to `out/`.
