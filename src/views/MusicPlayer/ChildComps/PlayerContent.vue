<template>
    <div class="player-content">
        <content-cover v-show="true"/>
        <content-lyric v-show="false"/>
    </div>
</template>

<script>
 import ContentCover from './ContentCover'
 import ContentLyric from './ContentLyric'
 export default {
   components: {
       ContentCover,
       ContentLyric
   }
 }
</script>

<style scoped>
    .player-content{
        height: 70%;
    }
</style>
