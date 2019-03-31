<template>
  <vuestic-layout v-layout>
    <app-navbar :isOpen="opened" @toggle-menu="toggleSidebar"/>
    <app-sidebar :isOpen="opened" @toggle-menu="toggleSidebar"/>
    <main
      slot="content"
      id="content"
      class="content va-layout gutter--lg fluid"
      role="main"
    >
      <app-breadcrumbs/>
      <vuestic-pre-loader
        v-show="isLoading"
        class="pre-loader"></vuestic-pre-loader>
      <router-view/>
    </main>
    <span slot="footer">
      ©2018. Made by&nbsp;<a href="https://epicmax.co" target="_blank"> Epicmax</a>
    </span>
  </vuestic-layout>
</template>

<script>
import VuesticLayout from '../../vesc/layout/VuesticLayout.vue';
import AppNavbar from './app-navbar/AppNavbar.vue';
import AppSidebar from './app-sidebar/AppSidebar.vue';
import AppBreadcrumbs from './app-breadcrumbs/AppBreadcrumbs.vue';
import VuesticPreLoader from '../../vesc/preloader/VuesticPreLoader.vue';
import Layout from '../../vesc/directives/Layout.js';
import { mapGetters } from '../../libs/vue/vuex.esm.js';

export default {
  name: 'app-layout',
  components: {
    'vuestic-layout':VuesticLayout,
    'app-navbar':AppNavbar,
    'app-sidebar':AppSidebar,
    'app-breadcrumbs':AppBreadcrumbs,
    'vuestic-pre-loader':VuesticPreLoader
  },
  directives: {
    layout: Layout,
  },
  data () {
    return {
      opened: true,
    }
  },
  methods: {
    toggleSidebar (opened) {
      this.opened = opened
    },
  },
  computed: {
    ...mapGetters([
      'isLoading',
    ]),
  },
}
</script>
