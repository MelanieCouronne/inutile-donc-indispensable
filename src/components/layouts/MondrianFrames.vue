<template>
  <div
    id="main-container"
    ref="mainFrameContainer"
    class="min-h-full max-h-full flex justify-center flex-col items-center"
  >
    <div class="mondrian-container">
      <div
        v-for="(frame, index) in frames"
        :key="index"
        class="mondrian__frame"
        :style="{
          gridRow: `span ${frame.rowSpan}`,
          gridColumn: `span ${frame.colSpan}`,
          backgroundColor: frame.color,
          AnimationDelay: `${frame.delay * 0.1}s`,
        }"
      ></div>
    </div>

    <ButtonRounded
      @click="generateFrames(2)"
      svgPath="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
      class="flex mx-auto my-5"
    />
  </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  import ButtonRounded from "@/components/commun/buttons/ButtonRounded.vue";
  import { getRandomItem } from "@/utils/toolsBox.js";

  const mainFrameContainer = ref(null);
  const frames = ref([]);

  const mondrianColors = [
    "#FF0000",
    "#FFFF00",
    "#0000FF",
    "#FFFFFF",
    "#000000",
  ];

  /**
   * Function qui génére des blocs avec des propriétés aléatoires et les ajoute au tableau `frames`.
   * @param {Number} [limit=2] - La taille maximale des blocs en termes de spans lignes (rowSpan) et de spans colonnes (colSpan).
   * @property {Number} i - Nombre de blocs générés (le reste étant un fonds noir ;).
   * @property {Number} colSpan - Nombre de colonnes que le bloc occupe. Entre 1 et `limit`.
   * @property {Number} rowSpan - Nombre de lignes que le bloc occupe. Entre 1 et `limit`.

   */
  const generateFrames = (limit = 2) => {
    frames.value = [];

    for (let i = 0; i < 5; i++) {
      const color = getRandomItem(mondrianColors);
      const rowSpan = Math.floor(Math.random() * limit + 1);
      const colSpan = Math.floor(Math.random() * limit + 1);
      frames.value.push({
        colSpan,
        rowSpan,
        delay: i,
        color,
      });
    }
  };

  let catchSetInterval;

  onMounted(() => {
    generateFrames(2);
    catchSetInterval = setInterval(() => {
      generateFrames(2);
    }, 4000);
  });

  onUnmounted(() => {
    frames.value = [];
    mainFrameContainer.value = null;
    clearInterval(catchSetInterval);
  });
</script>

<style scoped>
  .mondrian-container {
    background: #000000;
    border: 5px solid #000000;
    display: grid;
    grid-auto-flow: dense;
    /* taille d'une ligne de grille créée de façon implicite c-a-d non définit par template-row */
    grid-auto-rows: 120px;
    grid-gap: 5px;
    grid-template-columns: repeat(5, minmax(50px, 1fr));
    width: 60%;
  }

  .mondrian__frame {
    /* animation | name | duration | timing | remplissage */
    animation: scaleIn 0.05s ease both;
  }

  @media (max-width: 768px) {
    .mondrian-container {
      grid-auto-rows: 60px;
      grid-template-columns: repeat(3, minmax(20px, 1fr));
    }
  }

  @keyframes scaleIn {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
</style>
