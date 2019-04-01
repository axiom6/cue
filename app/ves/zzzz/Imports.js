


import router           from '../apps/Router.js'
import VuesticAlert     from '../vesc/alert/VuesticAlert.vue'
import VuesticCardDemo from '../vesc/card/VuesticCardDemo.vue'
import VuesticChartDemo from '../vesc/chart/VuesticChartDemo.vue'
import VuesticCheckbox from '../vesc/chart/VuesticChartDemo.vue'
import VuesticCheckboxDemo from '../vesc/checkbox/VuesticCheckboxDemo.vue'
import VuesticAccordionDemo from '../vesc/collapse/VuesticAccordionDemo.vue'
import VuesticCollapseDemo from '../vesc/collapse/VuesticCollapseDemo.vue'
import VuesticAdvancedColorPickerDemo from '../vesc/color-picker/VuesticAdvancedColorPickerDemo.vue'
import VuesticColorDropdownDemo from '../vesc/color-picker/VuesticColorDropdownDemo.vue'
import VuesticColorInputDemo from '../vesc/color-picker/VuesticColorInputDemo.vue'
import VuesticColorPickerInputDemo from '../vesc/color-picker/VuesticColorPickerInputDemo.vue'
import VuesticSimplePalettePickerDemo from '../vesc/color-picker/VuesticSimplePalettePickerDemo.vue'
import VuesticSliderColorPickerDemo from '../vesc/color-picker/VuesticSliderColorPickerDemo.vue'
import ItemsPerPageDemo from '../vesc/datatable/datatable-components/ItemsPerPageDemo.vue'

import VuetablePaginationDropdown from '../libs/VueTable/VuetablePaginationDropdown.vue'
import VuetablePaginationInfo from '../libs/VueTable/VuetablePaginationInfo.vue'
import VuesticDatePickerDemo from '../vesc/date-picker/VuesticDatePickerDemo.vue'
import VuesticDropdownDemo from '../vesc/dropdown/VuesticDropdownDemo.vue'
import VuesticPopupDemo from '../vesc/popup/quasar/components/popup/VuesticPopupDemo.vue'
import { installQuasarPlatform } from '../vesc/popup/quasar/install.js'
import VuesticFileUpload from '../vesc/file-upload/VuesticFileUpload.vue'
import VuesticIconDemo from '../vesc/icon/VuesticIconDemo.vue'
import VuesticIconVuesticDemo from '../vesc/icon/VuesticIconVuesticDemo.vue'
import VuesticMediumEditor from '../vesc/medium-editor/VuesticMediumEditor.vue'
import VuesticToasted from '../vesc/mixins/VuesticToasted.js'


if( router === false && VuesticAlert===false && VuesticCardDemo===false && VuesticChartDemo===false ) {}
if( VuesticCheckbox===false && VuesticCheckboxDemo===false && VuesticAccordionDemo===false ) {}
if( VuesticCollapseDemo===false && VuesticAdvancedColorPickerDemo===false && VuesticColorDropdownDemo===false ) {}
if( VuesticColorInputDemo===false && VuesticColorPickerInputDemo===false && VuesticSimplePalettePickerDemo===false) {}
if( VuesticSliderColorPickerDemo===false && ItemsPerPageDemo===false) {}
if( VuetablePaginationDropdown===false && VuetablePaginationInfo === false && VuesticDatePickerDemo ===false ) {}
if( VuesticDropdownDemo===false && VuesticPopupDemo === false && installQuasarPlatform===false ) {}
if( VuesticFileUpload===false && VuesticIconDemo===false&&VuesticIconVuesticDemo===false) {}
if( VuesticMediumEditor===false &&VuesticToasted===false) {}