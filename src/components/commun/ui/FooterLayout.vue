<template>
  <footer class="absolute bottom-0 right-0 px-5">
    <p class="text-xs font-light text-gray-400 dark:text-gray-400 text-center">
      Fait avec
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#F87171"
          viewBox="0 0 24 24"
          stroke-width="1.4"
          stroke="#F87171"
          class="size-4 inline-block animate-pulse"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </span>
      mais aussi avec
      <span
        ><a href="https://router.vuejs.org/installation.html" target="_blank"
          ><img
            src="/logos/vuejs-icon.svg"
            alt="Vue.js"
            title="Vue.js"
            class="grayscale hover:filter-none" /></a
      ></span>
      et
      <span
        ><a href="https://tailwindcss.com/docs/installation" target="_blank"
          ><img
            src="/logos/tailwindcss-icon.svg"
            alt="TailwindCSS"
            title="TailwindCSS"
            class="grayscale hover:filter-none" /></a
      ></span>
    </p>
  </footer>
</template>

<style scoped>
  img {
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
  }
</style>
