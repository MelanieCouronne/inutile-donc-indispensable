<template>
  <div id="main-container" ref="containerDimensions">
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
  </div>
</template>

<script setup>
  import { ref, onMounted } from "vue";

  const containerDimensions = ref(null);
  const frames = ref([]);

  const mondrianColors = [
    "#FF0000",
    "#FFFF00",
    "#0000FF",
    "#FFFFFF",
    "#000000",
  ];

  const randomColors = () => {
    return mondrianColors[Math.floor(Math.random() * mondrianColors.length)];
  };

  /**
   * Génère des blocs avec des propriétés aléatoires et les ajoute au tableau `frames`.
   * @param {number} [limit=2] - La taille maximale des blocs en termes de lignes (rowSpan) et de colonnes (colSpan).
   * @property {number} i - Nombre de blocs générés.
   * @property {number} colSpan - Nombre de colonnes que le bloc occupe. Entre 1 et `limit`.
   * @property {number} rowSpan - Nombre de lignes que le bloc occupe. Entre 1 et `limit`.
   * ---------
   *
   */
  const generateFrames = (limit = 2) => {
    for (let i = 0; i < 5; i++) {
      const color = randomColors();
      const rowSpan = Math.floor(Math.random() * limit + 1);
      const colSpan = Math.floor(Math.random() * limit + 1);
      frames.value.push({
        colSpan,
        rowSpan,
        delay: i,
        hasFace: Math.random() > 0.9 && rowSpan > 2 && colSpan > 2,
        color,
      });

      // setInterval(() => {
      //   generateFrames(2);
      // }, 2000);
    }
  };

  onMounted(() => {
    generateFrames(2);
  });
</script>

<style scoped>
  :root {
    --frame: 50;
    --height: calc(var(--frame) * 6);
    --width: calc(var(--frame) * 5);
  }

  #main-container {
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: calc(50vmin - ((var(--initial-height) / 2) * 1px)) 0; */
  }

  .mondrian-container {
    /* --frame-size: calc(var(--frame) * 1px); */
    background: #000000;
    border: 5px solid #000000;
    display: grid;
    grid-auto-flow: dense;
    grid-auto-rows: minmax(180px, 10vmin);
    grid-gap: 5px;
    grid-template-columns: repeat(4, minmax(50px, 1fr));
    min-width: calc(var(--width) * 1px);
    width: calc(90vmin + 60px);
  }

  .mondrian__frame {
    /* animation | name | duration | timing | remplissage */
    animation: scaleIn 0.05s ease both;
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
