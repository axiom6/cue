<template>
  <span class="flex-center header-selector i-menu-expanded"
        @click="$emit('update:isOpen', !isOpen)"
  ></span>
</template>

<script>
export default {
  name: 'header-selector',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.header-selector {
  cursor: pointer;
}

</style>
