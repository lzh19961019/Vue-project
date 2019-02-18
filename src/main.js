import Vue from 'vue';
import App from './App.vue';
import routes from './router.config';
import store from './store/index';
import Loading from './components/loading';
import axios from 'axios';
import VueRouter from 'vue-router'
import VueLazyload from 'vue-lazyload'


import './assets/css/base.css'; //全局引入
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Loading);

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/images/err.png'),
  loading: require('./assets/images/loading.gif'),
  attempt: 1,
  throttleWait:1000,
  listenEvents: ['scroll']
});

const router = new VueRouter({
  mode: 'hash',
  scorllBehavior: () => ({
      y: 0

  }),
  routes
});

axios.interceptors.request.use(function(config) { //配置发送请求的信息
  store.dispatch('showLoading');
  return config;
}, function(error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function(response) { //配置请求回来的信息
  store.dispatch('hideLoading');
  return response;
}, function(error) {
  return Promise.reject(error);
});


axios.defaults.baseURL = 'http://47.101.63.248:3333/';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
