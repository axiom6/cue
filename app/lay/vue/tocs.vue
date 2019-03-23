
<template>
  <div class="tocs">
    <ul>
      <li @click="doSelect('Collaborate')">Collaborate</li>
      <li @click="doSelect('Domain')"    >Domain</li>
      <li @click="doSelect('Discover')"  >Discover</li>
      <li @click="doSelect('Adapt')"     >Adapt</li>
      <li @click="doSelect('Technology')">Technology</li>
      <li @click="doSelect('Benefit')"   >Benefit</li>
      <li @click="doSelect('Change')"    >Change</li>
      <li @click="doSelect('Deliver')"   >Deliver</li>
      <li @click="doSelect('Govern')"    >Govern</li>
      <li @click="doSelect('View')"      >View</li>
    </ul>
    <ul>
      <li><router-link class="router-link" to="/find">Find</router-link></li>
      <li><router-link class="router-link" to="/side">Side</router-link></li>
      <li><router-link class="router-link" to="/trac">Trak</router-link></li>
    </ul>
  </div>
</template>

<script type="module">
  // import VueRouter from '../js/lib/vue/vue-router.esm.js';
  // Need vue-router.esm.browser.js build just like Vue.
  // Using vue-router.js in <script> tag
     import Find from './find.vue'
     import Side from './side.vue'
     import Trak from './trak.vue'
     const routes = [
        { path: '/find', component: Find },
        { path: '/side', component: Side },
        { path: '/trak', component: Trak } ];
     const router = new VueRouter( { routes:routes } );
   export default {
    router:router,
    methods: {
      doSelect: function (select) {
        console.log( 'tocs.vue', select );
        this.publish("Select", select ); }
    },
  }
</script>

<style lang="less">
  .tocs             { background-color:darkgrey;  }
  .tocs ul          { margin:0; padding:0; list-style: none; }
  .tocs ul li       { margin:0; background-color:black; color:white; border:white solid 1px; padding-left:0.25em; }
  .tocs ul li:hover { margin:0; background-color:white; color:black; border:white solid 1px; }
  
  .router-link      { background-color:magenta; }
</style>
