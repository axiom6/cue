const path = require('path');

module.exports = {
  lintOnSave:      false,
  outputDir:       'dist',
  assetsDir        'assets',
  indexPath:       'index.html',        // output as dist/index.html
  filenameHashing: false,
  pages: {
    index: {
      entry:    'src/main.js',       // entry for the page
      template: 'public/index.html', // the source html template// output as dist/index.html
      filename: 'index.html',        // output as dist/index.html
      title:    'Vuestic Admin',     // <title><%= htmlWebpackPlugin.options.title %></title>
      chunks:  ['chunk-vendors', 'chunk-common', 'index'] // default includes common chunks and vendor chunks.
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve('src'),
        'src': path.resolve('src'),
        'assets': path.resolve('src/assets'),
        'components': path.resolve('src/components'),
        'services': path.resolve('src/services'),
        'directives': path.resolve('src/directives'),
        'vuestic-mixins': path.resolve('src/vuestic-theme/vuestic-mixins'),
        'vuestic-components': path.resolve('src/vuestic-theme/vuestic-components'),
        'vuestic-directives': path.resolve('src/vuestic-theme/vuestic-directives'),
        'vuestic-theme': path.resolve('src/vuestic-theme'),
        'data': path.resolve('src/data'),
        'vuex-store': path.resolve('src/store') } } },
  css: {
    loaderOptions: {
      sass: { data: `@import "@/css/sass/variables.scss";` }, // ~ ??? @/ is an alias to src/
      less: { data: `@import "@/css/less/variables.less";` } } }
  };
