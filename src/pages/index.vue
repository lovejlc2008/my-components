<template>
  <div>
    <div v-wechat-title="$route.meta.title"></div>
    <ul>
      <li><router-link :to="{ name: 'sliders' }">轮播图</router-link></li>
      <li><router-link :to="{ name: 'waterfall' }">瀑布流</router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
}
</script>
