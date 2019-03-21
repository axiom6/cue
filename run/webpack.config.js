const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path            = require('path');
const resolve = relativePath => path.resolve( __dirname, '..', relativePath );

module.exports = {
  //mode: 'development',
  entry: {
    vue:   resolve('pub/js/lib/vue/vue.js' ), // Since we need to load vue in the entry page.
    roll:  resolve('roll/js/roll.js')  // This is where the `main-content` component is
  },
  output: {
    filename: '[name].js',  // Folder where the output of webpack's result go.
    path: resolve('pub/js/roll')
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader'   }, // .vue
   // { test: /\.js$/,  loader: 'babel-loader' }, // .js and <script>
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] } // .css and <style>
    ]
  },
  plugins: [ new VueLoaderPlugin() ], // make sure to include the plugin for the magic
  resolve: {
    alias: { 'vue$': 'pub/js/lib/vue/vue.esm.browser.js' },
    extensions: ['*', '.vue', '.js', '.json']
  },
  performance: { hints: false } // webpack outputs performance related stuff in the browser.
};