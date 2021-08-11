/**
 * 调用：const defaultSettings = require('./src/settings.js');
 *
 * import defaultSettings from '@/settings'
   const { publicPath } = defaultSettings
 */
module.exports = {
  title: 'Vue Skill',
  /**
   * 这里方便代码里面使用而已，注意要和vue.config.js里面的同步修改
   */
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/dist',

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: false
}
