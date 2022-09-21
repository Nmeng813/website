import { createStore } from 'vuex'

export default createStore({
  state: {
    menuCurrent: []
  },
  mutations: {
    changeMenuCurrent (state, value) {
      state.menuCurrent = value
    }
  },
  actions: {
  },
  modules: {
  }
})
