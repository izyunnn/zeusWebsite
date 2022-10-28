import { createStore } from 'vuex'
export default createStore({
  state: {
    showModal: false
  },
  getters: {
  },
  mutations: {
    setshowModal (state, payload) {
      state.showModal = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
