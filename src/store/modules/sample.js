import service from '@/services/sample.service.js'

// STATE
export const state = {
  sampleObject: ''
}

// Actions
export const actions = {
  loadSample ({ commit, dispatch }, {x} ) {
    service.loadSample(x)
    .then((response) => {
      commit('setSample', response)
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
  sampleObject: s => s.sampleObject
}

export default {
  state,
  getters,
  mutations,
  actions
}
