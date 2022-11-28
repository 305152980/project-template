import Vue from 'vue'
import App from './App.vue'

// 导入自定义公共样式。
import '@/assets/styles/index.scss'

// 导入 Vuex 模块。
import store from '@/store/index.js'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
