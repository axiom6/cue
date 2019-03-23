
<template>
  <div class="rout">
    <ul>
      <li><router-link class="router-link" to="/logo">Find</router-link></li>
      <li><router-link class="router-link" to="/navb">Side</router-link></li>
      <li><router-link class="router-link" to="/find">Trak</router-link></li>
      <li><router-link class="router-link" to="/tocs">Find</router-link></li>
      <li><router-link class="router-link" to="/view">Side</router-link></li>
      <li><router-link class="router-link" to="/side">Trak</router-link></li>
      <li><router-link class="router-link" to="/pref">Find</router-link></li>
      <li><router-link class="router-link" to="/foot">Side</router-link></li>
      <li><router-link class="router-link" to="/trak">Trak</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script type="module">

//import Vue       from '../js/lib/vue/vue.esm.browser.js';
//import VueRouter from '../js/lib/vue/vue-router.esm.browser..js'; // vue-router.esm.js throws
//Vue.use(VueRouter);                                               // ReferenceError: process is not defined
//Vue['config'].productionTip = false;                              // so VueRouter comes from <sript> tak

  import Logo from './Logo.vue';
  import Navb from './Navb.vue';
  import Find from './Find.vue';
  import Tocs from './Tocs.vue';
  import View from './View.vue';
  import Side from './Side.vue';
  import Pref from './Pref.vue';
  import Foot from './Foot.vue';
  import Trak from './Trak.vue';
  
  const routes = [
    { path: '/logo', name:'r-logo', component:Logo },
    { path: '/navb', name:'r-navb', component:Navb },
    { path: '/find', name:'r-find', component:Find },
    { path: '/tocs', name:'r-tocs', component:Tocs },
    { path: '/view', name:'r-view', component:View },
    { path: '/side', name:'r-side', component:Side },
    { path: '/pref', name:'r-pref', component:Pref },
    { path: '/foot', name:'r-foot', component:Foot },
    { path: '/trak', name:'r-trak', component:Trak } ];

  /* const components = {
      'r-logo':Logo, 'r-navb':Navb, 'r-find':Find,
      'r-tocs':Tocs, 'r-view':View, 'r-side':Side,
      'r-pref':Pref, 'r-foot':Foot, 'r-trak':Trak };
      components: components */

  let Rout = new VueRouter( {
    routes:     routes } );
  
  export default Rout;
  
</script>

<style lang="less">
  .rout { background-color:darkgrey;
    ul          { list-style: none; padding:0; margin:0; }
    ul li       { background-color:black; color:white; margin:0; border:white solid 1px; padding-left:0.25em; }
    ul li:hover { background-color:white; color:black; margin:0; border:white solid 1px; } }
  .router-link  { background-color:magenta; }
  .router-view  { background-color:blue;    }
</style>
