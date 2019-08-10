import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from './element/index'
import axios from 'axios'
ElementUI();

Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')