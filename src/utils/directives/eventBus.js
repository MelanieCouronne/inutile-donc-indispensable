import { reactive } from "vue";

const sidebarEvent = reactive({ isSidebarToggled: false });

const store = reactive({
  isLoading: false,
});

export { sidebarEvent, store };
