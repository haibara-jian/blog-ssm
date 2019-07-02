import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element.js';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/display.css';


axios.defaults.baseURL = 'http://localhost:8081';
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.prototype.axios = axios;
// import hljs from 'highlight.js';
// import 'highlight.js/styles/googlecode.css' //样式文件
// Vue.prototype.hljs = hljs;


Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
