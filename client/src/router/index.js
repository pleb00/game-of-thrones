import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EpisodesView from "../views/EpisodesView.vue";
import DetailsView from "../views/DetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/season/:id",
      name: "episodes",
      component: EpisodesView,
    },
    {
      path: "/details/:id",
      name: "details",
      component: DetailsView,
    },
  ],
});

export default router;
