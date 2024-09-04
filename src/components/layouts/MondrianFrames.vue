<template>
  <div id="main-container" ref="containerDimensions">
    <div id="rods-container">
      <div
        v-for="(rod, index) in rods"
        :key="index"
        class="rod-activity"
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

  const greenColorsHexa = [
    "#22577A",
    "#38A3A5",
    "#57CC99",
    "#80ED99",
    "#C7F9CC",
  ];
  const blueColorsHexa = [
    "#03045E",
    "#0077B6",
    "#00B4D8",
    "#90E0EF",
    "#CAF0F8",
  ];
  const purpleColorsHexa = [
    "#3C096C",
    "#5A189A",
    "#7B2CBF",
    "#9D4EDD",
    "#C77DFF",
  ];
  const redColorsHexa = ["#800F2F", "#A4133C", "#C9184A", "#FF4D6D", "#FF758F"];
  const pinkColorsHexa = [
    "#FF0A54",
    "#FF477E",
    "#FF5C8A",
    "#FF99AC",
    "#F7CAD0",
  ];
  const yellowColorsHexa = [
    "#FFF75E",
    "#FFF056",
    "#FFE94E",
    "#FECF3E",
    "#FDB833",
  ];

  const colorArrays = [
    greenColorsHexa,
    blueColorsHexa,
    purpleColorsHexa,
    redColorsHexa,
    pinkColorsHexa,
    yellowColorsHexa,
  ];

  const rods = ref([]);
  const containerDimensions = ref(null);
  const currentColorArrayIndex = ref(0);

  const addColor = (event) => {
    const color = getRandomColor();
    event.target.style.backgroundColor = color;
  };

  const getRandomColor = () => {
    const currentColors = colorArrays[currentColorArrayIndex.value];
    return currentColors[Math.floor(Math.random() * currentColors.length)];
  };

  const calculateNumberOfrods = () => {
    if (!containerDimensions.value) return 0;

    const containerWidth = containerDimensions.value.clientWidth - 22;
    const rodWidth = 11;

    const numberOfrods = Math.floor(containerWidth / rodWidth);
    return numberOfrods;
  };

  const updaterods = () => {
    rods.value = Array(calculateNumberOfrods()).fill(null);
  };

  onMounted(async () => {
    // On attend la mise à jour du DOM avant de calculer le nombre de carrés
    await nextTick();
    updaterods();
    window.addEventListener("resize", updaterods);

    watch(
      () => eventBus.sidebarToggled,
      () => {
        updaterods();
      }
    );

    // Changer d'array de couleurs toutes les 10 secondes
    setInterval(() => {
      currentColorArrayIndex.value =
        (currentColorArrayIndex.value + 1) % colorArrays.length;
    }, 3000);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updaterods);
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

  #rods-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;

    overflow: hidden;
  }

  .rod-activity {
    background-color: rgb(234, 237, 240);
    outline: 1px solid rgba(27, 31, 35, 0.06);
    outline-offset: -1px;
    margin: 0px 2px;
    height: 100%;
    width: 7px;
    overflow: hidden;
    border-radius: 2px;
  }
  .rod-activity:hover {
    transition: background-color 0.3s;
    overflow: hidden;
  }
</style>
