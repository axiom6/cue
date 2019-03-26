<template>
  <div>
    <va-tooltip
      v-if="tooltip"
      :content="tooltip"
      placement="right"
      trigger="hover"
      effect="tooltip-fade-right"
      arrow
    >
      <div :class="classObj">
        <slot></slot>
      </div>
    </va-tooltip>
    <div v-else :class="classObj">
      <slot></slot>
    </div>
  </div>
</template>

<script type="module">

import VaTooltip from '../Tooltip/VaTooltip.vue';

const components = { 'va-tooltip':VaTooltip };


export default {
  name: 'VaMinibarItem',
  components: components,
  props: {
    brand: {
      type: Boolean,
      default: false,
      required: false
    },
    tooltip: {
      type: String,
      default: '',
      required: false
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  computed: {
    classObj () {
      let { classPrefix, brand } = this
      let classes = {}

      classes[classPrefix + '-minibar-item'] = true
      classes[classPrefix + '-minibar-item-brand'] = brand

      return classes
    }
  }
}
</script>
