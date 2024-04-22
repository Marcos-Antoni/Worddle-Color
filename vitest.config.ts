/// <reference types="vitest" />
import { getViteConfig } from "astro/config";
import react from "@vitejs/plugin-react";

export default getViteConfig({
  test: {
    environment: "happy-dom",
  },
  plugins: [react()],
});
