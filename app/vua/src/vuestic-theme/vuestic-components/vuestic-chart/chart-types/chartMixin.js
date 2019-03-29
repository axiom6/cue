import { reactiveProp, reactiveData } from '../../../../vue-lib/VueCharts/mixins/index.js'
import { defaultConfig } from '../VuesticChartConfigs'

export const chartMixin = {
  reactiveProp:reactiveProp,
  reactiveData:reactiveData,
  props: ['data', 'chartOptions'],
  chartOptions: {},
  mounted () {
    this.refresh()
  },
  methods: {
    refresh () {
      this.renderChart(this.chartData, this.options)
    },
  },
  computed: {
    // `this.options` is used by vue-chartjs mixin on refresh.
    options () {
      return Object.assign({}, defaultConfig, this.chartOptions )
    },
  },
}
