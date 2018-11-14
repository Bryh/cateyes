import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
//引入插件
import "@libs/flexible"
import "@libs"

//引入css文件
import "@css/main.scss"


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
