import EasyPlayer from '@easydarwin/easyplayer'

export default {
  name: 'videoCaptureTestView',
  components: { EasyPlayer },
  data() {
    return {
      url: 'https://player.alicdn.com/video/editor.mp4',
      captureImg1: '',
      captureImg2: '',
      player2: ''
    }
  },
  mounted() {
    this.player2 = this.$refs['video2'].player.el_.children[0]
    this.player2.setAttribute('crossOrigin', 'Anonymous')
  },
  created() {
  },
  methods: {
    // 普通视频截图+水印
    captureClick() {
      const v = document.querySelector('#video1')
      // v.setAttribute('crossOrigin', 'anonymous')
      // v.crossOrigin = 'anonymous'
      const width = v.videoWidth
      const height = v.videoHeight
      // console.log(222, v, width, height)

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
    // Easyplayer视频截图+水印
    captureClick2() {
      const width = this.player2.videoWidth
      const height = this.player2.videoHeight

      const canvas = window.canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height

      const ctx = canvas.getContext('2d')

      ctx.drawImage(this.player2, 0, 0, width, height)

      ctx.rotate(-16 * Math.PI / 180)
      ctx.font = '100px 宋体'
      ctx.fillStyle = 'rgba(255, 255, 255, 1)'
      ctx.fillText('测试水印', 100, height - 200)

      const image = canvas.toDataURL('image/png')
      this.captureImg2 = image
    }
  },
  watch: {}
}
