<template>
  <div
    id="main-container"
    class="md:p-4"
    ref="mainContainerToRunAway"
    :class="{ 'mobile-margin-top': isMobile }"
    @mousemove="runAway"
  >
    <button
      ref="buttonRunAway"
      :style="{ left: `${position.x}px`, top: `${position.y}px` }"
      class="absolute text-base font-medium py-4 px-6 bg-teal-500 dark:bg-emerald-400 text-white dark:text-slate-800 rounded-md cursor-pointer transition ease-in-out"
    >
      <span>Contactez-moi&nbsp;!</span>
    </button>
  </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted, onBeforeUnmount } from "vue";
  import {
    getViewportDimensions,
    getContainerDimensions,
  } from "@/utils/toolsBox.js";

  const position = ref({ x: 0, y: 0 });
  const mainContainerToRunAway = ref(null);
  const buttonRunAway = ref(null);
  const isMobile = ref(false);

  const getbuttonDimensions = () => {
    if (!buttonRunAway.value) {
      // console.error("buttonRunAway est null ou undefined");
      return { buttonWidth: 0, buttonHeight: 0 };
    }
    const buttonWidth = buttonRunAway.value.offsetWidth || 0;
    const buttonHeight = buttonRunAway.value.offsetHeight || 0;

    return {
      buttonWidth,
      buttonHeight,
    };
  };

  const setCenter = () => {
    const { buttonWidth, buttonHeight } = getbuttonDimensions();
    const { containerWidth, containerHeight } = getContainerDimensions(
      mainContainerToRunAway
    );

    const x = (containerWidth - buttonWidth) / 2;
    const y = (containerHeight - buttonHeight) / 2;
    return { x, y };
  };

  // let catchSetTimeout;

  const runAway = () => {
    const { containerWidth, containerHeight } = getContainerDimensions(
      mainContainerToRunAway
    );
    const { buttonWidth, buttonHeight } = getbuttonDimensions();

    let translateX = Math.random() * (containerWidth - buttonWidth) + 1;
    let translateY = Math.random() * (containerHeight - buttonHeight) + 1;

    if (translateX <= 0) translateX = 1;
    if (translateY <= 0) translateY = 1;

    buttonRunAway.value.style = `transform: translate(${translateX}px, ${translateY}px);`;

    buttonRunAway.value.innerText = "Nope. No way, Jose! 😏 ";
  };

  onMounted(() => {
    isMobile.value = getViewportDimensions().viewportWidth < 768;
    position.value = setCenter();
    window.addEventListener("mousemove", runAway);
    window.addEventListener("touchmove", runAway);
  });

  onBeforeUnmount(() => {
    mainContainerToRunAway.value = null;
    buttonRunAway.value = null;
  });

  onUnmounted(() => {
    // clearTimeout(catchSetTimeout);
    window.removeEventListener("mousemove", runAway);
    window.addEventListener("touchmove", runAway);
  });
</script>

<style scoped>
  #main-container {
    position: relative;
    width: 100%;
    height: 100%;
    /* padding: 16px; */
  }
  .mobile-margin-top {
    margin-top: 40px;
  }
</style>
