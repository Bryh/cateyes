<template>
<div class="FillterBox">
    <div class="filler-type">
        <div class="filler-type-item" data-tab=".region">全城<i class="fa  fa-angle-down"></i></div>
        <div class="filler-type-item" data-tab=".brand">品牌<i class="fa  fa-angle-down"></i></div>
        <div class="filler-type-item" data-tab=".special">特色<i class="fa  fa-angle-down"></i></div>
    </div>
</div>


</template>


<script>
export default {
    
}
</script>

<style lang="scss">
.FillterBox{
    width: 100%;
    .filler-type{
        width: 100%;
        background: #fff;
        border-bottom: 1px solid #efefef;
        display: flex;
        .filler-type-item{
        flex: 1;
        text-align: center;
        line-height: 1.066667rem;
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        font-size: .346667rem;
        text-overflow: ellipsis;
        }
    }
}
</style>
