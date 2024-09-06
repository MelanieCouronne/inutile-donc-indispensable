/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsxm,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--main-color-1)",
        secondary: "rgb(var(--main-color-2)",
        accent: "rgb(var(--main-color-3)",
      },
    },
  },
  plugins: [],
};
