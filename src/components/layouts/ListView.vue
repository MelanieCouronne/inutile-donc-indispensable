<template>
  <div
    v-show="(isMobile && isSidebarToggled) || !isMobile"
    class="grid gap-2 grid-cols-1 md:grid-cols-2"
  >
    <CardTemplateTail
      v-for="(conference, index) in conferences"
      :key="conference.id"
      :conference="conference"
      :lien="listeRedirections[index]"
    />
  </div>
</template>

<script setup>
  import CardTemplateTail from "@/components/commun/ui/CardTemplateVsTail.vue";
  import datasImported from "@/datas/conferences.json";
  import { getViewportDimensions } from "@/utils/toolsBox";
  import eventBus from "@/utils/directives/eventBus.js";
  import { computed, onMounted, ref } from "vue";

  const conferences = ref([]);
  const isMobile = ref(false);

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

  onMounted(() => {
    isMobile.value = getViewportDimensions().viewportWidth < 768;
  });
</script>
