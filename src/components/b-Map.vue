<template>
  <div id="allmap"></div>
</template>
<script>
import { defineComponent, nextTick, onMounted } from 'vue'
export default defineComponent({
  setup () {
    onMounted(() => {
      nextTick(() => {
        initMap()
      })
    })
    const initMap = () => {
      const Bmap = window.BMap
      const map = new Bmap.Map('allmap')
      map.enableContinuousZoom(true) // 启用地图惯性拖拽，
      map.enableScrollWheelZoom(true) // 鼠标缩放
      const point = new Bmap.Point(121.344358, 31.157911)
      // const myIcon = new Bmap.Icon('../static/1.png', new Bmap.Size(43, 55))
      // const marker = new Bmap.Marker(point, { icon: myIcon }) // 创建标注
      const marker = new Bmap.Marker(point) // 创建标注
      // 创建文本标注对象
      const labelopts = {
        position: point, // 指定文本标注所在的地理位置
        offset: new Bmap.Size(0, 0) // 设置文本偏移量
      }
      const label = new Bmap.Label('上海安垚网络科技有限公司', labelopts)
      label.setStyle({
        color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '10px',
        padding: '0 10px',
        fontSize: '14px',
        lineHeight: '20px',
        border: '0',
        transform: 'translateX(-50%)'
      })
      map.centerAndZoom(point, 17) // 设置中心点坐标和地图级别
      map.addOverlay(label)// 坐标标识
      map.addOverlay(marker) // 将标注添加到地图中
      marker.setAnimation((window).BMAP_ANIMATION_BOUNCE) // 点动画
      // const opts = {
      //   width: 200,
      //   // height: 100,
      //   title: 'dddd'
      //   // message: '这里'
      // }
      // const infoWindow = new Bmap.InfoWindow('地址：北京市东城区王府井大街88号乐天银泰百货八层', opts)
      // click=> mouseover
      // marker.addEventListener('click', function () {
      //   map.openInfoWindow(infoWindow, point)
      // })
    }
    return {}
  }
})
</script>

<style  scoped>
  #allmap {
    width: 100%;
    height: 100%;
  }
.dot{
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 50;
}
.dot:hover{
  z-index: 100;
}

/* 内环  */
.dot >.before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  left: 10px;
  top: 40px;
  border: 2px solid #4dbbda;
  border-radius: 100%;
  background-color: #4dbbda;
  z-index: 2;
  animation: color1 1s ease-out;
  animation-iteration-count: infinite;
}
/* 产生动画（向外扩散变大）的圆圈  */
.dot >.after{
  content: '';
  position: absolute;
  width: 40px;
  height: 40px;
  top: 30px;
  left: -1px;
  border: 3px solid #4dbbda;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  z-index: 1;
  opacity: 0;
  animation: color2 1s ease-out;
  animation-iteration-count: infinite;
}
@keyframes color1 {
    0% {
        transform: scale(0.1);
    opacity: 0.5;
    border-color: #1da5ce;
    }
    25% {
        transform: scale(0.5);
    opacity: 0.5;
    border-color: #0b93d6;
    }
    50% {
        transform: scale(1);
    opacity: 0.5;
    border-color: #13b5e5;
    }
    75% {
    transform: scale(1);
    opacity: 0;
    }
    100% {
    transform: scale(1);
    opacity: 0;
    }
}
@keyframes color2 {
    0% {
        transform: scale(0.5);
    opacity: 0;
    }
    25% {
        transform: scale(0.5);
    opacity: 0;
  }
  49% {
        -webkit-transform: scale(0.5);
        opacity: 0;
    }
    50% {
        transform: scale(0.5);
    opacity: 0.5;
    border-color: #4b9ec7;
    }
    75% {
        transform: scale(0.8);
    opacity: 0.5;
    border-color: #4cb5d6;
    }
    100% {
        transform: scale(1);
    opacity: 0.5;
    border-color: #9cddeb;
    }
}

.dot >div{
  z-index: 3;
  top: 0;
  left: 0;
}
</style>
