import axios from 'axios'

const state = {
  imgsArr: [],
  waterfallParams: {},
  waterfallBusy: false
}
const getters = {
  getWaterfall: state => state.imgsArr,
  getWaterfallBusy: state => state.waterfallBusy
}
const actions = {
  fetchWaterfall ({commit, state}) {
    console.log('fetchWaterfall')
    axios.post('api/waterfall', state.params)
      .then(res => {
        commit('updateWaterfall', res.data)
      })
      .catch(err => {
        console.log('err', err)
      })
  }
}
const mutations = {
  updateWaterfall (state, imgsArr) {
    state.imgsArr = state.imgsArr.concat(imgsArr)
    state.waterfallBusy = false
  },
  updateWaterfallParams (state, {key, val}) {
    state.waterfallParams[key] = val
  },
  updateWaterfallBusy (state, busy) {
    state.waterfallBusy = busy
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
