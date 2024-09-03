<template>
  <header class="h-full md:flex-[0.2]">
    <nav>
      <SideBar @selectComponent="activeComponent = $event" />
    </nav>
  </header>

  <main class="h-full flex-1 container">
    <RouterView />
  </main>
</template>

<script setup>
  import { ref, provide } from "vue";
  import { RouterView } from "vue-router";
  import SideBar from "@/components/commun/navigation/SideBar.vue";

  const activeComponent = ref("HelloWorld");
  provide("activeComponentKey", activeComponent);
</script>

<style scoped></style>
