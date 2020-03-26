<template>
  <div class="login">
    <header class="header">
      <div @click="closeLogin">X</div>
      <div>登录</div>
    </header>
    <div>
      <form @submit.prevent="login" class="content">
        <div class="phone">
          <cube-input
            v-model="phone"
            placeholder="手机号"
            :maxlength="12"
            type="number"
            :clearable="{visible: true,blurHidden: true}"
            >
          </cube-input>
        </div>
        <div class="pwd">
          <cube-input
            v-model="pwd"
            placeholder="密码"
            type="password"
            :maxlength="18"
            :clearable="{visible: true,blurHidden: true}"
            :eye="{open: true,reverse: true}"
            >
          </cube-input>
        </div>
        <div class="btn" type="submit" @click="login">
          手机号登录
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: null, //手机号
      pwd: null //登录密码
    };
  },
  watch:{
    phone(newVal){
      if (newVal.length > 11) {
        newVal = newVal.slice(0, 10)
        this.$nextTick(() => {
          this.phone = newVal
        })
        return
      }
    }
  },
  methods: {
    closeLogin() {
      this.$emit("showLogin", false);
    },
    login() {
      if(this.phone == null || this.pwd == null){
        alert("手机号和密码不能为空")
        return
      }
      if(this.phone.length !== 11){
        alert("请输入正确的手机号")
        return
      }
      if(this.pwd.length < 6){
        alert("密码最少要6位")
        return
      }
      const userInfo = { username: this.phone, pwd: this.pwd };
      const callback = (msg) => {
        console.log(msg);
      };
      this.$store.dispatch("login", { userInfo, callback });
    }
  }
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
}

.login .header {
  width: 100%;
  height: 50px;
}

.login .content {
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.login .content > div {
  width: 100%;
}

.login .content .phone{
  width: 100%;
  margin: 0 20px;
}

.login .content .pwd{
  width: 100%;
  margin: 0 20px;
}

.login .content .btn{
  text-align: center;
  height: 50px;
  line-height: 50px;
  background: red;
  color: aliceblue;
  margin: 0 50px;
  border-radius: 50px;
  opacity: .9;
}
</style>
