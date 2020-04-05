<template>
    <div class="album-item">
        <div class="album-avatar">
            <img src="http://p1.music.126.net/Umy9RllboQslHMGkPlPVOA==/109951163720162979.jpg" alt="">
        </div>
        <div class="album-info">
            <div class="album-name">专辑名字</div>
            <div class="album-singer">
                <span>赵小棠</span>
                <span>2013-6-8</span>
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
.album-item{
    height: 70px;
    margin: 10px 0;
    display: flex;
}

.album-item .album-avatar{
    width: 70px;
    height: 70px;
}

.album-item .album-avatar>img{
    width: 70px;
    height: 70px;
    border-radius: 5px;
}

.album-item .album-info{
    height: 70px;
    display: flex;
    flex-wrap: wrap;
    margin-left: 10px;
    align-items: center;
    align-content: center;
}

.album-item .album-info .album-name{
    width: 100%;
    height: 20px;
    font-size: 18px;
    color: rgba(255, 255, 255,.8);
}


.album-item .album-info .album-singer{
    width: 100%;
    height: 20px;
    margin-top: 5px;
    font-size: 12px;
    color: rgba(255, 255, 255,.3);
}

.album-item .album-info .album-singer>span{
    margin-right: 10px;
}
 
</style>
