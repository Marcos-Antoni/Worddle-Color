import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        components: "/src/components",
        layouts: "/src/layouts",
        test: "/test",
        store: "/src/store"
      }
    }
  },
  integrations: [tailwind(), react()],
  output: "server",
  adapter: vercel()
});