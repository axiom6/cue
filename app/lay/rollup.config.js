
import VueRollup  from 'rollup-plugin-vue'
import LessRollup from 'rollup-plugin-less'

export default
  { input:          'app/lay/App.vue',
    output: { file: 'pub/lay/App.js',  format:'esm' },
    plugins: [ VueRollup(), LessRollup() ] }

