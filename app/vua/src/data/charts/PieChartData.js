
import { Store }  from '../../../src/store/Store.js'

let palette = Store.getters.palette

export default {
  labels: ['Africa', 'Asia', 'Europe'],
  datasets: [{
    label: 'Population (millions)',
    backgroundColor: [palette.primary, palette.warning, palette.danger],
    data: [2478, 5267, 734],
  }],
}
