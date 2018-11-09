<template>
    <div class="Cinema">
    <div class="cinema-content" >
	<div class="cinema-title-box ">
		<div class="cinema-title ">
            <span>星美国际影商城(海天欢乐购店)</span>
            <span class="price-block">
                <span class="price">19.9</span><span class="rmb">元起</span>
            </span>
        </div>
        <div class="location-block ">
            <div class="location">汉阳区汉阳大道582号海天欢乐购5楼</div>
            <div class="distance">1077.4km</div>
        </div>
		
		<div class="label-block">
                <div class="allowRefund">退</div>
                <div class="endorse">改签</div>
                <div class="sell">折扣卡</div>
                <div class="snack">小吃</div>
                <div class="hallType">巨幕厅</div>
        </div>
	</div>

<div class="near-show-block" >
	<span>近期场次：</span>
	<span class="time-line">21:10 </span>	
</div>

</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.Cinema{
    .cinema-content{
        padding: .346667rem .4rem .346667rem 0;
        margin-left: .4rem;
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
