
import VueRollup  from 'rollup-plugin-vue'
import LessRollup from 'rollup-plugin-less'

export default
  { input:          'app/lay/vue/App.vue',
    output: { file: 'app/lay/js/app/App.js', format:'esm' },
    plugins: [ VueRollup(), LessRollup() ] }

