import axios from 'axios'
/*
 * 正常来说，下拉菜单数据不必要使用vuex，
 * 本示例旨在演示vuex使用流程
 */
const state = {
  selections: [],
  params: {}
}
const getters = {
  getSelections: state => state.selections
}
const actions = {
  fetchSelections ({commit, state}) {
    axios.post('api/selections', state.params)
      .then(res => {
        commit('updateSelections', res.data)
      })
      .catch(err => {
        console.log('err', err)
      })
  }
}
const mutations = {
  updateSelections (state, selections) {
    state.selections = selections
  },
  updateParams (state, {key, val}) {
    state.params[key] = val
    console.log(state.params)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
