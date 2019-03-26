
//port VaApp            from './App/VaApp.vue';
import VaAppConfig      from './App/VaAppConfig.vue';
import VaPage           from './Page/VaPage.vue';
import VaModal          from './Modal/VaModal.vue';
import VaAside          from './Aside/VaAside.vue';
import VaButton         from './Button/VaButton.vue';
import VaTopbar         from './Topbar/VaTopbar.vue'
import VaMinibar        from './Minibar/VaMinibar.vue';
import VaSidebar        from './Sidebar/VaSidebar.vue';
import VaSidebarGroup   from './Sidebar/VaSidebarGroup';
import VaPageHeader     from './PageHeader/VaPageHeader.vue';
import VaBreadcrumb     from './Breadcrumb/VaBreadcrumb.vue';
import VaBreadcrumbItem from './Breadcrumb/VaBreadcrumbItem.vue';

const AaaVues = { // 'va-app':VaApp,
  'va-app-config':VaAppConfig,   'va-topbar':VaTopbar,               'va-minibar':VaMinibar,
  'va-sidebar':VaSidebar,        'va-side-bar-group':VaSidebarGroup, 'va-page':VaPage,
  'va-page-header':VaPageHeader, 'va-breadcrumb':VaBreadcrumb,       'va-breadcrumb-item':VaBreadcrumbItem,
  'va-button':VaButton,          'va-modal':VaModal,                 'va-aside':VaAside
};
/* va-button va-icon va-modal va-mobile va-desktop va-tabs va-tab va-row va-column va-select */
/* va-option va-form va-form-item va-input va-color-picker va-checkbox va-range va-sidebar-group  */
/* <va-collapse-transition va-loading */

export default AaaVues;

/*
const install = function (Vue, locale) {
  for (let i in Components) {
    Vue.component(i, Components[i])
  }

  Vue.directive('VaPosition', relocate);
  Vue.prototype['VaToast'] = VaToastMethod;
  Vue.prototype.VaModal    = VaModalMethod;
  Vue.prototype.notification = VaNotificationMethod;
  Vue.prototype.VaLocale = locale || 'en';
  window.VaLocale = locale || 'en';
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

Components.install = install;

import relocate from './relocate.js'

import VaApp from './App/VaApp.vue'
import VaTab from './Tabs/VaTab.vue'
import VaRow from './Grid/VaRow.vue'
import VaPage from './Page/VaPage.vue'
import VaForm from './Form/VaForm.vue'
import VaCard from './Card/VaCard.vue'
import VaTabs from './Tabs/VaTabs.vue'
import VaIcon from './Icon/VaIcon.vue'
import VaToggleIcon from './ToggleIcon/VaToggleIcon.vue'
import VaToggle from './Toggle/VaToggle'
import VaInput from './Input/VaInput.vue'
import VaModal from './Modal/VaModal.vue'
import VaAffix from './Affix/VaAffix.vue'
import VaRadio from './Radio/VaRadio.vue'
import VaTable from './Table/VaTable.vue'
import VaAlert from './Alert/VaAlert.vue'
import VaAside from './Aside/VaAside.vue'
import VaRange from './Range/VaRange.vue'
import VaBadge from './Badge/VaBadge.vue'
import VaColumn from './Grid/VaColumn.vue'
import VaOption from './Select/VaOption.vue'
import VaButton from './Button/VaButton.vue'
import VaSelect from './Select/VaSelect.vue'
import VaTopbar from './Topbar/VaTopbar.vue'
import VaMobile from './Mobile/VaMobile.vue'
import VaFormItem from './Form/VaFormItem.vue'
import VaCollapse from './Collapse/VaCollapse.vue'
import VaCollapsePanel from './Collapse/VaCollapsePanel.vue'
import VaCollapseTransition from './Collapse/VaCollapseTransition.vue'
import VaMinibar from './Minibar/VaMinibar.vue'
import VaLoading from './Loading/VaLoading.vue'
import VaTooltip from './Tooltip/VaTooltip.vue'
import VaDesktop from './Desktop/VaDesktop.vue'
import VaRadioBtn from './Radio/VaRadioBtn.vue'
import VaSidebar from './Sidebar/VaSidebar.vue'
import VaAppConfig from './App/VaAppConfig.vue'
import VaInputOps from './Input/VaInputOps.vue'
import VaLozenge from './Lozenge/VaLozenge.vue'
import VaContainer from './Grid/VaContainer.vue'
import VaDropdown from './Dropdown/VaDropdown.vue'
import VaCheckbox from './Checkbox/VaCheckbox.vue'
import VaTextarea from './Textarea/VaTextarea.vue'
import VaRadioGroup from './Radio/VaRadioGroup.vue'
import VaModalMethod from './Modal/VaModalMethod.js'
import VaToastMethod from './Toast/VaToastMethod.js'
import VaSidebarGroup from './Sidebar/VaSidebarGroup'
import VaAnimQueue from './AnimQueue/VaAnimQueue.vue'
import VaTypeahead from './Typeahead/VaTypeahead.vue'
import VaButtonGroup from './Button/VaButtonGroup.vue'
import VaMinibarItem from './Minibar/VaMinibarItem.vue'
import VaTimepicker from './Timepicker/VaTimepicker.vue'
import VaDatepicker from './Datepicker/VaDatepicker.vue'
import VaPageHeader from './PageHeader/VaPageHeader.vue'
import VaBreadcrumb from './Breadcrumb/VaBreadcrumb.vue'
import VaCheckboxBtn from './Checkbox/VaCheckboxBtn.vue'
import VaPagination from './Pagination/VaPagination.vue'
import VaColorPicker from './ColorPicker/VaColorPicker.vue'
import VaSidebarHeader from './Sidebar/VaSidebarHeader.vue'
import VaPlaceholder from './Placeholder/VaPlaceholder.vue'
import VaCheckboxGroup from './Checkbox/VaCheckboxGroup.vue'
import VaNotification from './Notification/VaNotification.vue'
import VaBreadcrumbItem from './Breadcrumb/VaBreadcrumbItem.vue'
import VaPaginationItem from './Pagination/VaPaginationItem.vue'
import VaSidebarGroupItem from './Sidebar/VaSidebarGroupItem.vue'
import VaSidebarGroupLevel from './Sidebar/VaSidebarGroupLevel.vue'
import VaSidebarGroupTitle from './Sidebar/VaSidebarGroupTitle.vue'
import VaPlaceholderText from './Placeholder/VaPlaceholderText.vue'
import VaPlaceholderImage from './Placeholder/VaPlaceholderImage.vue'
import VaColorPickerPopup from './ColorPicker/VaColorPickerPopup.vue'
import VaSidebarGroupToggle from './Sidebar/VaSidebarGroupToggle.vue'
import VaProgressTracker from './ProgressTracker/VaProgressTracker.vue'
import VaPlaceholderHeading from './Placeholder/VaPlaceholderHeading.vue'
import VaFilePicker from './FilePicker/VaFilePicker.vue'
import VaNotificationMethod from './Notification/VaNotificationMethod.js'
 */
