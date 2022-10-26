import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import SocketIO from "socket.io-client";
import VueSocketIO from "vue-socket.io";

// Integracion de buefy
import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy);

//integracion de sockets
Vue.use(
  new VueSocketIO({
    connection: SocketIO("http://localhost:3000", {
      transports: ["websocket", "polling", "flashsocket"],
    }),
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_",
    },
  })
);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  //En cada carga definimos un socket para este client
  beforeCreate() {
    store.commit("socketio/setSocket", this.$socket);
  },
  render: (h) => h(App),
}).$mount("#app");
