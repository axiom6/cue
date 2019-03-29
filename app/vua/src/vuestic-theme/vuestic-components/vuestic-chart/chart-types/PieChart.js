import { Pie } from  '../../../../vue-lib/VueCharts/VueCharts.js'
import { chartMixin } from './chartMixin'

export default {
  extends: Pie,
  mixins: [chartMixin],
}
