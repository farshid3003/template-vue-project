export const state = {
  messages: [],
};

export const getters = {
  messages: s => s.messages,
};

export const actions = {
  addError ({ commit }, error) {
      error.isError = true;
      commit('addMessage', error);
  },
  addMessage ({ commit }, message) {
      commit('addMessage', message);
      window.setTimeout(() => {
          commit('dismissMessage', message.id);
      }, 7000);
  },
  dismissMessage ({ commit }, messageId) {
      commit('dismissMessage', messageId);
  },
};

export const mutations = {
  addMessage (s, message) {
      s.messages.push(message);
  },
  dismissMessage (s, messageId) {
      for (let i = 0; i < s.messages.length; i += 1) {
          if (s.messages[i].id === messageId) {
              s.messages.splice(i, 1);
              return;
          }
      }
  },
};


export default {
  state,
  getters,
  actions,
  mutations,
};
