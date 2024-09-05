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
    <component :is="componentsMap[activeComponent]" />
  </main>
</template>

<script setup>
  import { provide, ref } from "vue";
  import ColorfulRods from "@/components/layouts/ColorfulRods.vue";
  import ActivitySquares from "@/components/layouts/ActivitySquares.vue";
  import ElusiveView from "@/components/layouts/ElusiveView.vue";
  import MondrianFrames from "@/components/layouts/MondrianFrames.vue";
  import SideBar from "@/components/commun/navigation/SideBar.vue";
  import NotificationView from "@/components/commun/NotificationView.vue";

  /*****************************************
   *      Activation des coposants          *
   ******************************************/

  const activeComponent = ref("ActivitySquares");

  const componentsMap = {
    ColorfulRods,
    ActivitySquares,
    ElusiveView,
    MondrianFrames,
  };

  /*****************************************
   *              Notification              *
   ******************************************/

  const notification = ref({ display: false, message: "" });
  provide("activeComponentKey", activeComponent);

  const handleNotification = (payload) => {
    notification.value = payload;
    if (!notification.value.display) return;

    setTimeout(() => {
      notification.value.display = false;
      notification.value.message = "";
    }, 9000);
  };
</script>
