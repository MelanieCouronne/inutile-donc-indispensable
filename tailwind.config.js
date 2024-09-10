/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsxm,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--main-color-1)",
        secondary: "var(--main-color-2)",
        accent: "var(--main-color-3)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
