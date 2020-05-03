<template>
  <div>
    <div class="play-info">
      <div class="info">
        <div class="info-left">
          <img :src="playListDetail.coverImgUrl" alt="" />
        </div>
        <div class="info-right">
          <div class="info-title">{{ playListDetail.name }}</div>
          <div class="info-author">
            <div class="author-img">
              <img :src="creatorImg" alt="" v-if="!playListDetail.type"/>
              <div class="author-name" v-else>歌手:</div>
            </div>
            <div class="author-name">{{ creatorNickname }}</div>
            <div class="author-icon">></div>
          </div>
          <div class="info-intro">
            <div class="intro">{{ playListDetail.description }}</div>
            <div class="intro-icon">></div>
          </div>
        </div>
      </div>
      <div class="operation">
        <div class="operation-item"
             @click.stop.prevent="comment">
          <div class="operation-icon">
            <i class="iconfont icon-comment"></i>
          </div>
          <div class="operation-info">
            {{ commentCount }}
          </div>
        </div>
        <div class="operation-item" @click="share">
          <div class="operation-icon">
            <i class="iconfont icon-share"></i>
          </div>
          <div class="operation-info">
            {{ shareCount }}
          </div>
        </div>
        <div class="operation-item" @click="download">
          <div class="operation-icon">
            <i class="iconfont icon-download"></i>
          </div>
          <div class="operation-info">
            下载
          </div>
        </div>
        <div class="operation-item" @click="checkmore">
          <div class="operation-icon">
            <i class="iconfont icon-checks"></i>
          </div>
          <div class="operation-info">
            多选
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    playListDetail: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      creatorImg: "",
      creatorNickname: ""
    };
  },
  computed: {
    commentCount() {
      return this.playListDetail.commentCount
        ? this.playListDetail.commentCount
        : "评论";
    },
    shareCount() {
      return this.playListDetail.shareCount
        ? this.playListDetail.shareCount
        : "分享";
    }
  },
  watch: {
    playListDetail() {
      this.creatorImg = this.playListDetail.creator.avatarUrl;
      this.creatorNickname = this.playListDetail.creator.nickname;
    }
  },
  methods:{
    comment(){
      // let id = this.playListDetail.id
      let type = ''
      if(this.playListDetail.type){
        // this.$store.dispatch("getAlbumComments",id)
        type = 'album'
      }else{
        // this.$store.dispatch("getMusiclistComments",id)
        type = 'musiclist'
      }
      this.$router.push({
        path:'comment',
        query:{
          type,
          id:this.playListDetail.id
        }
      })
    },
    share(){
      this.$createToast({
        type: 'txt',
        txt: '以后有机会可以试试'
      }).show()
    },
    download(){
      this.$createToast({
        type: 'txt',
        txt: '下不了'
      }).show()
    },
    checkmore(){
      this.$createToast({
        type: 'txt',
        txt: '多选也不能干嘛'
      }).show()
    }
  }
};
</script>

<style lang="scss" scoped>
.play-info {
  width: 90%;
  height: 250px;
  margin: 0 15px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  padding-top: 10px;
  .info {
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: space-between;
    .info-left {
      width: 40%;
      img {
        width: 100%;
        border-radius: 5px;
      }
    }
    .info-right {
      width: 55%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      align-content: space-around;
      .info-title {
        color: aliceblue;
        font-size: 15px;
        line-height: 22px;
        font-weight: bolder;
        letter-spacing: 2px;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .info-author {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .author-img {
          flex: 0 0 20%;
          & > img {
            width: 80%;
            border-radius: 50%;
          }
          & > .author-name {
            color: rgba(255, 255, 255,.5);
          }
        }
        .author-name {
          font-size: 13px;
          color: rgba(255, 255, 255,.9);
          padding-left: 5px;
        }
        .author-icon {
          flex: 0 0 5%;
          color: rgba(255, 255, 255,.9);
        }
      }
      .info-intro {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .intro {
          height: 80%;
          color: rgba(255, 255, 255,.9);
          font-size: 10px;
          line-height: 18px;
          letter-spacing: 1px;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .intro-icon {
          color: rgba(255, 255, 255,.9);
        }
      }
      & > div {
        width: 100%;
        height: 30%;
      }
    }
  }
  .operation {
    width: 100%;
    height: 20%;
    display: flex;
    .operation-item {
      width: 25%;
      height: 100%;
      color: rgba(255, 255, 255,.9);
      display: flex;
      text-align: center;
      align-content: space-around;
      flex-wrap: wrap;
      .operation-icon {
        width: 100%;
      }
      &:nth-of-type(1) {
        .operation-icon {
          i {
            font-size: 25px;
          }
        }
      }
      &:nth-of-type(2) {
        .operation-icon {
          i {
            font-size: 25px;
          }
        }
      }
      &:nth-of-type(3) {
        .operation-icon {
          i {
            font-size: 20px;
          }
        }
      }
      &:nth-of-type(4) {
        .operation-icon {
          i {
            font-size: 20px;
          }
        }
      }
      .operation-info {
        width: 100%;
        font-size: 12px;
      }
    }
  }
}

</style>
