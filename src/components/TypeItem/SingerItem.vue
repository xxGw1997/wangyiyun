<template>
    <div class="singer-item">
        <div class="singer-avatar">
            <img src="http://p1.music.126.net/Umy9RllboQslHMGkPlPVOA==/109951163720162979.jpg" alt="">
        </div>
        <div class="singer-name">
            赵小棠
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
.singer-item{
    height: 70px;
    margin: 10px 0;
    display: flex;
}

.singer-item .singer-avatar{
    width: 70px;
    height: 70px;
    text-align: center;
}

.singer-item .singer-avatar>img{
    position: relative;
    width: 60px;
    height: 60px;
    top:5px;
    border-radius: 60px;
}

.singer-item .singer-name{
    height: 70px;
    line-height: 70px;
    margin-left: 10px;
    color: rgba(255, 255, 255,.7);
}
 
</style>
