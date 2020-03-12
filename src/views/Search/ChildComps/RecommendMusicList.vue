<template>
    <div>
        <div class="recommend-music-list">
            <div class="list-title">
                推荐歌单
            </div>
            <div class="list-content">
                <div class="list-item" v-for="(item,index) in musicList" :key="index">
                    <div class="item-img">
                        <img :src="item.picUrl" alt="">
                    </div>
                    <div class="item-name">{{item.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
 export default {
     props:{
         musicList:{
            type:Array,
            default(){
                return []
            }
         }
     }

 }
</script>

<style scoped>
    .recommend-music-list{
        margin-top: 30px;
    }
    
    .list-content{
        width: 100%;
        height: 300px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-around;
        margin-top: 10px;
    }

    .list-content .list-item{
        width: 31%;
        height: 140px;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
    }

    .list-content .list-item .item-img{
        width: 100%;
        height: 75%;
        border-radius: 5px;
    }

    .list-content .list-item .item-img img{
        width: 100%;
    }

    .list-content .list-item .item-name{
        height: 20%;
        font-size: 13px;
        letter-spacing: 1px;
        line-height: 14px;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
 
</style>
