<template>
  <div class="music_list">
    <div class="play_all" @click="playAll">
      <i class="iconfont icon-play"></i>
      <span>播放全部</span>
      <span>(共{{ playlist.trackCount }}首)</span>
    </div>
    <!-- <div v-if="playlist.tracks.length === 0">
      <loading/>
    </div>-->
    <div class="musics">
      <div
        class="music"
        v-for="(item, index) in playlist.tracks"
        :key="index"
        @click="playMusic(playlist, item.id, index)"
      >
        <div class="music_no music_item">
          <span v-if="!currentPlay(item.id)">{{ index + 1 }}</span>
          <i class="iconfont icon-volume" v-else></i>
        </div>
        <div class="music_info music_item">
          <div
            class="music_name"
            :class="currentPlay(item.id) ? 'music_checked' : ''"
          >{{ item.name }}</div>
          <div class="singer_album">
            <span class="music_title">独家</span>
            <span class="music_title">SQ</span>
            <span class="singer">{{ item.ar[0].name }} - {{ item.al.name }}</span>
          </div>
        </div>
        <div class="music_video music_item">
          <i class="iconfont icon-video" v-if="item.mv !== 0"></i>
        </div>
        <div class="music_more music_item">
          <i class="iconfont icon-domore"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Loading from '@/components/Loading/Loading'
export default {
  props: {
    playlist: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    Loading
  },
  computed: {
    ...mapState(['musicList', 'songDetail']),

    singer(singers) {
      console.log(typeof singers)
      let ar = ''
      singers.forEach(ele => {
        ar = ar + ele.name + '/'
      })
      if (ar !== '') {
        ar.splice(-1)
      }
      return ar
    }
  },
  methods: {
    playMusic(playlist, songId, index) {
      let list = []
      playlist.trackIds.forEach(ele => {
        list.push(ele.id)
      })
      //如果当前音乐列表id与点击音乐列表id不同，则把当前的音乐播放列表更新
      this.$store.dispatch('updateMusicList', {
        id: playlist.id,
        list,
        index
      })
      // }
      //把当前播放音乐更新
      this.$store.dispatch('getSongDetail', songId)
      //更新当前播放状态
      this.$store.dispatch('updatePlayStatus', true)
      //显示player
      this.$store.dispatch('playerShow', true)
    },
    playAll() {
      this.$createToast({
        type: 'txt',
        txt: '这个简单,以后有时间就做'
      }).show()
    },
    currentPlay(id) {
      if (this.songDetail.length) {
        return id == this.songDetail[0].id
      }
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.music_list {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background: white;
  .play_all {
    width: 90%;
    height: 30px;
    padding-top: 15px;
    margin: 0 10px;
    display: flex;
    align-items: center;
    i {
      font-size: 20px;
      font-weight: bold;
      margin-left: 5px;
    }
    span {
      &:nth-of-type(1) {
        font-weight: bold;
        margin-left: 10px;
        margin-right: 5px;
      }
      &:nth-of-type(2) {
        color: rgb(119, 119, 119);
        font-size: 13px;
      }
    }
  }
  .musics {
    width: 90%;
    margin: 0 10px;
    .music {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 40px;
      line-height: 40px;
      margin: 15px 0;
    }
    .music_no {
      width: 10%;
      text-align: center;
      color: rgb(119, 119, 119);
      & > i {
        color: red;
      }
    }
    .music_info {
      width: 70%;
      line-height: 20px;
      .singer_album {
        line-height: 15px;
        display: flex;
        flex-wrap: nowrap;
        span {
          font-size: 10px;
          margin-right: 5px;
        }
        .singer {
          color: rgb(121, 121, 121);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .music_title {
          border: 0.5px solid red;
          width: 20px;
          font-size: 8px;
          color: red;
          font-weight: bold;
          border-radius: 2px;
          margin-right: 5px;
          text-align: center;
          white-space: nowrap;
        }
      }
      .music_name {
        line-height: 25px;
        color: rgb(51, 51, 51);
        letter-spacing: 1px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .music_checked {
        color: red;
      }
    }
    .music_video {
      width: 10%;
      text-align: center;
      color: rgb(196, 196, 196);
    }
    .music_more {
      width: 10%;
      text-align: center;
      color: rgb(196, 196, 196);
    }
    .music_item {
      & > i {
        font-size: 17px;
        font-weight: bold;
      }
    }
  }
}
</style>
