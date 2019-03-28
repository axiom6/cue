
import VueRollup  from 'rollup-plugin-vue';
import ScssRollup from 'rollup-plugin-scss';

export default {
  input:         'app/vua/vue/App.vue',
  output: { file:'app/vua/pub/js/app/App.js', format:'esm' },
  plugins: [ VueRollup(), ScssRollup() ] }

// ScssRollup( { importer(path) { return { file: path.replace(/^~/, '/node_modules/') } } } ) ]
// import SassRollup from 'rollup-plugin-sass';
// ../../../../../../node_modules/