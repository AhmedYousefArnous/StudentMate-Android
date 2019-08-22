import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import student from './modules/student'

import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

export const store = new Vuex.Store({
  state: {
    host: "http://localhost:8080"
  },
  getters,
  mutations,
  actions,
  modules: {
    student
  }
});