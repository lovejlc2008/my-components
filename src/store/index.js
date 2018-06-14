import Vuex from 'vuex'
import Vue from 'vue'
import selections from './modules/selections'
import sliders from './modules/sliders'
import waterfall from './modules/waterfall'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    selections,
    sliders,
    waterfall
  }
})
