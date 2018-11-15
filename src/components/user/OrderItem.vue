<template>
    <div class="OrderItem">
        <div class="order-item" :style= "order.style"> 
            <p>{{order.title}}</p>
        </div>
    </div>    

</template>


<script>
export default {
    props: ["order"]
}
</script>

<style lang="scss">
.OrderItem{
    .order-item{
        width: 50%;
        float: left;
        height: 97px;
        background-repeat: no-repeat;
        background-position: top;
        background-size: 42px auto;
        margin-top: 18px;
        background-image: url(http://s0.meituan.net/bs/file/?f=my-canary:deploy/dpmmweb/client/dpmmweb/component/mycenter/img/movie.png);
        p{
            position: relative;
            top: 53px;
            text-align: center;
            font-size: 15px;
            line-height: 21px;
            height: 21px;
            margin: 0;
            color: #333;
        }
    }
    
}
</style>

