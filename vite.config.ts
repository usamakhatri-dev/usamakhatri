// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Base path is "/" for the Lovable preview and published site. The GitHub
// Pages workflow sets VITE_BASE_PATH=/usamakhatri/ so assets resolve under
// the repository subpath (https://usamakhatri-dev.github.io/usamakhatri/).
const base = process.env["VITE_BASE_PATH"] ?? "/";

export default defineConfig({
  vite: {
    base,
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Static prerender: the whole site is a single page, so "/" is rendered
    // to index.html at build time and can be served by static hosts such as
    // GitHub Pages. Auto-discovery is off so nothing else is captured.
    pages: [{ path: "/" }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
