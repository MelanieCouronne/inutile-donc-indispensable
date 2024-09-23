import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ShowEdito from "@/components/layouts/ShowEdito.vue";
import GitHubActivity from "@/components/layouts/GithubActivity.vue";
import WelcomeView from "@/views/WelcomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: WelcomeView,
      meta: {
        title: import.meta.env.VITE_APP_TITLE,
      },
    },
    {
      path: "/accueil",
      name: "accueil",
      component: HomeView,
      meta: {
        title: import.meta.env.VITE_APP_TITLE,
      },
      children: [
        {
          path: "make-my-point",
          name: "make-my-point",
          component: ShowEdito,
        },
        {
          path: "composant-inutile-1",
          name: "squares",
          component: GitHubActivity,
        },
        {
          path: "composant-inutile-2",
          name: "rods",
          component: () => import("@/components/layouts/ColorfulRods.vue"),
        },
        {
          path: "composant-inutile-3",
          name: "elusive",
          component: () => import("@/components/layouts/ElusiveView.vue"),
        },
        {
          path: "composant-inutile-4",
          name: "mondrian",
          component: () => import("@/components/layouts/MondrianFrames.vue"),
        },
        {
          path: "composant-inutile-5",
          name: "conferences",
          component: () => import("@/components/layouts/ConferenceGallery.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/NotFound.vue"),
      meta: {
        title: `${import.meta.env.VITE_APP_TITLE} - 404 Not Found`,
      },
    },
  ],
});

router.beforeEach((to) => {
  // Titre dynamique des pages
  const defaultTitle =
    import.meta.env.VITE_APP_TITLE || "Inutile, donc indispensable";
  const title = to.meta.title || defaultTitle;
  document.title = title;
});

export default router;
