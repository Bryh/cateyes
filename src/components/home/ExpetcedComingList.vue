<template>
    <div class="ExpetcedComingList">
        <p class="expetced-coming-date">{{date}}</p>
        <movie-item
        v-for = "movie in cominglist"
        :key = "movie.id"
        :movie = "movie"
        v-if = "date == movie.comingTitle"

        ></movie-item>
    </div>
</template>

<script>
import MovieItem from "./MovieItem.vue"
export default {
    props:["date","cominglist"],
    components: {
         MovieItem,
        
    }
}
</script>


<style lang="scss">
.ExpetcedComingList{
    box-sizing: border-box;
    padding-left:  .4rem;
    width: 100%;
    .expetced-coming-date{
            padding-top: .32rem;
            margin: 0;
            font-size: .373333rem;
            color: #333;
    }

}
</style>