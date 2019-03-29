import { Line } from '../../../../vue-lib/VueCharts/VueCharts.js'
import { chartMixin } from './chartMixin'

export default {
  extends: Line,
  mixins: [chartMixin],
}
