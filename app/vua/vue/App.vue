<template>
  <div id="app" class="app">
    <router-view/>
  </div>
</template>

<script type="module">

  import 'es6-promise/auto' // Polyfills
  import 'babel-polyfill'
  import '../src/i18n'

  // The Vue build version to load with the `import` command
  // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
  import Vue    from 'vue'
  import store  from '../src/store'
  import router from '../src/router'
  
  
  let noop = ( to, from, next ) => {
    if( args === false && to === false && next === false )
      console.log( args )
  }

  router.beforeEach((to, from, next) => {
    noop( to, from, next )
    store['commit']('setLoading', true)
    next()
  })

  router.afterEach((to, from) => {
    noop( to, from, null )
    store['commit']('setLoading', false)
  })

  let App = new Vue( {el: '#app', router:router, store:store, render: h => h(App) } );
  
  export default App

</script>

<style lang="scss">
  @import "../src/sass/main";
  
  body   { height: 100%;
    #app { height: 100%; } }
  
</style>
