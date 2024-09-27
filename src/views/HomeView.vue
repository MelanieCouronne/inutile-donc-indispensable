<template>
  <nav class="h-auto md:flex-[0.2]">
    <SideBar
      @displayNotification="handleNotification"
      @showNav="handleShowNav"
    />
  </nav>

  <main
    v-if="!isMobile || (isMobile && sidebarHidden)"
    class="relative md:max-h-screen flex-1 md:w-full"
  >
    <RouterView v-if="isShowEditoRoute" v-slot="{ Component }">
      <Transition
        enter-from-class="opacity-0"
        enter-active-class="transition ease-in duration-900"
        leave-to-class="opacity-0"
        leave-active-class="transition ease-in duration-700"
      >
        <component :is="Component" />
      </Transition>
    </RouterView>

    <RouterView v-else v-slot="{ Component }">
      <Transition
        enter-from-class="translate-x-full opacity-0"
        enter-active-class="transition ease-in duration-1000"
        leave-to-class="translate-x-full opacity-0"
        leave-active-class="transition ease-in duration-700"
      >
        <component :is="Component" /></Transition
    ></RouterView>
  </main>

  <Transition
    enter-active-class="transform ease-out duration-300 transition"
    enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
    leave-active-class="transition ease-in duration-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <NotificationView
      v-if="notification.display"
      :message="notification.message"
      @closeNotification="handleNotification"
    />
  </Transition>
  <footer v-if="!isMobile"><FooterLayout /></footer>
</template>

<script setup>
  import { computed, ref } from "vue";
  import { useRoute } from "vue-router";

  import SideBar from "@/components/navigation/SideBar.vue";
  import NotificationView from "@/components/commun/ui/NotificationTemplate.vue";
  import FooterLayout from "@/components/commun/ui/FooterLayout.vue";

  import { getViewportDimensions } from "@/utils/toolsBox.js";

  /*****************************************
   *             Route edito                *
   ******************************************/

  const route = useRoute();

  const isShowEditoRoute = computed(
    () => route.path === "/accueil/make-my-point" || route.path === "/accueil"
  );
  /*****************************************
   *              Notifications              *
   ******************************************/

  const notification = ref({ display: false, message: "" });

  const handleNotification = (payload) => {
    notification.value = payload;
    if (!notification.value.display) return;

    setTimeout(() => {
      notification.value.display = false;
      notification.value.message = "";
    }, 9000);
  };

  /*****************************************
   *         Mobile Viewport + Toggle        *
   ******************************************/

  const isMobile = computed(() => getViewportDimensions().viewportWidth < 768);

  const sidebarHidden = ref(false);

  const handleShowNav = (newValue) => {
    sidebarHidden.value = !newValue;
  };
</script>
