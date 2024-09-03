<template>
  <div id="main-container" ref="containerDimensions">
    <button
      :style="{ left: `${position.x}px`, top: `${position.y}px` }"
      class="absolute text-sm font-medium py-2 px-2 bg-teal-500 text-white rounded-md cursor-pointer"
    >
      <span>&nbsp; Un titre</span>
    </button>
  </div>
</template>

<script setup>
  import { ref, nextTick, onMounted } from "vue";

  const position = ref({ x: 0, y: 0 });
  const containerDimensions = ref(null);

  const getContainerDimensions = () => {
    if (!containerDimensions.value) return { width: 0, height: 0 };
    const containerWidth = containerDimensions.value.clientWidth;
    const containerHeight = containerDimensions.value.clientHeight;

    console.log(containerWidth, containerHeight);

    return { width: containerWidth, height: containerHeight };
  };

  const getPositionCenterAtStart = () => {
    const { width, height } = getContainerDimensions();
    const buttonWidth = 50;
    const buttonHeight = 40;
    const x = (width - buttonWidth) / 2;
    const y = (height - buttonHeight) / 2;
    return { x, y };
  };

  onMounted(async () => {
    await nextTick();
    position.value = getPositionCenterAtStart();
    console.log("🚀 " + position.value.x);
    console.log("🚀 " + position.value.y);
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
</style>
