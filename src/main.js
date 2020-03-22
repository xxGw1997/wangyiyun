import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {TabBar,TabPanels,Scroll,Sticky} from 'cube-ui'

Vue.config.productionTip = false;
Vue.use(TabBar)
Vue.use(TabPanels)
Vue.use(Scroll)
Vue.use(Sticky)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
