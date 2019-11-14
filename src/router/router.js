import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: '/demo'
    },
    {
      path: '/demo',
      component: resolve => require(['@/components/page/Demo.vue'], resolve),
      meta: {
        title: '自娱自乐',
      },
      children: [{
        path: '/alignment',
        component: resolve => require(['@/components/page/Alignment.vue'], resolve),
        meta: {
          title: 'CSS对齐',
        },
        children: []
      }]
    }
  ]
})