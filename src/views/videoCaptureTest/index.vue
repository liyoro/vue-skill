<template>
  <div class="videoCaptureTestView">
    <h2>video视频截图+水印</h2>
    <el-button type="primary" size="small" @click="captureClick">截图</el-button>
    <div>
      <!-- autoplay -->
      <video id="video1" crossOrigin="Anonymous" class="image" width="520" height="320" style="object-fit: fill;">
        <source :src="url" type="video/mp4">
        您的浏览器不支持 video 标签。
      </video>
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <img class="capture-img" :src="captureImg1" />
    </div>
  </div>
</template>

<script>
import indexjs from './index.js'
export default {
  ...indexjs
}
</script>

<style lang='scss' scoped>
@import './index.scss'
</style>
