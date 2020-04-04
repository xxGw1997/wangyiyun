<template>
    <div class="header">
        <div class="back" @click="back">
            <i class="iconfont icon-back"/>
        </div>
        <div class="search-keyword">
            <i class="iconfont icon-iconfonticonfontsousuo1"/>
            <span>哈哈哈</span>
        </div>
    </div>
</template>

<script>
 export default {
   methods:{
       back(){
           this.$router.go(-1)
       }
   }
 }
</script>

<style scoped>
.header{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(40, 40, 40, 0.8);
}

.header .back{
  width: 10%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
}

.header .back>i{
  font-size: 25px;
}

.header .search-keyword{
  width: 80%;
  height: 35px;
  line-height: 35px;
  border-radius: 35px;
  background: gray;
}

.header .search-keyword>i{
  margin-left: 15px;
  vertical-align:text-bottom;
  font-size: 20px;
  color: rgba(255, 255, 255,.3);
}

.header .search-keyword>span{
  margin-left: 10px;
  vertical-align:text-bottom;
  color: rgba(255, 255, 255,.7);
  letter-spacing: 1px;
}
 
</style>
