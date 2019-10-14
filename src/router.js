import Vue from 'vue'
import Router from 'vue-router' 

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      name: 'home',
      component: resolve => require(['./views/Home.vue'],resolve)
    },
    {
      path:'/home',
      name: 'home',
      component: resolve => require(['./views/Home.vue'],resolve)
    },
    {
      path: '/Member',
      name: 'Member',
      component: resolve => require(['./views/Member.vue'],resolve)
    },
    {
      path: '/Game',
      name: 'Game',
      component: resolve => require(['./views/Game.vue'],resolve)
    },
    {
      path: '/My',
      name: 'My',
      component: resolve => require(['./views/My.vue'],resolve)
    },
  ]
})
