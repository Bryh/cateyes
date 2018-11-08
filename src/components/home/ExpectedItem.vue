<template>
    <div class="ExpectedItem">
        <div class="expcted-imgbox">
            <img :src="movie.img | imgurl" alt="">
            <span class="expected-wish">
                <span class="expected-wish-num">{{movie.wish}}</span><span>人想看</span>
            </span>
            <div class="expected-toggle-wish">
                    <span></span>
            </div>
        </div>
        <h5 class="expected-name">{{movie.nm}}</h5>
        <p class="expected-date">{{movie.comingTitle}}</p>
    </div>
</template>


<script>
export default {
    props: ["movie"]
}
</script>


<style lang="scss">
.ExpectedItem{
    display: inline-block;
    width: 2.266667rem;
    overflow: hidden;
    margin-right: .266667rem;
    .expcted-imgbox{
        width: 2.266667rem;
        height: 3.066667rem;
        position: relative;
        margin-bottom: 6px;
        img{
            height: 100%;
            width: 100%;
        }
        .expected-wish{
                position: absolute;
                left: 4px;
                bottom: 2px;
                color: #faaf00;
                font-size: .293333rem;
                font-weight: 600;
        }
        .expected-toggle-wish{
                width: .746667rem;
                line-height: .746667rem;
                background: rgba(61,63,71,.6);
                text-align: center;
                border-bottom-right-radius: .266667rem;
                position: absolute;
                top: 0;
                left: 0;
                height: .746667rem;
                span{
                        display: inline-block;
                        width: 10px;
                        height: 10px;
                        background-size: 100%;
                        background-repeat: no-repeat;
                        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAYAAACFFRgXAAAABGdBTUEAALGPC/xhBQAAAytJREFUWAnVmLtrFFEUh3cWFAtRE5FEEUREsFAkooUIgl3+CUEU7LVR1LBIMERCLFLZRG1CrFJYpLBQENRGC4n4wBeKRUQ2PlAQX+v3m70z7MzemZ3HZp05cPbce86553w7O7Mzc51KjDQaDYfwDvSAseux69Cv6Ef0LXoHXXAc5y82UqhVJbgLPYhuQTega9DPaB19ht6VpVYDaxUBWYUGewkcQzdbE4LOJabXaHQ76G7OqHWI0RG0v+mJ/XxPdJpaD2xZbcAUX0XiSXS/bUEH3yPil2imL1Chln6RE+huzVPKffJV60frugAwDfoI1tBtrUkpx4vknzVrLmAHU65vTX/F5DzQnzynDwzsCpwX0e1eMIfV+S3ReZpXXlDgFNC/VEgXgifHGXQDVvUE2g1Y1RKT2FxxgTm6cg4bXxHNsGH0j/DhIlKGmFzGKuSbCAyFgkWcDsG6UaeE/m/LIvsEvKcstGIV8ECJgAcErJtFWaRPwCvLQitWAbv3/ZJALwlYj3ZlkbqA9YBRFnkp4HtloRWrgJ+g/uNbgeHF+LTKY5tebWYLDOqhzYpVR1hyE33njor5ITYxNp/WIP/DeBINvI4ooQAipknD6D9eVnC8JjCOxr799vgLiGXcsLmtvVPCnRB4yGDanRTjQ2/PYvIlACwvCTcwM37G/xvMGJYAQRuwoiRex8wFMns7mTMMbV2twMpiwVXMfNuK5XfMm97WTpHAJvsy9pZ15fI41Us9IyUWmG+qPa4ptBe3b/WYMj2zAWsVBfQfPYEGrlbFuiiqPWF6xZaNPcLeSgr9ZjyGLni+LlrVHDM9OpZNBKwqFPyJGUWfa94lUa1RUztRSX9vLVE2SewNrMboaG9NuiYi7w3+M8B+i4hb3amBVQXotRjdxpPsHWtJWLQHfBrYL+FAp3kmYBUFWnu/2u1Mu03wgTXajaxjU0tmYHUCehAj6H7NE4ggBSvoTJL4orNVp/Eifm1eJ/lplXMuD6wYcgGrAAA6H0fQ75pHiGIjJjciJZk7N7DaAKIrvobarnj5aiaHYT7JdQ6HW5sL8Sj+nSb2GHsF2EwXWLi+5v8ArR6xIZ+h44wAAAAASUVORK5CYII=);
                }
        }
    }
    .expected-name{
            margin: 0 0 3px;
            font-size: 13px;
            color: #222;

    }
    .expected-date{
            margin: 0;
            font-size: 12px;
            color: #999;
    }
}
</style>
