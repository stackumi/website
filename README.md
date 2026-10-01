# stackumi.com

The placeholder splash page for stackumi: the mark and the wordmark on the slate ground, nothing
else, while the product is still private. One static Astro page; no server runtime.

## Run

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # writes dist/
```

Node 22+ and pnpm 10 (`corepack enable` installs the pinned pnpm from `package.json`).

## Deploy (Cloudflare Pages)

Connect this repository in the Cloudflare dashboard with:

| Setting | Value |
|---|---|
| Framework preset | Astro |
| Build command | `pnpm build` |
| Build output directory | `dist` |
| Node version | `22` (read from `.node-version`) |

`public/robots.txt` and the page's `noindex` meta keep the placeholder out of search engines; remove
both when the site goes public.

## Identity

The mark, wordmark and colours follow `docs/design/stackumi-visual-identity.md` in the main
repository. The wordmark is Sora Bold converted to outlines, so no font is loaded at runtime.
