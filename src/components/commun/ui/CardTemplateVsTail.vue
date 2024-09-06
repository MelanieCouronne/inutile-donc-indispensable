<template>
  <div class="flex w-3/4 bg-white rounded-xl shadow m-6 p-5">
    <img
      :src="`${conference.conference.urlPhoto}`"
      alt=""
      class="w-44 rounded-2xl"
    />
    <div class="mx-5 my-0">
      <div class="flex justify-between items-start">
        <div
          class="uppercase text-primary bg-secondary rounded-lg text-center py-2 px-2.5 leading-6"
        >
          <span class="text-sm font-bold">{{ conference.conference.mois }}</span
          ><br /><span class="text-2xl leading-3 font-extrabold">{{
            conference.conference.jour
          }}</span>
        </div>
        <div class="text-secondary text-left ml-2.5">
          <h2>{{ conference.conference.intitule }}</h2>
          <h5>
            <span class="material-symbols-outlined">schedule</span>
            {{ conference.conference.journee }}
            {{ conference.conference.heureDebut }} |
            <span class="material-symbols-outlined">location_on</span>
            {{ conference.conference.lieu }}
          </h5>
        </div>
      </div>
      <div class="relative flex justify-items-center items-center mt-8">
        <div
          class="z-10 absolute w-12 h-12 rounded-full bg-gradient-to-r from-blue-950 to-blue-600 speaker-animation"
        ></div>

        <img
          :src="`${conference.conference.urlAvatar}`"
          alt=""
          class="z-20 absolute left-5 w-12 rounded-full speaker-animation"
        />

        <p class="text-md font-bold ml-20 speaker-animation">
          <span class="material-symbols-outlined">keyboard_voice</span>
          {{ conference.conference.speaker }}
        </p>
      </div>
      <div class="flex flex-row justify-between items-center mt-8">
        <p
          class="text-sm font-light text-white bg-secondary/1 rounded-full m-0 py-1.5 pl-1.5 pr-4"
        >
          <span
            class="text-secondary bg-primary rounded-full mr-1 py-0.5 px-3"
            >{{ conference.conference.quota }}</span
          >
          Places
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  const conference = defineProps(["conference"]);
</script>

<style scoped>
  h2 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.1;
  }

  h5 {
    margin-top: 5px;
    font-size: 14px;
    color: #6c6c6c;
  }

  .speaker-animation {
    /* animation-duration: 3s;
    animation-name: slidein;
    animation-direction: normal;
    animation-delay: 1s;
    animation-fill-mode: backwards; */
  }

  .speaker-animation:nth-child(2) {
    animation-delay: 2s;
  }

  .speaker-animation:nth-child(3) {
    animation-delay: 3s;
  }

  .material-symbols-outlined {
    vertical-align: -2px;
    font-size: inherit;
    color: var(--main-color-2);
    font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
  }

  @keyframes slidein {
    0% {
      opacity: 0;
      transform: translateX(60px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 576px) {
    .conference-card {
      flex-direction: column;
      align-items: center;
      width: inherit;
    }

    .conference-card__image {
      margin-bottom: 20px;
    }
  }
</style>
