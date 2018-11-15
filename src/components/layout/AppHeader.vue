<template>
    <div class="AppHeader">
        <i @click= "back" v-if= "isIconShow" class="fa fa-angle-left fa-2x"></i>
        <span class="title">{{ title }}</span>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { CHANGE_CITY } from '@/store/chunks/mutation-types'
export default {
    data () {   
        return {
               isIconShow: false,
               title: "猫眼电影"
        }
    },
     beforeCreate () {
         if( localStorage.cities ){
             this.$store.state.chunks.cities = JSON.parse(localStorage.cities)
             this.$store.state.chunks.city = JSON.parse(localStorage.city)
         }else{
             this.$store.dispatch( { type: 'chunks/getPosition' } )
         }

        
    },
    created () { 
        this.title = this.getTitle()
        this.$router.beforeEach((to,from,next) => {
            this.title = this.getTitle(to)
            next(); 
        })
    },
    computed: mapState(['chunks']),
       
    
    methods: {
        getTitle (to){
            let _to = to || this.$route
            switch(_to.name){
                case "home": 
                case "now": 
                case "coming": this.isIconShow = false; return "猫眼电影"; break; 
                case "detail": this.isIconShow = true;  return _to.query.name; break;
                case "cinema": this.isIconShow = false; return "影院"; break;
                case "user": this.isIconShow = false; return "我的"; break;
                case "cities": this.isIconShow = true; return "城市选择"; break;
                case "login": this.isIconShow = true; return "猫眼注册"; break;
            }
        },
        back (){
            window.history.go(-1)
        }
    }
}
</script>
<style lang="scss">
.AppHeader{
    width: 100%;
    background: #e54847;
    color: #fff;
    font-size: .48rem;
    height: 1.346667rem;
    line-height: 1.346667rem;   
    display: flex;
    position: fixed;
    top: 0;
    z-index: 9999;
    .fa{
        margin-left: .266667rem;
        margin-top: .213333rem;
    }
    .title{
        margin-left: 1.466667rem;
        width: 7.2rem;
        height: .8rem;
        text-align: center;
    }
}
</style>
