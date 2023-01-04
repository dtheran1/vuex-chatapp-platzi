import { createStore } from 'vuex'

const store = createStore({
  state() {
    return{
      username: 'Daniel.State'
    }
  },
  getters: {
    firstName : (state) => (c) => {
      return state.username.split('').join(c)
    }
  }
})

export default store