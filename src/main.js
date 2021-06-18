import Vue from 'vue'
import router from './router/router'
import axios from "axios"
import VueAxios from "vue-axios"
import App from './App.vue'

Vue.config.productionTip = false;

// mock开关
const mock = true
if(mock) {
  require('./../public/mock/api.json');
}
//
axios.default.baseURL = '/api'
axios.default.timeout = 8000;

//接口错误拦截
axios.interceptors.response.use(function(response) {
  let res = response.data;
  if(res.status == 0) {
    return res.data;
  } else if(res.status == 10) {
    window.location.href = '/#/login';
    return Promise.reject(res);
  } else {
    Message.warning(res.msg);
    return Promise.reject(res)
  }
},(error) => {
  let res = error.response;
  Message.error(res.data.message);
  return Promise.reject(error);
})


Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
