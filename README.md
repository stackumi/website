# stackumi.com

The placeholder splash page for stackumi: the mark and the wordmark on the slate ground, nothing
else, while the product is still private. One static Astro page; no server runtime.

## Run

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # writes dist/
```

Node 24+ and pnpm 12 (`corepack enable` installs the pnpm pinned in `package.json`).
`pnpm-workspace.yaml` keeps the lockfile in the one-document form that GitHub's dependency graph,
and so Dependabot, can read. It also carries the one-day supply-chain hold, which an install never
bypasses, and the rulings on dependency install scripts. Dependabot proposes updates weekly,
waiting out the same one-day hold.

## Deploy (Cloudflare Workers, static assets)

`wrangler.jsonc` deploys `dist/` as static assets with no Worker script. Wrangler runs
`pnpm run build` itself before uploading. In the Worker's build settings in the Cloudflare
dashboard:

| Setting | Value |
|---|---|
| Build command | empty (or `pnpm build`; harmless) |
| Deploy command | `npx wrangler deploy` |
| Worker name | `website` (must match `name` in `wrangler.jsonc`) |
| Node version | `24.22.0` (read from `.node-version`) |
| pnpm version | from `packageManager` in `package.json` (the build image's own pnpm switches to it) |

**Keep `wrangler.jsonc`.** Without it, `wrangler deploy` runs its framework autoconfig, which adds
`@astrojs/cloudflare` (`astro add cloudflare`) and builds through the adapter. In October 2026 that
failed with "Failed to get static paths from the Cloudflare prerender server … getAllWithMetadata
is not a function", and a static page has no use for the adapter anyway.

`public/robots.txt` and the page's `noindex` meta keep the placeholder out of search engines; remove
both when the site goes public.

## Identity

The mark, wordmark and colours follow `docs/design/stackumi-visual-identity.md` in the main
repository. The wordmark is Sora Bold converted to outlines, so no font is loaded at runtime.
