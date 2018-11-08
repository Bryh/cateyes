<template>
    <div class="HomeMostexpected">
        <p class="recent-expected">近期最受期待</p>
        <div class="expected-list">
            <expected-item
            v-for="movie in expectedmovie"
            :key = "movie.id"
            :movie = "movie"
            ></expected-item>
        </div>
    </div>
</template>


<script>
import ExpectedItem from "./ExpectedItem.vue"
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
    components: {
        ExpectedItem
    }
}
</script>


<style lang="scss">
.HomeMostexpected{
    width: 100%;
    padding: .32rem 0 .32rem .4rem;
    height: 5.76rem;
    
    overflow: hidden;
    .recent-expected{
        margin: 0 0 .32rem;
        font-size: .373333rem;
        color: #333;
    }
    .expected-list{
        overflow: scroll;
        white-space: nowrap;
    }
}
</style>
