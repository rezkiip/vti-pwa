import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FunctionService from './tools/FunctionService';

Vue.config.productionTip = false
Vue.prototype.$func = FunctionService;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
