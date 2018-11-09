import Vue from "vue"


Vue.filter("imgurl",( imgurl , wh ) =>{
    let _imgurl =imgurl
   
    let newimgurl = _imgurl.replace(/w.h/, wh )
    return newimgurl
} )