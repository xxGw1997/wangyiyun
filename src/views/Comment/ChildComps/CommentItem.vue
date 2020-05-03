<template>
    <div class="comment-item">
        <div class="item-avatar">
            <img :src="item.picUrl" alt="">
        </div>
        <div class="item-info">
            <div class="info-name">
                {{item.name}}
            </div>
            <div class="info-creator">
                by <span>{{item.author}}</span>
            </div>
        </div>
    </div>
</template>

<script>
 import {mapState} from "vuex"

 export default {
    props:{
        item:{
            type:Object,
            default(){
                return {}
            }
        }
    },
   data () {
     return {

     }
   },
   computed:{
       ...mapState([""])
   }
 }
</script>

<style lang="scss" scoped>
.comment-item {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-avatar {
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    height: 75%;
    border-radius: 10%;
  }
}
.item-info {
  width: 70%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.info-name {
  width: 100%;
  height: 30%;
  color: rgba(255, 255, 255,.7);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.info-creator {
  width: 100%;
  height: 30%;
  color: rgba(255, 255, 255,.3);
  font-size: 14px;
  & > span {
    color: rgb(0, 153, 255);
    font-size: 14px;
  }
}
</style>
