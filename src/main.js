import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// import jquery from 'jquery'
import 'element-ui/lib/theme-chalk/index.css'
import './style/public.css'
import './style/common.css'
Vue.use(ElementUI)
/* eslint-disable no-new */
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
