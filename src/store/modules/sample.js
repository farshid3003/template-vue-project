import service from '@/services/sample.service.js'

// STATE
export const state = {
  sampleObject: {}
}

// Actions
export const actions = {
  async loadSample ({ commit, dispatch }) {
    await service.loadSample('test')
    .then((response) => {
      commit('setSample', response.result)
    })
    .catch((error) => {
      dispatch('messages/addError', error, { root: true });
    });
  }
}

// MUTATIONS
export const mutations = {
  setSample (state, sample) {
    state.sampleObject = sample
  },
}

// Getters
export const getters = {
  group: s => s.sampleObject
}

export default {
  state,
  getters,
  mutations,
  actions
}
