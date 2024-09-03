<template>
  <component :is="componentsMap[activeComponent]" />
</template>

<script setup>
  import { inject } from "vue";
  import HelloWorld from "@/components/HelloWorld.vue";
  import ActivityRods from "@/components/layouts/ActivityRods.vue";
  import ActivitySquares from "@/components/layouts/ActivitySquares.vue";

  const activeComponent = inject("activeComponentKey");

  const componentsMap = {
    HelloWorld,
    ActivityRods,
    ActivitySquares,
  };
</script>

<!--
inject : Récupère activeComponent fourni par App.vue sous la clé "activeComponentKey".

componentsMap : Un objet qui mappe les noms des composants à leurs définitions.
<component :is="componentsMap[activeComponent]" /> : Utilise la directive is pour afficher dynamiquement le composant correspondant à activeComponent.
-->
