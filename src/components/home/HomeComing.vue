<template>
    <div class="HomeComing">
        <home-mostexpected></home-mostexpected>
        <expetced-cominglist
            v-for = "date in datelist"
            :key = "date"
            :date = "date"
            :cominglist = "cominglist"
        ></expetced-cominglist>
    </div>
</template>

<script>
import HomeMostexpected from "./HomeMostexpected.vue"
import ExpetcedCominglist from "./ExpetcedComingList.vue"
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
            url: "/ce/ajax/comingList?ci=57"
        })
        this.cominglist = result.data.coming
        
        this.handleDatelist()
        
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

}
</style>
