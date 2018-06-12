<template>
  <div class="selection-conponent" v-if="selections.length !== 0">
    <div class="selection-show" @click="toggleSelection">
      <span>{{ selections[nowIndex].label }}</span>
    </div>
    <ul v-show="isDrop" class="selection-list">
      <li v-for="(item, index) in selections" @click="chooseSelection(index)" v-bind:key="index">{{ item.label }}</li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from '../../eventBus'
export default {
  name: 'selection',
  props: {
    selections: {
      type: Array,
      default () {
        return [{
          label: '前端',
          id: '1000'
        }]
      }
    }
  },
  data () {
    return {
      isDrop: false,
      nowIndex: 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      eventBus.$on('reset-conponent', () => {
        this.isDrop = false
      })
    })
  },
  methods: {
    toggleSelection (event) {
      event.stopPropagation()
      eventBus.$emit('reset-conponent')
      this.isDrop = !this.isDrop
    },
    chooseSelection (index) {
      this.nowIndex = index
      this.$emit('on-change-selection', this.nowIndex)
    }
  }
}
</script>
<style lang="less" type="text/css" scoped>
.selection-conponent {
  position: relative; display: inline-block; border:1px solid #e3e3e3; cursor: pointer;
  .selection-show {
    position: relative; display: inline-block; width: 100%; height: 26px; line-height: 20px; padding:3px 20px 3px 5px; box-sizing: border-box;
    &:after {position: absolute; right: 5px; top: 11px; width: 0; height: 0; border:5px solid transparent; border-top-color: #e3e3e3; content: '';}
  }
  .selection-list {
    position: absolute; left: -1px; top: 26px; display: inline-block; min-width: 100%; background-color: #fff; border:1px solid #e3e3e3; border-top: 0; z-index: 5;
    li {
      height: 26px; padding: 3px 5px; border-top: 1px solid #e3e3e3; box-sizing: border-box; white-space: nowrap;
      &:hover {background-color: #4395FF; color: #fff;}
    }
  }
}
</style>
