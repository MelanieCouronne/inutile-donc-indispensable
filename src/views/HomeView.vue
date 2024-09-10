<template>
  <header class="w-screen h-screen md:h-auto md:flex-[0.2]">
    <nav>
      <SideBar
        @selectComponent="activeComponent = $event"
        @displayNotification="handleNotification"
      />
    </nav>
  </header>
  <main class="md:max-h-screen md:flex-1 md:w-full">
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

    <Transition
      v-if="activeComponent === 'PresentationView'"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
      enter-active-class="transition duration-1000"
      leave-active-class="transition duration-800"
    >
      <component :is="componentsMap.PresentationView" />
    </Transition>

    <Transition
      v-else
      enter-from-class="translate-x-full opacity-0"
      enter-active-class="transition ease-in duration-1000"
      leave-to-class="translate-x-full opacity-0"
      leave-active-class="transition ease-in duration-700"
    >
      <component :is="componentsMap[activeComponent]" />
    </Transition>
  </main>
  <footer v-show="!isMobile"><FooterLayout /></footer>
</template>

<script setup>
  import { computed, provide, ref } from "vue";
  import ColorfulRods from "@/components/layouts/ColorfulRods.vue";
  import GitHubActivity from "@/components/layouts/GithubActivity.vue";
  import ElusiveView from "@/components/layouts/ElusiveView.vue";
  import MondrianFrames from "@/components/layouts/MondrianFrames.vue";
  import ConferenceGallery from "@/components/layouts/ConferenceGallery.vue";
  import SideBar from "@/components/navigation/SideBar.vue";
  import NotificationView from "@/components/commun/ui/NotificationTemplate.vue";
  import FooterLayout from "@/components/commun/ui/FooterLayout.vue";
  import { getViewportDimensions } from "@/utils/toolsBox";
  import PresentationView from "@/components/layouts/PresentationView.vue";

  /*****************************************
   *      Activation des composants          *
   ******************************************/

  const activeComponent = ref("PresentationView");
  provide("activeComponentKey", activeComponent);

  const componentsMap = {
    PresentationView,
    ColorfulRods,
    GitHubActivity,
    ElusiveView,
    MondrianFrames,
    ConferenceGallery,
  };

  /*****************************************
   *              Notification              *
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
   *            Mobile Viewport              *
   ******************************************/

  const isMobile = computed(() => getViewportDimensions().viewportWidth < 768);
</script>
