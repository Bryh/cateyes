import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cinema from './views/Cinema.vue'
import User from './views/User.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias: "/home"
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: Cinema
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
