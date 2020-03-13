<template>
 <div class="content-cover">
    <div class="cover">1</div>
    <div class="operation">
        <div class="operation-item">
            <i class="iconfont icon-love"/>
        </div>
        <div class="operation-item">
            <i class="iconfont icon-download"/>
        </div>
        <div class="operation-item">
            <i class="iconfont icon-comment"/>
        </div>
        <div class="operation-item">
            <i class="iconfont icon-domore"/>
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
    .content-cover{
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background:rebeccapurple;
    }

    .content-cover .cover{
        width:100%;
        height: 85%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: olivedrab;
    }
    
    .content-cover .operation{
        width: 100%;
        height: 15%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .content-cover .operation .operation-item i{
        font-size: 30px;
        color: aliceblue;
    }
</style>
