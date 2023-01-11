import { COMMIT_UPDATE_USERNAME, COMMIT_SET_STATUS } from '@/common/mutation-types';
import { getUser } from '@/api'

const module = {
  namespaced: true,
  state() {
    return {
      id: 1,
      username: '',
      details: {
        id: 1,
        name: 'Daniel Theran',
        avatar: 'https://scontent.fbaq1-1.fna.fbcdn.net/v/t1.6435-9/118572605_10216687337992247_4409357028681710099_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFBxeLVhyUCRFRmUdwujMRO8t9El4Ms8Jzy30SXgyzwnPBMv22ms9i6FdAiZbVwjes&_nc_ohc=nKzKazw5ausAX9odLnU&_nc_ht=scontent.fbaq1-1.fna&oh=00_AfD3Y0DNH9wb_bIHCbotQFY-5yfME4y1W3vPigYFfjwYjg&oe=63E621F7'
      }
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