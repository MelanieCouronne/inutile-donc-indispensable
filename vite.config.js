import { fileURLToPath } from "node:url";
import path from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// const base =
//   process.env.NODE_ENV === "production" ? process.env.VITE_APP_BASE_URL : "/";

export default defineConfig({
  plugins: [vue()],
  base: "/inutile-donc-indispensable/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
