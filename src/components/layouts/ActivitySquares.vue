<template>
  <div id="main-container" ref="containerDimensions">
    <div id="squares-container">
      <div
        v-for="(square, index) in squares"
        :key="index"
        class="activity"
        @mouseover="addColor"
        @touchstart="addColor"
        @touchmove="addColor"
      ></div>
    </div>
  </div>
</template>

<script setup>
  import { nextTick, ref, onMounted, onUnmounted, watch } from "vue";
  import eventBus from "@/utils/directives/eventBus.js";
  import { getContainerDimensions } from "@/utils/toolsBox";

  const greenColorsHexa = ["#9be9a8", "#40c463", "#30a14e", "#216e39"];
  const squares = ref([]);
  const containerDimensions = ref(null);

  const addColor = (event) => {
    const color = randomGreenColors();
    event.target.style.backgroundColor = color;
  };

  const randomGreenColors = () => {
    return greenColorsHexa[Math.floor(Math.random() * greenColorsHexa.length)];
  };

  const calculateNumberOfSquares = () => {
    if (!containerDimensions.value) return 0;

    // const containerWidth = containerDimensions.value.clientWidth - 32;
    // const containerHeight = containerDimensions.value.clientHeight;
    const containerWidth = getContainerDimensions() - 32;
    const containerHeight = getContainerDimensions();
    const squareWidth = 16;
    const squareHeight = 14;

    const numberOfSquares =
      Math.floor(containerWidth / squareWidth) *
      Math.floor(containerHeight / squareHeight);
    return numberOfSquares;
  };

  const updateSquares = () => {
    squares.value = Array(calculateNumberOfSquares()).fill(null);
  };

  onMounted(async () => {
    // On attend la mise à jour du DOM avant de calculer le nombre de carrés
    await nextTick();
    updateSquares();
    window.addEventListener("resize", updateSquares);

    watch(
      () => eventBus.sidebarToggled,
      () => {
        updateSquares();
      }
    );
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateSquares);
  });
</script>

<style scoped>
  #main-container {
    width: 100%;
    height: 100%;
    padding: 16px;
    margin: 0;

    overflow: hidden;
  }

  #squares-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;

    overflow: hidden;
  }

  .activity {
    background-color: rgb(234, 237, 240);
    outline: 1px solid rgba(27, 31, 35, 0.06);
    outline-offset: -1px;
    margin: 1px 2px;
    height: 12px;
    width: 12px;
    overflow: hidden;
    border-radius: 2px;
  }
  .activity:hover {
    transition: background-color 0.3s;
    overflow: hidden;
  }
</style>
