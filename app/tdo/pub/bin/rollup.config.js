
import VueRollup from 'rollup-plugin-vue'

export default
  { input:          'app/tdo/vue/App.vue',
    output: { file: 'pub/tdo/pub/js/app/App.js',  format:'esm' },
    plugins: [ VueRollup() ] }

