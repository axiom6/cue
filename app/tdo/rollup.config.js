
import VueRollup from 'rollup-plugin-vue'

export default
  { input:          'app/tdo/App.vue',
    output: { file: 'pub/tdo/App.js',  format:'esm' },
    plugins: [ VueRollup() ] }

