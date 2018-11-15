<template>
    <div class="ExpectedItem">
        <div class="expcted-imgbox">
            <img :src="movie.img | imgurl( '128.180' ) " alt="">
            <span class="expected-wish">
                <span class="expected-wish-num">{{movie.wish + wish}}</span><span>人想看</span>
            </span>
            <div class="expected-toggle-wish" @click= "addWish">
                    <span ref="wishImg"></span>
            </div>
        </div>
        <h5 class="expected-name">{{movie.nm}}</h5>
        <p class="expected-date">{{movie.comingTitle}}</p>
    </div>
</template>


<script>
import { Toast } from 'mint-ui';
export default {
    props: ["movie"],
    data () {
        return {
            wish: 0
        }
        
    },
  
    methods: {
      async  addWish () {
            if(this.wish == 0){
                this.$refs.wishImg.style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAYAAACFFRgXAAAABGdBTUEAALGPC/xhBQAABDBJREFUWAnVmE1oVFcUgM+58xIzZJzJohjRWrR1URei4E8yykwmxkypdlUMFPEHcWHRpUHdKFl0oWIXLVQUhKK4KBiyUySimcwYk9QGLApGxB/UKBHRTBxJjG/e7TlveOPLy5t/rde7mHvPuefny8kZ5t6LkGdIKfF105ogzZsAZVACzEfAOTS/QJCPafumB8VfvnXRGHZ0GHlCgezoEKkr3ZG0NH5ClEsl4AIE+EKCfE7zCEjsR8TO2b3XeKYU7oNs3Ucy3LABAH8l2G/dLWxaxBEU8kAgNnjWps0uk5GGLdLAwyDl/Kwyx4JghwHk3kB88IKbyQxgGY3WJifHz1DwH90c8uvwchVUba1NJJ6x3ZvWtfPeTabPEEBLfj+XXcSuQI1/G3Z3v7HvTgNOtTTU61NwngxW2I1KWVPL3Kuepa1jn6m3+hX6l39Tir/Ddkirho2+y4Ojlj4LLNvaqsdHHyeoBVZbm+XP+CjjK78qP0bGk1rkb3/9ghCeOzfFGmEFfD366PcPA8sRGbRyWDMSFZDZLE6zwmORtSshrV+3lErOHm1VXazvH7PCaOi/KAlpg7IYMRkJLpZp465tT91llWexAMPYqC7hdDLU0z9QS+B309UqSxjlHl6oMqKDbZGQEuY6lMqKzCoQwassoQOMWanC8qlDr6zIrIJ++z8bYKrwiADEIWVLOhNsSBBx10y9mhpErUvQbeEqldo8v6qJmaFixtnNrX2Zw084uAukcUJlYEDxc128/6R5+AnUf3mKevmWssDEZjISYPYAn4qsWa4bRoKuRj6lwBFTmhAhX+zaDeYyK8wLVqDANjrh6yyrMJiFmSxYZsoCsxCI9V+km0I7r9UYsj3D9J5mGjCr6Xr9G/XJofcmn2ZF1T3ILM7s2R52boyFGo9Qtfc59f+PjEfrEgP73XLlBGbjZLjxD/r93u3m+LF0VNnjgfjAnlzx8wITLI43Bf+keXuuAB9ST7Cn/b39O2jO+VQ1o4ftAOxIbwI7Sddp13+kdSfnygfLefMCswE9YKQDS5ZtpkCub11sU+ng2GYOylUoVt6WsDvLSKQmaUxcAAnNdn3Fa4SegPBuwFhssphYRQNzMIL2jRsTl+iq0lhM8EI2dKAZ8AtvK8GmCtla+yUBsxNB11Gle6jSy60gZc0IN6iyzQQ7Vop/wR52BuMEntrqKPXdsHOvWJl8b5sxSoTl+CVX2ILKvP3qCZK/tnRFzverarRQ7aW+sq5mZQMz3EQ4vOgtTPEJr+DLuvnHIDyZJTDkjQ08NOUyPkpuCXsObzz+QHg8LXSRfW7Xu63ZRni09ZXActyKgDmAv6fvjkfTotRdr1h2H/iKbdjWfb94bcXAnMrXc/Vf1OB7quJLZ2rW8R7bOPfKkSvqYWdC/iLqk/oxqnZTZk/2ajVae7lfMGd8lv8DidRU804Sf28AAAAASUVORK5CYII=);"
                
              await  setTimeout(()=>{
                    this.wish = 1
                },0)
               Toast({
                message: '已标记想看',
                position: 'center',
                duration: 1000
                });
                
            }else{
                this.$refs.wishImg.style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAYAAACFFRgXAAAABGdBTUEAALGPC/xhBQAAAytJREFUWAnVmLtrFFEUh3cWFAtRE5FEEUREsFAkooUIgl3+CUEU7LVR1LBIMERCLFLZRG1CrFJYpLBQENRGC4n4wBeKRUQ2PlAQX+v3m70z7MzemZ3HZp05cPbce86553w7O7Mzc51KjDQaDYfwDvSAseux69Cv6Ef0LXoHXXAc5y82UqhVJbgLPYhuQTega9DPaB19ht6VpVYDaxUBWYUGewkcQzdbE4LOJabXaHQ76G7OqHWI0RG0v+mJ/XxPdJpaD2xZbcAUX0XiSXS/bUEH3yPil2imL1Chln6RE+huzVPKffJV60frugAwDfoI1tBtrUkpx4vknzVrLmAHU65vTX/F5DzQnzynDwzsCpwX0e1eMIfV+S3ReZpXXlDgFNC/VEgXgifHGXQDVvUE2g1Y1RKT2FxxgTm6cg4bXxHNsGH0j/DhIlKGmFzGKuSbCAyFgkWcDsG6UaeE/m/LIvsEvKcstGIV8ECJgAcErJtFWaRPwCvLQitWAbv3/ZJALwlYj3ZlkbqA9YBRFnkp4HtloRWrgJ+g/uNbgeHF+LTKY5tebWYLDOqhzYpVR1hyE33njor5ITYxNp/WIP/DeBINvI4ooQAipknD6D9eVnC8JjCOxr799vgLiGXcsLmtvVPCnRB4yGDanRTjQ2/PYvIlACwvCTcwM37G/xvMGJYAQRuwoiRex8wFMns7mTMMbV2twMpiwVXMfNuK5XfMm97WTpHAJvsy9pZ15fI41Us9IyUWmG+qPa4ptBe3b/WYMj2zAWsVBfQfPYEGrlbFuiiqPWF6xZaNPcLeSgr9ZjyGLni+LlrVHDM9OpZNBKwqFPyJGUWfa94lUa1RUztRSX9vLVE2SewNrMboaG9NuiYi7w3+M8B+i4hb3amBVQXotRjdxpPsHWtJWLQHfBrYL+FAp3kmYBUFWnu/2u1Mu03wgTXajaxjU0tmYHUCehAj6H7NE4ggBSvoTJL4orNVp/Eifm1eJ/lplXMuD6wYcgGrAAA6H0fQ75pHiGIjJjciJZk7N7DaAKIrvobarnj5aiaHYT7JdQ6HW5sL8Sj+nSb2GHsF2EwXWLi+5v8ArR6xIZ+h44wAAAAASUVORK5CYII=);"
               
                  
            await  setTimeout(()=>{
                     this.wish = 0
                },0)
                Toast({
                message: '已取消想看',
                position: 'center',
                duration: 1000
                });
            }
            
            
            
        }
    }
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
