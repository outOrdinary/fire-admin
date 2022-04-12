// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import App from './App'
import store from './store'
import router from './router'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
// import './styles/element-variables.scss'

import Vant from 'vant'
// import 'vant/lib/index.css'
import 'vant/lib/index.less'

import './icons' // icon
import '@/styles/index.scss' // global css
import '@/assets/font/fonts.scss'

Vue.config.productionTip = false

// Vue.use(ElementUI, { locale })
Vue.use(Vant)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
