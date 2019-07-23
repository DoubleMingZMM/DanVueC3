const state = {
  userName: 'Daniel'
};

const getters = {
  firstLetter: (states) => {
    return states.userName.substr(0, 1);
  }
};

const mutations = {
  SET_USER_NAME (states, params) {
    states.userName = params;
  }
};

const actions = {
  updateUserName ({ commit, states, rootState, dispatch }) {
    // rootState.appName
  }
};

export default {
  getters,
  state,
  mutations,
  actions,
  modules: {
    //
  }
};