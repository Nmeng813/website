import { ref, onMounted, onUnmounted } from 'vue'
export function handleScroll () {
  const scrollTopNum = ref('')
  const Scroll = () => {
    // 获取浏览器滚动条位置
    const top =
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      window.pageYOffset
    scrollTopNum.value = top
  }
  onMounted(() => {
    document.addEventListener('scroll', Scroll)
  })
  onUnmounted(() => {
    document.removeEventListener('scroll', Scroll)
  })
  return scrollTopNum
}
