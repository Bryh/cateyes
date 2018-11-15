<template>
    <div class="Cinema">
    <div class="cinema-content" >
	<div class="cinema-title-box ">
		<div class="cinema-title ">
            <span>{{cinema.nm}}</span>
            <span v-if="cinema.sellPrice" class="price-block">
                <span class="price">{{cinema.sellPrice}}</span><span class="rmb">元起</span>
            </span>
        </div>
        <div class="location-block ">
            <div class="location">{{cinema.addr}}</div>
            <div class="distance">{{cinema.distance}}</div>
        </div>
		
		<div class="label-block">
                <div v-if="cinema.tag.allowRefund" class="allowRefund">退</div>
                <div v-if="cinema.tag.endorse" class="endorse">改签</div>
                <div v-if="cinema.tag.sell" class="sell">折扣卡</div>
                <div v-if="cinema.tag.snack" class="snack">小吃</div>
                <div v-if="cinema.tag.hallType" 
                v-for= "hall in cinema.tag.hallTypeVOList "
                :key = "hall.name"
                class="hallType">{{hall.name}}</div>
        </div>
	</div>
    <div v-if="cinema.promotion.cardPromotionTag" class="start-card">
        <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt="">
        <span class="card">{{cinema.promotion.cardPromotionTag}}</span>
    </div>

<div v-if="cinema.showTimes" class="near-show-block" >
	<span>近期场次：</span>
	<span class="time-line">{{cinema.showTimes}} </span>	
</div>

</div>
    </div>
</template>

<script>
export default {
    props: ["cinema"]
}
</script>

<style lang="scss">
.Cinema{
    .cinema-content{
        padding: .346667rem .4rem .346667rem 0;
        padding-left: .4rem;
        background-color: #fff;
        position: relative;
        overflow: hidden;
        border-bottom: 1px solid #efefef;
        .cinema-title-box{
            .cinema-title{
                    height: .613333rem;
                    line-height: .613333rem;
                    font-size: .426667rem;
                    color: #000;
                    
                    .price-block{
                            padding-top: 9px;
                            padding-left: 3px;
                            .price{
                                color: #f03d37;
                                font-size: .48rem;
                            }
                            .rmb{
                                color: #f03d37;
                                margin-left: 3px;
                                font-size: .293333rem
                            }
                    }
                    
            }
            .location-block{
                            margin-top: 6px;
                            font-size: 13px;
                            color: #666;
                            display: flex;
                            .location{
                                    text-overflow: ellipsis;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    flex: 1;
                            }
                            .distance{
                                    margin-left: 5px;
                            }
            }
            .label-block{
                    height: .453333rem;
                    line-height: .453333rem;
                    margin-top: 4px;
                    margin-bottom: 4px;
                    overflow: hidden;
                    font-size: 0;
                    flex-shrink: 0;
                    position: relative;
                    .endorse , .allowRefund , .hallType{
                            color: #589daf;
                            border: 1px solid #589daf;
                            margin-left: 5px;
                            position: relative;
                            display: inline-block;
                            padding: 0 3px;
                            height: .4rem;
                            line-height: .32rem;
                            border-radius: 2px;
                            font-size: .3rem;
                    }
                    .sell , .snack{
                            color: #f90;
                            border: 1px solid #f90;
                            margin-left: 5px;
                            position: relative;
                            display: inline-block;
                            padding: 0 3px;
                            height: .4rem;
                            line-height: .32rem;
                            border-radius: 2px;
                            font-size: .3rem;
                    }
            }
        }
        .start-card{
            color: #999;
            img{
                width: .4rem;
                margin-right: .133333rem;
                
            }
            span{
                height: 100%;
                line-height: 60%;
            }
        }
        .near-show-block{
            padding: 0 .4rem 0 0;
            margin-right: -0.4rem;
            line-height: 1.5;
            font-size: .32rem;
            color: #777;
        }
    }

}
</style>
