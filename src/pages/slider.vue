<template>
  <div>
    <div v-wechat-title="$route.meta.title"></div>
    <v-selection :selections="selections" @on-change-selection="changeSelection"></v-selection>
    <v-counter @on-change="changeCounter"></v-counter>
    <div style="padding-top:20px;">
      <v-slider :sliders="sliders" :speed="3000"></v-slider>
    </div>
    <div style="padding-top:20px;">
      <v-slider0 :sliders="sliders" :speed="3000"></v-slider0>
    </div>
    <div style="padding-top:20px;">
      <v-slider-loop :sliders="sliders" :speed="3000"></v-slider-loop>
    </div>
  </div>
</template>

<script>
import vSelection from '@/components/base/selection'
import vCounter from '@/components/base/counter'
import vSlider from '@/components/base/slider'
import vSlider0 from '@/components/base/slider0'
import vSliderLoop from '@/components/base/sliderLoop'

export default {
  name: 'slider',
  components: {
    vSelection,
    vCounter,
    vSlider,
    vSlider0,
    vSliderLoop
  },
  data () {
    return {
      // selections: []
      // sliders: []
    }
  },
  computed: {
    selections () {
      return this.$store.getters.getSelections
    },
    sliders () {
      return this.$store.getters.getSliders
    }
  },
  methods: {
    changeSelection (nowIndex) {
      this.$store.commit('updateParams', {
        key: 'id',
        val: this.selections[nowIndex].id
      })
    },
    changeCounter (number) {
      console.log(number)
    }
  },
  mounted () {
    this.$store.dispatch('fetchSelections')
    this.$store.dispatch('fetchSliders')
  }
}
</script>

<style>
</style>
