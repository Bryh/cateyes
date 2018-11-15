<template>
    <div class="Detail">
        <app-header></app-header>
        <div class="detail-bg-fillter"></div>
        <div class="detail-info-bg" :style= "bgimg"></div>
        
        <detail-info
        :movieinfo = "moviedetail"
        ></detail-info>
        
        <detail-showdays
        :showDays = "showDays"
        ></detail-showdays>
        <fillter-box></fillter-box>
        <div class="cinema-list">
           <cinema
            v-for= "cinema in cinemas"
            :key = "cinema.id"
            :cinema = "cinema"
           ></cinema>
        </div>
    </div>    
</template>
<script>
import AppHeader from "@com/layout/AppHeader.vue"
import DetailInfo from "@com/detail/DetailInfo.vue"
import DetailShowdays from "@com/detail/DetailShowdays.vue"
import FillterBox from "@com/layout/FillterBox.vue"
import Cinema from "@com/layout/Cinema.vue"
export default {
    name: "detail",
    data () {
        return {
            moviedetail:{},
            bgimg: "",
            cinemas: [],
            showDays: []
        }
    },
    components: {
         AppHeader,
         DetailInfo,
         DetailShowdays,
         FillterBox,
         Cinema
    },
    
    async created () {
        var _id = this.$route.params.id
        var _cityId = this.$store.state.chunks.city.cityId
        //获取电影信息
        let result = await this.$http({
            url: "/ce/ajax/detailmovie",
            params:{
               movieId: _id
            }
        })
        this.moviedetail = result.data.detailMovie
        let newUrl= this. moviedetail.img.replace(/w.h/, "71.100") 
        this.bgimg = "background-image: url("+ newUrl+")"
        this.moviedetail.img = this. moviedetail.img.replace(/w.h/, "148.208") 
        let cinemaRes = await this.$http({
        url: "/ce/ajax/movie?forceUpdate="+Date.now() ,
        method: "POST",
        data: {
            movieId: _id,
            day: 2018-11-15,
            offset: 0,
            limit: 20,
            districtId: -1,
            lineId: -1,
            hallType: -1,
            brandId: -1,
            serviceId: -1,
            areaId: -1,
            stationId: -1,  
            updateShowDay: true,
            reqId: 1542282420189,
            cityId: _cityId
        }

        })
        
        this.cinemas = cinemaRes.data.cinemas
        this.showDays = cinemaRes.data.showDays.dates
        
    }

   
}
</script>

<style lang="scss">
.Detail{
    .detail-bg-fillter{
         filter: blur(1.2rem);
        background: #000;
        z-index: -1;
        height: 5.013333rem;
        width: 100%;
        position: fixed;
        // top:1.346667rem;
    }
    .detail-info-bg{
         filter: blur(0.6rem);
        background-size: cover;
        background-repeat: no-repeat;
        opacity: .55;
        z-index: -1;
        height: 5.013333rem;
        width: 100%;
        position: fixed;
        // top:1.346667rem;
        overflow: hidden;
    }
}
</style>
