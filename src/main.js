
// import 'lib-flexible/flexible.js'
// import 'amfe-flexible'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
// import { BootstrapVue3, BToastPlugin } from 'bootstrap-vue-3'
import lazyPlugin from 'vue3-lazy' // 图片懒加载
import 'babel-polyfill'
import 'ant-design-vue/dist/antd.css'
// 公共样式
import './assets/css/reset.css'
import './assets/css/global.less'
import './assets/css/BeautifyScrollBar.less'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'animate.css/animate.min.css' // 引入动画库
// import './utils/onResize'
createApp(App)
  .use(store)
  .use(router)
  // .use(BootstrapVue3)
  // .use(BToastPlugin)
  .use(Antd)
  .use(lazyPlugin, {
  // loading: require('@/assets/img/sp.png'), // 加载时默认图片
  // error: require('@/assets/img/sp.png')// 图片失败时默认图片
  })
  .mount('#app')
