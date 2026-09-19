# bhuvanjot.com

Personal site of Bhuvanjot Arneja. TanStack Start (SSR) + React 19 + Tailwind CSS 4,
deployed to Netlify from `main`.

## Running locally

Requires [Bun](https://bun.sh).

```sh
bun install
bun run dev      # http://localhost:8080
```

## Scripts

| Command            | What it does                                  |
| ------------------ | --------------------------------------------- |
| `bun run dev`      | Dev server with hot reload on port 8080       |
| `bun run build`    | Production build into `.output/`              |
| `bun run preview`  | Serve the production build locally            |
| `bun run lint`     | ESLint                                        |
| `bun run format`   | Prettier write                                |

## Where things live

Almost all editing happens in three files:

| File                   | Contains                                              |
| ---------------------- | ----------------------------------------------------- |
| `src/routes/index.tsx` | Every section of the page and all of its copy         |
| `src/routes/__root.tsx`| Document shell, default SEO meta, 404 and error pages |
| `src/styles.css`       | Design tokens — colours, fonts, spacing               |

Supporting files: `src/routes/sitemap[.]xml.ts` (generated sitemap), `src/server.ts`
and `src/lib/error-*.ts` (SSR error handling), `src/components/ui/*` (shadcn/ui
primitives, mostly unused).

## Deploying

Netlify builds from `main` on every push. Nitro auto-detects Netlify at build time;
set `NITRO_PRESET` only to override the target.
