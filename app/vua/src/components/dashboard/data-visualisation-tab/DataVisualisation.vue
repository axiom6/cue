<template>
  <div class="data-visualisation-tab dashboard-tab">
    <div class="va-row">
      <div class="flex md6 xs12">
        <div class="chart-container">
          <vuestic-chart v-bind:data="donutChartData"
                         type="donut"></vuestic-chart>
        </div>
      </div>
      <div class="flex md6">
        <vuestic-data-table
          :apiMode="apiMode"
          :tableData="tableData"
          :tableFields="tableFields"
          :itemsPerPage="itemsPerPage"
          :onEachSide="onEachSide"
          :sortFunctions="sortFunctions"
          :dataModeFilterableFields="dataModeFilterableFields"
        ></vuestic-data-table>
      </div>
    </div>
  </div>
</template>

<script type="module">

import Vue    from '../../../../pub/js/lib/vue.esm.browser.js'
import BadgeColumn from '../../tables/BadgeColumn.vue'
import TableData from './TableData'
import DonutChartData from './DonutChartData'
import FieldsDef from './fields-definition'
import VuesticDataTable from '../../../vuestic-theme/vuestic-components/vuestic-datatable/VuesticDataTable.vue'
import VuesticChart     from '../../../vuestic-theme/vuestic-components/vuestic-chart/VuesticChart.vue'

Vue.component('badge-column', BadgeColumn)

export default {
  name: 'data-visualisation-tab',
  components:{ VuesticDataTable, VuesticChart },
  data () {
    return {
      donutChartData: DonutChartData,
      apiMode: false,
      sortFunctions: FieldsDef.sortFunctions,
      tableData: TableData,
      onEachSide: 1,
      tableFields: FieldsDef.tableFields,
      dataModeFilterableFields: ['name'],
      itemsPerPage: [
        {
          value: 5,
        },
        {
          value: 6,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.chart-container {
  padding: 0 2rem;
  height: 24rem;
}

</style>
