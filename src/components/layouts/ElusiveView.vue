<template>
  <div id="main-container" ref="containerDimensions" @mousemove="runAway">
    <button
      ref="buttonRunAway"
      :style="{ left: `${position.x}px`, top: `${position.y}px` }"
      class="absolute text-sm font-medium py-2 px-2 bg-teal-500 text-white rounded-md cursor-pointer transition duration-50 ease-in-out"
    >
      <span>&nbsp; Un titre</span>
    </button>
  </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from "vue";

  const position = ref({ x: 0, y: 0 });
  const containerDimensions = ref(null);
  const buttonRunAway = ref(null);

  const getContainerDimensions = () => {
    if (!containerDimensions.value) return { width: 0, height: 0 };

    return {
      width: containerDimensions.value.clientWidth,
      height: containerDimensions.value.clientHeight,
    };
  };

  const getbuttonDimension = () => {
    if (!buttonRunAway.value) return { buttonWidth: 0, buttonHeight: 0 };

    const w = buttonRunAway.value ? buttonRunAway.value.offsetWidth : 0;
    const h = buttonRunAway.value ? buttonRunAway.value.offsetHeight : 0;

    return {
      buttonWidth: w,
      buttonHeight: h,
    };
  };

  const setCenter = () => {
    const { width, height } = getContainerDimensions();
    const { buttonWidth, buttonHeight } = getbuttonDimension();

    const x = (width - buttonWidth) / 2;
    const y = (height - buttonHeight) / 2;
    return { x, y };
  };

  const runAway = () => {
    buttonRunAway.value.style = `transform: translate(${
      Math.random() * 80 - 40
    }vw, ${Math.random() * 80 - 40}vh);`;
    buttonRunAway.value.innerText = "Not way, Jose !";
  };

  onMounted(() => {
    position.value = setCenter();
    window.addEventListener("mousemove", runAway);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", runAway);
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
