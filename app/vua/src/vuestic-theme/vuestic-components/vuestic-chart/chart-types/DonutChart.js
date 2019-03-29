import { Doughnut } from '../../../../vue-lib/VueCharts/VueCharts.js'
import { chartMixin } from './chartMixin'

export default {
  extends: Doughnut,
  mixins: [chartMixin],
}
