<template>
    <div class="song-item">
        <div class="song-info">
            <div class="info-name" :class="isChecked?'checked':''">{{item.name}}</div>
            <div class="info-singer">{{item.ar[0].name}}</div>
        </div>
        <div class="song-more">
            <i class="iconfont icon-domore"></i>
        </div>
    </div>
</template>

<script>
 export default {
   props:{
       item:{
           type:Object,
           default(){
               return {}
           }
       },
       isChecked:{
           type:Boolean,
           default(){
               return false
           }
       }
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
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
}

.song-item .song-info .checked{
    color: red;
}

.song-item .song-info .info-singer{
    height: 40%;
    color: rgba(255, 255, 255,.3);
    font-size: 13px;
    letter-spacing: 1px;
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
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
