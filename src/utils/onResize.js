/**
 * @desc 自适应宽度
 * @param {number} designWidth 设计稿宽带 默认 1920
 * @param {number} maxWidth 最大宽度，缩大到一定程度不在缩大 默认 无限制
 * @param {number} minWidth 最小宽度，缩小到一定程度不在缩小 默认 1366
 * @param {number} base 基准值 默认 100(100px === 1rem)
 */
(({ designWidth = 1920, maxWidth = 2 ** 64, minWidth = 1366, base = 100 }) => {
  autoComputed()
  window.addEventListener('resize', autoComputed)
  function autoComputed () {
    const html = document.documentElement || document.body
    const limitMax = maxWidth / designWidth
    const limitMin = minWidth / designWidth
    const scale = document.body.offsetWidth / designWidth

    html.style.fontSize =
      (
        (scale < limitMin ? limitMin : scale > limitMax ? limitMax : scale) *
        base
      ).toFixed(2) + 'px'
  }
})({ minWidth: 1600 })
