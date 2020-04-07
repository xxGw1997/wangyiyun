<template>
    <div class="comment-item">
        <div class="item-avatar">
            <img src="https://p3.music.126.net/OuRKD7ET0qHSJWsI-_0upA==/109951162930818823.jpg" alt="">
        </div>
        <div class="item-info">
            <div class="info-name">
                哈哈哈哈哈广佛i让回归热胡歌和如果还
            </div>
            <div class="info-creator">
                by <span>赵小棠</span>
            </div>
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
.comment-item{
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.item-avatar{
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.item-avatar>img{
    height: 75%;
    border-radius: 10%;
}

.item-info{
    width: 70%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
}

.info-name{
    width: 100%;
    height: 30%;
    color: rgba(255, 255, 255,.7);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.info-creator{
    width: 100%;
    height: 30%;
    color: rgba(255, 255, 255,.3);
    font-size: 14px;
}

.info-creator>span{
    color: rgb(0, 153, 255);
    font-size: 14px;
}
</style>
