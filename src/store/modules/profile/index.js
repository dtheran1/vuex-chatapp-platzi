import { COMMIT_UPDATE_USERNAME } from '@/common/mutation-types';
import { getUser } from '@/api'

const module = {
  state() {
    return {
      username: 'Daniel Theran'
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
      console.log(user);
      commit(COMMIT_UPDATE_USERNAME, user.username)
    }
  },
}

export default module