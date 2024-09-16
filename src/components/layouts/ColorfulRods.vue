<template>
  <div id="main-container" ref="mainRodsContainer">
    <div id="rods-container">
      <div
        v-for="(rod, index) in rods"
        :key="index"
        class="rod-activity bg-gray-200 dark:bg-slate-800"
        @mouseover="addColor"
        @touchstart.passive="addColor"
        @touchmove.passive="addColor"
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
  import { getRandomItem, getContainerDimensions } from "@/utils/toolsBox.js";

  const { showNavigation } = useSideBarToggle();

  const greenColors = ["#22577A", "#38A3A5", "#57CC99", "#80ED99", "#C7F9CC"];
  const blueColors = ["#03045E", "#0077B6", "#00B4D8", "#90E0EF", "#CAF0F8"];
  const purpleColors = ["#3C096C", "#5A189A", "#7B2CBF", "#9D4EDD", "#C77DFF"];
  const redColors = ["#800F2F", "#A4133C", "#C9184A", "#FF4D6D", "#FF758F"];
  const pinkColors = ["#FF0A54", "#FF477E", "#FF5C8A", "#FF99AC", "#F7CAD0"];
  const yellowColors = ["#FFF75E", "#FFF056", "#FFE94E", "#FECF3E", "#FDB833"];

  const colorArrays = [
    greenColors,
    blueColors,
    purpleColors,
    redColors,
    pinkColors,
    yellowColors,
  ];

  const rods = ref([]);
  const mainRodsContainer = ref(null);

  let currentColorArrayIndex = 0;

  const getRandomColor = () => {
    const currentColors = colorArrays[currentColorArrayIndex];
    return getRandomItem(currentColors);
  };

  const addColor = (event) => {
    const color = getRandomColor();
    event.target.style.backgroundColor = color;
  };

  const getTotalRods = () => {
    const { containerWidth } = getContainerDimensions(mainRodsContainer);

    const rodWidth = 11;

    const totalRods = Math.floor((containerWidth - 24) / rodWidth);

    return totalRods;
  };

  const updateRods = () => {
    const totalRods = getTotalRods();
    // console.log("🚀 ~ Total ~ " + totalRods);

    if (totalRods < 1) return;
    rods.value = Array(totalRods).fill(null);
  };

  let stopWatcher;

  onMounted(async () => {
    // On attend la mise à jour du DOM avant de calculer le nombre de carrés
    await nextTick();
    updateRods();

    window.addEventListener("resize", updateRods);

    // On surveille le changement de la sidebar pour mettre à jour les barres
    stopWatcher = watch(() => showNavigation.value, updateRods);

    // Changer d'array de couleurs toutes les 3 secondes
    setInterval(() => {
      currentColorArrayIndex =
        (currentColorArrayIndex + 1) % colorArrays.length;
    }, 3000);
  });

  onBeforeUnmount(() => {
    mainRodsContainer.value = null;
    stopWatcher();
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateRods);
  });
</script>

<style scoped>
  #main-container {
    width: 100%;
    height: 100%;
    max-height: calc(100vh - 15px);
    padding: 20px;
    margin: 0;

    overflow: hidden;
  }

  #rods-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    max-height: 100%;

    overflow: hidden;
  }

  .rod-activity {
    outline: 1px solid rgba(27, 31, 35, 0.06);
    outline-offset: -1px;
    margin: 0px 2px;
    height: 100%;
    max-height: 100%;
    width: 7px;
    overflow: hidden;
    border-radius: 2px;
  }
  .rod-activity:hover {
    transition: background-color 0.3s;
    overflow: hidden;
  }
</style>
