<template>
  <div class="va-row">
    <div class="flex md12 xs12">
      <vuestic-widget class="no-padding no-v-padding">
        <vuestic-breadcrumbs :breadcrumbs="breadcrumbs" :currentRouteName="currentRouteName"></vuestic-breadcrumbs>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
import { breadcrumbs }     from './Breadcrumbs'
import VuesticWidget       from '../../../vesc/widget/VuesticWidget.vue'
import VuesticBreadcrumbs  from '../../../vesc/breadcrumbs/VuesticBreadcrumbs.vue'

export default {
  name: 'app-breadcrumbs',
  components: { VuesticWidget, VuesticBreadcrumbs },
  data () {
    return {
      breadcrumbs: breadcrumbs,
    }
  },
  computed: {
    currentRouteName () {
      return this.$route.name
    },
  },
}

</script>
