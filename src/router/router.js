import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: '/yqd'
    },
    {
      path: '/yqd',
      component: resolve => require(['@/components/page/Statistic.vue'], resolve),
      meta: {
        title: '实时战况 - 洋桥店',
      },
      children: []
    },
  ]
})
