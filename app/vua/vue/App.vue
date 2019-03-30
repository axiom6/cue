<template>
  <div id="app" class="app">
    <router-view/>
  </div>
</template>

<script type="module">
  
  import Vue                  from '../pub/js/lib/vue.esm.browser.js'
  Vue.config.productionTip  = false;
  import Vuex                 from '../pub/js/lib/vuex.esm.js'
  import VeeValidate          from '../src/vue-lib/vee-validate/vee-validate.esm.js'
  Vue.use( Vuex );
  Vue.use( VeeValidate, { fieldsBagName: 'formFields' } );
  import I18nInit             from '../src/i18n/I18nInit.js'
  import { Store }            from '../src/store/Store.js'
  import router               from '../src/router/index'
  
  if( I18nInit === false ) {}
  
  let App = {
    
    startup: () => {

      router.beforeEach( ( to, from, next ) => {  // (to, from, next) are the original args
        if( to === false && from === false ) {}
        Store.commit('setLoading', true);
        next(); } )

      router.afterEach(  () => {   // (to, from) are the original args
        Store.commit('setLoading', false); })

      new Vue({ el:'#app', template:'<App/>', router:router, store:Store, render: h => h(App) });
    }
  };
  
  export default App

</script>

<style lang="scss">
  @import "../src/sass/shared";
  @import "../src/sass/main";
  
  body   { height: 100%;
    #app { height: 100%; } }
  
</style>

//import '../../../node_modules/es6-promise/auto' // Polyfills
//import '../../../node_modules/babel-polyfill/dist/polyfill'
