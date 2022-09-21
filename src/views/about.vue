  <template>
 <div >
  <!-- animate__fadeInDown animate__fadeIn -->
  <div class="animate__animated animate__slideInDown">
      <img class="" src="../assets/img/bg5.png"  alt="" style="width:100%;height:600px;  object-fit: cover;">
  </div>
      <!-- <img  v-lazy="require('../assets/img/bg1.png')"  style="width:100%;height:600px;  object-fit: cover;"/> -->
      <!-- 关于我们 -->
    <div class="about-details">
      <div class="about-details-content">
          <div class="col1-title">关于我们</div>
          <div class="col2-title">About Us</div>
          <br>
          <br >
          <div class="col3-title">
            <span>专注品牌事业十余年，是一家兼具国际视野、创新动力、全方位跨平台的品牌咨询与设计整合服务公司，</span>
          </div>
          <div class="col3-title">
            <span>目前已为上百家国内优秀企业及全球500强企业提供了专业有效的品牌传播解决方案。  更善于将创新运用其中；绝妙的创意配以高水平的执行及传播渠道的有效整合，</span>
          </div>
          <div class="col3-title">
            <span>使我们跻身国内优秀品牌顾问公司之列。 同时我们也在为成为国际化优质品牌服务公司做着不懈的努力，为“从中国制造到中国创造”贡献自己的一份力量。</span>
          </div>
      </div>
    </div>
    <!-- <div class="service-details">
      <div class="service-details-content">
          <div class="service-details-content_row1">
              <img src="../assets/img/about4.webp" alt="">
        </div>
        <div class="service-details-content_row2">
            <div class="col1-title">企业文化</div>
            <div class="col2-title">corporate culture</div>
            <div>
              <img src="../assets/img/about3.webp" alt="">
            </div>
            <div class="flex col3-title ">
             公司擅长创意设计、互联网应用与各类业务系统深度整合，以及大型项目的执行与管理，致力于为企业深度定制跨平台、多终端、全链条的互联网解决方案。XXX科技提供PC端网站建设、移动端应用、微信定制开发等一系列互联网应用服务。
            </div>
        </div>
      </div>
    </div> -->
    <!-- 企业文化-->
    <div class="corporate-culture">
      <div class="corporate-culture-content">
          <div class="corporate-culture-content_row1" >
            <img src="../assets/img/about4.webp" alt="">
          </div>
         <div class="corporate-culture-content_row2">
           <div class="title col1-title  ">企业文化</div>
          <div class="title2 col2-title  ">Corporate Culture</div>
          <div class="title col3-title">专注品牌事业十余年，是一家兼具国际视野、创新动力、全方位跨平台的品牌咨询与设计整合服务公司。公司业务涉及大数据、智能多媒体、物联网、云计算等。目前已为上百家国内优秀企业及全球500强企业提供了专业有效的品牌传播解决方案。</div>
          <div class="title col3-title">
            多年来我们始终专注于高水准的品牌整合服务，绝妙的创意配以高水平的执行及传播渠道的有效整合使我们跻身国内品牌顾问公司之列。
          </div>
        </div>
      </div>
    </div>
    <!-- 品牌理念 -->
    <div class="brand-idea">
        <div class="brand-idea-content">
              <div class="col1-title">品牌理念</div>
              <div class="col2-title">Brand Concept</div>
            <br>
            <br>
            <div class="brandImg">
              <img src="../assets/img/brand.webp" alt="">
            </div>
            <div class="col3-title brand-title">
              <span>
                专注品牌事业十余年，是一家兼具国际视野、创新动力、全方位跨平台的品牌咨询与设计整合服务公司。公司业务涉及大数据、智能多媒体、物联网、云计算等。目前已为上百家国内优秀企业及全球500强企业提供了专业有效的品牌传播解决方案。
              </span>
            </div>
        </div>
    </div>
    <!-- 荣誉资质 -->
    <div class="honor-qualification">
      <div class="honor-qualification-content">
        <div class="col1-title">荣誉资质</div>
        <div class="col2-title">Our Honor</div>
        <br>
        <br>
        <div class="home images" id="viewerjs">
          <div class="imageUrl">
              <img alt="Vue logo" src="../assets/img/introduce2.webp"/>
          </div>
          <div class="imageUrl">
            <img alt="Vue logo" src="../assets/img/introduce3.webp"/>
          </div>
          <div class="imageUrl">
            <img alt="Vue logo" src="../assets/img/introduce.webp"/>
          </div>
          <div class="imageUrl">
            <img alt="Vue logo" src="../assets/img/introduce4.webp"/>
          </div>
      </div>
      </div>
    </div>
      <!-- 地址 -->
    <div class="address-datails">
      <div class="address-datails-content">
          <div class="address-datails-content_row1">
            <div class="col1-title">联系我们</div>
            <div class="col2-title">Contact Us</div>
            <br>
            <div class="col4-title">
              <div>
               <phone-outlined />
                <span> xxxxxxx</span>
              </div>
              <div>
                <mail-outlined/>
                <span> xxxxxx</span>
              </div>
              <div>
                <clock-circle-outlined />
               <span> 09：00-18：00 (周一周五)</span>
              </div>
              <div>
                <environment-outlined/>
                <span> 上海市闵行区中春路8633弄20号24幢719室</span>
              </div>
            </div>
          </div>
          <div class="address-datails-content_row2">
               <Bmap></Bmap>
          </div>
      </div>
    </div>
 </div>
