<template>
    <div class="searchKeywords">
        <div class="header">
          <div class="search-input">
            <cube-input 
              clearable
              :autofocus="true"
              placeholder="杨文轩属你最优秀">
              <div slot="prepend">
                <i class="iconfont icon-iconfonticonfontsousuo1"></i>
              </div>
            </cube-input>
          </div>
          <div class="cancel" @click="$router.go(-1)">取消</div>
          <div class="singer">
            <i class="iconfont icon-singer" />
          </div>
        </div>
        <div class="search-suggest">
          <div class="search-content">搜索  "xxgw"</div>
          <div class="suggests">
            <div>2</div>
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

   },
   methods:{
     
   }
 }
</script>

<style scoped>
/* .keywords-enter-active,
.keywords-leave-active {
  transition: all 1s linear;
}

.keywords-enter, 
.keywords-leave-to{
  opacity: 0;
} */

.searchKeywords{
  width: 100%;
  height: 100vh;
  background: goldenrod;
}

.searchKeywords .header{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: green;
}

.searchKeywords .header .search-input{
  margin-left: 15px;
  width: 70%;
  height: 35px;
}

.searchKeywords .header .cancel{
  width: 12%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
  font-size: 18px;
}

.searchKeywords .header .singer{
  width: 12%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
}

.searchKeywords .header .singer>i{
  font-size: 25px;
}

.searchKeywords .search-suggest{
  width: 100%;
  height: calc(100vh - 110px);
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  background: gray;
}

.searchKeywords .search-suggest .search-content{
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: rgb(0, 172, 240);
  margin: 0px 0px 5px 15px;
  letter-spacing: 1px;
  font-size: 14px;
  border-bottom: 1px solid rgba(255, 255, 255,.2);
}

.searchKeywords .search-suggest .suggests{
}
</style>


<style>
/*覆盖原始样式*/
.cube-input{
  border-radius: 40px;
  background: rgba(122, 122, 122);
}

.cube-input .cube-input-field{
  border-radius: 40px;
  padding: 0px 5px;
  height: 35px;
  color:white;
  letter-spacing: 1px;
}

.cube-input:after{
  border: none;
}

.cube-input .cube-input-prepend i{
  margin-left: 15px;
  font-size: 20px;
  color: rgba(255, 255, 255,.8);
}
</style>
