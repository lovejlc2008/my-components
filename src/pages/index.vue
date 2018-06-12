<template>
  <div>
    <v-selection :selections="selections" @on-change-selection="changeSelection"></v-selection>
    <v-counter @on-change="changeCounter"></v-counter>
    <v-slider :sliders="sliders"></v-slider>
  </div>
</template>

<script>
import vSelection from '@/components/base/selection'
import vCounter from '@/components/base/counter'
import vSlider from '@/components/base/slider'
import '../mock/mock'

export default {
  name: 'index',
  components: {
    vSelection,
    vCounter,
    vSlider
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
