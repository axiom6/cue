<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-simple-select
        :options="chartTypes"
        v-model="chartType" value=""
      ></vuestic-simple-select>
      <button @click="refreshData()">Refresh data</button>

      <vuestic-chart :data="chartData" :type="chartType"/>
    </div>
  </div>
</template>

<script>
import VuesticChart from './VuesticChart.vue'
import VuesticSimpleSelect from '../simple-select/VuesticSimpleSelect.vue'
import { chartTypes } from './VuesticChartConfigs'
import { getLineChartData } from '../../data/charts/LineChartData.js'

export default {
  data () {
    return {
      chartData: getLineChartData(),
      chartType: 'pie',
    }
  },
  components: {
    VuesticSimpleSelect,
    VuesticChart,
  },
  computed: {
    chartTypes: () => chartTypes,
  },
  methods: {
    refreshData () {
      this.chartData = getLineChartData()
    },
  },
}
</script>
