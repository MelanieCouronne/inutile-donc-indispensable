<template>
  <div
    class="h-screen w-full flex items-center justify-center overflow-hidden bg-orange-50 dark:bg-slate-600 font-poppins pb-5"
  >
    <div
      @animationend="handleAnimationEnd"
      v-if="isWelcomeVisible"
      id="cartouche"
      class="border-4 border-black bg-white -mt-12 md:mt-0 py-2 px-6 rounded-3xl flex items-center leading-relaxed drop-shadow-custom hinge"
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

      <h1 class="">&nbsp;Welcome!</h1>
    </div>
  </div>
</template>
<script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();

  /*****************************************
   *        Actions fin d'animation         *
   ******************************************/

  const isWelcomeVisible = ref(true);

  const handleAnimationEnd = () => {
    hideWelcome();
    setTimeout(() => {
      goToAccueil();
    }, 700);
  };

  const hideWelcome = () => {
    isWelcomeVisible.value = false;
  };

  const goToAccueil = () => {
    router.push({ path: "/accueil/make-my-point" });
  };
</script>

<style scoped>
  h1 {
    font-family: "Lobster Two";
    font-weight: 400;
    font-size: 40px;
  }
  .drop-shadow-custom {
    box-shadow: 0 15px 10px rgba(0, 0, 0, 0.1);
    filter: drop-shadow(0 15px 0px rgb(0 0 0 / 0.1));
  }

  .hinge {
    animation: hinge 2s ease infinite;
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
