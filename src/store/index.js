import { createStore } from 'vuex'
import profile from './modules/profile'

const store = createStore({
  state() {
    return {}
  },
  getters: {},
  modules: {
    profile
  }
})

export default store