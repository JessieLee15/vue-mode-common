const path = require("path");

module.exports = {
  // 基本路径
  publicPath: './',
  // 输 出文件目录
  outputDir: 'dist',
  assetsDir: 'static',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, "src/style/variable.less")
      ]
    }
  },
}