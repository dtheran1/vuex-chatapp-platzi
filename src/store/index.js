import { createStore } from 'vuex'
import profile from './modules/profile'
import channels from './modules/channels'
import { COMMIT_SET_STATUS } from '../common/mutation-types'

const store = createStore({
  state() {
    return {
      status: null,
    }
  },
  getters: {},
  mutations: {
    [COMMIT_SET_STATUS](state, payload) {
      state.status = payload
    }
  },
  modules: {
    profile,
    channels
  }
})

export default store