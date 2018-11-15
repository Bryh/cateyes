<template>
   
    <div  class="DetailShowdays" >
        <ul ref="Datescroll"  class="days-content">
        <li
        v-for= "date in showDays"
        :key = "date.date"
          class="showDay">
            {{date.date}}
            </li>
        </ul>
    </div>    
     
</template>
<script>
import BetterScroll from "better-scroll"
export default {
    props: ["showDays"],
  components: {},
  mounted () {
        setTimeout(()=> {
            this.scroll = new BetterScroll(this.$refs.Datescroll, {
                scrollX:true,
                eventPassthrough:'vertical' ,
                click: true
            })
            console.log("scroll");
            
            },1000)
            
      
  }
};
</script>

<style lang="scss">
.DetailShowdays{
        width: 10rem;
        background-color: #fff;
        overflow: hidden;
        .days-content{
            display: inline-block;
            padding: 0;
            margin: 0;
            white-space: nowrap;
            height: 45px;
            // position: relative;
            width: 10rem;
            border-bottom: 1px solid #efefef;
            .showDay{
                    // position: relative;
                    display: inline-block;
                    width: 3.066667rem;
                    line-height: 1.146667rem;
                    margin-left: 4.5px;
                    font-size: .373333rem;
                    text-align: center;
                    list-style: none;
                    color: #666;
                    display: inline-block;
            }
        }
}
</style>
