<template>
    <div>        
        <div class="list-item">
            <div class="item-img">
                
            </div>
            <div class="item-info">
                <div class="info-title">好123</div>
                <div class="info">的456</div>
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
    .list-item{
        width: 100%;
        height: 50px;
        display: flex;
        background: salmon;
    }

    .list-item .item-img{
        width: 50px;
        background:blueviolet;
    }

    .list-item .item-info{
        flex-grow: 1;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        margin-left: 5px;
    }
 
    .list-item .item-info .info-title{
        width: 100%;
        height: 25px;
        line-height: 25px;
        color: rgba(255, 255, 255, 0.9);
        font-size: 20px;
        letter-spacing: 1px;
    }

    .list-item .item-info .info{
        width: 100%;
        height: 20px;
        line-height: 20px;
        color: rgba(255, 255, 255, 0.5);
        font-size: 12px;
    }
</style>
