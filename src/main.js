import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/router'
import './plugins/axios'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
