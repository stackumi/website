// @ts-check
import { defineConfig } from 'astro/config';

// A static site: one page, no server runtime. Cloudflare Pages serves `dist/` as-is.
export default defineConfig({
  output: 'static',
  build: { inlineStylesheets: 'always' },
});
