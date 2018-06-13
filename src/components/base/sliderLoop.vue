<template>
  <div class="slider-wrap" v-if="sliders.length !== 0" @mouseover="clearInv" @mouseout="runInv">
    <div class="slider-inner">
      <ul class="slider clearfix" :class="{animate: animate}" :style="{width: 600 * (sliders.length + 2) + 'px', transform: 'translateX('+ ((-600) * (activeIndex + 1)) + 'px)'}">
        <li>
          <a :href="sliders[sliders.length - 1].link">
            <img :src="sliders[sliders.length - 1].src" />
          </a>
        </li>
        <li v-for="(item, index) in sliders" :key="index">
          <a :href="item.link">
            <img :src="item.src" />
          </a>
        </li>
        <li>
          <a :href="sliders[0].link">
            <img :src="sliders[0].src" />
          </a>
        </li>
      </ul>
    </div>
    <div class="slider-tigger">
      <h2 class="title">{{ sliders[(activeIndex === -1?sliders.length - 1:activeIndex) % sliders.length].title }}</h2>
      <div class="pagination-bullets"><span class="pagination-bullet" @click="gotoPrev()">&lt;</span><span class="pagination-bullet" :class="{active:index === activeIndex % sliders.length}" v-for="(item, index) in sliders" :key="index" @mouseover="gotoPage(index)">{{ index + 1 }}</span><span class="pagination-bullet" @click="gotoNext()">&gt;</span></div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.slider-wrap {
  position: relative; width: 600px; overflow: hidden;
  .slider-inner {width: 600px; overflow: hidden;}
  .slider {
    &.animate {transition: all 0.5s;}
    li {float: left;}
    img {display: block;}
  }
  .slider-tigger {
    position: absolute; left: 0; bottom: 0; width: 100%; padding: 3px 10px; background-color: rgba(0,0,0,0.5); box-sizing: border-box;
  }
  .title {color: #fff; font-size: 16px;}
  .pagination-bullets {position: absolute; right: 10px; top: 3px; color: #fff; font-size: 14px; user-select: none;}
  .pagination-bullet {
    display: inline-block; margin: 0 5px; cursor: pointer;
    &.active {color: #4395FF;}
  }
}
</style>
<script>
export default {
  props: {
    sliders: {
      type: Array,
      default () {
        return []
      }
    },
    speed: {
      type: Number,
      default () {
        return 3000
      }
    }
  },
  data () {
    return {
      activeIndex: 0,
      animate: false
    }
  },
  watch: {
  },
  methods: {
    gotoPage (index) {
      clearTimeout(this.aniId)
      this.lock = false
      this.animate = true
      this.activeIndex = index
      this.aniId = setTimeout(() => {
        this.animate = false
      }, this.speed)
    },
    gotoPrev () {
      if (!this.lock) {
        this.lock = true
        this.animate = true
        this.activeIndex -= 1
        this.aniId = setTimeout(() => {
          this.lock = false
          this.animate = false
          if (this.activeIndex === -1) {
            this.activeIndex = this.sliders.length - 1
          } else if (this.activeIndex === this.sliders.length) {
            this.activeIndex = 0
          }
        }, 500)
      }
    },
    gotoNext () {
      if (!this.lock) {
        this.lock = true
        this.animate = true
        this.activeIndex += 1
        this.aniId = setTimeout(() => {
          this.lock = false
          this.animate = false
          if (this.activeIndex === -1) {
            this.activeIndex = this.sliders.length - 1
          } else if (this.activeIndex === this.sliders.length) {
            this.activeIndex = 0
          }
        }, 500)
      }
    },
    runInv () {
      this.invId = setInterval(() => {
        this.gotoNext()
      }, this.speed)
    },
    clearInv () {
      clearInterval(this.invId)
    }
  },
  mounted () {
    this.runInv()
  }
}
</script>
