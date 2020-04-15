<template>
    <div class="recommend-item">
        <div class="item"
             v-for="(item,index) in searchHot"
             :key="index"
             @click="searchKeyword(item.searchWord)">
            <div class="item-index" :class="index<3?'top3':''">
                {{index + 1}}
            </div>
            <div class="item-info">
                <div class="info-searchword">
                    {{item.searchWord}}
                    <span>{{item.score}}</span>
                    <div v-show="item.iconUrl != 'null'">
                        <img :src="item.iconUrl" alt="">
                    </div>
                </div>
                <div class="info-content">{{item.content}}</div>
            </div>
        </div>
    </div>
</template>

<script>
 import {mapState} from "vuex"

 export default {
   beforeCreate(){
       this.$store.dispatch("getSearchHot")
   },
   computed:{
       ...mapState(["searchHot"])
   },
   methods:{
       searchKeyword(keyword){
            this.$emit("searchKeyword",keyword)
       }
   }
 }
</script>

<style scoped>
.recommend-item{
    margin: 15px 0;
}

.recommend-item .item{
    width: 100%;
    height: 50px;
    margin: 15px 0;
    display: flex;
}

.recommend-item .item .item-index{
    width: 10%;
    height: 50px;
    line-height: 50px;
    color: rgba(0, 0, 0, 0.6);
}

.recommend-item .item .top3{
    color: rgb(255, 63, 50);
}

.recommend-item .item .item-info{
    width: 90%;
    height: 50px;
    line-height: 50px;
}

.recommend-item .item .item-info>div{
    height: 25px;
    line-height: 25px;
}

.info-searchword{
    color: rgb(0, 0, 0);
}

.info-searchword>span{
    display: inline-block;
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
    margin: 0 10px;
}

.info-searchword>div{
    display: inline-block;
    width: 30px;
    height: 25px;
    line-height: 25px;
}

.info-searchword>div>img{
    max-width: 30px;
    max-height: 15px;
}

.info-content{
    color: rgba(0, 0, 0, 0.6);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
}
 
</style>
