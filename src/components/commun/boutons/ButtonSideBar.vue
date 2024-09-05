<template>
  <button
    @click="emitOnClick"
    class="w-full text-left text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white rounded-md transition duration-150 ease-in-out cursor-pointer"
  >
    <svg
      class="w-6 h-6 fill-current inline-block"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path :d="props.svgPath"></path>
    </svg>
    <span>&nbsp;{{ props.title }}</span>
  </button>
</template>

<script setup>
  const props = defineProps({
    svgPath: { String, required: true },
    title: { String, required: true },
    componentName: { String, required: true },
  });

  const emit = defineEmits(["buttonClicked"]);

  const emitOnClick = () => {
    emit("buttonClicked", props.componentName);
  };
</script>
