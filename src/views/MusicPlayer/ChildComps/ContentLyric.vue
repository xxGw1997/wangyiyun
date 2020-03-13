<template>
 <div class="content-lyric">
    <div class="volume">
        <div class="volume-icon">
            <i class="iconfont icon-volume"/>
        </div>
        <div class="volume-proessbar">123</div>
    </div>
    <div class="lyric">
        123
    </div>
 </div>
</template>

<script>
 export default {

 }
</script>

<style scoped>
    .content-lyric{
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background:rebeccapurple;
    }

    .content-lyric .volume{
        width: 100%;
        height: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content-lyric .volume .volume-icon{
        width: 10%;
        color: aliceblue;
        text-align: center;
    }

    .content-lyric .volume .volume-icon i{
        font-size: 20px;
    }

    .content-lyric .volume .volume-proessbar{
        flex: 1 0;
    }

    .content-lyric .lyric{
        width: 100%;
        height: 90%;
    }
 
</style>
