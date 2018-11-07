<template>
    <div class="HomeSearch">
        <span class="location">北京
            <i class="fa fa-angle-down"></i>
        </span>
        <span class="isnow-wrapper">
            <span class="isnow">正在热映</span>
            <span class="isnow">即将上映</span>
        </span>
        
        <span class="fasearch">
             <i class="fa fa-search fa-lg"></i>
        </span>
       
    </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
.HomeSearch {
  width: 100%;
  height: 1.173333rem;
  display: flex;
  position: fixed;
  justify-content: space-between;
  top: 1.346667rem;
  border-bottom: 1px solid #ccc;
  .location {
    padding-left: 0.4rem;
    font-size: 0.4rem;
    color: #666;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .isnow-wrapper {
      display: flex;
    .isnow {
      font-size: 15px;
      color: #666;
      width: 2.133333rem;
      text-align: center;
      margin: 0 0.32rem;
      font-weight: 700;
      line-height:1.173333rem;
      height:1.173333rem;
    }
  }

  .fasearch {
    width: 20px;
    height: 20px;
    line-height:1.173333rem;
    height:1.173333rem;
    color: #ef4238;
    margin-right: 0.266667rem;
  }
}
</style>

