<template>
  <header class="h-full md:flex-[0.2]">
    <nav>
      <SideBar
        @selectComponent="activeComponent = $event"
        @displayNotification="handleNotification"
      />
    </nav>
  </header>

  <main class="h-full flex-1 container">
    <NotificationView
      v-if="notification.display"
      :message="notification.message"
      @closeNotification="handleNotification"
    />
    <RouterView />
  </main>
</template>

<script setup>
  import { ref, provide } from "vue";
  import { RouterView } from "vue-router";
  import SideBar from "@/components/commun/navigation/SideBar.vue";
  import NotificationView from "@/components/commun/notificationView.vue";

  const notification = ref({ display: false, message: "" });
  const activeComponent = ref("HelloWorld");
  provide("activeComponentKey", activeComponent);

  const handleNotification = (payload) => {
    console.log(payload);
    notification.value = payload;
    if (!notification.value.display) return;

    setTimeout(() => {
      notification.value.display = false;
      notification.value.message = "";
    }, 6000);
  };
</script>

<!--
ref : Crée une référence réactive activeComponent initialisée à "HelloWorld".

provide : Rend activeComponent disponible à tous les composants enfants sous la clé "activeComponentKey".

SideBar : Inclut le composant SideBar et écoute l'événement selectComponent pour mettre à jour activeComponent.

RouterView : Utilisé pour afficher les composants en fonction de la route active.
-->

<style scoped></style>
