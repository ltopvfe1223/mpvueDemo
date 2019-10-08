import Vue from "vue";
import Vuex from "vuex";
import store from "./stroe";
import state from "./state";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getter";


Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
