import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import authRouter from "@/modules/auth/router";
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
];

const router = new VueRouter({
  routes,
});

export default router;
