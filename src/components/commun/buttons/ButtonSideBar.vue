<template>
  <button
    @click="emitOnClick"
    class="w-full text-left text-gray-700 dark:text-gray-600 py-3 md:py-2 px-2 hover:bg-teal-500 dark:hover:bg-emerald-400 hover:text-white dark:hover:text-slate-800 rounded-md transition duration-150 ease-in-out cursor-pointer"
  >
    <p class="p-0 text-sm md:text-xs font-medium md:font-base">
      <svg
        class="w-6 h-6 md:w-5 md:h-5 fill-current inline-block"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path :d="props.svgPath"></path>
      </svg>
      &nbsp;{{ props.title }}
    </p>
  </button>
</template>

<script setup>
  import { computed } from "vue";
  import { getViewportDimensions } from "@/utils/toolsBox";

  const props = defineProps({
    svgPath: { String, required: true },
    title: { String, required: true },
    componentName: { String, required: true },
  });

  const emit = defineEmits(["buttonClicked", "toggleSideBar"]);

  const isMobile = computed(() => getViewportDimensions().viewportWidth < 768);

  const emitOnClick = () => {
    emit("buttonClicked", props.componentName);
    if (isMobile.value) {
      emit("toggleSideBar");
    }
  };
</script>
