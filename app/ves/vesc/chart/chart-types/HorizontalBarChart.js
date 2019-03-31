import { HorizontalBar } from '../../../../vue-lib/VueCharts/VueCharts.js'
import { chartMixin } from './chartMixin'

export default {
  extends: HorizontalBar,
  mixins: [chartMixin],
}
