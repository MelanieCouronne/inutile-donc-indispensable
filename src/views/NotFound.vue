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

  let conferences = [
    {
      date: "2023-05-08",
      mois: "Mai",
      jour: "08",
      journee: "Mercredi",
      heureDebut: "10:12",
      heureFin: "10:15",
      lieu: "Salle Pleyel",
      urlPhoto: "/images/programme/conference.jpg",
      intitule: "How to avoid problems by not being born",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, facilisis nec mauris aliquam semper at, donec ultrices pretium ligula nullam interdum. Conubia lacinia habitasse etiam.",
      speaker: "Marion Cotillon",
      fonction: "Représentante en portes et fênetres",
      urlAvatar: "/images/programme/marion.png",
      quota: "200",
    },

    {
      date: "2023-05-10",
      mois: "Mai",
      jour: "10",
      journee: "Vendredi",
      heureDebut: "12:02",
      heureFin: "12:03",
      lieu: "Réfectoire",
      urlPhoto: "/images/programme/smart.jpg",
      intitule:
        "How to stay silent so others keep believing that you are smart",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, semper at, donec ultrices pretium ligula nullam interdum. Conubia lacinia habitasse etiam.",
      speaker: "Paul Silence",
      fonction: "NS",
      urlAvatar: "/images/programme/paul.jpg",
      quota: "153",
    },
  ];
</script>
