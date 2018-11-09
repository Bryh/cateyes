<template>
    <div  class="HomeMostexpected">
        <p class="recent-expected">近期最受期待</p>
        <div ref="expetcedscroll" class="expetced-content">
            <div class="expected-list">
                <expected-item
                v-for="movie in expectedmovie"
                :key = "movie.id"
                :movie = "movie"
                ></expected-item>
            </div>
        </div>
       
    </div>
</template>


<script>
import ExpectedItem from "./ExpectedItem.vue"
import BetterScroll from "better-scroll"
export default {
    data () {
        return {
            expectedmovie: [],

        }
    },
    async created(){
        let result = await this.$http({
            url: "/ce/ajax/mostExpected?ci=57&limit=10&offset=0"
        })
        
        this.expectedmovie = result.data.coming
    },
    mounted () {
        this.$nextTick(() => {
        this.scroll = new BetterScroll(this.$refs.expetcedscroll, {
            scrollX:true,
            eventPassthrough:'vertical' ,
            click: true
        })
      })
    },
    components: {
        ExpectedItem
    }
}
</script>


<style lang="scss">
.HomeMostexpected{
    width: 9.146667rem;
    padding: .32rem 0 .32rem 0;
    height: 5.76rem;
    margin-left: .4rem;
    overflow: hidden;
    .recent-expected{
        margin: 0 0 .32rem;
        font-size: .373333rem;
        color: #333;
    }
    .expetced-content{
        width: 9.146667rem;
        .expected-list{
            display: inline-block;
            // overflow: scroll;
            white-space: nowrap;
        }
    }
   
}
</style>
