<template>
  <div
    id="main-container"
    ref="containerDimensions"
    :class="{ 'mobile-margin-top': isMobile }"
    @mousemove="runAway"
  >
    <button
      ref="buttonRunAway"
      :style="{ left: `${position.x}px`, top: `${position.y}px` }"
      class="absolute text-base font-medium py-4 px-6 bg-teal-500 text-white rounded-md cursor-pointer transition ease-in-out"
    >
      <span>Contactez-moi&nbsp;!</span>
    </button>
  </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  import { getViewportDimensions } from "@/utils/toolBox.js";

  const position = ref({ x: 0, y: 0 });
  const containerDimensions = ref(null);
  const buttonRunAway = ref(null);
  const isMobile = ref(false);

  const isMobileViewport = () => {
    return getViewportDimensions().viewportWidth < 768;
  };

  const getContainerDimensions = () => {
    if (!containerDimensions.value) return { width: 0, height: 0 };

    return {
      width: containerDimensions.value.clientWidth,
      height: containerDimensions.value.clientHeight,
    };
  };

  const getbuttonDimensions = () => {
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
    const { buttonWidth, buttonHeight } = getbuttonDimensions();

    const x = (width - buttonWidth) / 2;
    const y = (height - buttonHeight) / 2;
    return { x, y };
  };

  let catchSetTimeout;

  const runAway = () => {
    catchSetTimeout = setTimeout(() => {
      const { width, height } = getContainerDimensions();
      const { buttonWidth, buttonHeight } = getbuttonDimensions();

      let translateX = Math.random() * (width - buttonWidth) + 1;
      let translateY = Math.random() * (height - buttonHeight) + 1;

      if (translateX <= 0) translateX = 1;
      if (translateY <= 0) translateY = 1;

      buttonRunAway.value.style = `transform: translate(${translateX}px, ${translateY}px);`;

      buttonRunAway.value.innerText = "Nope. No way, Jose! 😏 ";
    }, 1000);
  };

  onMounted(() => {
    isMobile.value = isMobileViewport();
    position.value = setCenter();
    window.addEventListener("mousemove", runAway);
    window.addEventListener("touchmove", runAway);
  });

  onUnmounted(() => {
    clearTimeout(catchSetTimeout);
    window.removeEventListener("mousemove", runAway);
    window.addEventListener("touchmove", runAway);
  });
</script>

<style scoped>
  #main-container {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 16px;
  }
  .mobile-margin-top {
    margin-top: 40px;
  }
</style>
