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
  },
  actions: {//aqui podemos invocar mutations con el commit
    updateUsername({ commit, state }, payload) {
      commit('updateUsername', payload)
    }
  }
})

export default store