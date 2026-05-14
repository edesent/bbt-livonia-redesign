# Bethel Baptist Church Livonia Redesign

One-page redesign concept for Bethel Baptist Church — Livonia, Michigan. Pastor Ryan Buja.

- Repo: `edesent/bbt-livonia-redesign` — deploys to Vercel automatically on push to `main`.

## For AI editors (ChatGPT, Claude, etc.) — read this before editing

This project's conventions differ from older Next.js documentation. **Following an out-of-date pattern will fail the production build and the site will silently roll back to a previous deploy** — meaning your edit appears to "404" or simply not happen.

### Stack snapshot

| Thing | Version / Setting |
| --- | --- |
| Next.js | **16.2.6** (App Router, Server Components by default) |
| React | 19 |
| Tailwind | **v4** (CSS-first config in `src/app/globals.css`, no `tailwind.config.js`) |
| TypeScript | strict — `next build` fails on any type error |
| Hosting | Vercel — push to `main` triggers a production deploy in ~30s |

### Next.js 16 conventions that bite older code

1. **Dynamic route `params` is a Promise.** Pages must be `async` and `await` params.
   ```ts
   export default async function Page({
     params,
   }: {
     params: Promise<{ slug: string }>;
   }) {
     const { slug } = await params;
   }
   ```
2. **`searchParams` is also a Promise.**
3. **`generateMetadata` is async.**
4. **`<Image>` remote hosts must be allow-listed** in `next.config.ts` under `images.remotePatterns`.
5. **Tailwind v4** — no `tailwind.config.js`. Theme tokens live in `src/app/globals.css` under `@theme`.

### Project shape

- One-page concept. Routes are just `/`.
- `public/` — Bethel logo + church photos (`bethel-logo.jpeg`, `bethel_baptist_church_transparent_purple.png`, `church-family.jpeg`, `sanctuary-worship.jpg`, plus the originals from the existing site).
- Most copy is in `src/app/page.tsx` itself for now; if the build grows, factor copy out to `src/lib/site.ts`.

### Editing safely

- For any change to an existing file, prefer a targeted edit. Don't rewrite the whole file unless you're truly rewriting it end-to-end.
- Before pushing, mentally trace the change against the conventions above. If you can't, **don't push** — the type-check will fail on Vercel and silently keep the old build live.

## Commands

```bash
npm run dev    # local dev server (http://localhost:3000)
npm run build  # production build — same type-check Vercel runs
npm run lint
```

## Repo conventions

- Default branch is `main`. Every push to `main` ships to production.
- Commits should describe the *why*, briefly.
- Photos go under `public/<descriptive-name>.<ext>` at full size — don't compress or resize.
