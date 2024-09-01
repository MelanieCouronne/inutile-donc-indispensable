<template>
  <header class="font-poppins">
    <nav>
      <SideBar />
    </nav>
  </header>
  <main class="font-poppins">
    <RouterView />
  </main>
</template>

<script setup>
  import { RouterView } from "vue-router";

  import SideBar from "@/components/commun/navigation/SideBar.vue";
</script>

<style scoped></style>