</template>
<script>
import { reactive, onMounted, nextTick } from 'vue'
import Bmap from '@/components/b-Map.vue'
import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'
import {
  MailOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  ClockCircleOutlined
} from '@ant-design/icons-vue'
export default {
  name: 'about',
  components: {
    Bmap,
    MailOutlined,
    EnvironmentOutlined,
    PhoneOutlined,
    ClockCircleOutlined
  },
  setup () {
    const eventView = reactive({ event: '' })
    onMounted(() => {
      nextTick(() => {
        eventView.event = new Viewer(document.getElementById('viewerjs'), {
          navbar: true,
          title: false,
          movable: false, // 图片拖拽
          // toolbar: {
          //   zoomIn: 1,
          //   zoomOut: 1,
          //   oneToOne: 1,
          //   reset: 1,
          //   prev: 1,
          //   play: 0, // 全屏展示
          //   next: 1,
          //   rotateLeft: 1,
          //   rotateRight: 1,
          //   flipHorizontal: 1,
          //   flipVertical: 1
          // },
          show: function () {
            eventView.event.update()
          }
        })
      })
    })
  }
}
</script>
<style scoped lang="less" >
 .col4-title {
  line-height: 60px;
  font-size: 14px;
  opacity: 0.8;
  color: rgba(119,119,119,1);
}

.about-details {
  width: 100%;
  background-color: #F9FBFF;
  &-content {
    padding: 100px 50px 140px;
    text-align: center;
    width: 1366px;
    margin: 0 auto;
  }
}
.service-details {
  width: 100%;
  &-content {
    // padding: 50px 50px 0 50px;
    // text-align: center;
    width: 1366px;
    margin: 0 auto;
    &_row1 {
      width: 510px;
      height: 550px;
      display: inline-block;
      img {
      // vertical-align: middle;
        // width:100%;
        // height:100%
      }
    }
    &_row2 {
      width: 853px;
      display: inline-block;
      height: 550px;
      vertical-align: top;
      // padding: 150px 0 0px 200px;
      .flex {
          margin-top: 42px;
      }
      img {
        padding-top:60px;
        // width: 100%;
        // height:100%;
        // object-fit: cover
      }
    }
  }
}
// 企业文化
.corporate-culture {
  width: 100%;
  &-content {
    width: 1366px;
    margin: 0 auto;
    padding: 100px 0;

    &_row1 {
      width:510px;
      height:553px;
      display: inline-block;
      vertical-align: middle;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        // transition: 0.6s
        transition: transform .36s ease,opacity .36s ease
      }
      img:hover{
        transform:scale(1.08);
      }
    }
    &_row2 {
      display: inline-block;
      width:820px;
      height:553px;
      vertical-align: middle;
      .title {
        padding: 30px 0 0 60px;
      }
      .title2 {
        padding-left: 60px;
      }
    }
  }
}
.brand-idea {
  width: 100%;
  &-content {
    padding: 0px 50px 60px ;
    text-align: center;
    width: 1366px;
    margin: 0 auto;
    .brandImg {
     overflow: hidden;
    }
    img {
      width: 100%;
      height: 100%;
      transition: 0.6s
      // transition: transform .36s ease,opacity .36s ease
    }
    img:hover{
      transform:scale(1.05);
    }
    .brand-title {
      margin-left: 100px;
    }
  }
}
//荣誉
.honor-qualification {
  width: 100%;
  &-content {
    padding: 0px 0 60px ;
    text-align: center;
    width: 1366px;
    margin: 0 auto;
    .images {
      // width: 341px;
      .imageUrl {
        width: 311px;
        height:200px;
        display: inline-block;
        vertical-align: middle;
        overflow: hidden;
        padding: 10px;
        background-color: #f5f6f7;
        margin: 10px;
        cursor: pointer;
      }
      img {
        // background-color: pink;
        // width: 300px;
        height:100%
      }
    }
  }
}
// 地址
.address-datails {
  width: 100%;
  &-content {
    padding: 50px 0;
    width: 1366px;
    margin: 0 auto;
    display:flex;
    justify-content : space-between;
   &_row1 {
    width: 450px;
    height: 412px;
    // background:blue
   }
   &_row2 {
    width: 916px;
    height: 412px;
   }
  }
}
</style>
