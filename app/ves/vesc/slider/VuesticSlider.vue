<template>
  <slider
    v-bind="sliderOptions"
    :value="value"
    @input="change"
    :bg-style="sliderOptions.bgStyle"
    :slider-style="sliderOptions.sliderStyle"
    class="vuestic-slider"
    :reverse="reverse"
  ></slider>
</template>

<script>
import   Slider   from '../../libs/VueSlider/VueSliderComponent.vue'
import { Store  } from '../../vuex/store/Store.js'

export default {
  name: 'vuestic-slider',

  components: {
    Slider,
  },

  props: {
    value: {
      type: Number,
      required: true,
    },

    options: {
      type: Object,
    },

    reverse: {
      type: Boolean,
      default: false,
    },
  },

  data: function () {
    return {
      defaultOptions: {
        dotSize: 16,
        height: 2,
        realTime: true,
        sliderStyle: {
          'background-color': Store.getters.palette.primary,
          'box-shadow': 'none'
        },
        processStyle: {
          'background-color': Store.getters.palette.primary
        },
        tooltipStyle: {
          'background-color': Store.getters.palette.primary,
          'border-color':     Store.getters.palette.primary
        },
      },
    }
  },

  computed: {
    sliderOptions () {
      return Object.assign({}, this.defaultOptions, this.options)
    },
  },

  methods: {
    change (value) {
      this.$emit('input', value)
    },
  },
}
</script>

<style>
</style>
