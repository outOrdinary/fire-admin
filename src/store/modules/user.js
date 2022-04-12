const getDefaultState = () => {
  return {
    fromData: null
  }
}

const state = getDefaultState()

const mutations = {
  SET_FROMDATA: (state, fromData) => {
    state.fromData = fromData
  }
}

const actions = {
  setFromData ({ commit }, data) {
    console.log(data)
    commit('SET_FROMDATA', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
