<template>
  <div id="main-container">
    <div
      v-for="(square, index) in squares"
      :key="index"
      id="squares-container"
      class="activity"
      @mouseover="addColor"
    ></div>
  </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from "vue";

  const greenColorsHexa = ref(["#9be9a8", "#40c463", "#30a14e", "#216e39"]);
  const squares = ref([]);

  const addColor = (event) => {
    const color = greenColors();
    event.target.style.backgroundColor = color;
  };

  const greenColors = () => {
    return greenColorsHexa.value[
      Math.floor(Math.random() * greenColorsHexa.value.length)
    ];
  };

  const sidebarWidth = 250; // Largeur de la sidebar en pixels

  const calculateNumberOfSquares = () => {
    const containerWidth = window.innerWidth - sidebarWidth - 20;
    const containerHeight = window.innerHeight - 20;
    const squareSize = 12;
    const numberOfSquares =
      Math.ceil(containerWidth / squareSize) *
      Math.ceil(containerHeight / squareSize);
    return numberOfSquares;
  };

  const updateSquares = () => {
    squares.value = Array(calculateNumberOfSquares()).fill(null);
  };

  onMounted(() => {
    updateSquares();
    window.addEventListener("resize", updateSquares);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateSquares);
  });
</script>

<style scoped>
  #main-container {
    display: flex;
  }

  #squares-container {
    display: grid;
    align-items: center;
    justify-content: center;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, 12px);
    gap: 4px;
    width: calc(100vw - 10px);
    height: calc(100vh - 10px);
    padding: 5px;
    overflow: hidden;
  }
  .activity {
    background-color: rgb(234, 237, 240);
    /* box-shadow: 0 0 2px rgb(151, 151, 151); */
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
