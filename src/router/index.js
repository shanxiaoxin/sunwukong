import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main/Main'
import yudinghys from '@/components/Main/yudinghys'
import wodeyd from '@/components/Main/wodeyd'
import yudingsp from '@/components/Main/yudingsp'
import huiyisydgl from '@/components/Main/huiyisydgl'
import huiyisgl from '@/components/Main/huiyisgl'
import quyujzwgl from '@/components/Main/quyujzwgl'
import xitongsz from '@/components/Main/xitongsz'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/yudinghys',
      name: 'yudinghys',
      component: yudinghys
    },
    {
      path: '/wodeyd',
      name: 'wodeyd',
      component: wodeyd
    },
    {
      path: '/yudingsp',
      name: 'yudingsp',
      component: yudingsp
    },
    {
      path: '/huiyisydgl',
      name: 'huiyisydgl',
      component: huiyisydgl
    },
    {
      path: '/huiyisgl',
      name: 'huiyisgl',
      component: huiyisgl
    },
    {
      path: '/quyujzwgl',
      name: 'quyujzwgl',
      component: quyujzwgl
    },
    {
      path: '/xitongsz',
      name: 'xitongsz',
      component: xitongsz
    },
  ]
})
