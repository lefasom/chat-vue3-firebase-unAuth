// src/store.js
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      modoNocturno: false,
    };
  },
  mutations: {

    setModoNocturno(state, modoNocturno) {
      state.modoNocturno   = !state.modoNocturno
    },
  },
  actions: {
    modificoModoNocturno({ commit }, modoNocturno) {
      commit('setModoNocturno');
    },

  }
});

export default store;
