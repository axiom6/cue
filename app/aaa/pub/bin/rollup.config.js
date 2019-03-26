
import VueRollup  from 'rollup-plugin-vue';
import LessRollup from 'rollup-plugin-less';

export default
  { input:          'app/aaa/vue/App.vue',
    output: { file: 'app/aaa/pub/js/app/App.js', format:'esm' },
    plugins: [ VueRollup(), LessRollup() ] }

