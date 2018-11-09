<template>
    <div class="Detail">
        <app-header></app-header>
        <div class="detail-bg-fillter"></div>
        <div class="detail-info-bg" style="background-image: url(//p0.meituan.net/71.100/movie/363e3a7e614d29b2847ff4e62afcd3f42168651.jpg)"></div>
        <detail-info
        :movieinfo = "moviedetail"
        ></detail-info>
        <detail-showdays></detail-showdays>
        <fillter-box></fillter-box>
        <div class="cinema-list">
           <cinema></cinema>
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
            cinema: [],
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
        let result = await this.$http({
            url: "/ce/ajax/detailmovie",
            params:{
               movieId: _id
            }
        })
        console.log(result);
        this.moviedetail = result.data.detailMovie
        console.log(this.moviedetail);
        
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
        top:1.346667rem;
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
