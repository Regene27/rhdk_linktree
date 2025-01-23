import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import PriceList from "../views/PriceList.vue";

const routes = [
  { path: "/", component: MainPage },
  { path: "/pdf", component: PriceList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
