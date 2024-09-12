import { fileURLToPath } from "node:url";
import path from "path";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
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
  };
});
