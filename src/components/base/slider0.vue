<template>
  <div class="slider-wrap" v-if="sliders.length !== 0" @mouseover="clearInv" @mouseout="runInv">
    <div class="slider-inner">
      <ul class="slider clearfix">
        <li :class="{active: activeIndex === index}" v-for="(item, index) in sliders" :key="index">
          <a :href="item.link">
            <img :src="item.src" />
          </a>
        </li>
      </ul>
    </div>
    <div class="slider-tigger">
      <h2 class="title">{{ sliders[activeIndex].title }}</h2>
      <div class="pagination-bullets"><span class="pagination-bullet" :class="{active:index === activeIndex}" v-for="(item, index) in sliders" :key="index" @mouseover="gotoPage(index)">{{ index + 1 }}</span></div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.slider-wrap {
  position: relative; width: 600px; overflow: hidden;
  .slider-inner {width: 600px; overflow: hidden;}
  .slider {
    position: relative; height: 300px;
    li {
      position: absolute; left: 0; top: 0; transition: all 0.5s; opacity: 0; z-index: 1;
      &.active {opacity: 1; z-index: 2;}
    }
    img {display: block;}
  }
  .slider-tigger {
    position: absolute; left: 0; bottom: 0; width: 100%; padding: 3px 10px; background-color: rgba(0,0,0,0.5); box-sizing: border-box; z-index: 3;
  }
  .title {color: #fff; font-size: 16px;}
  .pagination-bullets {position: absolute; right: 10px; top: 3px; color: #fff; font-size: 14px;}
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
      activeIndex: 0
    }
  },
  watch: {
  },
  methods: {
    gotoPage (index) {
      this.activeIndex = index
    },
    runInv () {
      this.invId = setInterval(() => {
        this.gotoPage((this.activeIndex += 1) % this.sliders.length)
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
