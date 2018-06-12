<template>
  <div class="counter-component">
    <span class="minus" @click="minus">-</span>
    <span class="add" @click="add">+</span>
    <input class="fixNumber" type="text" v-model="number" @blur="fixNumber" />
  </div>
</template>
<style lang="less" scoped>
.counter-component {
  position: relative; display: inline-block; height: 26px; line-height: 24px; padding: 0 24px; border: 1px solid #e3e3e3; box-sizing: border-box;
  .minus, .add {
    position: absolute; top: 0; width: 24px; text-align: center; font-size: 16px; user-select: none;
    &:hover {background-color: #4395FF; color: #fff; cursor: pointer;}
  }
  .minus {left: 0; border-right: 1px solid #e3e3e3;}
  .add {right: 0; border-left: 1px solid #e3e3e3;}
  .fixNumber {width: 40px; padding:3px 5px; border:0; height: 24px; box-sizing: border-box; text-align: center;}
}
</style>
<script>
export default {
  props: {
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      number: this.min
    }
  },
  methods: {
    fixNumber () {
      let fix
      if (typeof this.number === 'string') {
        fix = Number(this.number.replace(/\D/g, ''))
      } else {
        fix = this.number
      }
      if (fix > this.max) {
        fix = this.max
      } else if (fix < this.min) {
        fix = this.min
      }
      this.number = fix
    },
    minus () {
      if (this.number <= this.min) {
        return false
      }
      this.number--
    },
    add () {
      if (this.number >= this.max) {
        return false
      }
      this.number++
    }
  },
  watch: {
    number () {
      this.$emit('on-change', this.number)
    }
  }
}
</script>
