import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import authRouter from "@/modules/auth/router";
import myStoreRouter from "@/modules/MyStore/router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/auth",
    ...authRouter,
  },
  {
    path: "/MyStore",
    ...myStoreRouter,
    // beforeEnter: []
  },
];

const router = new VueRouter({
  routes,
});

export default router;
