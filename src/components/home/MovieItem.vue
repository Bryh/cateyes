<template>
    <div class="MovieItem">
            <div class="movie-item">
                <div class="img-box"><img :src="movie.img | imgurl" alt=""></div>
                <div class="movie-info">
                    <div class="movie-title">
                        <div class="title">{{movie.nm}}</div>
                        <!-- <span class="version"></span> -->
                    </div>
                    <div class="movie-detail">
                        <div class="grade">
                            <div v-if = "movie.globalReleased">
                                 <span >观众评</span>&nbsp;<span class="score">{{movie.sc}}</span>
                            </div>
                            <div v-else>
                                <span class="score">{{movie.wish}}</span><span>人想看</span>
                            </div>
                             
                        </div>
                        <div class="actor">
                            <span class="main-actor">主演：{{movie.star}}</span>
                        </div>
                        <div class="show-info">
                            {{movie.showInfo}}
                        </div>
                       
                    </div>
                     
                </div>
                <div class="movie-btn">
                        <span v-if = "movie.showst == 3" class="buy-btn">购票</span>
                        <span v-if = "movie.showst == 4"   class="prebuy-btn">预售</span>
                        <span v-if = "movie.showst == 1" class="want-see">想看</span>
                </div>
               
            </div>
    </div>
</template>

<script>
export default {
    props: ["movie"],
};
</script>


<style lang="scss">
.movie-item{
    width: 100%;
    height: 3.04rem;
    display: flex;
    font-family: PingFangSC-Regular,Hiragino Sans GB,sans-serif;
    justify-content: space-between;
    padding: .32rem 0 .32rem 0;
    border-bottom: 1px solid #efefef;
    .img-box{
        img{
            width: 1.706667rem;
            height: 2.4rem;
        }
    }
    .movie-info{
        font-size: .346667rem;
        color: #666;
        width: 5.52rem;
        overflow: hidden;
        padding:0 .133333rem;
        margin-left: .133333rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .movie-title{
            .title{
                    font-size: .453333rem;
                    color: #333;
                    font-weight: 700;
                    padding-right: .133333rem;
            }
        }
        .movie-detail{
            .grade{
                div{
                    .score{
                            font-weight: 700;
                            color: #faaf00;
                            font-size: .4rem;
                    }

                }
                    
            }
            .actor{
                .main-actor{
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                }
                
            }
        }
        
    }
    .movie-btn{
            margin: auto;
            .buy-btn{
                    display: block;
                     width: 1.253333rem;
                    height: .72rem;
                    // margin-top: .8rem;
                    line-height: .746667rem;
                    text-align: center;
                    // box-sizing: border-box;
                    background-color: #f03d37;
                    color: #fff;
                    border-radius: 4px;
                    white-space: nowrap;
                    font-size: .32rem;
                    
                    cursor: pointer;
            }
            .prebuy-btn{
                    display: block;
                     width: 1.253333rem;
                    height: .72rem;
                    // margin-top: .8rem;
                    line-height: .746667rem;
                    text-align: center;
                    // box-sizing: border-box;
                    background-color: #3c9fe6;
                    color: #fff;
                    border-radius: 4px;
                    white-space: nowrap;
                    font-size: .32rem;
                    
                    cursor: pointer;
            }
            .want-see{
                    display: block;
                     width: 1.253333rem;
                    height: .72rem;
                    // margin-top: .8rem;
                    line-height: .746667rem;
                    text-align: center;
                    // box-sizing: border-box;
                    background-color: #faaf00;
                    color: #fff;
                    border-radius: 4px;
                    white-space: nowrap;
                    font-size: .32rem;
                    
                    cursor: pointer;
            }
        }
}

</style>
