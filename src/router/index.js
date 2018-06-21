import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import slider from '@/pages/slider'
import waterfall from '@/pages/waterfall'
import datepicker from '@/pages/datepicker'
import pagination from '@/pages/pagination'

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
    },
    {
      path: '/datepicker',
      name: 'datepicker',
      meta: {
        title: '日历控件'
      },
      component: datepicker
    },
    {
      path: '/pagination',
      name: 'pagination',
      meta: {
        title: '分页组件'
      },
      component: pagination
    }
  ]
})
