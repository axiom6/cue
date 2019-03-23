
<template>
  <div class="app">
    <v-logo id="logo"></v-logo>
    <v-navb id="navb"></v-navb>
    <v-find id="find"></v-find>
    <v-tocs id="tocs"></v-tocs>
 <!--v-rout id="rout"></v-rout-->
    <v-view id="view"></v-view>
    <v-side id="side"></v-side>
    <v-pref id="pref"></v-pref>
    <v-foot id="foot"></v-foot>
    <v-trak id="trak"></v-trak>
  </div>
</template>

<script type="module">
  import Logo from './vue/Logo.vue';
  import Navb from './vue/Navb.vue';
  import Find from './vue/Find.vue';
  import Tocs from './vue/Tocs.vue';
//import Rout from './vue/Rout.vue';
  import View from './vue/View.vue';
  import Side from './vue/Side.vue';
  import Pref from './vue/Pref.vue';
  import Foot from './vue/Foot.vue';
  import Trak from './vue/Trak.vue';

  let App = {
      name: 'app',
      components: {
        'v-logo': Logo, 'v-navb': Navb, 'v-find': Find,
        'v-tocs': Tocs, 'v-view': View, 'v-side': Side, // 'v-rout': Rout,
        'v-pref': Pref, 'v-foot': Foot, 'v-trak': Trak } };
  
//App.Rout = Rout;
  
  export default App;
  
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
    #tocs { grid-area:tocs; justify-self:stretch; align-self:start;   display:grid; background-color:gray;  }
    #rout { grid-area:tocs; justify-self:stretch; align-self:center;  display:grid; background-color:white; }
    #view { grid-area:view; justify-self:stretch; align-self:stretch; display:grid; }
    #side { grid-area:side; justify-self:stretch; align-self:stretch; display:grid; }
    #pref { grid-area:pref; justify-self:stretch; align-self:stretch; display:grid; }
    #foot { grid-area:foot; justify-self:stretch; align-self:stretch; display:grid; }
    #trak { grid-area:trak; justify-self:stretch; align-self:stretch; display:grid; } }
  
</style>