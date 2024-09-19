import { fileURLToPath } from "node:url";
import path from "path";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hash = Math.floor(Math.random() * 90000) + 10000;

export default defineConfig(({ mode }) => {
  // Charger les variables d'environnement
  const env = loadEnv(mode, process.cwd());

  console.log("🚀 ~ Config VITE ~ ");

  console.log("NODE_ENV:", mode);
  console.log("VITE_APP_BASE_URL:", env.VITE_APP_BASE_URL);

  console.log("🚀 ~ Fin ~ ");
  console.log("");

  return {
    plugins: [vue()],
    base: mode === "production" ? env.VITE_APP_BASE_URL : "/",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: `assets/[name]` + hash + `.js`,
          chunkFileNames: `assets/[name]` + hash + `.js`,
          assetFileNames: `assets/[name]` + hash + `.[ext]`,
        },
      },
    },
    server: {
      watch: {
        usePolling: true,
      },
    },
  };
});
