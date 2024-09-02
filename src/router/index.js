import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HelloWorld from "../components/HelloWorld.vue";
import ActivityRods from "../components/layouts/ActivityRods.vue";
import ActivitySquares from "../components/layouts/ActivitySquares.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "hello-world",
          name: "hello-world",
          component: HelloWorld,
        },
        {
          path: "activity-rods",
          name: "activity-rods",
          component: ActivityRods,
        },
        {
          path: "activity-squares",
          name: "activity-squares",
          component: ActivitySquares,
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
