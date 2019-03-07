import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/custom-theme/index.css'
import '@/assets/styles/index.scss'
import router from './router'
import store from './store'
import * as filters from './utils/filters'
import './assets/icons'

// init filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

Vue.use(ElementUI) // , { size: 'small' }
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
