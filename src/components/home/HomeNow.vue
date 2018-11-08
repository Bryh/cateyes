<template>
    <div class="HomeNow">
        <section class="movies-list">
            <movie-item
                v-for = "movie in movies "
                :key = "movie.id"
                :movie = "movie"
            ></movie-item>
        </section>
        
    </div>
</template>

<script>
import MovieItem from "./MovieItem.vue"
export default {
    data (){
        return {
            movies: []
        }
    },
    async created () {
        let result = await this.$http({
            url: "/ce/ajax/movieOnInfoList"
        })
        
        this.movies = result.data.movieList  
        
        
    },
    components: {
        MovieItem
    }

}
</script>


<style lang="scss">
.HomeNow{
    margin-top: 2.52rem;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .movies-list{
        box-sizing: border-box;
        padding: 0 .4rem;
    }
}
</style>
