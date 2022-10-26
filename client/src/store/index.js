import Vue from "vue";
import Vuex from "vuex";

import auth from "@/modules/auth/store";
import myStore from "@/modules/MyStore/store";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    myStore,
  },
});
