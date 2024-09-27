<template>
  <div
    id="main-container"
    class="flex flex-col items-center justify-center p-6 md:p-4"
  >
    <ModalSimple v-show="showModal" :showCloseBtn="false">
      <template #titre>Merci d'avoir osé cliquer&nbsp;! 🫶🏻 </template>
      <template #texte>
        Ici, l'inutile devient un art de vivre.<br /><br />Vous pensiez que les
        applications web ne servaient qu'à vous simplifier la vie, à vous rendre
        plus productif, ou à vous aider à organiser votre quotidien&nbsp;?<br /><br />
        Détrompez-vous&nbsp;! Parfois, l'essentiel, c'est de se perdre dans
        l'inutile.<br /><br />
        Si vous aussi vous aimez l'absurde, vous pouvez explorer sans
        modération... ou faire un tour sur mon
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
