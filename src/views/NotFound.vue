<template>
  <main id="not-found" class="p-6 h-full w-screen bg-orange-50 font-poppins">
    <div class="grid gap-3">
      <!-- <TransitionGroup
      tag="div"
      class="grid grid-rows-2 gap-4 justify-center items-center justify-items-center"
      enter-from-class="translate-x-full opacity-0"
      enter-active-class="transition ease-in duration-1000"
      leave-to-class="translate-x-full opacity-0"
      leave-active-class="transition ease-in duration-700"
    > -->
      <CardTemplate
        v-for="conference in conferences"
        :key="conference.id"
        :conference="conference"
      />
      <!-- </TransitionGroup> -->
    </div>
  </main>
</template>

<script setup>
  // import CardTemplate from "@/components/commun/ui/CardTemplate.vue";
  import CardTemplate from "@/components/commun/ui/CardTemplateVsTail.vue";
  import datas from "@/datas/conferences.json";
  import { ref } from "vue";

  const conferences = ref([]);

  const listeRedirections = [
    { name: "Code du travail", path: "/" },
    { name: "Code pénal", path: "/" },
    { name: "Code civil", path: "/" },
    { name: "Code de la sécurité sociale", path: "/" },
    { name: "Code de la santé publique", path: "/" },
    { name: "Code de l'éducation", path: "/" },
    { name: "Code de l'environnement", path: "/" },
    { name: "Code de la construction et de l'habitation", path: "/" },
    { name: "Code de l'urbanisme", path: "/" },
    { name: "Code de la route", path: "/" },
    { name: "Code de la propriété intellectuelle", path: "/" },
    { name: "Code de la consommation", path: "/" },
    { name: "Code de la famille", path: "/" },
  ];

  conferences.value = datas.datas
    .sort(() => Math.random() - Math.random())
    .slice(0, 4);
</script>
