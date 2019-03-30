
import Vue            from '../../pub/js/lib/vue.esm.browser.js'
//port Vuex           from '../../pub/js/lib/vuex.esm.js'
import VuexI18nPlugin from './vuex-i18n.es.js'
import { Store }      from '../../src/store/Store.js'
import br             from './br.js' // add translations directly to the application
import en             from './en.js'
import es             from './es.js'

VuexI18nPlugin.install( Vue, Store );
Vue.i18n.add('br', br);
Vue.i18n.add('en', en);
Vue.i18n.add('es', es);
Vue.i18n.set('en');      // set the start locale to use
Vue.i18n.fallback('en'); // set fallback for non-translated strings

let I18nInit = { hi:"Hi"};
export default I18nInit;
