
import i18n from './vuex-i18n.es.js'
import br   from './br.js' // add translations directly to the application
import en   from './en.js'
import es   from './es.js'

let I18nInit = function (Vue) {
  Vue.use(i18n);
  Vue.i18n.add('br', br);
  Vue.i18n.add('en', en);
  Vue.i18n.add('es', es);
  Vue.i18n.set('en');      // set the start locale to use
  Vue.i18n.fallback('en'); // set fallback for non-translated strings
}

export default I18nInit;
