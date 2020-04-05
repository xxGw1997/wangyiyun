<template>
    <div class="musiclist-item">
        <div class="musiclist-avatar">
            <img src="http://p1.music.126.net/Umy9RllboQslHMGkPlPVOA==/109951163720162979.jpg" alt="">
        </div>
        <div class="musiclist-info">
            <div class="musiclist-name">歌单名字</div>
            <div class="musiclist-singer">
                <span>50首音乐</span>
                <span>by 赵小棠</span>
                <span>播放666次</span>
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
.musiclist-item{
    height: 70px;
    margin: 10px 0;
    display: flex;
}

.musiclist-item .musiclist-avatar{
    width: 70px;
    height: 70px;
}

.musiclist-item .musiclist-avatar>img{
    width: 70px;
    height: 70px;
    border-radius: 5px;
}

.musiclist-item .musiclist-info{
    height: 70px;
    display: flex;
    flex-wrap: wrap;
    margin-left: 10px;
    align-items: center;
    align-content: center;
}

.musiclist-item .musiclist-info .musiclist-name{
    width: 100%;
    height: 20px;
    font-size: 18px;
    color: rgba(255, 255, 255,.8);
}


.musiclist-item .musiclist-info .musiclist-singer{
    width: 100%;
    height: 20px;
    margin-top: 5px;
    font-size: 12px;
    color: rgba(255, 255, 255,.3);
}

.musiclist-item .musiclist-info .musiclist-singer>span{
    margin-right: 10px;
}
 
</style>
