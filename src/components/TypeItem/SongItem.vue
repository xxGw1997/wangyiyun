<template>
    <div class="song-item">
        <div class="song-info">
            <div class="info-name">小情歌</div>
            <div class="info-singer">赵小棠</div>
        </div>
        <div class="song-more">
            <i class="iconfont icon-domore"></i>
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
.song-item{
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    padding-bottom: 5px;
    border-bottom: 1px solid rgb(255, 255, 255,.2);
}

.song-item .song-info{
    max-width: 80%;
    height: 40px;
}

.song-item .song-info .info-name{
    height: 60%;
    color: rgb(255, 255, 255,.8);
    font-size: 18px;
    letter-spacing: 1px;
}

.song-item .song-info .info-singer{
    height: 40%;
    color: rgba(255, 255, 255,.3);
    font-size: 13px;
    letter-spacing: 1px;
}

.song-item .song-more{
    height: 40px;
    line-height: 40px;
}

.song-item .song-more>i{
    font-size: 30px;
    color: rgb(255, 255, 255,.3);
}
</style>
