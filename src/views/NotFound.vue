<template>
  <main
    id="not-found"
    class="h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-orange-50 dark:bg-slate-600 font-poppins pb-5"
  >
    <div
      @animationend="hideNotFound"
      v-if="isNotFoundVisible"
      id="cartouche"
      class="border-4 border-black bg-white py-2 px-6 rounded-3xl flex items-center leading-relaxed drop-shadow-custom hinge"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#FFF7ED"
        viewBox="0 0 25 25"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-16 text-black"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
        />
      </svg>

      <h1 class="">&nbsp;404 Not found!</h1>
    </div>
    <p
      class="mt-6 antialiased tracking-normal text-2xl font-base leading-snug text-gray-900 dark:text-gray-400"
    >
      Cette page n'existe pas
    </p>
    <RouterLink
      class="mt-3 text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
      :to="{ name: 'accueil' }"
    >
      <p class="p-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-4 inline-block align-middle mb-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>

        Retour à l'accueil
      </p>
    </RouterLink>
  </main>
</template>

<script setup>
  import { ref } from "vue";
  import { RouterLink } from "vue-router";

  /*****************************************
   *                Animation                *
   ******************************************/

  const isNotFoundVisible = ref(true);

  const hideNotFound = () => {
    isNotFoundVisible.value = false;
  };
</script>

<style scoped>
  h1 {
    font-family: "Lobster Two";
    font-weight: 400;
    font-size: 40px;
  }
  .drop-shadow-custom {
    filter: drop-shadow(0 15px 0px rgb(0 0 0 / 0.1));
  }

  .hinge {
    animation: hinge 2s ease 1;
    animation-delay: 2s;
    animation-iteration-count: 1;
  }

  @keyframes hinge {
    0% {
      transform: rotate(0);
      transform-origin: top left;
      animation-timing-function: ease-in-out;
    }
    20%,
    60% {
      transform: rotate(80deg);
      transform-origin: top left;
      animation-timing-function: ease-in-out;
    }
    40% {
      transform: rotate(60deg);
      transform-origin: top left;
      animation-timing-function: ease-in-out;
    }
    80% {
      transform: rotate(60deg) translateY(0);
      opacity: 1;
      transform-origin: top left;
      animation-timing-function: ease-in-out;
    }
    100% {
      transform: translateY(700px);
      opacity: 0;
    }
  }
</style>
