<template>
<div>
  <div style="position:relative;">
    <div  >
      <!--autoplaySpeed--触发时间  -->
      <!-- speed-- 过渡速度  -->
       <a-carousel arrows effect="fade" :autoplaySpeed="5000" :beforeChange="beforeImgChange" :speed="1000" >
          <template #prevArrow>
            <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
              <left-outlined />
            </div>
          </template>
          <template #nextArrow >
            <div class="custom-slick-arrow" style="right:15px;">
              <right-outlined />
            </div>
          </template>
        <img  src="../assets/img/bgc1.jpg" alt="">
        <img src="../assets/img/bgc2.jpg" alt="">
        </a-carousel>
    </div>
    <div class="textBox animate__animated animate__bounceInLeft" v-show="imgCurrent == 0" >
      <p class="title">3333333</p>
      <p class="more" @click="handleMore">了解更多</p>
    </div>
  </div>
   <!-- <div style="width:100%;height:200px;background-color:skyblue">12312312321</div> -->
    <!-- <div class="banner">
      <div class="content">
        <div class="content-wrap" style="display:block">
          <div class="main-1">
            <div class="main1-bigdata">
              <div class="main-1bg"></div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="main-service animate__animated animate__fadeInDown"  >
        <div class="main-service-content">
          <div class="col1-title">服务范围</div>
          <div class="col2-title">Service Area</div>
      </div>
    </div>
    <!-- 服务范围介绍 -->
    <div class="main-service-introduce ">
      <div class="main-service-introduce-bgc">
          <div class="introduce-content animate__animated  animate__fadeInDown animate-duration" v-if="titleShow">
            <div class="content">
              <div>
                <img src="../assets/img/introduce.webp" alt="">
              </div>
              <div>云数据中心操作系统</div>
              <div class="title">———</div>
              <div class="title">标准化计的基于虚拟化技术</div>
            </div>
            <div class="content">
              <div>
                <img src="../assets/img/introduce2.webp" alt="">
              </div>
              <div>云数据中心操作系统</div>
              <div class="title">———</div>
              <div class="title">标准化计的基于虚拟化技术</div>
            </div>
            <div class="content">
              <div>
                <img src="../assets/img/introduce3.webp" alt="">
              </div>
              <div>云数据中心操作系统</div>
              <div class="title">———</div>
              <div class="title">标准化计的基于虚拟化技术</div>
            </div>
            <div class="content">
              <div>
                <img src="../assets/img/introduce4.webp" alt="">
              </div>
              <div>云数据中心操作系统</div>
              <div class="title">———</div>
              <div class="title">标准化计的基于虚拟化技术</div>
            </div>
          </div>
      </div>
    </div>
    <!-- 服务理念 -->
    <div class="main-service-idea">
      <div  class="main-service-idea-content">
         <div class="main-service-idea-content_row1 animate__animated  animate__fadeInLeft" v-if="titleShow2">
          <div class="col1-title">服务理念</div>
          <div class="col2-title">Service Concept</div>
          <br>
          <div class="col3-title">专注品牌事业十余年，是一家兼具国际视野、创新动力、全方位跨平台的品牌咨询与设计整合服务公司。公司业务涉及大数据、智能多媒体、物联网、云计算等。目前已为上百家国内优秀企业及全球500强企业提供了专业有效的品牌传播解决方案。</div>
          <br>
         <div class="about-more" @click="handleMore">了解更多</div>
         </div>
        <div class="main-service-idea-content_row2 animate__animated  animate__fadeInRight" v-if="titleShow2">
          <img src="../assets/img/idea2.webp" alt="" >
        </div>
      </div>
    </div>
    <!-- 关于我们 -->
    <div class="main-about">
      <div class="main-about-content">
          <div class="main-about-content_row1 animate__animated  animate__fadeInLeft" v-if="titleShow3">
              <img src="../assets/img/about.webp" alt="">
          </div>
          <div class="main-about-content_row2 animate__animated  animate__fadeInRight" v-if="titleShow3">
            <div class="col1-title">关于我们</div>
            <div class="col2-title">About Us</div>
            <br>
            <div class="col3-title">专注品牌事业十余年，是一家兼具国际视野、创新动力、全方位跨平台的品牌咨询与设计整合服务公司，目前已为上百家国内优秀企业及全球500强企业提供了专业有效的品牌传播解决方案。  更善于将创新运用其中；绝妙的创意配以高水平的执行及传播渠道的有效整合。</div>
            <br>
            <br>
            <div class="about-more" @click="handleMore">
              了解更多
            </div>
          </div>
      </div>
    </div>
    <!-- 服务案例/合作客户 -->
    <div class="service-case animate__animated  animate__fadeInDown" v-if="titleShow4">
      <div class="service-case-content">
        <div class="col1-title">合作客户</div>
        <div class="col2-title">Our Partner</div>
      </div>
    </div>
    <!-- <div class="main-3">
      <div class="main-box">
        <div class="main-wrap">
          <div class="main-bottom">
            <div class="swiper-container">
                <div class="swiper" >
                  <div>
                    <div class="swiper-slide" >
                    <swiper class="swiper-content"  :autoplay="swiperOptions.autoplay" :loop="swiperOptions.loop" :speed="swiperOptions.speed" :pagination="swiperOptions.pagination" :navigation="swiperOptions.navigation">
                    <swiper-slide>
                    <ul>
                      <li v-for="item in arrjson" :key="item.name">
                        <div class="location">{{item.location}} </div>
                        <div class="describe">{{item.describe}} </div>
                      </li>
                    </ul>
                    </swiper-slide>

                    <swiper-slide>3123</swiper-slide>
                    <swiper-slide>123123</swiper-slide>
                    </swiper>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

    </div> -->
    <div class="case-swiper">
        <div class="case-swiper-content">
          <div class="swiper">
            <swiper
              :autoplay="swiperOptions.autoplay"
              :loop="swiperOptions.loop"
              :speed="swiperOptions.speed"
              :pagination="swiperOptions.pagination"
              :navigation="swiperOptions.navigation"
              :spaceBetween="swiperOptions.spaceBetween"
              :centeredSlides="swiperOptions.centeredSlides"
              :slidesPerView="swiperOptions.slidesPerView"
              class="swiper-content"
              >
              <swiper-slide>
              <ul>
                <li v-for="item in arrjson" :key="item.name">
                  <div class="location">{{item.location}} </div>
                  <div class="describe">{{item.describe}} </div>
                </li>
              </ul>
              </swiper-slide>
              <swiper-slide >
               <ul>
                123
               </ul>
              </swiper-slide>
              <swiper-slide>
                <ul>
                5555
                </ul>
              </swiper-slide>
            </swiper>
          </div>
       </div>
    </div>
