import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import slider from '@/pages/slider'
import waterfall from '@/pages/waterfall'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        title: '组件列表'
      },
      component: index
    },
    {
      path: '/sliders',
      name: 'sliders',
      meta: {
        title: '轮播图demo'
      },
      component: slider
    },
    {
      path: '/waterfall',
      name: 'waterfall',
      meta: {
        title: '瀑布流demo'
      },
      component: waterfall
    }
  ]
})
