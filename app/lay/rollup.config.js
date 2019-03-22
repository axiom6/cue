
import VueRollup from 'rollup-plugin-vue'

export default
  { input:          'app/lay/App.vue',
    output: { file: 'pub/lay/App.js',  format:'esm' },
    plugins: [ VueRollup() ] }

