import Vue      from '../../pub/js/lib/vue.esm.browser.js'
import Vuex     from '../../pub/js/lib/vuex.esm.js'
import VuexI18n from '../../pub/js/lib/vuex-i18n.es.js' // load vuex i18n module
import app      from './modules/app'

import * as getters from './getters'

Vuex.process = { env:{ NODE_ENV:'production' } };

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',
  getters,
  modules: {
    app,
  },
  state: {},
  mutations: {},
})

Vue.use(VuexI18n.plugin, store)

export default store