</div>
</template>
<script>
import { reactive, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { handleScroll } from '../utils/handleScroll.js'
// 顶部轮播图icon
import { LeftOutlined, RightOutlined } from '@ant-design/icons-vue'
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
// import 'swiper/swiper.min.css' // 整个轮播图的样式
import 'swiper/components/pagination/pagination.less'
import 'swiper/components/navigation/navigation.less'

SwiperCore.use([Autoplay, Pagination, Navigation])
export default {
  name: 'AppHome',
  components: {
    Swiper,
    SwiperSlide,
    LeftOutlined,
    RightOutlined
  },
  setup () {
    // swiper相关配置属性放在swiperOptions这个变量里
    const swiperOptions = reactive({
      autoplay: {
        delay: 8000, // 8秒切换一次
        disableOnInteraction: false // 鼠标滑动后继续自动播放
        // pauseOnMouseEnter: true // 鼠标悬停暂停切换
      },
      slidesPerView: 'auto', // 解决最后一张切换到第一张中间的空白
      loop: true,
      speed: 1000, // 切换过渡速度
      centeredSlides: true, // 设置slide居中
      spaceBetween: 20,
      pagination: {
        clickable: true
      },

      navigation: {
        nextElRef: '.swiper-button-next',
        prevElRef: '.swiper-button-prev',
        hiddenClass: '.swiper-button-hidden'
      }
    })
    const arrjson = reactive([
      { location: '黄大大0', describe: 'fffffsafasfa' },
      { location: '黄大大1', describe: 'fffffsafasfa' },
      { location: '黄大大2', describe: 'gfagfafas' },
      { location: '黄大大2', describe: 'gfagfafas' },
      { location: '黄大大2', describe: 'gfagfafas' },
      { location: '黄大大2', describe: 'gfagfafas' },
      { location: '黄大大2', describe: 'gfagfafas' },
      { location: '黄大大2', describe: 'gfagfafas' },
      { location: '黄大大2', describe: 'gfagfafas' },
      { location: '黄大大2', describe: 'gfagfafas' }
    ])
    // 获取路由实例
    const router = useRouter()
    const store = useStore()
    // 跳转menu存储vuex
    const handleMore = (value) => {
      store.commit('changeMenuCurrent', ['about'])
      router.push({ path: '/about' })
    }
    // 控制对应文本显隐
    const imgCurrent = ref(0)
    const beforeImgChange = (from, to) => {
      imgCurrent.value = to
    }
    const titleShow = ref(false)
    const titleShow2 = ref(false)
    const titleShow3 = ref(false)
    const titleShow4 = ref(false)
    const titleShow5 = ref(false)
    const titleShow6 = ref(false)
    const titleShow7 = ref(false)
    // 实现当滚动到指定位置，触发动画
    const scrollTopNum = handleScroll()
    watch(() => scrollTopNum.value, (newValue, oldV) => {
      console.log(newValue)
      if (newValue < 100) {
        titleShow.value = true
      }
      if (newValue > 500) {
        titleShow2.value = true
      }
      if (newValue > 1000) {
        titleShow3.value = true
      }
      if (newValue > 1400) {
        titleShow4.value = true
      }
      if (newValue > 1650) {
        titleShow5.value = true
      }
      if (newValue > 1850) {
        titleShow6.value = true
      }
      if (newValue > 2260) {
        titleShow7.value = true
      }
    })
    return {
      swiperOptions,
      arrjson,
      handleMore,
      imgCurrent,
      beforeImgChange,
      titleShow,
      titleShow2,
      titleShow3,
      titleShow4,
      titleShow5,
      titleShow6,
      titleShow7
    }
  }
}
</script>

<style scoped lang="less">
/deep/ .ant-carousel .slick-slide {
  // text-align: center;
  // height: 600px;
  // line-height: 600px;
  overflow: hidden;
}

/deep/ .ant-carousel .slick-slide img {
  // border: 5px solid #fff;
  // display: block;
  // margin: auto;
  // width:100%;
  height: 600px;
  // object-fit: inherit;
  object-fit: cover;
}
.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 50px;
  height: 50px;
  font-size: 50px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.8;
}
// swiper 箭头
 /deep/ .swiper-button-prev:after, /deep/ .swiper-button-next:after {
    color: black;
  }
  // swiper 分页
  /deep/ .swiper-pagination .swiper-pagination-bullet-active {
   width: 25px;
   height: 8px;
   border-bottom-left-radius: 5px;
   border-bottom-right-radius: 5px;
   border-top-left-radius: 5px;
   border-top-right-radius: 5px;
   background: rgba(0, 0, 0, 0.992);
  }
