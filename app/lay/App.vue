
<template>
  <div class="app">
    <v-logo id="logo"></v-logo>
    <v-navb id="navb"></v-navb>
    <v-find id="find"></v-find>
    <v-tocs id="tocs"></v-tocs>
    <v-view id="view"></v-view>
    <v-side id="side"></v-side>
    <v-pref id="pref"></v-pref>
    <v-foot id="foot"></v-foot>
    <v-trak id="trak"></v-trak>
  </div>
</template>

<script type="module">
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

<style lang="less">
   // hey
   .app { font-family:Roboto, sans-serif;
     position:absolute; left:0; top:0; right:0; bottom:0;
     display:grid;
     grid-template-columns: 140px 1fr 50px;
     grid-template-rows:     50px 1fr 50px;
     grid-template-areas:
       "logo navb find"
       "tocs view side"
       "pref foot trak";

    #logo { grid-area:logo; justify-self:stretch; align-self:stretch; display:grid; }
    #navb { grid-area:navb; justify-self:stretch; align-self:stretch; display:grid; }
    #find { grid-area:find; justify-self:stretch; align-self:stretch; display:grid; }
    #tocs { grid-area:tocs; justify-self:stretch; align-self:stretch; display:grid; }
    #view { grid-area:view; justify-self:stretch; align-self:stretch; display:grid; }
    #side { grid-area:side; justify-self:stretch; align-self:stretch; display:grid; }
    #pref { grid-area:pref; justify-self:stretch; align-self:stretch; display:grid; }
    #foot { grid-area:foot; justify-self:stretch; align-self:stretch; display:grid; }
    #trak { grid-area:trak; justify-self:stretch; align-self:stretch; display:grid; } }
  
</style>