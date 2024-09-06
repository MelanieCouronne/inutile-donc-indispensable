<template>
  <button
    class="z-50 text-sm font-medium text-gray-400 bg-white p-3 hover:bg-teal-500 hover:text-white rounded-full transition duration-150 ease-in-out cursor-pointer flex items-center justify-center border border-gray-400 hover:border-white"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.3"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        :d="props.svgPath"
      ></path>
    </svg>
  </button>
</template>

<script setup>
  const props = defineProps({
    svgPath: { String, required: true },
  });
</script>
