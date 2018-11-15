<template>
    <div class="SaleItem">
        <div class="sale-item">
            <span>{{sale.title}}</span> 
            <span class="fa fa-angle-right fa-lg "></span>
        </div>    
    </div>    
</template>

<script>
export default {
    props: ["sale"]
}
</script>

<style lang="scss">
    .SaleItem{
        .sale-item{
            height: 1.173333rem;
            line-height: 1.173333rem;
            font-size: .4rem;
            margin-left: .4rem;
            padding-right: .4rem;
            box-sizing: border-box;
            border-bottom: 1px solid #ddd;
            display: flex;
            justify-content: space-between;
            .fa{
                margin-top: .4rem;
                color:#ddd;
            }
        }
    }
</style>


