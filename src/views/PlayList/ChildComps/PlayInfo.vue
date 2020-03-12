<template>
    <div>
      <div class="play-info">
        <div class="info">
          <div class="info-left">

          </div>
          <div class="info-right">
            <div class="info-title">{{playListDetail.name}}</div>
            <div class="info-author">
              <div class="author-img"></div>
              <div class="author-name">xxgw</div>
              <div class="author-icon">></div>
            </div>
            <div class="info-intro">
              <div class="intro">送回顾回顾热i和个别u的热狗热狗热狗热狗然后比俺是个发热管</div>
              <div class="intro-icon">></div>
            </div>
          </div>
        </div>
        <div class="operation">
          <div class="operation-item">
            <div class="operation-icon">
              <i class="iconfont icon-comment"></i>
            </div>
            <div class="operation-info">
              123
            </div>
          </div>
          <div class="operation-item">
            <div class="operation-icon">
              <i class="iconfont icon-share"></i>
            </div>
            <div class="operation-info">
              123
            </div>
          </div>
          <div class="operation-item">
            <div class="operation-icon">
              <i class="iconfont icon-download"></i>
            </div>
            <div class="operation-info">
              下载
            </div>
          </div>
          <div class="operation-item">
            <div class="operation-icon">
              <i class="iconfont icon-checks"></i>
            </div>
            <div class="operation-info">
              多选
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
 export default {
   props:{
     playListDetail:{
       type:Object,
       default(){
         return {}
       }
     }
   }
 }
</script>

<style scoped>
  .play-info{
    width: 100%;
    height: 250px;
    background: gray;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    padding-top: 10px;
  }

  .play-info .info{
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: space-between;
  }

  .play-info .info .info-left{
    width: 40%;
    height: 100%;
  }

  .play-info .info .info-right{
    width: 55%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
  }

  .play-info .info .info-right .info-title{
    color: aliceblue;
    font-size: 18px;
    line-height: 22px;
    font-weight: bolder;
    letter-spacing: 2px;
    /* 2行省略 */
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .play-info .info .info-right .info-author{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .play-info .info .info-right .info-author .author-img{
    flex:0 1 20%;
  }

  .play-info .info .info-right .info-author .author-name{
    flex:0 1;
    color: antiquewhite;
    padding-left: 5px;
  }

  .play-info .info .info-right .info-author .author-icon{
    flex:1 0 10px;
    color: antiquewhite;
    padding-left: 5px;
  }

  .play-info .info .info-right .info-intro{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .play-info .info .info-right .info-intro .intro{
    flex:0 0 85%;
    height: 55%;
    color: antiquewhite;
    font-size: 12px;
    /* 2行省略 */
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  } 

  .play-info .info .info-right .info-intro .intro-icon{
    flex:1 0 10px;
    color: antiquewhite;
    padding-left: 5px;
  }


  .play-info .info .info-right div{
    width: 100%;
    height: 30%;
  }

  .play-info .operation{
    width: 100%;
    height: 20%;
    display: flex;
  }

  .play-info .operation .operation-item{
    width: 25%;
    height: 100%;
    color: antiquewhite;
    display: flex;
    text-align: center;
    align-content: space-around;
    flex-wrap: wrap;
  }

  .play-info .operation .operation-item .operation-icon{
    width: 100%;
  }

  .play-info .operation .operation-item .operation-icon i{
    font-size: 30px;
  }

  .play-info .operation .operation-item .operation-info{
    width: 100%;
    font-size: 12px;
  }
</style>
