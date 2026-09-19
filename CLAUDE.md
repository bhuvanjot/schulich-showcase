# bhuvanjot.com

Personal portfolio site for Bhuvanjot Arneja. Previously built in Lovable; the
Lovable integration was removed and this repo is now the single source of truth.

## Stack

TanStack Start (SSR) · React 19 · Tailwind CSS 4 · Vite 8 · Bun

## Commands

Bun is at `~/.bun/bin/bun` (also on PATH via `~/.zshrc`).

```sh
bun run dev      # http://localhost:8080
bun run build    # production build
bun run lint
```

## Where to edit

- `src/routes/index.tsx` — the entire page: every section and all copy. This is
  the file to change for content edits.
- `src/routes/__root.tsx` — document shell, default SEO meta, 404 + error pages.
  Note `index.tsx` overrides the title/description defined here.
- `src/styles.css` — design tokens (colours, fonts). Change theme here, not in
  component classes.
- `src/components/ui/*` — shadcn/ui primitives. Mostly unused; don't assume a
  file here is referenced.

## Build and deploy

- Netlify builds from `main` on every push; a push deploys to production.
- Nitro auto-detects Netlify at build time and emits `.netlify/functions-internal/`
  for SSR plus `dist/` as the publish dir. Set `NITRO_PRESET` only to override.
- Verify a Netlify-shaped build locally with `NETLIFY=true bun run build`.

## Conventions

- Prettier formats on `bun run format`; keep the existing 100-col, double-quote style.
- The SSR error path (`src/server.ts`, `src/lib/error-capture.ts`,
  `src/lib/error-page.ts`) exists because h3 swallows in-handler throws into an
  opaque JSON 500. Don't remove it.
