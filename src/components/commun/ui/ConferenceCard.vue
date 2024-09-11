<template>
  <a :href="`${lien.url}`" target="_blank" rel="noopener noreferrer">
    <div
      class="flex flex-col md:flex-row w-auto items-center bg-white dark:bg-slate-800 rounded-xl shadow dark:shadow-gray-700 m-4 md:m-3 px-5 py-6 md:p-5"
    >
      <img
        :src="imgConferenceUrl"
        :alt="`${conference.auteur}`"
        class="w-auto md:w-44 mb-5 md:mb-0 rounded-3xl"
      />

      <div class="mx-5 my-0">
        <div class="flex justify-between items-start">
          <div
            class="uppercase text-primary dark:text-slate-800 bg-secondary dark:bg-emerald-400 rounded-lg text-center py-2 px-2.5 leading-6"
          >
            <span class="text-sm font-bold">{{ mois }}</span
            ><br /><span class="text-2xl leading-3 font-extrabold">{{
              jour
            }}</span>
          </div>
          <div class="text-secondary dark:text-gray-200 text-left ml-2.5">
            <h2 class="text-md font-bold text-left leading-tight">
              {{ getTruncateText(conference.titre, 70) }}
            </h2>
            <h5 class="text-secondary dark:text-gray-400 text-sm mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-4 inline-block fill-secondary dark:fill-emerald-400 align-text-top"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                  clip-rule="evenodd"
                />
              </svg>

              {{ journee }}
              {{ heure }} |
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill=""
                class="size-4 inline-block fill-secondary dark:fill-emerald-400 align-text-top"
              >
                <path
                  fill-rule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clip-rule="evenodd"
                />
              </svg>
              {{ conference.lieu }}
            </h5>
          </div>
        </div>
        <div class="relative flex justify-items-center items-center mt-8">
          <div
            class="z-10 absolute w-12 h-12 rounded-full bg-gradient-to-r to-primary from-secondary speaker-animation"
          ></div>

          <img
            :src="imgAuteurUrl"
            alt=""
            class="z-20 absolute left-5 w-12 rounded-full speaker-animation"
          />

          <p
            class="text-md font-base text-secondary dark:text-gray-200 ml-20 speaker-animation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4 inline-block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
              />
            </svg>

            {{ conference.auteur }}
          </p>
        </div>
        <div class="flex justify-end mt-8">
          <p
            class="text-sm font-light text-white dark:text-slate-800 bg-secondary dark:bg-emerald-400 rounded-full m-0 py-1.5 pl-1.5 pr-4"
          >
            <span
              class="text-secondary dark:text-gray-200 bg-primary dark:bg-slate-800 rounded-full mr-1 py-0.5 px-3"
              >{{ conference.quota }}</span
            >
            Places
          </p>
        </div>
      </div>
    </div>
  </a>
</template>

<script setup>
  import { computed } from "vue";
  // import { toRefs } from "vue";
  import { getTruncateText } from "@/utils/toolsBox";
  import moment from "moment";

  const { conference, lien } = defineProps({
    conference: {
      type: Object,
      required: true,
    },
    lien: {
      type: Object,
      required: true,
    },
  });

  /*****************************************
   *         Définition de la date            *
   ******************************************/
  // console.log("🚀 ~ date ~ ");
  const journee = moment(conference.date).format("dddd");
  // console.log("🚀 ~ journee ~ " + journee);
  const jour = moment(conference.date).format("DD");
  // console.log("🚀 ~ jour ~ " + jour);
  const mois = moment(conference.date).format("MMM");
  // console.log("🚀 ~ mois ~ " + mois);
  const heure = moment(conference.date).format("kk:mm");
  // console.log("🚀 ~ heure ~ " + heure);

  /*****************************************
   *             Img dynamiques             *
   ******************************************/

  const imgConferenceUrl = computed(() => {
    return new URL(
      `${conference.urlConference}`,
      import.meta.env.VITE_APP_BASE_URL
    ).href;
  });

  const imgAuteurUrl = computed(() => {
    return new URL(`${conference.urlAuteur}`, import.meta.env.VITE_APP_BASE_URL)
      .href;
  });
</script>

<style scoped>
  .speaker-animation {
    animation-duration: 3s;
    animation-name: slidein;
    animation-direction: normal;
    animation-delay: 1s;
    animation-fill-mode: backwards;
  }

  .speaker-animation:nth-child(2) {
    animation-delay: 2s;
  }

  .speaker-animation:nth-child(3) {
    animation-delay: 3s;
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
