import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from './requests';
import store from './store';
// import requests from './requests';
// import SimpleVueValidator from 'SimpleVueValidator';

// Vue.use(SimpleVueValidator);

store.$axios = axios;

new Vue({
  el: "#app-root",
  router,
  store,
  render: h => h(App)
});