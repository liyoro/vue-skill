/*
 * @Author: liyoro
 * @since: 2021-08-23 11:11:54
 * @lastTime: 2022-06-15 10:15:31
 */

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
  BMap: {
    version: '3.0'
  }
}

const Status = {
  BMap: LoadStatus.notload
}

const load = function(options) {
  return new Promise((resolve, reject) => {
    if (Status.BMap === LoadStatus.failed) {
      reject('')
    } else if (Status.BMap === LoadStatus.notload) {
      // 初次加载
      const { key, version, type } = options
      if (!key) {
        reject('请填写key')
        return
      }
      if (!type) {
        config.type = config.BMap.type
      }
      config.key = key
      config.BMap.version = version || config.BMap.version
      Status.BMap = LoadStatus.loading

      const parentNode = document.body || document.head

      window.___onAPILoaded = function(err) {
        delete window.___onAPILoaded
        if (err) {
          Status.BMap = LoadStatus.failed
          reject(err)
        } else {
          Status.BMap = LoadStatus.loaded
          resolve(window.BMap)
        }
      }
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://api.map.baidu.com/api?v=' + config.BMap.version +
        '&ak=' + key + '&callback=___onAPILoaded'
      script.onerror = (e) => {
        Status.BMap = LoadStatus.failed
        reject(e)
      }
      parentNode.appendChild(script)
    }
  })
}

export default { load }
