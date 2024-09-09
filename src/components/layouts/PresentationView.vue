<template>
  <div id="main-container" class="flex flex-col items-center justify-center">
    <ModalSimple
      v-show="
        (isMobile && isSidebarToggled && showModal) || (!isMobile && showModal)
      "
      :showCloseBtn="false"
    >
      <template #titre>🫶🏻 Merci de votre visite !</template>
      <template #texte>
        Ci-gît la page fantôme de mon CV, où auraient dû trôner mes compétences
        légendaires, mes soft skills d'extra-terrestre et les détails d'une
        reconversion professionnelle digne d’un film épique...<br /><br />En
        attendant l'apparition miraculeuse de cette page, vous pouvez jeter un
        œil à la suite du site, ainsi qu'à mon profil
        <a
          href="https://www.linkedin.com/in/melanie-couronne/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-gray-800 dark:text-emerald-400 dark:hover:text-emerald-500"
          >LinkedIn</a
        >.<br /><br />Promis, il est bien plus détaillé que cette page fantôme !
      </template>
    </ModalSimple>
  </div>
</template>

<script setup>
  import { computed, onMounted, ref } from "vue";
  import ModalSimple from "@/components/commun/ui/ModalSimple.vue";
  import eventBus from "@/utils/directives/eventBus.js";
  import { getViewportDimensions } from "@/utils/toolsBox";

  const isMobile = ref(false);
  const showModal = ref(false);

  const isSidebarToggled = computed(() => eventBus.sidebarToggled);

  onMounted(() => {
    isMobile.value = getViewportDimensions().viewportWidth < 768;
    showModal.value = true;
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
</style>
