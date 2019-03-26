<template>
  <span :class="classObj">
    <span :class="iconObj">
      <va-icon type="angle-right" size="12px" margin="0 6px 0 0" v-if="!open"/>
      <va-icon type="angle-down" size="12px" margin="0 4.5px 0 0" v-else/>
    </span>
  </span>
</template>

<script type="module">

  import VaIcon from '../Icon/VaIcon.vue';
  const components = { 'va-icon':VaIcon };
  
export default {
  name: 'VaSidebarGroupToggle',
  components: components,
  props: {
    open: {
      type: Boolean,
      default: false
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  computed: {
    classObj () {
      let { classPrefix, open } = this
      let classes = {}

      classes[classPrefix + '-sidebar-group-item-toggle'] = true
      classes[classPrefix + '-sidebar-group-item-toggle-closed'] = !open

      return classes
    },
    iconObj () {
      let { classPrefix, open } = this
      let classes = {}

      classes[classPrefix + '-sidebar-group-item-toggle-icon'] = true
      classes[classPrefix + '-sidebar-group-item-toggle-icon-closed'] = !open

      return classes
    }
  }
}
</script>
