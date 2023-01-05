import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      username: 'Daniel.State'
    }
  },
  getters: {
    firstName: (state) => (c) => {
      return state.username.split('').join(c)
    }
  },
  mutations: {
    updateUsername(state, payload) {
      state.username = payload
    }
  }
})

export default store