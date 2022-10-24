export default {
  name: "auth",
  component: () =>
    import(/*webpackChunkName: "Auth" */ "@/modules/auth/views/LoginView.vue"),
};
