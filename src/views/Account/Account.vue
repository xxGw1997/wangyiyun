<template>
  <div class="account">
    <transition name="login">
      <div class="account_login" v-show="loginShow">
        <Login @showLogin="showLogin" />
      </div>
    </transition>
    <header-top>
      <div class="header_left" slot="left">
        <i class="iconfont icon-saoyisao"></i>
      </div>
      <div class="header_center" slot="center"></div>
    </header-top>
    <div class="content">
      <div class="login" v-if="isLogin">
        <div class="login-up">
          <div class="up-left">
            <img :src="userInfo.avatarUrl" alt="" />
          </div>
          <div class="up-center">
            <div class="username">{{ userInfo.nickname }}</div>
            <div class="lv">
              <span>Lv. {{ userInfo.level }}</span>
            </div>
          </div>
          <div class="up-right">
            <span>已签到></span>
          </div>
        </div>
        <div class="login-bottom">
          <div class="bottom-item">
            <div class="item-up">{{ userInfo.eventCount }}</div>
            <div class="item-title">动态</div>
          </div>
          <div class="bottom-item">
            <div class="item-up">{{ userInfo.follows }}</div>
            <div class="item-title">关注</div>
          </div>
          <div class="bottom-item">
            <div class="item-up">{{ userInfo.followers }}</div>
            <div class="item-title">粉丝</div>
          </div>
          <div class="bottom-item">
            <div class="item-up">0</div>
            <div class="item-title">编辑资料</div>
          </div>
        </div>
        <div class="logout" @click="logout">
          退出登录
        </div>
      </div>
      <div class="unlogin" v-else>
        <div class="unlogin-text">登录网易云音乐</div>
        <div class="unlogin-text">手机电脑多端同步,尽享海量高品质音乐</div>
        <div class="unlogin-btn" @click="showLogin(true)">立即登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import Login from "./ChildComps/Login";
import HeaderTop from "../../components/HeaderTop/HeaderTop";

import {clearUserInfo} from "@/utils/cache"
export default {
  data() {
    return {
      loginShow: false,
      avatarUrl: "",
      nickname: "",
      level: 0,
      eventCount: 0,
      follows: 0,
      followers: 0
    };
  },
  components: {
    Login,
    HeaderTop
  },
  watch: {
    token(newVal) {
      if (newVal !== null) {
        this.loginShow = false;
      }
    },
    // userDetail(newVal) {
    //   this.avatarUrl = newVal.profile.avatarUrl;
    //   this.nickname = newVal.profile.nickname;
    //   this.level = newVal.level;
    //   this.eventCount = newVal.profile.eventCount;
    //   this.follows = newVal.profile.follows;
    //   this.followers = newVal.profile.followeds;
    // }
  },
  computed: {
    ...mapState(["token", "userDetail"]),
    ...mapGetters(["userInfo"]),
        isLogin() {
          // console.log(this.token)
          // console.log(this.userDetail)
          return this.token !== null 
        },
  },
  // updated(){
  //   console.log("updated:",this.token)
  // },
  methods: {
    showLogin(isShow) {
      this.loginShow = isShow;
    },
    logout(){
      this.$store.dispatch("logout")
      this.$router.go(0)
    }
  }
};
</script>

<style scoped>
.account {
  width: 100%;
  height: 100vh;
}

.login-enter-active {
  transition: all 0.2s ease-out;
}

.login-leave-active {
  transition: all 0.2s linear;
}

.login-enter,
.login-leave-to {
  transform: translateY(100vh);
}

.account .account_login {
  position: absolute;
  background: salmon;
  z-index: 11;
  width: 100%;
  height: 100%;
}

.content {
  width: 100%;
  background: gray;
  height: calc(100% - 110px);
  top: 50px;
  overflow: hidden;
  position: relative;
}

/*已登录*/
.account .content .login {
  background: goldenrod;
  width: 100%;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.account .content .login > div {
  width: 95%;
  height: 100px;
}

.account .content .login .login-up {
  display: flex;
}

.account .content .login .login-up > div {
  text-align: center;
  line-height: 100px;
}

.account .content .login .login-up .up-left {
  width: 20%;
  display: flex;
  align-items: center;
}

.account .content .login .login-up .up-left > img {
  width: 90%;
  border-radius: 50%;
}

.account .content .login .login-up .up-center {
  width: 60%;
  display: flex;
  flex-wrap: wrap;
}

.account .content .login .login-up .up-center > div {
  width: 100%;
  height: 50%;
  text-align: left;
}

.account .content .login .login-up .up-center .username {
  color: aliceblue;
  font-weight: bolder;
  font-size: 23px;
  line-height: 70px;
}

.account .content .login .login-up .up-center .lv {
  color: aliceblue;
  font-style: italic;
  font-size: 10px;
  line-height: 30px;
}

.lv span {
  padding: 2px 10px 4px 8px;
  background: grey;
  letter-spacing: 1px;
  border-radius: 20px;
}

.account .content .login .login-up .up-right {
  width: 20%;
}

.account .content .login .login-up .up-right > span {
  padding: 4px 10px 4px 10px;
  color: beige;
  border: 1px solid rgb(255, 255, 255, 0.5);
  border-radius: 20px;
  font-size: 12px;
}

.account .content .login .login-bottom {
  display: flex;
  align-items: center;
}

.account .content .login .login-bottom .bottom-item {
  width: 25%;
  height: 40%;
  display: flex;
  flex-wrap: wrap;
}

.account .content .login .login-bottom .bottom-item:not(:last-child) {
  border-right: 1px solid rgb(240, 248, 255, 0.2);
}

.account .content .login .login-bottom .bottom-item .item-up {
  width: 100%;
  text-align: center;
  color: aliceblue;
}

.account .content .login .login-bottom .bottom-item .item-title {
  width: 100%;
  text-align: center;
  color: aliceblue;
  opacity: 0.5;
  letter-spacing: 1px;
  font-size: 15px;
}

/*未登录*/
.account .content .unlogin {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  height: 120px;
}

.account .content .unlogin > div {
  color: aliceblue;
  width: 100%;
  height: 40px;
}

.account .content .unlogin .unlogin-text {
  text-align: center;
}

.account .content .unlogin .unlogin-btn {
  width: 95%;
  text-align: center;
  letter-spacing: 2px;
  font-size: 20px;
  line-height: 40px;
  border: 1px solid white;
  border-radius: 20px;
}

.account .content .login .logout{
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 25px;
  color: red;
  margin-top: 20px;
  background: rgb(150, 149, 149);
}
</style>