.banner {
  width: 100%;
  min-width: 1366px;
  height: 670px;
  position: relative;
  overflow: hidden;
  // background-color: pink;
  .content {
    width: 100%;
    height: 100%;
    .main-1 {
      text-align: center;
      overflow: hidden;
      width: 100%;
      min-width: 1366px;
      // background-color:pink;
      // .main1-bigdata {
      //   width: 1366px;
      //   height: 670px;
      //   position: relative;
      //   margin: 0 auto;
      //   background: url('../assets/bigdata.gif') no-repeat;
      //   .main-1bg {
      //     width: 1366px;
      //     height: 670px;
      //     position: absolute;
      //     z-index: 1;
      //     // -webkit-animation: main-1bg-data-v-6ec1cb06 .3s infinite;
      //     // animation: main-1bg-data-v-6ec1cb06 .3s infinite;
      //     background: url(../assets/data-bg.d1a56db.png) no-repeat 100px 0;
      //   }
      // }
      .main1-bigdata {
        position: relative;
        width: 1366px;
        height:670px;
        margin: 0 auto;
        background: url(../assets/img/data-bg.d1a56db.png) no-repeat 100px 0;
        background-size: cover;
        .main-1bg  {
          width: 1366px;
          height: 670px;
          position: absolute;
          background: url('../assets/img/bigdata.gif');
          background-size: cover;

        }
      }

    }
  }
}
.main-service {
  width: 100%;
  &-content {
    padding: 50px  50px 10px;
    text-align: center;
    width: 1366px;
    margin: 0 auto;
  }
}
.main-service-introduce {
  width: 100%;
  background: url('../assets/img/service.webp') no-repeat center;
  &-bgc {
    padding: 100px 50px ;
    width: 1366px;
    margin: 0 auto;
    display: flex;
    justify-content : space-around;
    text-align: center;
    .introduce-content {
      width: 100%;
      .content {
      padding-top: 10px;
      display:inline-block;
      width: 300px;
      height:180px;
      vertical-align: middle;
      img {
        width: 80px;
        height: 80px;
      }
      div {
        padding-bottom: 10px;

      }
      .title {
        opacity: 0.6;
        font-size: 14px;
      }
     }
    }
  }
}
.main-service-idea {
  width: 100%;
  &-content {
  padding: 150px 0;
  display:flex;
  width: 1366px;
  margin: 0 auto;
  justify-content :start;

  &_row1 {
    width: 700px;;
    height: 350px;
  }
  &_row2 {
    width:600px;
    height: 350px;
    img {
      width: 100%;
      height: 100%;
      transition: transform .36s ease,opacity .36s ease
    }
    img:hover{
      transform:scale(1.08);
    }
  }

 }
}
.main-about {
  width: 100%;
  background:rgba(248,248,248,);
  &-content {
    // padding: 50px 110px 50px;
    padding:  50px 0;
    display:flex;
    width: 1366px;
    margin: 0 auto;
    justify-content : space-between;
    &_row1 {
      width: 650px;;
      height: 350px;
      img {
        width: 100%;
        height: 100%;
        transition: transform .36s ease,opacity .36s ease
        // object-fit:cover
      }
      img:hover{
      transform:scale(1.08);
     }
    }
    &_row2 {
      margin-left: 100px;
      width: 700px;
      height: 350px;
    }
  }
}
  .col3-title {
    margin-right: 264px;

  }
