<template>
    <div class="CitiesItem">
        <section class="city-list-container">
            <div class="city-title">
                定位城市
            </div>
            <div class="city-list">
                <span class="active-city">北京</span>
            </div>
        </section>
        <section class="city-list-container" style="margin-top:0">
            <div class="city-title">
                热门城市
            </div>
            <div class="city-list">
                <span class="active-city">上海</span>
                <span class="active-city">北京</span>
                <span class="active-city">广州</span>
            </div>
        </section>
        
    </div>
    

</template>



<script>

export default {
    components: {
      
    }
}
</script>


<style lang="scss">
.CitiesItem{
    // 
    .city-list-container{
        margin-top: 1.346667rem;
        display: block;
        background-color: #ebebeb;
        font-size: .373333rem;
        color: #333;
        width: 100%;
        overflow-y: auto;
        .city-title{
            padding-left: .4rem;
            line-height: .8rem;
        }
        .city-list{
            background-color: #f5f5f5;
            padding-bottom: .213333rem;
            padding-right: .8rem;
            height: 100%;
            overflow: hidden;
            .active-city{
                    float: left;
                    background: #fff;
                    width: 29%;
                    height: .88rem;
                    margin-top: .4rem;
                    margin-left: 4%;
                    padding: 0 4px;
                    border: 1px solid #e6e6e6;
                    border-radius: 3px;
                    line-height: .88rem;
                    text-align: center;
                    box-sizing: border-box;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
            }
        }
}
}

</style>
