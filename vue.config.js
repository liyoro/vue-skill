const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/dist',
  productionSourceMap: false,
  // 是否使用包含运行时编译器的Vue核心的构建
  runtimeCompiler: true,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
    // 因为是多页面，所以取消 chunks，每个页面只对应一个单独的 JS / CSS
    config.optimization.splitChunks({
      cacheGroups: {}
    })

    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }
    ])

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()
    // =====提取公共代码，防止代码被重复打包，拆分过大的js文件，合并零散的js文件
    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                elementUI: {
                  name: 'chunk-elementUI', // split elementUI into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                },
                commons: {
                  name: 'chunk-commons',
                  test: path.resolve(__dirname, 'src/components'),
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          // https://webpack.js.org/configuration/optimization/#optimizationruntimechunk
          config.optimization.runtimeChunk('single')
        }
      )
    // ===end
  },
  configureWebpack: (config) => {
    config.externals = {
      'AMap': 'AMap',
      'AMapUI': 'AMapUI'
    }
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        // eslint-disable-next-line no-undef
        // new UglifyJsPlugin({
        //   uglifyOptions: {
        //     compress: {
        //       drop_debugger: true,
        //       drop_console: true // 生产环境自动删除console
        //     },
        //     warnings: false
        //   },
        //   sourceMap: false,
        //   parallel: true // 使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
        // })
        new TerserPlugin({
          terserOptions: {
            mangle: true, // 混淆，默认也是开的，mangle也是可以配置很多选项的，具体看后面的链接
            compress: {
              drop_console: true, // 传true就是干掉所有的console.*这些函数的调用.
              drop_debugger: true, // 干掉那些debugger;
              pure_funcs: ['console.log'] // 如果你要干掉特定的函数比如console.info ，又想删掉后保留其参数中的副作用，那用pure_funcs来处理
            }
          },
          sourceMap: false
        })
      )
    }
  }
}
