<template>
  <div
    id="main-container"
    class="flex flex-col items-center justify-center p-6 md:p-4"
  >
    <ModalSimple v-show="showModal" :showCloseBtn="false">
      <template #titre>Merci d'avoir osé cliquer&nbsp;! 🫶🏻 </template>
      <template #texte>
        👋🏻 Bienvenue sur cette page qui, soyons réalistes, ne contiendra jamais
        mon CV...<br /><br />
        Ici auraient dû figurer mes compétences, mes soft skills, et peut-être
        même l’histoire épique de ma reconversion professionnelle. Mais entre
        nous, ça n’arrivera jamais.<br /><br />
        Alors en attendant (et pour toujours), vous pouvez explorer le reste du
        site ou faire un tour sur mon
        <a
          href="https://www.linkedin.com/in/melanie-couronne/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-gray-800 dark:text-emerald-400 dark:hover:text-emerald-500"
          >LinkedIn</a
        >. 🙂
      </template>
    </ModalSimple>
  </div>
</template>

<script setup>
  import { onMounted, ref } from "vue";
  import ModalSimple from "@/components/commun/ui/ModalSimple.vue";
  import { getViewportDimensions } from "@/utils/toolsBox.js";

  const isMobile = ref(false);
  const showModal = ref(false);

  onMounted(() => {
    isMobile.value = getViewportDimensions().viewportWidth < 768;
    showModal.value = true;
  });
</script>

<style scoped>
  #main-container {
    width: 100%;
    height: 100%;
    /* padding: 16px; */
    margin: 0;

    overflow: hidden;
  }
</style>
