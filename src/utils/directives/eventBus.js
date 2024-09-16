import { reactive } from "vue";

const eventBus = reactive({ sidebarToggled: false });

const store = reactive({
  isLoading: false,
});

export { eventBus, store };
