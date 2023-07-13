### rpx-vw-loader
把css文件中的rpx转为vw；使用场景：小程序中的css文件，放到H5移动端；自动计算出vw，适应移动端开发

### 安装
```
npm i rpx-vw-loader -D
```

### webpack配置
- webpack.config.js
```
module.exports = {
  ...
  module: {
    rules: [
      ...
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          // designWidth设计稿的尺寸，默认750：designWidth / 750 * 100 = vw
          use: ['css-loader', 'rpx-vw-loader?designWidth=750'],
        }),
      }
    ]
  },
  ...
}
```

- vue.config.js
```
module.exports = {
  ...
  chainWebpack: (config) => {
    ...
    config.module
      .rule('rpx')
      .test(/\.css$/)
      .use('rpx-vw-loader')
      .loader('rpx-vw-loader')
      .options({
        // designWidth设计稿的尺寸，默认750：designWidth / 750 * 100 = vw
        designWidth: 750
      })
      .end();
  }
}
```