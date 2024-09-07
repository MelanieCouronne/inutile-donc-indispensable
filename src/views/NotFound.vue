<template>
  <main id="not-found" class="p-6 h-full w-screen bg-orange-50 font-poppins">
    <h1>Oooh une 404, pasd de panique, cela arrive à tout le monde</h1>
    <TransitionGroup
      tag="div"
      class="grid grid-rows-2 gap-4 justify-center items-center justify-items-center"
      enter-from-class="translate-x-full opacity-0"
      enter-active-class="transition ease-in duration-1000"
      leave-to-class="translate-x-full opacity-0"
      leave-active-class="transition ease-in duration-700"
    >
      <CardTemplate
        v-for="conference in conferences"
        :key="conference.intitule"
        :conference="conference"
      />
    </TransitionGroup>
  </main>
</template>

<script setup>
  // import CardTemplate from "@/components/commun/ui/CardTemplate.vue";
  import CardTemplate from "@/components/commun/ui/CardTemplateVsTail.vue";
</script>
