import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from "./config/post";
import './utils/element-ui'

Vue.use(http)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
