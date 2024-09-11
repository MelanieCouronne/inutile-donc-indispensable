import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// Vérifiez si une redirection est nécessaire (pour la 404)
const redirect = new URLSearchParams(window.location.search).get("redirect");
if (redirect) {
  router.replace(redirect);
}

app.use(router).mount("#app");
