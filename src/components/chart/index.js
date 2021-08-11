/*
 * @Author: liyoro
 * @since: 2021-08-11 17:28:11
 * @lastTime: 2021-08-11 17:42:58
 */
const modulesFiles = require.context('./options', true, /index.js$/)
let modules = {}
modulesFiles.keys().forEach(item => {
  modules = Object.assign({}, modules, modulesFiles(item).default)
})
export default modules
