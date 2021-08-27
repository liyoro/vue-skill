
export default {
  name: 'videoCaptureTestView',
  data() {
    return {
      url: 'https://player.alicdn.com/video/editor.mp4',
      captureImg1: ''
    }
  },
  mounted() {},
  created() {
  },
  methods: {
    captureClick() {
      const v = document.querySelector('#video1')
      // v.setAttribute('crossOrigin', 'anonymous')
      // v.crossOrigin = 'anonymous'
      const width = v.videoWidth
      const height = v.videoHeight

      const canvas = window.canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height

      const ctx = canvas.getContext('2d')

      ctx.drawImage(v, 0, 0, width, height)

      ctx.rotate(-16 * Math.PI / 180)
      ctx.font = '100px 宋体'
      ctx.fillStyle = 'rgba(255, 255, 255, 1)'
      ctx.fillText('测试水印', 100, height - 200)

      const image = canvas.toDataURL('image/png')
      this.captureImg1 = image
    },
    initMark(width, height, markValue) {
      const img = document.createElement('img')
      const canvas = window.canvas = document.createElement('canvas')
      const ctx = canvas.getCc('2d')
      ctx.rotate(-16 * Math.PI / 180)
      ctx.font = '100px 宋体'
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.fillText(markValue, width / 2, height / 2)
      const image = canvas.toDataURL('image/png')
      img.src = image
      ctx.clearRect(0, 0, width, height)
    }
  },
  watch: {}
}
