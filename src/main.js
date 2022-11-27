import Vue from 'vue'
import App from './App.vue'

// 导入自定义公共样式。
import '@/assets/styles/index.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
