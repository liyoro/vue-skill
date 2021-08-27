/*
 * @Author: liyoro
 * @since: 2021-08-23 11:11:54
 * @lastTime: 2021-08-23 17:21:02
 */

// BMapGL
// export function BMPGL(ak) {
//   return new Promise(function(resolve, reject) {
//     window.init = function() {
//       resolve(BMapGL)
//     }
//     const script = document.createElement("script")
//     script.type = "text/javascript"
//     script.src = `http://api.map.baidu.com/api?v=1.0&type=webgl&ak=${ak}&callback=init`
//     script.onerror = reject
//     document.head.appendChild(script)
//   })
// }

// const options = {
//   key: '',
//   version: ''
// }

const LoadStatus = {
  notload: 'notload',
  loading: 'loading',
  loaded: 'loaded',
  failed: 'failed'
}

const config = {
  key: '',
  BMapGL: {
    version: '3.0'
  }
}

const Status = {
  BMapGL: LoadStatus.notload
}

const load = function(options) {
  return new Promise((resolve, reject) => {
    if (Status.BMapGL === LoadStatus.failed) {
      reject('')
    } else if (Status.BMapGL === LoadStatus.notload) {
      // 初次加载
      const { key, version } = options
      if (!key) {
        reject('请填写key')
        return
      }
      config.key = key
      config.BMapGL.version = version || config.BMapGL.version
      Status.BMapGL = LoadStatus.loading

      const parentNode = document.body || document.head

      window.___onAPILoaded = function(err) {
        delete window.___onAPILoaded
        if (err) {
          Status.BMapGL = LoadStatus.failed
          reject(err)
        } else {
          Status.BMapGL = LoadStatus.loaded
          resolve(window.BMapGL)
        }
      }
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://api.map.baidu.com/api?v=' + config.BMapGL.version +
        '&type=webgl' +
        '&ak=' + key + '&callback=___onAPILoaded'
      script.onerror = (e) => {
        Status.BMapGL = LoadStatus.failed
        reject(e)
      }
      parentNode.appendChild(script)
    }
  })
}

export default { load }
