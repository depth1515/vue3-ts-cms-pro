const { resolve } = require('path')

module.exports = {
  // 1. 配置方式1： CLI提供的属性
  outputDir: './build',
  publicPath: './',
  // 2. 配置方式2：和Webpack属性完全一致，最后会进行合并
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       // 默认 @: src
  //       components: '@/components'
  //     }
  //   }
  // }
  // 配置方式2:
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   },
  //   config.module.rules = [
  //     {
  //       test: /\.mjs$/,
  //       include: /node_modules/,
  //       type: 'javascript/auto'
  //     }
  //   ]
  // }

  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto'
        }
      ]
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        components: '@/components'
      }
    }
  },
  // 配置方式3：
  // chainWebpack
  devServer: {
    proxy: {
      '^/api': {
        // http://152.136.185.210:5000
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
