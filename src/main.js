// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 全局路由守卫（权限）
import './permission'

// 引入全局过滤函数
import * as filters from './filters'

// 引入vue-router
import router from './router/index.js'

// 引用vuex
import store from './store/index'

// 全局样式
import '@/assets/style/index.scss'
// reset css
import './assets/style/reset.css'
// 引入iconfont的css
import './assets/iconfont/iconfont.css'

// 引入ElementUI
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

// 全局引入ElementUI
import ElementUI from 'element-ui'

// 引入百度 echart ：https://github.com/ecomfe/vue-echarts/blob/master/README.zh_CN.md
import ECharts from 'vue-echarts/components/ECharts.vue'

// 手动引入 ECharts 各模块来减小打包体积
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

// 注册ECharts组件后即可使用
Vue.component('v-chart', ECharts)

// 全局挂载 ElementUI
Vue.use(ElementUI, {size: 'small', zIndex: 3000})

// 按需引入ElementUI
// import { Button, Select } from 'element-ui'
// Vue.prototype.$ELEMENT = {size: 'small', zIndex: 3000}
// // 按需挂载ElementUI组件
// Vue.use(Button)
// Vue.use(Select)

// // 挂载vuex
// Vue.use(Vuex)
// const store = creatStore()

// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#admin',
  router,
  store,
  components: { App },
  template: '<App/>'
})
