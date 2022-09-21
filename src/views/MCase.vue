<template>
  <div>
    <div class="animate__animated animate__slideInDown">
       <img src="../assets/img/bg4.png" alt="" style="width:100%;height:600px">
    </div>
      <!-- 经典案例 -->
     <div class="classic-case">
        <div class="classic-case-content">
          <div class="col1-title">全一体化 </div>
          <div class="col2-title">Integrated</div>
        </div>
     </div>
     <div class="case-introduce">
      <div class="case-introduce-content">
        <div class="introduce-img">
         <img src="../assets/img/case.webp" alt="">
        </div>
      </div>
     </div>
     <div class="case-introduce2">
      <div class="case-introduce2-content" >
        <div>
          <div class="case-introduce2-content_row1">
            <p class="title">丰富的运维经验积累</p>
            <p class="title title2">融合多年优质互联网公司与大型银行云平台建设经验，提供运维脚本库、操作库等运维经验积累满足金融行业日常运维需求</p>
            <br>
            <p class="title">流程及操作可编排</p>
            <p class="title title2">提供高可定制化的流程编排能力和操作定义能力。可基于IDC Store中的脚本库操作库灵活定义/编排各类运维场景，定制复杂的流程</p>
          </div>
        </div>
        <div>
          <div>
           <div class="case-introduce2-content_row2">
            <p class="title">资源一体化管理</p>
            <p class="title title2">通过接口自动发现或人工方式导入资源，在内置CMDB中统一管理。同时可进一步拓展为对两地三中心资源、开发测试生产环境的一体化管理</p>
            <br>
            <p class="title">混合云统一管理</p>
            <p class="title title2">平台可同时兼容纳管裸机设备、VMware、KVM虚拟化软件 、各种OpenStack私有云及阿x云腾X云SAzure等公有云</p>
           </div>
          </div>
        </div>
      </div>
     </div>
    <div class="classic-case">
      <div class="classic-case-content">
        <div class="col1-title">优秀案例</div>
        <div class="col2-title">Excellent Case</div>
      </div>
    </div>
    <div class="excellent-case">
      <div class="excellent-case-content">
        <div class="excellent-img">
          <img src="../assets/img/excellent.webp" alt="">
        </div>
        <div>
          <p class="title1">XXX音运营案例</p>
          <p class="title2">微博、微信、抖音等第三方平台上的政务账号或应用已成为各地区各级行政机关、承担行政职能的事业单位及其内设机构的工作考核标准，各级单位在努力提高政务新媒体建设</p>
        </div>
      </div>
    </div>
    <div class="excellent-case">
      <div class="excellent-case-content">
        <div class="excellent-img">
          <img src="../assets/img/excellent2.webp" alt="">
        </div>
        <div>
          <p class="title1">信息优化排名案例</p>
          <p class="title2">互联网/移动互联网时代靠前要务便是抓住流量入口，只有让用户靠前时间看到你，靠前时间了解你后，客户才会考虑选择你。而带来流量的前提是企业要有一个全方位的内容排名</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: ' Page3'
}
</script>

<style lang="less" scoped>
.classic-case {
  width: 100%;
  &-content {
    padding: 50px 50px 0 50px;
    // text-align: center;
    width: 1366px;
    margin: 0 auto;
  }
}
.case-introduce {
  width: 100%;
  &-content {
    padding: 50px 50px 60px 50px;
    text-align: center;
    width: 1366px;
    margin: 0 auto;
    .introduce-img {
      overflow: hidden;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit:cover;
        // transition: 0.6s
      transition: transform .36s ease,opacity .36s ease
    }
    img:hover{
      transform:scale(1.08);
    }
  }
}
.case-introduce2 {
  width: 100%;
  &-content {
    // padding-bottom: 50px;
    // text-align: center;
    width: 1366px;
    margin: 0 auto;
    div {
      width: 683px;
      height: 303px;
      display: inline-block;
      vertical-align: middle;
      &_row1 {
        width: 100%;
      }
      &_row2 {
        width: 100%;
      }
      .title {
        padding: 30px 0  0 90px;
      }
      .title2 {
        font-size: 14px;
        opacity: 0.8;
      }
    }
  }
}
.excellent-case {
  width: 100%;
  &-content {
    padding-top:50px ;
    width: 1366px;
    margin: 0 auto;
    .excellent-img {
      overflow: hidden;
    }
     div {
      width: 683px;
      height: 372px;
      display: inline-block;
      vertical-align: middle;
      img {
        width: 100%;
        height: 100%;
        transition: transform .36s ease,opacity .36s ease
      }
      img:hover{
      transform:scale(1.08);
      }
      .title1 {
        padding: 90px 0 0 55px
      }
      .title2 {
        padding: 30px 0 0 55px;
        font-size: 14px;
        opacity: .8;
      }
     }
  }
}
</style>
