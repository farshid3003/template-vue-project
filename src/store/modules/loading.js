export const state = {
  loading: 0,
};

export const getters = {
  loading: s => s.loading > 0,
};

export const actions = {
  setLoading ({ commit }, loading) {
      commit('setLoading', loading);
  },
};

export const mutations = {
  setLoading (s, loading) {
      if (loading) {
          s.loading += 1;
      } else if (s.loading > 0) {
          s.loading -= 1;
      } else {
          s.loading = 0;
      }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
