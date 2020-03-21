<template>
  <div>
    <header>
      登录
    </header>
    <section>
      <form @submit.prevent="login">
        <input type="text" placeholder="手机号" v-model="phone" />
        <input type="password" placeholder="密码" v-model="pwd" />
        <button>手机号登录</button>
      </form>
    </section>
  </div>
</template>

<script>
import { login } from "../../api";
export default {
  data() {
    return {
      phone: "", //手机号
      pwd: "" //登录密码
    };
  },
  methods: {
    async login() {
      const { phone, pwd } = this;
      let result = await login(phone, pwd);
      console.log(result.code);
    }
  }
};
</script>

<style></style>
