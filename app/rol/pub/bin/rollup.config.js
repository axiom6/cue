
import VueRollup from 'rollup-plugin-vue'

export default
  { input:          'app/rol/vue/App.vue',
    output: { file: 'pub/rol/pub/js/app/App.js',  format:'esm' },
    plugins: [ VueRollup() ] }

