import Vue from 'vue';
import App from './App.vue';
import store from './store';

/** router */
import router from './router';
import VuePageStack from 'vue-page-stack';
Vue.use(VuePageStack, { router });

/** css */
import './styles/index.scss';

/** icon */
import './icons/index';

/** component */
import Components from './components/index';
Vue.use(Components);

/** eruda */
(function() {
  if (process.env.VUE_APP_ERUDA !== 'true') return;
  const NO_ERUDA = window.location.protocol === 'https:';
  if (NO_ERUDA) return;
  const src = 'https://cdn.jsdelivr.net/npm/eruda@1.5.8/eruda.min.js';
  document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
  document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>');
})();

/** 启动时生产提示 */
Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
