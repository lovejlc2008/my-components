import Vue from 'vue'
import Router from 'vue-router'
import {load} from '@/util/common'

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
      component: load('pages/index')
    },
    {
      path: '/sliders',
      name: 'sliders',
      meta: {
        title: '轮播图demo'
      },
      component: load('pages/slider')
    },
    {
      path: '/waterfall',
      name: 'waterfall',
      meta: {
        title: '瀑布流demo'
      },
      component: load('pages/waterfall')
    },
    {
      path: '/datepicker',
      name: 'datepicker',
      meta: {
        title: '日历控件'
      },
      component: load('pages/datepicker')
    },
    {
      path: '/pagination',
      name: 'pagination',
      meta: {
        title: '分页组件'
      },
      component: load('pages/pagination')
    }
  ]
})
