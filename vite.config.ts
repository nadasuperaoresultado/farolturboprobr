// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app may break with duplicate plugins:
//   - TanStack devtools, tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro, VITE_* env injection, @ path alias, React/TanStack dedupe, error logger
//     plugins, and sandbox detection.
// Never set ssr.external or resolve.external: the Worker has no runtime module resolution.
// Never add compression: hosting already compresses at the edge.
// Select Nitro's Vercel preset only for Vercel builds; preserve Lovable's default elsewhere.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isVercelBuild =
  (Boolean(process.env.VERCEL) && process.env.VERCEL !== "0") ||
  Boolean(process.env.VERCEL_URL);

export default defineConfig({
  tanstackStart: {
    // Preserve the existing custom SSR server entry.
    server: { entry: "server" },
  },
  ...(isVercelBuild
    ? {
        nitro: {
          preset: "vercel",
        },
      }
    : {}),
});
