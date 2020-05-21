import Vue from 'vue'

import 'normalize.css/normalize.css' // 一种现代流行的 resets CSS

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n,国际化

import '@/styles/index.scss' // 全局 css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // 引入权限控制器

/**
 * 如果不想使用 mock-server
 * 您想使用 MockJs 的 mock api
 * 您可以执行: mockXHR()
 *
 * 目前MockJs将用于生产环境，
 * 请在上线前删除！
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// 将ElementUI设置为英文
// Vue.use(ElementUI, { locale })

// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
