import { createRouter, createWebHashHistory } from 'vue-router'
import { watch } from 'vue'
import store from '../store'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/layout')
    // component: Layout
  },
  {
    path: '/m_home', // 手机端
    name: 'MHome',
    component: () => import('@/views/MHome.vue')
    // component: Layout
  },
  {
    path: '/introduce',
    name: 'introduce',
    component: () => import('@/views/introduce.vue')
  },
  {
    path: '/m_introduce', // 手机端
    name: 'Mintroduce',
    component: () => import('@/views/MIntroduce.vue')
  },
  {
    path: '/case',
    name: 'case',
    component: () => import('@/views/case.vue')
  },
  {
    path: '/m_case',
    name: 'Mcase',
    component: () => import('@/views/MCase.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about.vue')
  },
  {
    path: '/m_about', // 手机端
    name: 'MAbout',
    component: () => import('@/views/MAbout.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 页面刷新回到顶部
  scrollBehavior (to, from, savedPosition) {
    // 期望滚动到哪个位置 savedPosition=> 使用浏览器导航(ctrl+r)前进后退会返回到之前阅读的位置
    // return savedPosition || {
    //   x: 0,
    //   y: 0
    // }
    return {
      x: 0,
      y: 0
    }
  }
})
// 路由跳转回到顶部  解决加载更多 路由页不在顶部问题   方法1
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
// 方法2
// router.beforeEach((to, from, next) => {
//   // chrome
//   document.body.scrollTop = 0
//   // firefox
//   document.documentElement.scrollTop = 0
//   // safari
//   window.pageYOffset = 0
//   next()
// })

// 监听路由的改变  同步更新menu
watch(() => router.currentRoute.value, (newValue, oldValue) => {
  console.log(newValue)
  // 页面刷新保持刷新页面
  router.push({ path: newValue.path })
  // 同步更新menu
  store.commit('changeMenuCurrent', [newValue.name])
  // 解决手机端首次进入首页 menu不同步问题
  if (newValue.name === 'MHome') {
    store.commit('changeMenuCurrent', ['home'])
  }
  // 解决移动端点击页面menu不同步问题 (移动端key与menu绑定key不一致)
  if (newValue.name === 'Mintroduce') {
    store.commit('changeMenuCurrent', ['introduce'])
  }
  if (newValue.name === 'Mcase') {
    store.commit('changeMenuCurrent', ['case'])
  }
  if (newValue.name === 'MAbout') {
    store.commit('changeMenuCurrent', ['about'])
  }
}, { deep: true })
export default router
