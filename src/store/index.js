import { createStore } from "vuex";

export default createStore({
  state: {
    popup: null,
  },
  mutations: {
    setPopup(state, popup) {
      state.popup = popup;
    },
  },
  actions: {
    setPopup({ commit }, popup) {
      commit(`setPopup`, popup);
    },
  },
  modules: {},
});
