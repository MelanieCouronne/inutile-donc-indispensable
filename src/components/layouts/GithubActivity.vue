<template>
  <div
    id="main-container"
    class="pt-4 pr-2 pb-4 pl-4 md:p-4"
    ref="mainContainer"
  >
    <div id="squares-container">
      <div
        v-for="(square, index) in squares"
        :key="index"
        class="activity bg-gray-200 dark:bg-slate-800"
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
  import { useSideBarToggle } from "@/utils/composables/useSidebarToggle.js";
  import { getContainerDimensions, getRandomItem } from "@/utils/toolsBox.js";

  const { showNavigation } = useSideBarToggle();

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

    const squareWidth = 16; /* w 12 + ml 2 + mr 2 */
    const squareHeight = 14; /* 12 + 1 + 1 */

    const totalSquares =
      Math.floor((containerWidth - 24) / squareWidth) *
      Math.floor(containerHeight - 32 / squareHeight);

    return totalSquares;
  };

  /**
   * Fonction qui met à jour le tableau réactif `squares` avec un nouveau tableau de longueur
   * déterminée par la largeur du conteneur.
   *
   * Chaque élément du tableau est fill avec `null` pour initialisé une valeur et
   * ne pas avoir un tableau vide.
   */
  const updateSquares = () => {
    // Pour les mises à jour afin de synchroniser les modifications avec le cycle de rendu du navigateur.
    requestAnimationFrame(() => {
      const totalSquares = getTotalSquares();

      if (totalSquares < 1) return;
      squares.value = Array(totalSquares).fill(null);
    });
  };

  let stopWatcher;

  onMounted(async () => {
    await nextTick();
    updateSquares();
    window.addEventListener("resize", updateSquares);

    // On surveille le changement de la sidebar pour mettre à jour les squares
    stopWatcher = watch(() => showNavigation.value, updateSquares);
  });

  onBeforeUnmount(() => {
    mainContainer.value = null;
    stopWatcher();
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateSquares);
  });
</script>

<style scoped>
  #main-container {
    width: 100%;
    height: 100%;
    max-height: 100vh;
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
