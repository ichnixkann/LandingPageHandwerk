# Handwerker Landing Page

A fast, static marketing landing page for a German glazier / Handwerker business,
built with **Astro 5** and **Tailwind CSS v4**. Static-first, near-zero JavaScript,
content driven from a single config file. All content is fictional placeholder
data (see `src/data/site.ts`) — swap in real client details before launch.

## Quick start

```bash
pnpm install
pnpm dev      # http://localhost:4321
```

## Scripts

| Command        | Purpose                                       |
| -------------- | --------------------------------------------- |
| `pnpm dev`     | Start the dev server with HMR                 |
| `pnpm build`   | Type-check (`astro check`) then build to `dist/` |
| `pnpm preview` | Serve the production build locally            |
| `pnpm check`   | Type-check only                               |
| `pnpm format`  | Format `src/` with Prettier                   |

## Editing content

All copy, services, stats, and contact details live in `src/data/site.ts`.
Edit that file to change text — components read from it, so no markup changes
are needed for routine copy updates.

## Contact form

The form posts to **Web3Forms** (static-friendly, no backend) with a `botcheck`
honeypot and an inline success state. Get a free key at https://web3forms.com,
then copy `.env.example` to `.env` and set `PUBLIC_WEB3FORMS_ACCESS_KEY`. Until
the key is set, the form blocks submit with a "not configured" message.

## Theming

Light/dark is toggled in the header and persisted to `localStorage`; the initial
theme follows the OS setting and is applied before paint (no flash).

## Before going live

- Set `PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env` (see above).
- Set the real domain in `astro.config.mjs` (`site`).
- Fill in Impressum / Datenschutz links in `src/components/Footer.astro`.
