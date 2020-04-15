<template>
    <div class="singer-item">
        <div class="item">
            <div class="item-avatar">
                <img v-lazy="item.picUrl" alt="">
            </div>
            <div class="item-name">
                <div>{{item.name}}</div>
                <div class="item-icon"><i class="iconfont icon-singer"></i></div>
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
    margin: 20px 10px;
}

.item .item-avatar{
    width: 60px;
    height: 60px;
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
    margin-left: 20px;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.9);
    letter-spacing: 1px;
}

.item .item-name .item-icon{
    width: 18px;
    height: 18px;
    margin-left: 5px;
    line-height: 18px;
    transform: scale(.8);
    text-align: center;
    background: red;
    border-radius: 50%;
}

.item .item-name .item-icon>i{
    color: white;
}
 
</style>
