<template>
  <div class="grid gap-2 grid-cols-2">
    <CardTemplateTail
      v-for="conference in conferences"
      :key="conference.id"
      :datas="conference"
      :lien="getRandomItem(listeRedirections)"
    />
  </div>
</template>

<script setup>
  import CardTemplateTail from "@/components/commun/ui/CardTemplateVsTail.vue";
  import datasImported from "@/datas/conferences.json";
  import { getRandomItem } from "@/utils/toolsBox";
  import { ref } from "vue";

  const conferences = ref([]);

  const listeRedirections = [
    { name: "Code du travail", url: "http://www.google.fr" },
    { name: "Code pénal", url: "http://www.google.fr" },
    { name: "Code civil", url: "http://www.google.fr" },
    { name: "Code de la sécurité sociale", url: "http://www.google.fr" },
    { name: "Code de la santé publique", url: "http://www.google.fr" },
    { name: "Code de l'éducation", url: "http://www.google.fr" },
    { name: "Code de l'environnement", url: "http://www.google.fr" },
    {
      name: "Code de la construction et de l'habitation",
      url: "http://www.google.fr",
    },
    { name: "Code de l'urbanisme", url: "http://www.google.fr" },
    { name: "Code de la route", url: "http://www.google.fr" },
    {
      name: "Code de la propriété intellectuelle",
      url: "http://www.google.fr",
    },
    { name: "Code de la consommation", url: "http://www.google.fr" },
    { name: "Code de la famille", url: "http://www.google.fr" },
  ];

  conferences.value = datasImported.datas
    .sort(() => Math.random() - Math.random())
    .slice(0, 6);
</script>
