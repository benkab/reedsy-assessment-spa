import Vue from "vue";
import Vuex from "vuex";

import bookStore from "./bookStore";
import commentStore from "./commentStore";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    bookStore,
    commentStore
  },
  strict: debug
});
