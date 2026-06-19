# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing landing page for a German glazier / Handwerker business
(fictional "Glaserei Mustermann"). Built with **Astro 5** (static output) and
**Tailwind CSS v4**. All UI copy is in German. Single-route and content-driven.

## Commands

```bash
pnpm install        # install deps (pnpm is the package manager; pnpm-lock.yaml is committed)
pnpm dev            # dev server with HMR at http://localhost:4321
pnpm build          # runs `astro check` (type-check) THEN `astro build` -> dist/
pnpm preview        # serve the production build
pnpm check          # type-check only (astro check)
pnpm format         # Prettier over src/
```

There is no unit-test runner configured. `astro check` (run as part of `pnpm build`)
is the type/diagnostics gate — treat a clean `pnpm build` as the bar for "done".

## Architecture

- **Content is centralized in `src/data/site.ts`.** Business name, contact info,
  services, stats, and process steps are exported from here as typed objects.
  Components import and render this data — they hold no hard-coded copy. Routine
  text/service changes happen in this one file, not in markup.
- **`src/layouts/Layout.astro`** is the single HTML shell: `<head>` meta, Open
  Graph tags, Google Fonts (Inter + Fraunces), JSON-LD `LocalBusiness` structured
  data (also fed from `site.ts`), and a skip link. Pages render into its `<slot>`.
- **`src/pages/index.astro`** is the only route. It composes section components
  (`Header → Hero → Services → Process → Contact → Footer`) inside `Layout`.
  Adding a section = build a component in `src/components/` and slot it here.
- **`src/components/Icon.astro`** is a small inline-SVG icon set keyed by name
  (`glass | door | shield | wrench | phone | clock | pin`). Service items in
  `site.ts` reference icons by this string key. Add an icon by adding a path to
  the `paths` map there.

## Styling system (Tailwind v4)

- Tailwind is wired via the **Vite plugin** (`@tailwindcss/vite` in
  `astro.config.mjs`), not a `tailwind.config.js`. There is no JS config file.
- **Design tokens are defined in `src/styles/global.css` inside `@theme {}`.**
  Tokens there automatically become Tailwind utilities — e.g. `--color-brand-accent`
  → `bg-brand-accent` / `text-brand-accent`. Add or change colors, fonts, spacing,
  and radii in that block rather than hard-coding values in components.
- Custom semantic tokens in use: `ink`, `ink-soft`, `surface`, `surface-raised`,
  `line`, `brand-accent`, `brand-accent-strong`, `brand-glass`, `brand-deep`,
  plus `text-hero` / `text-section` font sizes and `radius-card`.
- `prefers-reduced-motion` is already handled globally in `global.css`.

## Theming (light / dark)

Dark mode is a **token-override**, not per-component `dark:` utilities:

- `:root[data-theme="dark"]` in `global.css` redefines only the page-chrome
  tokens (`ink`, `ink-soft`, `surface`, `surface-raised`, `line`) + `color-scheme`.
  Every existing utility (`bg-surface`, `text-ink`, …) adapts automatically.
- The always-dark "deep" panels (Hero, Contact, skip link, header logo chip)
  use `brand-deep` + the **constant `on-deep`** token instead of `surface`, so
  they look identical in both themes. When adding markup on a dark panel, use
  `on-deep` for foreground/borders — never `surface`.
- Theme is set **before paint** by the inline `is:inline` script in
  `Layout.astro` `<head>` (saved `localStorage.theme` → else `prefers-color-scheme`).
  The toggle button + persistence live in `Header.astro`; the sun/moon icon
  swap is driven by CSS in `global.css` keyed on `[data-theme="dark"]`.

## Content

All copy/services/contact in `src/data/site.ts` are **fictional placeholders**
("Glaserei Mustermann", Musterstadt, example phone/email). They were loosely
inspired by a real glazier's site for structure and tone only — no real names,
addresses, or numbers are used. Replace placeholders with the real client's
details before launch. The footer copyright credits the project author
(`site.author`).

## Conventions

- Path alias `@/*` → `src/*` (set in `tsconfig.json`), e.g. `import { site } from "@/data/site"`.
- TypeScript runs in Astro's `strict` config; keep components typed (use the
  `interface Props` pattern as in existing components).
- Keep new copy in German to match the existing site.

## Pre-launch placeholders (intentionally stubbed)

- Contact form in `src/components/Contact.astro` posts to **Web3Forms** via a
  client `fetch` (inline success state + `botcheck` honeypot). It needs
  `PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env` (see `.env.example`); until set, the
  script blocks submit with a "not configured" message.
- `site` URL in `astro.config.mjs` is `https://example.com` — set the real domain
  (affects canonical/OG URLs).
- Impressum / Datenschutz links in `Footer.astro` point to `#`.
