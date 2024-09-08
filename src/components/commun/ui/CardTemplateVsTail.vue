<template>
  <a :href="`${lien.url}`" target="_blank" rel="noopener noreferrer">
    <div class="flex w-auto bg-white rounded-xl shadow m-3 p-5">
      <img
        :src="`${conference.datas.urlPhoto}`"
        alt=""
        class="w-44 rounded-3xl"
      />
      <div class="mx-5 my-0">
        <div class="flex justify-between items-start">
          <div
            class="uppercase text-primary bg-secondary rounded-lg text-center py-2 px-2.5 leading-6"
          >
            <span class="text-sm font-bold">{{ conference.datas.mois }}</span
            ><br /><span class="text-2xl leading-3 font-extrabold">{{
              conference.datas.jour
            }}</span>
          </div>
          <div class="text-secondary text-left ml-2.5">
            <h2>{{ conference.datas.titre }}</h2>
            <h5>
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
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              {{ conference.datas.journee }}
              {{ conference.datas.heureDebut }} |
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
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>

              {{ conference.datas.lieu }}
            </h5>
          </div>
        </div>
        <div class="relative flex justify-items-center items-center mt-8">
          <div
            class="z-10 absolute w-12 h-12 rounded-full bg-gradient-to-r to-primary from-secondary speaker-animation"
          ></div>

          <img
            :src="`${conference.datas.urlPhotoAuteur}`"
            alt=""
            class="z-20 absolute left-5 w-12 rounded-full speaker-animation"
          />

          <p class="text-md font-base text-secondary ml-20 speaker-animation">
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

            {{ conference.datas.auteur }}
          </p>
        </div>
        <div class="flex justify-end mt-8">
          <p
            class="text-sm font-light text-white bg-secondary rounded-full m-0 py-1.5 pl-1.5 pr-4"
          >
            <span
              class="text-secondary bg-primary rounded-full mr-1 py-0.5 px-3"
              >{{ conference.datas.quota }}</span
            >
            Places
          </p>
        </div>
      </div>
    </div>
  </a>
</template>

<script setup>
  const conference = defineProps(["datas", "lien"]);
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
