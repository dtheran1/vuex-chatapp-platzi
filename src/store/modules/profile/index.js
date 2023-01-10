import { COMMIT_UPDATE_USERNAME, COMMIT_SET_STATUS } from '@/common/mutation-types';
import { getUser } from '@/api'

const module = {
  namespaced: true,
  state() {
    return {
      username: ''
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
    async updateUsername({ commit, state, rootState }, payload) {
      const user = await getUser(1)
      commit(COMMIT_UPDATE_USERNAME, user.username)
      if (state.username) {
        commit(COMMIT_SET_STATUS, 'active', { root: true })//root: true es para enviarlo al state raiz
      }
    }
  },
}

export default module