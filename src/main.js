import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

import '@/assets/main.scss'

Vue.config.productionTip = false
// Vue.filter('json', value => { return JSON.stringify(value, null, 2) } )
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
