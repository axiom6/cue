<template>
  <va-dropdown>
    <div slot="trigger">
      <va-button ref="colorpicker" @click.native="toggleColorPicker">
        <div :class="`${classPrefix}-color-picker-button-inner`">
          <div :style="buttonStyleObj"></div>
        </div>
      </va-button>
    </div>
    <va-color-picker-popup
      ref="colorpickerpopup"
      :color="color"
      :show="show"
      @change="onChange"
    />
  </va-dropdown>
</template>

<script>
  
  import VaButton            from '../Button/VaButton.vue';
  import VaDropdown           from '../Dropdown/VaDropdown.vue';
  import VaColorPickerPopup  from '../ColorPicker/VaColorPickerPopup.vue';

  const components = { 'va-button':VaButton, 'va-dropdown':VaDropdown, 'va-color-picker-popup':VaColorPickerPopup };
  
export default {
  name: 'VaColorPicker',
  components: components,
  props: {
    color: {
      type: String,
      default: '#ff6900',
      required: false
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  data () {
    let c = this.color
    return {
      col: c,
      colors: {},
      show: false,
      rgba: '',
      rgb: ''
    }
  },
  methods: {
    toggleColorPicker () {
      this.$refs.colorpickerpopup.doShow()
    },
    onChange (e) {
      this.colors = e
      this.col =
        'rgba(' +
        e.rgba.r +
        ', ' +
        e.rgba.g +
        ', ' +
        e.rgba.b +
        ', ' +
        e.rgba.a +
        ')'
      this.rgba =
        'rgba(' +
        e.rgba.r +
        ', ' +
        e.rgba.g +
        ', ' +
        e.rgba.b +
        ', ' +
        e.rgba.a +
        ')'
      this.rgb = 'rgb(' + e.rgba.r + ', ' + e.rgba.g + ', ' + e.rgba.b + ')'

      this.$emit('change', e)
    }
  },
  computed: {
    buttonStyleObj () {
      let style = {}

      style['width'] = '15px'
      style['height'] = '100%'
      style['border-radius'] = '50%'
      style['box-shadow'] = this.rgb + ' 0px 0px 0px 1px'
      style['background'] = this.rgba

      return style
    },
    classObj () {
      let { classPrefix } = this
      let classes = {}

      classes[classPrefix + '-color-picker'] = true

      return classes
    }
  }
}
</script>

<style lang="scss">
  
  @import "../variables.scss";
.#{$class-prefix}-color-picker-button-inner {
  height: 15px;
  line-height: 1;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);
  border-radius: 50%;
}

.#{$class-prefix}-color-picker-popup {
  margin: 5px 10px;
  overflow: hidden;
}

.#{$class-prefix}-color-picker-upper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.#{$class-prefix}-color-picker-gradient {
  position: relative;
  width: 190px;
  height: 190px;
  border-radius: 3px;
  overflow: hidden;

  &-white {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background: linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0));
  }

  &-black {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background: linear-gradient(0deg, #000, transparent);
  }

  &-cursor {
    position: absolute;
    cursor: default;
    width: 10px;
    height: 10px;
    border: 2px solid #fff;
    border-radius: 50%;
    top: 50px;
    left: 50px;
    box-shadow: rgba(0, 0, 0, 0.2) 0 0 0 1px;
  }
}

.#{$class-prefix}-color-picker-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  box-shadow: inset rgba(223, 225, 229, 0.5) 0 0 0 2px;
}

.#{$class-prefix}-color-picker-hue-track {
  position: relative;
  width: 16px;
  height: 190px;
  border-radius: 3px;
  margin-left: 10px;
  background: linear-gradient(180deg, red, #ff0, #0f0, #0ff, #00f, #f0f, red);
  overflow: hidden;
}

.#{$class-prefix}-color-picker-alpha-cursor,
.#{$class-prefix}-color-picker-hue-cursor {
  position: absolute;
  cursor: default;
  width: 10px;
  height: 10px;
  left: 3px;
  border: 2px solid #fff;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 0 1px;
}

.#{$class-prefix}-color-picker-alpha-track {
  position: relative;
  width: 16px;
  height: 190px;
  border-radius: 3px;
  margin-left: 10px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);
  overflow: hidden;

  &-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
}

.#{$class-prefix}-color-picker-lower {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
}
</style>
