<template>
  <header class="h-full md:flex-[0.2]">
    <nav>
      <SideBar />
    </nav>
  </header>

  <main class="h-full flex-1 container">
    <RouterView />
  </main>
</template>

<script setup>
  import { RouterView } from "vue-router";

  import SideBar from "@/components/commun/navigation/SideBar.vue";
</script>

<style scoped></style>
