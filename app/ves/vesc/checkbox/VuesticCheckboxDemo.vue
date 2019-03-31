<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-checkbox v-model="" value="">
        <div slot="label">
         Selected
        </div>
      </vuestic-checkbox>
      <vuestic-checkbox v-model="value" label="Readonly" readonly value=""></vuestic-checkbox>
      <vuestic-checkbox v-model="value" label="Disabled" disabled value=""></vuestic-checkbox>
      <vuestic-checkbox v-model="value" error label="Error" isError value=""></vuestic-checkbox>
      <vuestic-checkbox v-model="value" errorMessages="errorMessages" label="Error-message" value=""></vuestic-checkbox>
      <vuestic-checkbox v-model="value" :errorMessages="errorMessages" :errorCount="2"
        label="Error-message" value=""></vuestic-checkbox>
      <vuestic-checkbox v-model="value" error disabled label="Error + disabled" value=""></vuestic-checkbox>
    </div>
  </div>
</template>

<script>
import VuesticCheckbox from './VuesticCheckbox.vue'

export default {
  components: {
    'vuestic-checkbox':VuesticCheckbox
  },
  data () {
    return {
      value: true,
      errorMessages: ['error message 1', 'error message 2']
    }
  }
}
</script>
