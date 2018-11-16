<template>
    <div class="perform">
        <div class="marginbox"></div>
        <div class="cinema-search">
            <router-link :to="{ name: 'cities' }" class="city-entry">
                <span class="city-name">
                    {{city.cityNm}}
                </span>
                <i class="fa fa-angle-down"></i>
            </router-link>
            <div class="search-input">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwFJREFUSA3FVs1qU0EUTibBRQiCRF3UB3BTcFHwJ0XRJ+gDhDaQ5vcJ3PgCfYL80AYSyQP4BIKQiosuhLoQXOjCbqQIJUgoyY3fdzNnmCRzk3uvBQfmzrlzzvm+OTNzz7mJxH9qyTC83W733mQyeTKbzbbQc8lk8hL9Ip1OfyqVSr/CYCzbBBKDQHU6nX2MZfQ8HNWyM949LOAU/bharb7F6DlsnFNOYhDmp9NpGx7bTi/35HkqlaphAadu9eLsCjFIS57nNRHlLct0AnmIiL5ivETPQf8Q4y56Gt1v0F8rpRog78pc0LhATFJEemIZXwHoKJvNNguFwm9r3hcHg8Gd0WjUwEJfY+K26BH54SZyQ8ztBcB7K9IzAO01Go2fAhg0NpvNB9C9Q9+hjY781bpt9y8MyBTP1CZFpC/CkJKIdrSHyMUmiKPxXBeSJvOb2mq1DiDLRbqCvFer1f7QIGzT9nuwpz/bNnZxfy6uPv0VYWvKouKZho1UfGTUkR/JOyI3uDIno2JygMEzPTHhRRJlnFH78yvglueJ78JRzEhQyFkMXbfX5Rg0p/2HWi/4K+YKq9qSWf2dymvs0cax8W1AEuesCSaHm2gGZwnfYCuszhhh1l6EMYohGJwlfANF4gt5w+qYBv+52Tg2vg2sWNowIVVll2nQNogqa3/mcDZP48/frKdiPcWqpKKkmXstfWRR+/uFg7hB9VpSpikMTPg690YmpR/834gjiI9FXh79IoEzUUibn6GUtHnG3Bslbbbb7QxIfwDjriY5r9frj0Aux7jALSnTYxGH0bXW7gDkQ9jIdaRfLFLCfEefUXA1UxapvKl6bBF1EXUZAa0sYIFYyBFt7D8QHBu/kuebyFeINXnsf65KpfIR94WXqrSO3ElMB33hDrBNh5DX/mVCf4It7ctFwntyE3kgsbXaRL/fvz8ejx8DMPR/9SbyUMT2IqLIa8mjAMWxdZB/y2QyT80/cRzQMD78lNDKOHOa84fwZbFYtCtiGJj4Noy81+uZcvkXH+aXwmK6+EsAAAAASUVORK5CYII=" alt="">
                <span>搜影院</span>
            </div>
        </div>
        <fillter-box></fillter-box>
        <section class="cinemas-list"
            v-infinite-scroll= "loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="100"
        >
            <cinema
            v-for = "cinema in cinemas"
            :key = "cinema.id"
            :cinema = "cinema"
            ></cinema>
        </section>
         <div id= "backTOTop" v-back>
            <span class="fa fa-angle-up fa-2x"></span>
        </div>

        
        <app-nav></app-nav>
    </div>
</template>

<script>
import AppNav from "@com/layout/AppNav.vue"
import Cinema from "@com/layout/Cinema.vue"
import FillterBox from "@com/layout/FillterBox.vue"
import Vue from "vue"
import { InfiniteScroll,  Toast, Indicator } from 'mint-ui';
Vue.use(InfiniteScroll);
export default {
    data () {
        return {
            cinemas: [],
            ioffset: 0,
            isloading: false,
          
        }
    },
    components: {
    AppNav,
    Cinema,
    FillterBox
  },
  async created () {
      Indicator.open({
        text: 'Loading...',
        spinnerType: 'fading-circle'
    });
      let result = await this.$http({
          url: "/ce/ajax/cinemaList",
          params: {
              cityId: this.$store.state.chunks.city.cityId
          }
      })
      Indicator.close()
    //   console.log(result);
      this.cinemas = result.data.cinemas
  },
  computed: {
      city () {
          return this.$store.state.chunks.city
      }
  },
  methods: {
    async  loadMore () {
      
       
       if(!this.isloading){
           this.isloading = true
           let  offset = this.ioffset + 10
           let result = await this.$http({
              url: "/ce/ajax/cinemaList",
              params: {
                  cityId: this.cityId,
                  offset,
                  limit: 10
              }
          })
          if(result.data.cinemas.length == 0 ){
                Toast({
                message: '这回真没有了',
                position: 'bottom',
                duration: 2000
                });
          }
         
          
          this.cinemas = this.cinemas.concat(result.data.cinemas)
          this.ioffset = this.ioffset + 10
          this.isloading = false
       }
       
          
      }
  }
}
</script>

<style lang="scss" >
    .perform{
        .marginbox{
            margin-top: 1.346667rem;
        }
        .cinema-search{
                display: flex;
                background: #f5f5f5;
                align-items: center;
                height: 1.173333rem ;
                -webkit-box-pack: justify;
                justify-content: space-between;
                .city-entry{
                        padding-left: 15px;
                        font-size: 15px;
                        color: #666;
                        display: flex;
                        -webkit-box-align: center;
                        align-items: center;
                }
                .search-input{
                        display: flex;   
                        justify-content: center;
                        align-items: center;
                        height: .746667rem;
                        font-size: .346667rem;
                        color: #b2b2b2;
                        margin-left: .48rem ;
                        border: .5px solid #e6e6e6;
                        border-radius: 5px;
                        margin-right: .4rem ;
                        -webkit-box-flex: 1;
                        flex-grow: 1;
                        background: #fff;
                        img{
                                width: .373333rem ;
                                height: .373333rem ;
                                margin-left: 3px;
                                margin-right: 4px;
                        }
                }
        }
        #backTOTop{
            height: .8rem;
            width: .8rem;
            border-radius: .4rem;
            background: #e54847;
            position: fixed;
            bottom: 2rem;
            right: 1rem;
            text-align: center;
            color: #ccc;
        }
    }
</style>

