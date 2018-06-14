<template>
  <div>
    <v-waterfall-easy v-if="imgsArr.length !== 0" :imgsArr="imgsArr" :imgWidth="200" :maxCols="5">
      <template slot-scope="props">
        {{props.value.href}}
      </template>
    </v-waterfall-easy>
  </div>
</template>

<script>
import vWaterfallEasy from 'vue-waterfall-easy'
export default {
  name: 'waterFall',
  components: {
    vWaterfallEasy
  },
  data () {
    return {
    }
  },
  computed: {
    imgsArr () {
      return this.$store.getters.getWaterfall
    }
  },
  created () {
    this.$store.dispatch('fetchWaterfall')
  },
  methods: {
    getData () {
      this.$store.dispatch('fetchWaterfall')
    },
    getScrollTop () {
      var scrollTop = 0
      var bodyScrollTop = 0
      var documentScrollTop = 0
      if (document.body) {
        bodyScrollTop = document.body.scrollTop
      }
      if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop
      }
      scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop
      return scrollTop
    },
    getScrollHeight () {
      var scrollHeight = 0
      var bodyScrollHeight = 0
      var documentScrollHeight = 0
      if (document.body) {
        bodyScrollHeight = document.body.scrollHeight
      }
      if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight
      }
      scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight
      return scrollHeight
    },
    getWindowHeight () {
      var windowHeight = 0
      if (document.compatMode === 'CSS1Compat') {
        windowHeight = document.documentElement.clientHeight
      } else {
        windowHeight = document.body.clientHeight
      }
      return windowHeight
    },
    handleScroll () {
      if (this.getScrollTop() + this.getWindowHeight() === this.getScrollHeight()) {
        this.$store.commit('updateWaterfallBusy', true) // 设置并发锁
        this.getData()
      } else {
        this.toBottom = false
      }
    }
  },
  updated () {
    document.getElementsByClassName('vue-waterfall-easy-scroll')[0].style.overflow = 'visible'
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>
