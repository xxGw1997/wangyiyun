<template>
    <div class="comments">
        <div class="comments-avatar">
            <img src="https://p3.music.126.net/OuRKD7ET0qHSJWsI-_0upA==/109951162930818823.jpg" alt="">
        </div>
        <div class="comments-info">
            <div class="info-name">
                <div class="name">
                    <div class="username">赵小棠</div>
                    <div class="time">2017年9月26日</div>
                </div>
                <div class="like">
                    1234<i class="iconfont icon-like"/>
                </div>
            </div>
            <div class="info-content">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
            <div class="info-reply">123条回复 ></div>
        </div>
    </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style scoped>
.comments{
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
}

.comments-avatar{
    width: 10%;
}

.comments-avatar>img{
    width: 100%;
    border-radius: 50%;
}

.comments-info{
    width: 85%;
    border-bottom: 1px solid rgba(255, 255, 255,.2);
    padding-bottom: 10px;
}

.comments-info .info-name{
    width: 100%;
    min-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(255, 255, 255,.3);
}

.comments-info .info-name .name .username{
    font-size: 14px;
    color: rgba(255, 255, 255,.5);
    margin-bottom: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.comments-info .info-name .name .time{
    font-size: 9px;
}

.comments-info .info-name .like{
    font-size: 14px;
    letter-spacing: 1px;
}

.comments-info .info-name .like>i{
    font-size: 18px;
}
 
.comments-info .info-content{
    margin-top: 5px;
    color: rgba(255, 255, 255,.7);
    font-size: 14px;
}

.comments-info .info-reply{
    margin-top: 10px;
    color: rgb(0, 153, 255);
    font-size: 12px;
    letter-spacing: 1px;
}
</style>
