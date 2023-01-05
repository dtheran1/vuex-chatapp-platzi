import { createStore } from 'vuex'
import { getUser } from '../api/index'
import { COMMIT_UPDATE_USERNAME } from '../common/mutation-types'

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
    [COMMIT_UPDATE_USERNAME](state, payload) {
      state.username = payload
    }
  },
  actions: {//aqui podemos invocar mutations con el commit
    async updateUsername({ commit, state }, payload) {
      const user = await getUser(1)
      commit(COMMIT_UPDATE_USERNAME, user.username)
    }
  }
})

export default store