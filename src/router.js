import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HomeNow from '@com/home/HomeNow.vue'
import HomeComing from '@com/home/HomeComing.vue'
import Cinema from './views/Cinema.vue'
import User from './views/User.vue'
import Detail from './views/Detail.vue'
import Cities from './views/Cities.vue'
import Login from './views/Login.vue'


import auth from "@utils/auth"


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect: "/home/now",
      alias:"/",
      children: [
        {
          path: "now",
          name: "now",
          component: HomeNow,
        },
        {
          path: "coming",
          name: "coming",
          component: HomeComing,
        }
      ]
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: Cinema
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      beforeEnter (to,from,next)  {
        let result = auth.authLogin()
        next ( result.id? true : { name: 'login' } )
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/cities',
      name: 'cities',
      component: Cities
    },
    {
      path: '/login',
      name: 'login',
      component: Login

    }
  ]
})
