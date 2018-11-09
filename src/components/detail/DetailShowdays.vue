<template>
   
    <div class="DetailShowdays" >
        <ul id="timeline" class="days-content">
        <li data-day="2018-11-09" class="showDay chosen">
            今天11月09日
            </li>
        </ul>
    </div>    
     
</template>
<script>
export default {
  components: {}
};
</script>

<style lang="scss">
.DetailShowdays{
        width: 100%;
        background-color: #fff;
        .days-content{
            padding: 0;
            margin: 0;
            white-space: nowrap;
            height: 45px;
            position: relative;
            border-bottom: 1px solid #efefef;
            .showDay{
                    position: relative;
                    display: inline-block;
                    width: 115px;
                    line-height: 43px;
                    margin-left: 4.5px;
                    font-size: 14px;
                    text-align: center;
                    list-style: none;
                    color: #666;
            }
        }
}
</style>
