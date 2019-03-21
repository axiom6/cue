
import VueRollup from 'rollup-plugin-vue'

export default
  { input:          'app/roll/App.vue',
    output: { file: 'pub/roll/App.js',  format:'esm' },
    plugins: [ VueRollup() ] }

