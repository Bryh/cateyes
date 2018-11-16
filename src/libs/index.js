import Vue from "vue"

//用axios封装的ajax
import ajax from "@utils/ajax"


//过滤器
import "@utils/filter"

//vue-swiper

import VueAwesomeSwiper from 'vue-awesome-swiper'
 
// require styles
import 'swiper/dist/css/swiper.css'

//引入mint-uicss

import 'mint-ui/lib/style.css'

import myUi from "../myUi"

Vue.use(myUi)

 
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.prototype.$http = ajax
