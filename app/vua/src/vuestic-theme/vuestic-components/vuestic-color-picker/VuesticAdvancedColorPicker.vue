<template>
  <ChromePicker v-model="valueProxy" class="vuestic-advanced-picker"/>
</template>

<script>
import VueColor from '../../../vue-lib/VueColor/VueColor.js'

export default {
  name: 'vuestic-advanced-color-picker',
  components: {
    ChromePicker: VueColor.Chrome,
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

<style lang="scss">
.vuestic-advanced-picker {
  .vc-chrome-alpha-wrap {
    display: none;
  }
  .vc-chrome-hue-wrap {
    margin-top: 10px;
  }
  .vc-chrome-toggle-btn {
    display: none;
  }
}
</style>
