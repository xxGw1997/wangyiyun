<template>
  <div>
    <div class="backgroundImg">
      <img :src="songCover" alt="" />
    </div>
    <div class="player">
      <player-header 
        :songName="songName" 
        :songSinger="songSinger"
        :songSingerId="songSingerId" />
      <player-content
        :songCover="songCover"
        :currentLyric="currentLyric"
        :lyricIndex="lyricIndex"
      />
      <player-footer
        ref="player-footer"
        :currentTime="currentTime"
        :duration="duration"
        :percent="percent"
        @toggleMode="toggleMode"
        @prev="prev"
        @play_pause="play_pause"
        @next="next"
        @changeProgressBar="changeProgressBar"
      />
      <audio
        ref="audio"
        @play="ready"
        @error="error"
        @timeupdate="updateTime"
        @ended="end"
      ></audio>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import { lyric } from "@/utils/lyric";

import PlayerHeader from "./ChildComps/PlayerHeader";
import PlayerContent from "./ChildComps/PlayerContent";
import PlayerFooter from "./ChildComps/PlayerFooter";
export default {
  components: {
    PlayerHeader,
    PlayerContent,
    PlayerFooter
  },
  data() {
    return {
      songName: "",
      songSinger: "",
      songSingerId:0,
      songCover: "",
      currentLyric: [],
      lyricIndex: 0,
      currentTime: 0,
      duration: 0,
      percent: 0
    };
  },
  computed: {
    ...mapState(["isPlay", "songDetail", "songLyric", "songUrl", "volume"])
  },
  watch: {
    songUrl() {
       this.songName = this.songDetail[0].name;
      this.songSinger = this.songDetail[0].ar[0].name;
      this.songSingerId = this.songDetail[0].ar[0].id
      this.songCover = this.songDetail[0].al.picUrl;
      this.currentLyric = lyric(this.songLyric);
      //操作audio
      this.$refs.audio.src = this.songUrl;
      this.$refs.audio.currentTime = 0;
      let timeStamp = setInterval(() => {
        this.duration = this.$refs.audio.duration;
        if (this.duration) {
          clearInterval(timeStamp);
        }
      }, 20);
      this.$refs.audio.volume = this.volume;
      this.$refs.audio.autoplay = true;
    },
    volume(newVal) {
      this.$refs.audio.volume = newVal;
    },
    isPlay(newVal) {
      this.$nextTick(() => {
        newVal ? this.$refs.audio.play() : this.$refs.audio.pause();
      });
    }
  },
  methods: {
    ready() {},
    error() {},
    updateTime(e) {
      let currentTime = e.target.currentTime;
      //更新播放进度条
      if (!this.duration == 0) {
        this.percent = currentTime / this.duration;
      }

      //通过音乐当前时间来更新歌词下标
      this.currentTime = currentTime;
      let i = 0;
      //判断是否有歌词
      if (this.currentLyric.length === 0) return;
      this.currentLyric.forEach((ele, index) => {
        if (currentTime > ele.time) {
          i = index;
        }
      });
      this.lyricIndex = i;
    },
    end() {
      this.$refs["player-footer"].next();
    },

    /* footer操作 */
    changeProgressBar(percent) {
      this.$refs.audio.currentTime = this.duration * percent;
    },
    toggleMode() {},
    prev() {},
    play_pause() {},
    next() {}
  }
};
</script>

<style lang="scss" scoped>
.backgroundImg {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  z-index: 10;
  background: rgb(0, 0, 0);
  img {
    width: 200%;
    height: 200%;
    opacity: 0.6;
    filter: blur(50px);
    position: relative;
    left: -50%;
    top: -50%;
  }
}
.player {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
  & > div {
    width: 100%;
  }
}
</style>
