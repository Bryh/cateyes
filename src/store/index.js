import Vue from "vue"
import Vuex from "vuex"
import chunks from "./chunks"

// 引入插件

import { saveCities } from "./plugins"

Vue.use(Vuex) 


const store = new Vuex.Store({
    modules: {
        chunks
    },
    plugins: [saveCities]

})

export default store