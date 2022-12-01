import Vue from 'vue'

// 导入 CSS 样式重置库。
import 'normalize.css'

// 导入自定义公共样式。
import '@/assets/styles/index.scss'

// 按需导入 ElementUI 组件库。
import '@/components/elementui/index.js'

import App from './App.vue'

// 导入 VueRouter 模块。
import router from '@/router/index.js'
// 添加路由权限控制。
import '@/router/routerNavGuard.js'

// 导入 Vuex 模块。
import store from '@/store/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
