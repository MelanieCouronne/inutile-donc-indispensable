import { fileURLToPath } from "node:url";
import path from "path";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Charger les variables d'environnement en fonction du mode
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [vue()],
    base: mode === "production" ? env.VITE_APP_BASE_URL : "/",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
