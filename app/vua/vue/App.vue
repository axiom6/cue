<template>
  <div id="app" class="app">
    <router-view/>
  </div>
</template>

<script type="module">
  
//import '../../../node_modules/es6-promise/auto' // Polyfills
//import '../../../node_modules/babel-polyfill/dist/polyfill'
  import '../src/i18n/index'
  
  import Vue    from '../pub/js/lib/vue.esm.browser.js'
  import store  from '../src/store/index'
  import router from '../src/router/index'
  Vue.config.productionTip = false;
  
  let App = {
    

    noop: (to, from, next) => {
      if (to === false && from === false && next === false)
        console.log('App.noop()') },

    startup: () => {

      router.beforeEach((to, from, next) => {
        App.noop(to, from, next)
        store['commit']('setLoading', true)
        next()
      })

      router.afterEach((to, from) => {
        App.noop(to, from, null)
        store['commit']('setLoading', false)
      })

      new Vue({el: '#app', template: '<App/>', router: router, store: store, render: h => h(App)});

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
