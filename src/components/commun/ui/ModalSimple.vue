<template>
  <div
    class="z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
  >
    <div
      class="relative flex flex-col rounded-xl bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white shadow-md max-w-xl border border-gray-300 dark:border-gray-700"
    >
      <div class="p-6">
        <div class="flex w-full justify-end">
          <button
            @click="emitToCloseModal"
            type="button"
            id="closeModal"
            class="inline-flex rounded-full bg-gray-50 dark:bg-slate-700 text-gray-400 dark:text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:ring-teal-400 focus:ring-offset-1"
          >
            <span class="sr-only">Close</span>
            <svg
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
              />
            </svg>
          </button>
        </div>
        <div class="text-center px-6">
          <h4
            class="block antialiased tracking-normal text-2xl font-semibold leading-snug text-gray-900 dark:text-white mb-6 mt-4"
          >
            <slot name="titre">Coucou</slot>
          </h4>
          <p
            class="block antialiased text-base font-light leading-relaxed text-inherit text-[20px] text-gray-500 dark:text-gray-400"
          >
            <slot name="texte"
              >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              culpa quae voluptatibus, fugiat, possimus nostrum deserunt
              provident in officiis illo quidem, odit amet quo impedit dolorem
              ipsam vitae neque aperiam?</slot
            >
          </p>
          <!-- <button
              class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-gray-900 gap-3 mt-8"
              type="button"
              data-ripple-light="true"
            >
              join our community
            </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const emit = defineEmits(["closeModal"]);

  const emitToCloseModal = () => {
    emit("closeModal");
  };
</script>
