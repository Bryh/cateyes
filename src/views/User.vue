<template>
    <div class="User">
        <section class="user-header">
            <img src="data:image/jpeg;base64,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" alt="">
            <p class="user-name">白日焰火 </p>
        </section>
        <section class=" user-orders">
            <div class="orders-content">
                <div class="user-title">
                    我的订单
                </div>
                <div class="user-title-bg"></div>
                <div class="orders-list">
                    <order-item
                        v-for = "order in orderlist "
                        :key = "order.id"
                        :order= "order"
                    ></order-item>
                </div>
            </div>
        </section>
        <section class="user-sale">
            <div class="sale-content">
                <sale-item
                    v-for= "sale in salelist"
                    :key = "sale.id"
                    :sale = "sale"
                ></sale-item>
            </div>
        </section>
        <app-nav></app-nav>
    </div>
</template>

<script>
import AppNav from "@com/layout/AppNav.vue"
import OrderItem from "@com/user/OrderItem.vue"
import SaleItem from "@com/user/SaleItem.vue"
export default {
    data () {
        return {
            orderlist: [
                {style: "background-image: url(http://s0.meituan.net/bs/file/?f=my-canary:deploy/dpmmweb/client/dpmmweb/component/mycenter/img/movie.png);",title: "电影", id:1},
                {style: "background-image: url(http://s0.meituan.net/bs/file/?f=my-canary:deploy/dpmmweb/client/dpmmweb/component/mycenter/img/store.png);",title: "商城", id: 2}

            ],
            salelist: [
                { id:1, title: "在线观影" },
                { id:2, title: "优惠券" },
                { id:3, title: "折扣卡" },
            ]
        }
    },
    components: {
    AppNav,
    OrderItem,
    SaleItem
  }
}
</script>

<style lang="scss">
.User{
    background: #efefef;
    margin-top:1.346667rem;
    .user-header{
        background-color: #f03d37;
            background-image: url(http://s0.meituan.net/bs/file/?f=my-canary:deploy/dpmmweb/client/dpmmweb/component/mycenter/img/bg.png);
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: 100% 4rem;
            height: 4rem;
            overflow: hidden;
            text-align: center;
            img{
                display: inline-block;
                margin-top: .8rem;
                width: 1.6rem;
                height: 1.6rem;
                border-radius: 1.6rem;
                border: 3px solid #fff;
            }
            .user-name{
                margin-top: 7px;
                font-size: .426667rem;
                line-height: .6rem;
                color: #fff;
            }
    }
    .user-orders{
        margin-top: .266667rem;
        background: #fff;
        .orders-content{
            padding: 0 .4rem;
            position: relative;
            overflow: hidden;
            text-align: center;
            height: 3.973333rem;
            .user-title{
                
                position: relative;
                margin: .346667rem 0 0;
                font-size: .4rem;
                line-height: .56rem;
                height: .56rem;
                color: #333;
                z-index: 9;
                display: inline-block;
                width: 2.133333rem;
                background-color: #fff;
            }
            .user-title-bg{
                // background: url(data:image/pdata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzhCNEEzQTE0NzNBMTFFNkEyMkFFN0M2MDc0NjIyN0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzhCNEEzQTA0NzNBMTFFNkEyMkFFN0M2MDc0NjIyN0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2Mzg3REIwMzQ3MzcxMUU2QTIyQUU3QzYwNzQ2MjI3RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2Mzg3REIwNDQ3MzcxMUU2QTIyQUU3QzYwNzQ2MjI3RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoL90/MAAAAZSURBVHjaYvr//z8DCLM8evToPwMQAAQYAGuLCaa37ZaAAAAAAElFTkSuQmCCng;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFW…I/PoL90/MAAAAZSURBVHjaYvr//z8DCLM8evToPwMQAAQYAGuLCaa37ZaAAAAAAElFTkSuQmCC) 0 bottom repeat-x;
                position: absolute;
                top: .613333rem;
                left: 50%;
                margin-left: -2.133333rem;
                width: 4.266667rem;
                height: 1px;
                background-size: 1px 1px;
            }
        }
    }
    .user-sale{
        margin-top: .266667rem;
        background: #fff;
        .sale-content{
            width: 100%;
            
        }
    }
}
</style>

