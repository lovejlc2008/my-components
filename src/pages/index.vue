<template>
  <div>
    <ul>
      <li><router-link :to="{ name: 'sliders' }">轮播图</router-link></li>
      <li><router-link :to="{ name: 'waterfall' }">瀑布流</router-link></li>
      <li><router-link :to="{ name: 'datepicker' }">日历控件</router-link></li>
      <li><router-link :to="{ name: 'pagination' }">分页组件</router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
}
</script>
