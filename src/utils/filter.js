import Vue from "vue"


Vue.filter("imgurl",( imgurl ) =>{
    let _imgurl =imgurl
    let newimgurl = _imgurl.replace(/w.h/, "128.180")
    return newimgurl
} )