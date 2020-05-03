<template>
    <div class="comments">
        <div class="comments-avatar">
            <img :src="comment.user.avatarUrl" alt="">
        </div>
        <div class="comments-info">
            <div class="info-name">
                <div class="name">
                    <div class="username">{{comment.user.nickname}}</div>
                    <div class="time">{{publishTime}}</div>
                </div>
                <div class="like">
                    {{comment.likedCount}}<i class="iconfont icon-like"/>
                </div>
            </div>
            <div class="info-content">{{comment.content}}</div>
            <div class="info-reply">123条回复 ></div>
        </div>
    </div>
</template>

<script>
 export default {
   props:{
       comment:{
           type:Object,
           default(){
               return {}
           }
       }
   },
   computed:{
       publishTime(){
            let date = new Date(this.comment.time)
            return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
        }
   },
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style lang="scss" scoped>
.comments {
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
}
.comments-avatar {
  width: 10%;
  & > img {
    width: 100%;
    border-radius: 50%;
  }
}
.comments-info {
  width: 85%;
  border-bottom: 1px solid rgba(255, 255, 255,.2);
  padding-bottom: 10px;
  .info-name {
    width: 100%;
    min-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(255, 255, 255,.3);
    .name {
      .username {
        font-size: 14px;
        color: rgba(255, 255, 255,.5);
        margin-bottom: 5px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .time {
        font-size: 9px;
      }
    }
    .like {
      font-size: 14px;
      letter-spacing: 1px;
      & > i {
        font-size: 18px;
      }
    }
  }
  .info-content {
    margin-top: 5px;
    color: rgba(255, 255, 255,.7);
    line-height: 25px;
    font-size: 14px;
    letter-spacing: 1px;
  }
  .info-reply {
    margin-top: 10px;
    color: rgb(0, 153, 255);
    font-size: 12px;
    letter-spacing: 1px;
  }
}
</style>
