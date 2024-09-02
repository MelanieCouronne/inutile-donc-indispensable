<template>
  <div id="main-container" ref="containerDimensions">
    <div id="rods-container">
      <div
        v-for="(rod, index) in rods"
        :key="index"
        class="rod-activity"
        @mouseover="addColor"
      ></div>
    </div>
  </div>
</template>

<script setup>
  import { nextTick, ref, onMounted, onUnmounted } from "vue";

  const greenColorsHexa = ["#9be9a8", "#40c463", "#30a14e", "#216e39"];
  const blueColorsHexa = ["#c6e6ff", "#76b7ff", "#3a8bff", "#0056b3"];
  const redColorsHexa = ["#ffcccc", "#ff6666", "#ff3333", "#b20000"];
  const yellowColorsHexa = ["#fff5cc", "#ffeb99", "#ffdb4d", "#b38f00"];
  const purpleColorsHexa = ["#e6ccff", "#cc99ff", "#9933ff", "#6600cc"];

  const colorArrays = [
    greenColorsHexa,
    blueColorsHexa,
    redColorsHexa,
    yellowColorsHexa,
    purpleColorsHexa,
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

    const containerWidth = containerDimensions.value.clientWidth - 32;
    const rodWidth = 16;

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

    // Changer d'array de couleurs toutes les 10 secondes
    setInterval(() => {
      currentColorArrayIndex.value =
        (currentColorArrayIndex.value + 1) % colorArrays.length;
    }, 2000);
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
  }

  #rods-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  }

  .rod-activity {
    background-color: rgb(234, 237, 240);
    outline: 1px solid rgba(27, 31, 35, 0.06);
    outline-offset: -1px;
    margin: 0px 2px;
    height: 100%;
    width: 12px;
    overflow: hidden;
    border-radius: 2px;
  }
  .rod-activity:hover {
    transition: background-color 0.3s;
    overflow: hidden;
  }
</style>
