import Vue from "vue";
import Vuex from "vuex";

// Registrar Vuex
Vue.use(Vuex);

// Funçao construtora
export default new Vuex.Store({
  state: {
    cards: [],
  },
  mutations: {
    addCards(state, payload) {
      state.cards.push(payload);
    },
  },
});
