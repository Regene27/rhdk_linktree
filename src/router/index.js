import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import PriceList from "@/views/PriceList.vue";

const routes = [
  { path: "/", component: MainPage },
  { path: "/pricelist", name: "PriceList", component: PriceList },
  { path: "/:catchAll(.*)", name: "NotFound", component: MainPage },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
