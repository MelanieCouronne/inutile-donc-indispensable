<template>
  <component :is="componentsMap[activeComponent]" />
</template>

<script setup>
  import { inject } from "vue";
  import HelloWorld from "@/components/HelloWorld.vue";
  import ActivityRods from "@/components/layouts/ActivityRods.vue";
  import ActivitySquares from "@/components/layouts/ActivitySquares.vue";

  const activeComponent = inject("activeComponent");

  const componentsMap = {
    HelloWorld,
    ActivityRods,
    ActivitySquares,
  };
</script>
