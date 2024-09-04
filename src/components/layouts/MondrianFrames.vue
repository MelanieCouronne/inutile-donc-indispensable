<template>
  <div id="main-container" ref="containerDimensions">
    <div class="mondrian">
      <div
        v-for="(block, index) in blocks"
        :key="index"
        class="mondrian__block"
        :style="{
          '--index': index,
          '--row': block.rowSpan,
          '--col': block.colSpan,
          '--color': block.color,
          '--delay': block.delay,
        }"
      ></div>
    </div>
  </div>
  <div class="mondrian__trigger"></div>
</template>

<script setup>
  import { ref, onMounted } from "vue";

  const containerDimensions = ref(null);
  const blocks = ref([]);

  const mondrianColors = [
    "#FF0000",
    "#FFFF00",
    "#0000FF",
    "#FFFFFF",
    "#000000",
  ];

  const generateBlocks = (limit = 3) => {
    for (let i = 0; i < 5; i++) {
      const color =
        mondrianColors[Math.floor(Math.random() * mondrianColors.length)];
      const rowSpan = Math.floor(Math.random() * limit + 1);
      const colSpan = Math.floor(Math.random() * limit + 1);
      blocks.value.push({
        colSpan,
        rowSpan,
        delay: i,
        hasFace: Math.random() > 0.9 && rowSpan > 2 && colSpan > 2,
        color,
      });
    }
  };

  onMounted(() => {
    generateBlocks(2);
  });
</script>

<style>
  :root {
    --black: hsl(150, 13%, 3%);
    --yellow: hsl(51, 94%, 57%);
    --white: hsl(105, 17%, 95%);
    --blue: hsl(211, 87%, 34%);
    --red: hsl(354, 100%, 42%);
    --block: 50;
    --height: calc(var(--block) * 6);
    --width: calc(var(--block) * 5);
  }

  #main-container {
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: calc(50vmin - ((var(--initial-height) / 2) * 1px)) 0; */
  }

  .mondrian__trigger {
    height: 10px;
  }

  .mondrian {
    --block-size: calc(var(--block) * 1px);
    background: var(--black);
    border: 5px solid var(--black);
    display: grid;
    grid-auto-flow: dense;
    grid-auto-rows: minmax(180px, 10vmin);
    grid-gap: 5px;
    grid-template-columns: repeat(4, minmax(50px, 1fr));
    min-width: calc(var(--width) * 1px);
    width: calc(90vmin + 60px);
  }

  .mondrian__block {
    animation: scaleIn 0.05s calc(var(--delay) * 0.1s) ease both;
    background-color: var(--color);
    grid-row: span var(--row);
    grid-column: span var(--col);
  }

  @keyframes scaleIn {
    from {
      transform: scale(0);
    }
  }
</style>
