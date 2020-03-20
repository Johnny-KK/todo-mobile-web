import Vue from "vue";
import App from "./App.vue";
import store from "./store";

/** router */
import router from "./router";
import VuePageStack from "vue-page-stack";
Vue.use(VuePageStack, { router });

/** css */
import "./styles/index.scss";

/** icon */
import "./icons/index";

/** component */
import Components from "./components/index";
Vue.use(Components);

/** 启动时生产提示 */
Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
