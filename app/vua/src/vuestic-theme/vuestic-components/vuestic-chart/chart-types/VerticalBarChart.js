import { Bar } from '../../../../vue-lib/VueCharts/VueCharts.js'
import { chartMixin } from './chartMixin'

export default {
  extends: Bar,
  mixins: [chartMixin],
}
