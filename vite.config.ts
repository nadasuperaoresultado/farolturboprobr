// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app may break with duplicate plugins:
//   - TanStack Start, React, Tailwind, tsconfig paths, Nitro, VITE_* env injection,
//     @ path alias, React/TanStack dedupe, error logging, and sandbox detection.
// Keep the Lovable defaults for its own preview, but select Nitro's Vercel preset
// during Vercel builds so SSR routes are emitted for Vercel Functions.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isVercelBuild =
  (Boolean(process.env.VERCEL) && process.env.VERCEL !== "0") ||
  Boolean(process.env.VERCEL_URL);

export default defineConfig({
  tanstackStart: {
    // Preserve the custom SSR error wrapper.
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
