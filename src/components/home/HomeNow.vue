<template>
    <div ref="Nowscroll" class="HomeNow">
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
import BetterScroll from "better-scroll"
import {  Indicator } from 'mint-ui';
export default {
    data (){
        return {
            movies: [],
            
        }
    },
    async created () {
         Indicator.open({
        text: 'Loading...',
        spinnerType: 'fading-circle'
    });
        let result = await this.$http({
            url: "/ce/ajax/movieOnInfoList",
            params: {
                cityId: this.$store.state.chunks.city.cityId
            }
        })
        Indicator.close()
        this.movies = result.data.movieList  
        
        
    },
    mounted () {
        this.$nextTick(() => {
        this.scroll = new BetterScroll(this.$refs.Nowscroll, {
            click: true,
        })
      })
    },
    components: {
        MovieItem
    },
    methods: {
       
    }

}
</script>


<style lang="scss">
.HomeNow{
    margin-top: 2.52rem;
    width: 100%;
    height: 15rem;
    overflow: hidden;
    .movies-list{
        box-sizing: border-box;
        padding: 0 .4rem;
    }
}
</style>
