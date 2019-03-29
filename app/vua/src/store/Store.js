
//port Vue          from '../../pub/js/lib/vue.esm.browser.js'
import Vuex         from '../../pub/js/lib/vuex.esm.js'
import app          from './modules/app'
import * as getters from './getters'

Vuex.process = { env:{ NODE_ENV:'production' } };

let Store  = new Vuex.Store( { strict:true, getters, modules:{app}, state:{}, mutations:{} } );
Store.Vuex = Vuex;



export default Store
