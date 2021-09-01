<template>
  <div class="videoCaptureTestView">
    <h2>video视频截图+水印</h2>
    <el-button type="primary" size="small" @click="captureClick">普通视频截图+水印</el-button>
    <div>
      <video id="video1" controls crossOrigin="Anonymous" class="video-view" style="object-fit: fill;">
        <source :src="url" type="video/mp4">
        您的浏览器不支持 video 标签。
      </video>
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <img class="capture-img" :src="captureImg1" />
    </div>
    <h2>Easyplayer视频截图+水印</h2>
    <el-button type="primary" size="small" @click="captureClick2">Easyplayer视频截图+水印</el-button>
    <div>
      <EasyPlayer
        ref="video2"
        class="video-view"
        :video-url="url"
        :stretch="true"
        live
        autoplay
        fluent />
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <img class="capture-img" :src="captureImg2" />
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
