import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PresentationView from "@/components/layouts/PresentationView.vue";
import ActivitySquares from "@/components/layouts/ActivitySquares.vue";
import ColorfulRods from "@/components/layouts/ColorfulRods.vue";
import ElusiveView from "@/components/layouts/ElusiveView.vue";
import WelcomeView from "@/views/WelcomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: WelcomeView,
    },
    {
      path: "/accueil",
      name: "accueil",
      component: HomeView,
      children: [
        {
          path: "make-my-point",
          name: "make-my-point",
          component: PresentationView,
        },
        {
          path: "composant-inutile-1",
          name: "squares",
          component: ActivitySquares,
        },
        {
          path: "composant-inutile-2",
          name: "rods",
          component: ColorfulRods,
        },
        {
          path: "composant-inutile-3",
          name: "elusive",
          component: ElusiveView,
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
