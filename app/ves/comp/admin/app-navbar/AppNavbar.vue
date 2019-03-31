<template>
  <vuestic-navbar>
    <header-selector slot="selector" :isOpen.sync="valueProxy"/>
    <span slot="logo">
      <vuestic-icon-vuestic></vuestic-icon-vuestic>
    </span>
    <span slot="center">
      {{$t('navbar.messageUs')}}&nbsp;<a href="mailto:hello@epicmax.co">hello@epicmax.co</a>
    </span>

    <message-dropdown class="col nav-item"></message-dropdown>
    <notification-dropdown class="col nav-item"></notification-dropdown>
    <language-dropdown class="col nav-item"></language-dropdown>
    <profile-dropdown class="col nav-item">
        <img src="https://i.imgur.com/nfa5itq.png" alt="nfa"/>
    </profile-dropdown>
  </vuestic-navbar>

</template>

<script>
import VuesticIconVuestic
  from '../../../vesc/icon/VuesticIconVuestic.vue'
import VuesticNavbar
  from '../../../vesc/navbar/VuesticNavbar.vue'
import HeaderSelector from './components/HeaderSelector.vue'

import LanguageDropdown from './components/dropdowns/LanguageDropdown.vue'
import ProfileDropdown from './components/dropdowns/ProfileDropdown.vue'
import NotificationDropdown from './components/dropdowns/NotificationDropdown.vue'
import MessageDropdown from './components/dropdowns/MessageDropdown.vue'

export default {
  name: 'app-navbar',

  components: {
    VuesticIconVuestic,
    VuesticNavbar,
    HeaderSelector,
    MessageDropdown,
    NotificationDropdown,
    LanguageDropdown,
    ProfileDropdown,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    valueProxy: {
      get () {
        return this.isOpen
      },
      set (opened) {
        this.$emit('toggle-menu', opened)
      },
    },
  },
}
</script>
