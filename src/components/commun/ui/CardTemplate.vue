<template>
  <div class="conference-card raleway-bold">
    <img
      :src="`${conference.conference.urlPhoto}`"
      alt=""
      class="conference-card__image"
    />
    <div class="conference-card__content">
      <div class="conference-card__header">
        <div class="conference-card__date">
          <span class="conference-card__month">{{
            conference.conference.mois
          }}</span
          ><br /><span class="conference-card__day">{{
            conference.conference.jour
          }}</span>
        </div>
        <div class="conference-card__title">
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
      <div class="conference-card__speaker">
        <div
          class="conference-card__speaker-avatar avatar--shadow speaker-animation"
        ></div>
        <img
          :src="`${conference.conference.urlAvatar}`"
          alt=""
          class="conference-card__speaker-avatar speaker-animation"
        />
        <div class="conference-card__speaker-infos speaker-animation">
          <p class="conference-card__speaker-name">
            <span class="material-symbols-outlined">keyboard_voice</span>
            {{ conference.conference.speaker }}
          </p>
          <p class="conference-card__speaker-function">
            {{ conference.conference.fonction }}
          </p>
        </div>
      </div>
      <div class="conference-card__footer">
        <p class="conference-card__participants">
          <span>{{ conference.conference.quota }}</span
          >&nbsp;&nbsp;Places
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  const conference = defineProps(["conference"]);
</script>

<style scoped>
  .conference-card {
    display: flex;
    width: 600px;
    background-color: #ffffff;
    border-radius: 14px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    margin: 20px;
    padding: 15px;
  }

  .conference-card__image {
    max-width: 180px;
    max-height: 180px;
    border-radius: 26px;
  }

  .conference-card__content {
    margin: 0px 20px 0px 20px;
    background-color: transparent;
  }

  .conference-card__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .conference-card__title {
    color: var(--main-color-2);
    text-align: left;
    margin: 0 0 0 10px;
  }

  h2 {
    font-size: 18px;
    font-weight: 700;
  }

  h5 {
    font-size: 14px;
    color: #6c6c6c;
  }

  .conference-card__date {
    text-transform: uppercase;
    line-height: 1.1;
    background-color: var(--main-color-2);
    border-radius: 8px;
    color: var(--main-color-1);
    padding: 12px 10px;
  }

  .conference-card__month {
    font-size: 16px;
    font-weight: 700;
  }

  .conference-card__day {
    font-size: 24px;
    font-weight: 800;
  }

  .conference-card__speaker {
    position: relative;
    display: flex;
    text-align: left;
    margin-top: 20px;
  }

  .conference-card__speaker-avatar {
    position: absolute;
    top: 0;
    left: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    z-index: 2;
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

  .avatar--shadow {
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(
      198deg,
      var(--main-color-2),
      var(--main-color-1)
    );
    z-index: 1;
  }

  .conference-card__speaker-infos {
    margin-left: 75px;
  }

  .conference-card__speaker-name {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 0;
  }

  .conference-card__speaker-function {
    font-size: 14px;
    color: #6c6c6c;
    margin-bottom: 0;
  }

  .conference-card__footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    font-size: 14px;
  }

  .conference-card__participants {
    color: #ffffff;
    background-color: var(--main-color-2);
    border-radius: 20px;

    margin: 0;
    padding: 4px 15px 4px 3px;
  }

  .conference-card__participants span {
    color: var(--main-color-2);
    background-color: var(--main-color-1);
    border-radius: inherit;
    line-height: 100%;

    margin: 0;
    padding: 3px 8px;
  }

  .material-symbols-outlined {
    vertical-align: -2px;
    font-size: inherit;
    color: var(--main-color-2);
    font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
  }

  /* @keyframes slidein {
    0% {
      opacity: 0;
      transform: translateX(60px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  } */

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
