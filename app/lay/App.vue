
<template>
  <div class="app">
    <v-logo></v-logo>
    <v-navb></v-navb>
    <v-find></v-find>
    <v-tocs></v-tocs>
    <v-view></v-view>
    <v-side></v-side>
    <v-pref></v-pref>
    <v-foot></v-foot>
    <v-trak></v-trak>
  </div>
</template>

<script type="module">
//import Vue  from 'vue'
  import logo from './vue/logo.vue'
  import navb from './vue/navb.vue'
  import find from './vue/find.vue'
  import tocs from './vue/tocs.vue'
  import view from './vue/view.vue'
  import side from './vue/side.vue'
  import pref from './vue/pref.vue'
  import foot from './vue/foot.vue'
  import trak from './vue/trak.vue'

  export default {
      name: 'app',
      components: {
        'v-logo': logo, 'v-navb': navb, 'v-find': find,
        'v-tocs': tocs, 'v-view': view, 'v-side': side,
        'v-pref': pref, 'v-foot': foot, 'v-trak': trak } }
</script>

<style>
   .app { font-family:Roboto, sans-serif; }
</style>