<template>
  <div
    v-show="(isMobile && isSidebarToggled) || !isMobile"
    class="relative grid gap-2 grid-cols-1 md:grid-cols-2 bg-slate-100 dark:bg-slate-900 mt-12 md:mt-0"
  >
    <ConferenceCard
      v-for="(conference, index) in conferences"
      :key="conference.id"
      :conference="conference"
      :lien="listeRedirections[index]"
    />
  </div>

  <!-- MODAL -->
  <ModalSimple v-show="showModal" @closeModal="handleCloseModal">
    <template #titre> Super 👍🏻 ! Mais non... </template>
    <template #texte>
      Ce que vous cherchiez était sûrement intéressant, mais voilà des
      conférences qui pourraient bien révolutionner votre vie pour devenir la
      meilleure version de vous-même, ou presque.
    </template>
  </ModalSimple>
</template>

<script setup>
  import ConferenceCard from "@/components/commun/ui/ConferenceCard.vue";
  import ModalSimple from "@/components/commun/ui/ModalSimple.vue";
  import datasImported from "@/datas/conferences.json";
  import { computed, onMounted, ref } from "vue";
  import eventBus from "@/utils/directives/eventBus.js";
  import { getViewportDimensions } from "@/utils/toolsBox";

  const conferences = ref([]);
  const isMobile = ref(false);
  const showModal = ref(true);

  const listeRedirections = [
    {
      name: "Code du travail",
      url: "https://www.boutique-dalloz.fr/code-du-travail-p.html",
    },
    {
      name: "Code pénal",
      url: "https://www.boutique-dalloz.fr/code-penal-p.html",
    },
    {
      name: "Code civil",
      url: "https://www.boutique-dalloz.fr/code-civil-p.html",
    },
    {
      name: "Code de la sécurité sociale",
      url: "https://www.boutique-dalloz.fr/code-de-la-securite-sociale-p.html",
    },
    {
      name: "Code de la route",
      url: "https://www.boutique-dalloz.fr/code-de-la-route-p.html",
    },
    {
      name: "Code de la propriété intellectuelle",
      url: "https://www.boutique-dalloz.fr/code-de-la-propriete-intellectuelle-p.html",
    },
  ];

  conferences.value = datasImported.datas
    .sort(() => Math.random() - Math.random())
    .slice(0, 6);

  const isSidebarToggled = computed(() => eventBus.sidebarToggled);

  /*****************************************
   *               Modal                 *
   ******************************************/

  const handleCloseModal = () => {
    showModal.value = false;
  };

  onMounted(() => {
    isMobile.value = getViewportDimensions().viewportWidth < 768;
    showModal.value = true;
  });
</script>
