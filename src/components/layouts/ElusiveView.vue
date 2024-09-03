<template>
  <div id="main-container" ref="containerDimensions">
    <button
      ref="buttonDimensions"
      :style="{ left: `${position.x}px`, top: `${position.y}px` }"
      class="absolute text-sm font-medium py-2 px-2 bg-teal-500 text-white rounded-md cursor-pointer"
    >
      <span>&nbsp; Un titre</span>
    </button>
  </div>
</template>

<script setup>
  import { ref, onMounted } from "vue";

  const position = ref({ x: 0, y: 0 });
  const containerDimensions = ref(null);
  const buttonDimensions = ref(null);

  const getContainerDimensions = () => {
    if (!containerDimensions.value) return { width: 0, height: 0 };

    return {
      width: containerDimensions.value.clientWidth,
      height: containerDimensions.value.clientHeight,
    };
  };

  const getButtonDimensions = () => {
    if (!buttonDimensions.value) return { buttonWidth: 0, buttonHeight: 0 };

    const w = buttonDimensions.value ? buttonDimensions.value.offsetWidth : 0;
    const h = buttonDimensions.value ? buttonDimensions.value.offsetHeight : 0;

    return {
      buttonWidth: w,
      buttonHeight: h,
    };
  };

  const setCenter = () => {
    const { width, height } = getContainerDimensions();
    const { buttonWidth, buttonHeight } = getButtonDimensions();

    const x = (width - buttonWidth) / 2;
    const y = (height - buttonHeight) / 2;
    return { x, y };
  };

  onMounted(() => {
    position.value = setCenter();
  });
</script>

<style scoped>
  #main-container {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 16px;
    margin: 0;
  }
  /* button {
    width: 150px;
    height: 40px;
  } */
</style>
