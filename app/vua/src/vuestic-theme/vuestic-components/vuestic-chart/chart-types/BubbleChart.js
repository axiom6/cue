import { Bubble } from '../../../../vue-lib/VueCharts/VueCharts.js'
import { chartMixin } from './chartMixin'

export default {
  extends: Bubble,
  mixins: [chartMixin],
}
