import { fileURLToPath } from "node:url";
import path from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  // Charger les variables d'environnement en fonction du mode

  plugins: [vue()],
  base:
    process.env.NODE_ENV === "production"
      ? import.meta.env.VITE_APP_BASE_URL
      : "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
