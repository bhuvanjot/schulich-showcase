import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

// Deploy target. Nitro auto-detects the host at build time (Netlify sets NETLIFY=1),
// so this only needs to be set to override it — e.g. NITRO_PRESET=node-server.
const preset = process.env.NITRO_PRESET ?? process.env.SERVER_PRESET;

export default defineConfig({
  server: {
    port: 8080,
  },
  resolve: {
    // Vite 8 resolves the "@/*" -> "./src/*" mapping from tsconfig.json natively.
    tsconfigPaths: true,
    // React and the TanStack packages must resolve to a single copy, or hooks
    // and router context break at runtime.
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-store"],
  },
  plugins: [
    tanstackStart({
      // Route SSR through src/server.ts, which wraps the default entry so a
      // crash renders the static error page instead of an h3 JSON 500.
      server: { entry: "server" },
    }),
    viteReact(),
    tailwindcss(),
    nitro(preset ? { config: { preset } } : undefined),
  ],
});
