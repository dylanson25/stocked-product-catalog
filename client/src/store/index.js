import Vue from "vue";
import Vuex from "vuex";

import auth from "@/modules/auth/store";
import myStore from "@/modules/MyStore/store";
import socketio from "./socketio";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    myStore,
    socketio,
  },
});
