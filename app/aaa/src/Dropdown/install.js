import VaDropdown from './VaDropdown.vue'
import position from '../relocate' // position

export default Vue => {
  Vue.component(VaDropdown.name, VaDropdown)
  Vue.directive('VaPosition', position)
}
