import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// IMPORT MODULES
import counter from './counter'


import state from "@/store/state"
import mutations from "@/store/mutations"
import getters from '@/store/getters'
import actions from "@/store/actions";

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    counter
  }
})
