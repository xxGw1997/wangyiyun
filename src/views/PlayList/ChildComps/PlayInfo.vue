<template>
    <div>
      <div class="play-info">
        <div class="info">
          <div class="info-left">
            <img :src="playListDetail.coverImgUrl" alt="">
          </div>
          <div class="info-right">
            <div class="info-title">{{playListDetail.name}}</div>
            <div class="info-author">
              <div class="author-img">
                <img :src="creatorImg" alt="">
              </div>
              <div class="author-name">{{creatorNickname}}</div>
              <div class="author-icon">></div>
            </div>
            <div class="info-intro">
              <div class="intro">{{playListDetail.description}}</div>
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
              {{commentCount}}
            </div>
          </div>
          <div class="operation-item">
            <div class="operation-icon">
              <i class="iconfont icon-share"></i>
            </div>
            <div class="operation-info">
              {{shareCount}}
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
   },
   data(){
     return {
       creatorImg:'',
       creatorNickname:''
     }
   },
   computed:{
     commentCount(){
       return this.playListDetail.commentCount ? this.playListDetail.commentCount : '评论'
     },
     shareCount(){
       return this.playListDetail.shareCount ? this.playListDetail.shareCount : '分享'
     }
   },
   watch:{
     playListDetail(){
       this.creatorImg = this.playListDetail.creator.avatarUrl
       this.creatorNickname = this.playListDetail.creator.nickname
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

  .play-info .info .info-left img{
    width: 100%;
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
    justify-content: flex-start;
    align-items: center;
  }

  .play-info .info .info-right .info-author .author-img{
    flex:0 0 20%;
  }

  .play-info .info .info-right .info-author .author-img img{
    width: 80%;
    border-radius: 50%;
  }

  .play-info .info .info-right .info-author .author-name{
    font-size: 14px;
    color: antiquewhite;
    padding-left: 5px;
  }

  .play-info .info .info-right .info-author .author-icon{
    flex:0 0 5%;
    color: antiquewhite;
  }

  .play-info .info .info-right .info-intro{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .play-info .info .info-right .info-intro .intro{
    height: 80%;
    color: antiquewhite;
    font-size: 10px;
    line-height: 18px;
    letter-spacing: 1px;
    /* 2行省略 */
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  } 

  .play-info .info .info-right .info-intro .intro-icon{
    color: antiquewhite;
  }


  .play-info .info .info-right>div{
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
