<template>
  <SliderPicker v-model="valueProxy" class="vuestic-slider-picker"/>
</template>

<script>
import VueColor from '../../libs/VueColor/VueColor.js'

export default {
  name: 'vuestic-slider-color-picker',
  components: {
    'SliderPicker': VueColor,
  },
  props: {
    value: {
      default: '',
    },
  },
  computed: {
    valueProxy: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value.hex)
      },
    },
  },
}
</script>

<style>
.vuestic-slider-picker {
  padding: 8px;
}
</style>
