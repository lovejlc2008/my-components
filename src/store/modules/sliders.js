import axios from 'axios'

const state = {
  sliders: [],
  params: {}
}
const getters = {
  getSliders: state => state.sliders
}
const actions = {
  fetchSliders ({commit, state}) {
    axios.post('api/imgList', state.params)
      .then(res => {
        commit('updateSliders', res.data)
      })
      .catch(err => {
        console.log('err', err)
      })
  }
}
const mutations = {
  updateSliders (state, sliders) {
    state.sliders = sliders
  },
  updateSlidersParams (state, {key, val}) {
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
