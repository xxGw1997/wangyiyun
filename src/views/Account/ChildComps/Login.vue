<template>
 <div class="login">
    <header class="header">
        <div @click="closeLogin">X</div>
        <div>登录</div>
    </header>
        <form @submit.prevent="login" class="content">
            <div>
                <input type="text" placeholder="手机号" v-model="phone">
            </div>
            <div>
                <input type="password" placeholder="密码" v-model="pwd">
            </div>
            <div>
                <button>手机号登录</button>
            </div>
        </form>
 </div>
</template>

<script>
// import {login} from '../../api'
 export default {
   data () {
     return {
        phone:'',//手机号
        pwd:'',//登录密码
     }
   },
   methods:{
       closeLogin(){
           this.$emit("showLogin",false)
       },
       login(){
           console.log(this.phone)
           console.log(this.pwd)
           const userInfo = {username:this.phone,pwd:this.pwd}
           const callback = ()=>{
               console.log('登录失败')
           }
           this.$store.dispatch('login',{userInfo,callback})
        //    const {phone,pwd} = this
        //    let result = await login(phone,pwd)
        //    console.log(result.code)
       }
   }
 }
</script>

<style scoped>
.login{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
}

.login .header{
    width: 100%;
    height: 50px;
}

.login .content{
    width: 100%;
    height: calc(100vh - 50px);
    display: flex;
    flex-wrap: wrap;
}

.login .content>div{
    width: 100%;
}
 
</style>
