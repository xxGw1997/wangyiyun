<template>
    <div class="singer-item">
        <div class="item">
            <div class="item-avatar">
                <img :src="item.picUrl" alt="">
            </div>
            <div class="item-name">
                <div>{{item.name}}</div>
                <div class="item-icon"><i class="iconfont icon-back"></i></div>
            </div>
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
       }
   },
 }
</script>

<style scoped>
.item{
    height: 60px;
    display: flex;
    align-items: center;
    margin: 5px 10px;
}

.item .item-avatar{
    width: 50px;
    height: 50px;
}

.item .item-avatar img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.item .item-name{
    flex:1 0;
    display: flex;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-left: 10px;
    font-size: 20px;
    color: rgb(255, 255, 255,.9);
    letter-spacing: 1px;
}

.item .item-name .item-icon{
    width: 20px;
    height: 20px;
    line-height: 20px;
    transform: scale(.8);
    text-align: center;
    background: red;
    border-radius: 50%;
}
 
</style>
