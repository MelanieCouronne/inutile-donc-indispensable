<template>
  <div id="main-container" ref="mainContainer">
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
  import {
    nextTick,
    ref,
    onMounted,
    onBeforeUnmount,
    onUnmounted,
    watch,
  } from "vue";
  import eventBus from "@/utils/directives/eventBus.js";
  import { getContainerDimensions, getRandomItem } from "@/utils/toolsBox";

  const greenColors = ["#9be9a8", "#40c463", "#30a14e", "#216e39"];

  const squares = ref([]);
  const mainContainer = ref(null);

  const addColor = (event) => {
    const color = getRandomItem(greenColors);
    event.target.style.backgroundColor = color;
  };

  // Calcul du nombre de carrés à afficher
  const getTotalSquares = () => {
    const { containerWidth, containerHeight } =
      getContainerDimensions(mainContainer);

    const squareWidth = 16;
    const squareHeight = 14;

    const numberOfSquares =
      Math.floor((containerWidth - 32) / squareWidth) *
      Math.floor(containerHeight / squareHeight);

    return numberOfSquares;
  };

  /**
   * Fonction qui met à jour le tableau réactif `squares` avec un nouveau tableau de longueur
   * déterminée par la largeur du conteneur.
   *
   * Chaque élément du tableau est fill avec `null` pour initialisé une valeur et
   * ne pas avoir un tableau vide.
   */
  const updateSquares = () => {
    squares.value = Array(getTotalSquares()).fill(null);
  };

  onMounted(async () => {
    // On attend la mise à jour du DOM avant de calculer le nombre de carrés
    await nextTick();
    updateSquares();

    window.addEventListener("resize", updateSquares);

    // On écoute le changement de la variable `sidebarToggled` (sur Mobile) pour mettre à jour les carrés
    watch(
      () => eventBus.sidebarToggled,
      () => {
        updateSquares();
      }
    );
  });

  onBeforeUnmount(() => {
    mainContainer.value = null;
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
