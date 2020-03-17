<template>
 <div class="music_list">
   <div class="play_all">
     <i class="iconfont icon-play"></i>
     <span>播放全部</span>
     <span>(共{{playlist.trackCount}}首)</span>
   </div>
   <div class="musics">
     <div class="music" v-for="(item,index) in playlist.tracks" :key="index" @click="playMusic(playlist,item.id,index)">
       <div class="music_no music_item">
         <span v-if="true">{{index+1}}</span>
          <i class="iconfont icon-volume" v-else></i>
       </div>
       <div class="music_info music_item">
          <div class="music_name">{{item.name}}</div>
          <div class="singer_album">
            <span class="music_title">独家</span>
            <span class="music_title">SQ</span>
            <span class="singer">{{item.ar[0].name}} - {{item.al.name}}</span>
          </div>
       </div>
       <div class="music_video music_item">
         <i class="iconfont icon-video"  v-if="item.mv!==0"></i>
       </div>
       <div class="music_more music_item">
         <i class="iconfont icon-domore"></i>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
 import {mapState} from 'vuex'
import { constants } from 'zlib';
 export default {
   props:{
     playlist:{
       type:Object,
       default(){
         return {}
       }
     }
   },
   computed:{
     ...mapState(['playListId','musicList','songDetail']),

     singer(singers){
       console.log(typeof singers)
       let ar = '' 
       singers.forEach(ele => {
         ar = ar + ele.name + '/'
       });
       if(ar!==''){
         ar.splice(-1)
       }
       return ar
     }
   },
   methods:{
     playMusic(playlist,songId,index){
       let list = []
       playlist.trackIds.forEach(ele=>{
         list.push(ele.id)
       })
       //如果当前音乐列表id与点击音乐列表id不同，则把当前的音乐播放列表更新
       if(this.playListId !== playlist.id){
        this.$store.dispatch('updateMusicList',{id:playlist.id,list,index})
       }
       //把当前播放音乐更新
        this.$store.dispatch('getSongDetail',songId)
       //更新当前播放状态
        this.$store.dispatch('updatePlayStatus',true)
       //显示player
        this.$store.dispatch('playerShow',true)
     }
   }
 }
</script>

<style scoped>
.music_list .play_all{
  display: flex;
  align-items: center;
  height: 30px;
  color: aliceblue;
}

.music_list .play_all i{
  font-size: 20px;
  font-weight: bold;
  margin-left: 5px;
}

.music_list .play_all span:nth-of-type(1){
  font-weight: bold;
  margin-left: 10px;
  margin-right: 5px;
}

.music_list .play_all span:nth-of-type(2){
  color: rgb(196, 196, 196);
  font-size: 13px;
}

.music_list .musics .music{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin-top: 5px;
}

.music_list .musics .music_no{
  width: 10%;
  text-align: center;
  color: rgb(196, 196, 196);
}

.music_list .musics .music_no>i{
  color: red;
}


.music_list .musics .music_info{
  width: 70%;
  line-height: 20px;
}

.music_list .musics .music_info .singer_album span{
  font-size: 10px;
}

.music_list .musics .music_info .music_name{
  line-height: 25px;
  color: aliceblue;
  overflow: hidden; 
  text-overflow: ellipsis;
  white-space:nowrap;
}

.music_list .musics .music_info .music_checked{
  color: red;
}

.music_list .musics .music_info .singer_album{
  line-height: 10px;
  display: flex;
  flex-wrap: nowrap;
}

.music_list .musics .music_info .singer_album .singer{
  color: rgb(196, 196, 196);
  overflow: hidden; 
  text-overflow: ellipsis;
  white-space:nowrap;
}

.music_list .musics .music_info .singer_album .music_title{
  border: .5px solid red;
  width:20px;
  font-size: 8px;
  color: red;
  font-weight: bold;
  border-radius: 2px;
  margin: 0  1px;
  text-align: center;
  white-space: nowrap;
}

.music_list .musics .music_video{
  width: 10%;
  text-align: center;
  color: rgb(196, 196, 196);
}

.music_list .musics .music_more{
  width: 10%;
  text-align: center;
  color: rgb(196, 196, 196);
}

.music_list .musics .music_item>i{
  font-size: 17px;
  font-weight: bold;
}
</style>