//服务案例
.service-case {
  width: 100%;
  &-content {
    padding: 50px 50px 10px;
    text-align: center;
    width: 1366px;
    margin: 0 auto;
  }
}
.main-3 {
  overflow: hidden;
  width: 100%;
  background-color: white;
  // padding-top: 50px;
  .main-box {
    width: 100%;
    height: 100%;
    .main-wrap {
      width: 100%;
      margin: 0 auto;
      // padding-top: 30px;
      background: url(../assets/img/kehuanlibg.fb20135.png) no-repeat;
      background-size: cover;
      .main-bottom {
        position: relative;
        width: 1366px;
        margin: 0 auto ;
        .swiper-container {
          // height: 100%;
          // background-color:yellow;
          //          text-align: center;
          // height: 160px ;
          // line-height: 160px ;
            // background: #364d79;
            // overflow: hidden;
          // margin-left: auto;
          // margin-right: auto;
          // position: relative;
          // overflow: hidden;
          // list-style: none;
          // padding: 0;
          // z-index: 1;
        }
        .swiper {
          overflow: hidden;
          height: 220px;
        }
        .swiper-content {
          padding-left:50px
        }
        .swiper-slide > ul li {
          position: relative;
          display: inline-block;
          width: 204px;
          height: 90px;
          margin: 0 15px 20px 1px;
          vertical-align: top;
          background: url(../assets/img/1.png) no-repeat;
          background-size: 30px;
          background-position: 20px;
          .location {
            font-size: 18px;
            margin: 33px 0 0 56px;
          }
          .describe {
            font-size: 12px;
            -webkit-transform: scale(0.8);
            transform: scale(0.8);
            margin: 0 0 0 27px;
            width: 290px;
          }
        }
      }
    }
  }
}
.case-swiper {
  width: 100%;
  background: url(../assets/img/kehuanlibg.fb20135.png) no-repeat;
  background-size: cover;
  &-content {
    margin: 0 auto;
    width: 1366px;
    padding: 50px;
    .swiper {
      overflow: hidden;
    }
    .swiper-content {
      // padding-left:133px;
      height: 215px;
    }
    .swiper-slide > ul {
      text-align: center;
      li {
        position: relative;
        display: inline-block;
        width: 214px;
        height: 90px;
        // margin: 0 15px 20px 1px;
        vertical-align: top;
        background: url(../assets/img/1.png) no-repeat;
        background-size: 30px;
        background-position: 55px;
       .location {
        font-size: 18px;
        margin: 28px 0 0 53px;
       }
       .describe {
        font-size: 12px;
        // -webkit-transform: scale(0.8);
        transform: scale(0.8);
        margin: 0 0 0 37px;
        // width: 290px;
      }
    }
   }
  }
}
.textBox {
  position: absolute;
  top: 45%;
  left: 300px;
  .title {
    font-size:50px;
    // color: red;
  }
 .more {
  font-size:18px;
  width: 130px;
  height: 35px;
  background: white;
  border-radius: 50px;
  text-align: center;
  padding:5px;
  color: skyblue;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    background-color: rgba(255,255,255,0.5);
    height: 100%;
    width: 3em;
    display: block;
    position: absolute;
    top: 0;
    left: -4.5em;
    transform: skewX(-45deg) translateX(0);
    transition: none;
  }
  &:hover {
    background-color: skyblue;
    color: #fff;
    border-bottom: 4px solid darken(skyblue, 10%);
    &:before {
      transform: skewX(-45deg) translateX(13.5em);
     transition: all 0.5s ease-in-out;
    }
  }
 }
}

</style>
