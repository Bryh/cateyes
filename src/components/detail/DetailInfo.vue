<template>
   
    <div class="DetailInfo" >
       
        <div class="poster" >
            <img :src="movieinfo.img | imgurl( '148.208' )">
		</div>
        <div class="info-content">
            <div class="info-title ">{{movieinfo.nm}}</div>
            <div class="info-engtitle">{{movieinfo.enm}}</div>
            <div class="info-score "> 
                {{movieinfo.sc}}<span class="snum">({{movieinfo.snum }}人评)</span>
            </div>
            <div class="info-type ">
                <span>{{movieinfo.cat }}</span>
                    <!-- <div class="type-group">
                        <img style="width: 42px;" class="sd-imax" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAeCAYAAADTsBuJAAAD+0lEQVRoge2aPUwUQRSAPy4YiZh4DbT8VJhIvA4KkyOhBq+Uyi2gFlssPAtoPW01cWm0RaxVTCi0EkOhFXe0WoiJGhJJ1uK9cefW/ZnF3K3R/ZLNDDNvfnhv5s3bvRkIggBgGLgIjACDlPSSE+AT8B74NhAEwXngCnCm0Gn9f/wAdgeBKf5O5T8regI9Ygi4DIwCUxXE7ZT0j2PgneZHKpQ+vwiONR2sFDqNEkoDFExpgIJx9f+TwDJwySprA0+A11bZCjCR0EcbeAp8zDnHKDWgBfj6oH/XgC3Np9EAVoE9TaNUtR+AJrCTMP4R4GkaZUv7iWvfhcsOmAQ2EOW/QZT+BlH0GjBtyU6o3L71gIRcC8B9YN5hzDSqQB0Yt8pqWtZ0aN9S2VpCfUPr68QbaE+fq4QLINr/VcQwO1mTcdkBS8A54B7w3CpfRHbFIqGiDU9i8tPALeAGshsOHMbOywVkVfoJ9Q1gLKMPo/RXiCLHgU6MzJzW2+PNIf/foZZn4rIDZoDvdCsfQtcz7DIQYqR1zS86tsnLF9J3QdyKtqkhL0mbhK7MS5D1dLwWYiTbdTWId02/4WKAReBaTPmspnl8+r7Kz2YJnpIWssIbMXVziFvZTGlvDOQjykxbyeYMuaCyW5q/qXVO5I2C5hGXtIG4n4/A45x9tBGX1gt8TeNWuqdpM6FtFTHcIaHv9hGDerEtpH4T2TV1JMjICgK6OK0BTDS0Tf6ophe+39BBFFJHVrxhHLiO+PVOQtsGsoJtBfqaeiljbiXknchrgDXEJd1CIiFzCOdhMqd8XpqaelbZaqQurZ1vlXUQo0WjLkPVkrfPA2eyDDCMRC+jkfJ9wpWS1wATyKHeKzqI0q4THo4e8gFsJ6HNHGF09BkIrKeu5XFuzfj9O3SfB85khaGTSOTSRsIrm2+I+4kaJ415lX+Ro81paAIvEaUc8btrieJpeo/46GVVZVYjZXXE2E0tayChaYvsiAvINsA+slonkJ1gx/tGmW2XgVR+RfvLe3DnZYcwgjnSvJ8gW0V2yyHJSqsiC9DTfmrAXcTteJach0RAN3QOmbvB5UXsgXa4jvj9AySMNJ8cHsa0WbLyxoWNIspf488/R7jQBB4RuogkPE3TdkiL0AAm5DRtO5bcEbIL3iKGGifjfcDFAM8Rd7OMvJTNaHkbUX70LRi6DdBGFL5t9dUPfMQIVdKVa1Z92mrtIGdIXeXGkGgrrs0eYvDbOoe4d5JfDARBsJAmEMMw/VHiv/qTpGEBTvc5ul8r+L+g/D2gYEoDFExpgIKpIDe1SvrLWU1PKsg1uZL+MUT4a9yn8mpicfwAdgf0cu555IpieTm395jLuR+Arz8BrLjpSMoYSlEAAAAASUVORK5CYII=">
                    </div> -->          
            </div>
            <div class="info-runtime ">{{movieinfo.fra }}/{{movieinfo.dur }}分钟</div>
            <div class="info-date ">{{movieinfo.pubDesc}}</div>
        </div>
        <div class="info-angle">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWCAYAAAAfD8YZAAAAAXNSR0IArs4c6QAAAS5JREFUOBGVkktuwkAMhpOoJ+hhSouE2HbDgiVCNCAOVtQHnINHhbgMJ6g6/f9gR848kmDJeOzxZ3scskzEOfcKXUMLjXXZByYQhJlqMvz3PM//1E9Z7fJoEp5wXvWZoILRZQtg7xVYdhXQzuR2XoEB/NYCOSkVdKI/g441BnuBbmI7aMAE7ilgxyaboYOD4RMO9EWiTwhgJksBLtEvUNolRmGvwJG+yDNsXSB4s2aplR3M4Y80BnuGfiQ7m0Q2qP6JJvaLc/VpTKx5lPe9IfpibviMb+4lOXYXyGLRsRPgSTsSpASdW8Av+YQ3Er+NzgIuELdvZMcAZIUaBsgpCA55IZIEeV+NLSC32hskXCTAH9xFRyWkUsgSrhqAJfjpL8fch0dMMIGWMkmYEIn8Az5Wgp5LHlhmAAAAAElFTkSuQmCC" alt="">
        </div>
    </div>    
     
</template>
<script>
export default {
    props:["movieinfo"],
  components: {}
}
</script>

<style lang="scss">
.DetailInfo {
  height: 5.013333rem;
//   position: relative;
  cursor: pointer;
  
  padding: 0.506667rem 0.8rem 0.506667rem 0.4rem;
  box-sizing: border-box;
  height: 5.013333rem;
  width: 100%;
    // top: -3.68rem ;
  margin-top: 1.346667rem;
  display: flex;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #999;
  justify-content: space-around;
  .poster {
    img {
      width: 2.933333rem;
      height: 4rem;
      box-sizing: border-box;
    }
  }
  .info-content {
    overflow-x: hidden;
    margin-left: 0.333333rem;
    color: #ccc;

    .info-title {
      font-size: 0.533333rem;
      margin-top: 2px;
      font-weight: 700;
      overflow: hidden;
      color: #fff;
    }
    .info-engtitle {
      margin-top: 0.133333rem;
      font-size: 0.32rem;
    }
    .info-score {
      font-size: 0.48rem;
      font-weight: 700;
      color: #fc0;
      margin-top: 0.133333rem;
      .snum {
        font-size: 0.32rem;
        margin-left: 0.133333rem;
        color: #ccc;
      }
    }
    .info-type , .info-runtime , .info-date{
        margin-top: .186667rem;
        font-size: .32rem;
    }
  }
  .info-angle{
    img{
        margin-top: 1.6rem;
        margin-left: .466667rem;
    }
  }
}
</style>
