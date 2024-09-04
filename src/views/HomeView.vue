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
    <component :is="componentsMap[activeComponent]" />
  </main>
</template>

<script setup>
  import { provide, ref } from "vue";
  import ColorfulRods from "@/components/layouts/ColorfulRods.vue";
  import ActivitySquares from "@/components/layouts/ActivitySquares.vue";
  import ElusiveView from "@/components/layouts/ElusiveView.vue";
  import SideBar from "@/components/commun/navigation/SideBar.vue";
  import NotificationView from "@/components/commun/NotificationView.vue";

  /*****************************************
   *      Activation des coposants          *
   ******************************************/

  // const activeComponent = inject("activeComponentKey");
  const activeComponent = ref("ActivitySquares");

  const componentsMap = {
    HelloWorld,
    ColorfulRods,
    ActivitySquares,
    ElusiveView,
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
