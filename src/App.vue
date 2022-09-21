<template>
     <div >
     <div class="header">
      <div class="header-wrap">
        <div class="header-box">
          <span class="logo">
            <img src="./assets/img/logo.png" alt="">
          </span>
          <div class="nav">
            <a-menu class="nav-menu" v-model:selectedKeys="current"  mode="horizontal">
              <!-- <a-menu-item key="home">首页
                <r  outer-link to="/" > </r>
              </a-menu-item>
              <a-menu-item key="Page2">
                服务介绍
              <router-link  to="/Page2"> </router-link>
              </a-menu-item>
              <a-menu-item key="Page3">
                特色案例
                <router-link to="/Page3"></router-link>
              </a-menu-item>
              <a-menu-item key="about">
                关于我们
                <router-link to="/about"></router-link>
              </a-menu-item> -->
              <a-menu-item :key="item.key"  v-for="item in menuList" @click="menuLink(item.key)">
            {{item.name}}
            </a-menu-item>
            </a-menu>
          </div>
        </div>
       </div>
     </div>
     <div id="v-content" :style="{minHeight: Height+'px'}"><router-view /></div>
     <!-- <div id="v-content" ><router-view  /></div> -->
     <div class="m_footer" v-if="isMobile()">
      <div class="m_footer-content">
        <div class="m_footer-content_row1">
          <div>
              <div>联系地址：上海市闵行区中春路8633弄20号24幢719室</div>
              <div>联系电话：020-000000 000-000000</div>
              <div>联系邮箱：xxx@.com</div>
          </div>
        </div>
        <div class="m_footer-content_row2" >
          <p>©2019 - 2022 上海安垚网络科技有限公司 版权所有</p>
        </div>
      </div>
    </div>
     <div class="footer" v-else>
      <div class="footer-content">
        <div class="footer-content_row1" >
          <div>
              <div>联系地址：上海市闵行区中春路8633弄20号24幢719室</div>
              <div>联系电话：020-000000 000-000000</div>
              <div>联系邮箱：xxx@.com</div>
          </div>
        </div>
        <div class="footer-content_row2" >
          <p>©2019 - 2022 上海安垚网络科技有限公司 版权所有</p>
        </div>
      </div>
     </div>

    <a-back-top :visibilityHeight="300" >
    </a-back-top>
  </div>
</template>
<script>
import { ref, onMounted, watch, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  setup () {
    // 获取当前路由
    const route = useRoute()
    console.log(route)
    // 获取路由实例
    const router = useRouter()
    const store = useStore()
    // 默认menu
    const current = ref(store.state.menuCurrent)
    // 监听vuex menu改变
    watch(() => store.state.menuCurrent, (newVlue, oldV) => {
      current.value = newVlue
    })
    // 首次进入移动端进行跳转
    onMounted(() => {
      if (isMobile()) {
        if (router.currentRoute.value.path === '/') {
          router.push({ path: '/m_home' })
        }
      }
    })
    const menuList = reactive([
      { key: 'home', name: '首页' },
      { key: 'introduce', name: '服务介绍' },
      { key: 'case', name: '特色案例' },
      { key: 'about', name: '关于我们' }
    ])
    // 移动端跳转延迟问题 摒弃router-link
    const menuLink = (value) => {
      // 解决移动端滚动条不能触发动画问题
      if (isMobile()) {
        if (value === 'home') {
          router.push({ path: '/m_home' })
        } else if (value === 'introduce') {
          router.push({ path: '/m_introduce' })
        } else if (value === 'case') {
          router.push({ path: '/m_case' })
        } else if (value === 'about') {
          router.push({ path: '/m_about' })
        }
        return
      }
      if (value === 'home') {
        router.push({ path: '/' })
      } else {
        router.push({ path: '/' + value })
      }
    }
    // 固定底部
    const Height = ref(0)
    onMounted(() => {
      // 获取屏幕可视高
      Height.value = document.documentElement.clientHeight
      window.onresize = () => { Height.value = document.documentElement.clientHeight }
    })
    // 判断是否为移动端
    const isMobile = () => {
      const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
	   return flag
    }
    return {
      current,
      Height,
      menuList,
      menuLink,
      isMobile
    }
  }
}
</script>
<style lang="less" scoped>

/deep/ .ant-menu {
  color: white;
}
/deep/ .ant-menu-horizontal {
  border-bottom: 0px solid #fff;
  line-height: 80px;
}
/deep/ .ant-menu-horizontal > .ant-menu-item::after {
  left: 0px;
  right: 0px;
}
#app {
}
.header {
  z-index: 99999;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  .header-wrap {
    min-width: 1366px;
    position: relative;
    width: 100%;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.34901960784313724);
    // background: rgba(8, 14, 70, 0.5686274509803921);
    .header-box {
      position: relative;
      z-index: 10;
      width: 1000px;
      height: 80px;
      margin: 0 auto;
    }
    .logo {
      float: left;
      // position: absolute;
      padding: 20px ;
      // height:80px;
      img {
        width: 40px;
        height: 40px;
      }
    }
    .nav {
      float: right;
      width: 400px;
      .nav-menu {
        background: #07145800;
      }
    }
  }
}
.footer {
  width: 100%;
  background: black;
  &-content {
    width: 1366px;
    height:248px;
    margin: 0 auto;
    color: white;
    &_row1 {
      div {
        display: inline-block;
        // vertical-align: middle;
        padding:44px 59px;
        opacity: .7;
      }
    }
    &_row2 {
      text-align: center;
      padding-bottom: 30px;
      opacity: .8;
    }
  }
}
.m_footer {
  width: 100%;
  background: black;
  &-content {
    width: 1366px;
    height:248px;
    margin: 0 auto;
    color: white;
    &_row1 {
      div {
        display: inline-block;
        // vertical-align: middle;
        padding:44px 59px;
        font-size: 17px;
      }
    }
    &_row2 {
      text-align: center;
      padding-bottom: 30px;
      font-size: 17px;
    }
  }
}
</style>
