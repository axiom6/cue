
import VueRollup from 'rollup-plugin-vue'

const dir = 'roll/vue/';

export default [
  { input:          'app/'+dir+'AppBody.vue',
    output: { file: 'pub/'+dir+'AppBody.js',   format:'esm' },
    plugins: [ VueRollup() ] },
  { input:          'app/'+dir+'AppFooter.vue',
    output: { file: 'pub/'+dir+'AppFooter.js', format:'esm' },
    plugins: [ VueRollup() ] },
  { input:          'app/'+dir+'AppHeader.vue',
    output: { file: 'pub/'+dir+'AppHeader.js', format:'esm' },
    plugins: [ VueRollup() ] },
  { input:          'app/'+dir+'App.vue',
    output: { file: 'pub/'+dir+'App.js',       format:'esm' },
    plugins: [ VueRollup() ] }
]

