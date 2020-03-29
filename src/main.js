import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import {TabBar,TabPanels,Scroll,Sticky,Dialog,Input,Locale } from 'cube-ui'
import Cube from 'cube-ui'
import CreateAPI from 'vue-create-api'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload,{
  preLoad:1.3,
  error:'@/assets/img/loading.gif',
  loading:'./assets/img/loading.gif',
  attempt:2,

})

Vue.config.productionTip = false;
// Vue.use(TabBar)
// Vue.use(TabPanels)
// Vue.use(Scroll)
// Vue.use(Sticky)
// Vue.use(Dialog)
// Vue.use(Input)
// Vue.use(Locale)
Vue.use(Cube)
Vue.use(CreateAPI, {
  componentPrefix: 'cube-',
  apiPrefix: '$create-'
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
