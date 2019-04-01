import Alert from '../alert/VuesticAlert.vue'
import Breadcrumbs
  from '../breadcrumbs/VuesticBreadcrumbs.vue'
import Chart from '../chart/VuesticChart.vue'
import Chat from '../chat/VuesticChat.vue'
import Checkbox from '../checkbox/VuesticCheckbox.vue'
import DataTable
  from '../datatable/VuesticDataTable.vue'
import Feed from '../feed/VuesticFeed.vue'
import MediumEditor
  from '../medium-editor/VuesticMediumEditor.vue'
import Modal from '../modal/VuesticModal.vue'
import MultiSelect
  from '../multi-select/VuesticMultiSelect.vue'
import Popover from '../popover/VuesticPopover.vue'
import PreLoader
  from '../preloader/VuesticPreLoader.vue'
import ProfileCard
  from '../profile-card/VuesticProfileCard.vue'
import ProgressBar
  from '../progress-bar/VuesticProgressBar.vue'
import RadioButton
  from '../radio-button/VuesticRadioButton'
import Scrollbar
  from '../scrollbar/VuesticScrollbar.vue'
import SimpleSelect
  from '../simple-select/VuesticSimpleSelect.vue'
import Slider from '../slider/VuesticSlider.vue'
import SocialNews
  from '../social-news/VuesticSocialNews.vue'
import Switch from '../switch/VuesticSwitch.vue'
import Tabs from '../tabs/VuesticTabs.vue'
import Tooltip from '../tooltip/VuesticTooltip.vue'
import Widget from '../widget/VuesticWidget.vue'
import Wizard from '../wizard/VuesticWizard.vue'
import TreeRoot from '../tree-view/VuesticTreeRoot'
import TreeCategory
  from '../tree-view/VuesticTreeCategory'
import TreeNode from '../tree-view/VuesticTreeNode'
import DatePicker
  from '../date-picker/VuesticDatePicker'
import Card from '../card/VuesticCard'
import FileUpload
  from '../file-upload/VuesticFileUpload'
import Tag from '../tag/VuesticTag'
import TagGroup from '../tag/VuesticTagGroup'
import VuesticDropdown
  from '../dropdown/VuesticDropdown'

import VuesticToasted from '../mixins/VuesticToasted'

import Dropdown from '../directives/Dropdown'
import StickyScroll from '../directives/StickyScroll'

import VuesticAccordion
  from '../collapse/VuesticAccordion'
import VuesticCollapse
  from '../collapse/VuesticCollapse'

import VuesticTimeline
  from '../timelines/VuesticTimeline'
import VuesticTimelineItem
  from '../timelines/VuesticTimelineItem'
import VuesticPopup
  from '../popup/quasar/components/popup/VuesticPopup.vue'

import VuesticContainer from '../grid/VGrid/Container'
import VuestVaLayout from '../grid/VGrid/Layout'
import VuesticFlex from '../grid/VGrid/Flex'

import { installQuasarPlatform } from '../popup/quasar/install'

// At the moment we use quasar platform install to make its components work.
// Ideally we want to create similar vuestic platform object that holds needed values.
installQuasarPlatform()

const VuesticPlugin = {
  install (Vue, options) {
    if( options===false){}
    [
      Alert,
      Breadcrumbs,
      Chart,
      Chat,
      Checkbox,
      DataTable,
      Feed,
      Modal,
      MultiSelect,
      PreLoader,
      ProfileCard,
      ProgressBar,
      RadioButton,
      Scrollbar,
      SimpleSelect,
      Slider,
      SocialNews,
      Switch,
      Tabs,
      Widget,
      Wizard,
      MediumEditor,
      Tooltip,
      Popover,
      TreeRoot,
      TreeCategory,
      TreeNode,
      FileUpload,
      VuesticDropdown,
      DatePicker,
      Card,
      Tag,
      TagGroup,
      VuesticAccordion,
      VuesticCollapse,
      VuesticTimeline,
      VuesticTimelineItem,
      VuesticPopup,
      VuesticContainer,
      VuestVaLayout,
      VuesticFlex,
    ].forEach(component => {
      Vue.component(component.name, component)
    })

    Vue.mixin(VuesticToasted)

    Vue.directive('dropdown', Dropdown)
    Vue.directive('sticky-scroll', StickyScroll)
  },
}

export default VuesticPlugin
