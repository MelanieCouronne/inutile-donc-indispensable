<template>
  <div
    class="relative grid sm:grid-cols-1 md:grid-cols-2 bg-slate-100 dark:bg-slate-900 sm:mt-12 md:mt-0"
  >
    <ConferenceCard
      v-for="(conference, index) in conferences"
      :key="conference.id"
      :conference="conference"
      :lien="listeRedirections[index]"
    />

    <!-- MODAL -->
    <Transition
      v-show="showModal"
      enter-from-class="opacity-0"
      enter-active-class="transition ease-in duration-900"
      leave-to-class="opacity-0"
      leave-active-class="transition ease-in duration-700"
    >
      <ModalSimple
        class="absolute w-80 md:w-full top-20 md:top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-y-1/2 flex flex-col items-center justify-center"
        @closeModal="handleCloseModal"
      >
        <template #titre> Super 👍🏻 ! Mais non... </template>
        <template #texte>
          Ce que vous cherchiez était sûrement intéressant, mais voilà des
          conférences qui pourraient bien révolutionner votre vie pour devenir
          la meilleure version de vous-même, ou presque.
        </template>
      </ModalSimple>
    </Transition>
  </div>
</template>

<script setup>
  import { onMounted, ref } from "vue";
  import ConferenceCard from "@/components/commun/ui/ConferenceCard.vue";
  import ModalSimple from "@/components/commun/ui/ModalSimple.vue";
  import datasImported from "@/datas/conferences.json";

  const conferences = ref([]);
  const showModal = ref(false);

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

  /*****************************************
   *               Modal                 *
   ******************************************/

  const handleCloseModal = () => {
    showModal.value = false;
  };

  //const isMobile = computed(() => getViewportDimensions().viewportWidth < 768);

  onMounted(() => {
    setTimeout(() => {
      showModal.value = true;
    }, 1200);
  });
</script>
