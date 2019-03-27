
import VueRollup  from 'rollup-plugin-vue';
import LessRollup from 'rollup-plugin-less';

export default
  { input:          'app/vua/vue/App.vue',
    output: { file: 'app/vua/pub/js/app/App.js', format:'esm' },
    plugins: [ VueRollup(), LessRollup() ] }

