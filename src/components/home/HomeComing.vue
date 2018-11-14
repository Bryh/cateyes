<template>
    <div ref="comingscroll" class="HomeComing">
        <div  class="coming-content">
            <home-mostexpected></home-mostexpected>
            <expetced-cominglist
                v-for = "date in datelist"
                :key = "date"
                :date = "date"
                :cominglist = "cominglist"
            ></expetced-cominglist>

        </div>
        
    </div>
</template>

<script>
import HomeMostexpected from "./HomeMostexpected.vue"
import ExpetcedCominglist from "./ExpetcedComingList.vue"
import BetterScroll from "better-scroll"
export default {
    data () {
        return {
            cominglist: [],
            datelist: []
        }
    },
    components: {
        HomeMostexpected,
        ExpetcedCominglist
    },
    async created () {
        let result = await this.$http({
            url: "/ce/ajax/comingList?ci=57&token=-rLXk_r_28RGJdubtRdBUUhfKY0AAAAAWQcAACNwhhXHc0Anszdisjw_TohYZlN4sEO6OgxMVzCM71Lj2aa9kiamxFGVH2OO95lMRg"
        })
        this.cominglist = result.data.coming
        
        this.handleDatelist()
        
    },
    mounted () {
        this.$nextTick(() => {
        this.scroll = new BetterScroll(this.$refs.comingscroll, {
            click: true
        })
      })
    },
    methods: {
        handleDatelist (){
            let date = [];
            for(let i=0 ;i<this.cominglist.length; i++){
                date.push(this.cominglist[i].comingTitle)
            }
                this.datelist =Array.from(new Set(date))  
        }
    }
}
</script>


<style lang="scss">
.HomeComing{
    box-sizing: border-box;
    padding-right: .4rem;
    width: 100%;
    margin-top: 2.52rem;
    height: 14rem;
    .coming-content{

    }
}
</style>
