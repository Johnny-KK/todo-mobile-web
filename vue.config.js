const resolve = dir => require('path').join(__dirname, dir);

module.exports = {
  productionSourceMap: false,
  outputDir: 'C:/Users/kk/Documents/dev/H5App/todo-mobile-container/dist',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  css: {
    /** 在旧版本的sass-loader中 使用data替换prependData */
    loaderOptions: { sass: { prependData: `@import "@/styles/var.scss";` } }
  },
  chainWebpack: config => {
    /** icons排除单独处理 */
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end();
    /** 处理icons */
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include.add(resolve('src/icons/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' });
  }
};
