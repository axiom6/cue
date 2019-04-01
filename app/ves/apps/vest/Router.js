import Vue         from '../../libs/vue/vue.esm.browser.js'
import Router      from '../../libs/vue/vue-router.esm.js'
import AppLayout   from '../../comp/admin/AppLayout.vue'
import AuthLayout  from '../../comp/auth/AuthLayout.vue'

//let lazyLoading = (name) => {
 // return import(`../../../src/components/${name}.vue`); };

import Login from '../../comp/auth/login/Login.vue';
import Signup from '../../comp/auth/signup/Signup.vue';
import VuesticPageNotFoundSearch  from '../../comp/pages/404-pages/VuesticPageNotFoundSearch.vue';
import VuesticPageNotFoundSimple   from '../../comp/pages/404-pages/VuesticPageNotFoundSimple.vue';
import VuesticPageNotFoundCustom   from '../../comp/pages/404-pages/VuesticPageNotFoundCustom.vue';
import VuesticPageNotFoundLargeText  from '../../comp/pages/404-pages/VuesticPageNotFoundLargeText.vue';
import Dashboard  from '../../comp/dashboard/Dashboard.vue';
import Charts  from '../../comp/statistics/charts/Charts.vue';
import ProgressBars  from '../../comp/statistics/progress-bars/ProgressBars.vue';
import FormElements  from '../../comp/forms/form-elements/FormElements.vue';
import FormWizard   from '../../comp/forms/form-wizard/FormWizard.vue';
import MediumEditor  from '../../comp/forms/medium-editor/MediumEditor.vue';
import Tables         from '../../comp/tables/Table.vue';
import Typography     from '../../comp/ui/typography/Typography.vue';
import Buttons         from '../../comp/ui/buttons/Buttons.vue';
import ColorPickers   from '../../comp/ui/color-pickers/ColorPickers.vue';
import Timelines       from '../../comp/ui/timelines/Timelines.vue';
import Dropdowns        from '../../comp/ui/dropdowns/Dropdowns.vue';
import Notifications   from '../../comp/ui/notifications/Notifications.vue';
import SetsList        from '../../comp/ui/icons/SetsList.vue';
import Icons        from '../../comp/ui/icons/Icons.vue';
import IconSet         from '../../comp/ui/icons/IconSet.vue';
import Spinners         from '../../comp/ui/spinners/Spinners.vue';
import Grid              from '../../comp/ui/grid/Grid.vue';
import Modals              from '../../comp/ui/modals/Modals.vue';
import Cards             from '../../comp/ui/cards/Cards.vue';
import FileUpload       from '../../comp/ui/file-upload/FileUpload.vue';
import Tags              from '../../comp/ui/tags/Tags.vue';
import TreeView           from '../../comp/ui/tree-view/TreeView.vue';
import Collapse            from '../../comp/ui/collapse/Collapse.vue';
import Filters            from '../../comp/ui/filters/Filters.vue';
import Extra              from '../../comp/extra/Extra.vue';
import GoogleMapsPage     from '../../comp/maps/google-maps/GoogleMapsPage.vue';
import YandexMapsPage      from '../../comp/maps/yandex-maps/YandexMapsPage.vue';
import LeafletMapsPage     from '../../comp/maps/leaflet-maps/LeafletMapsPage.vue';
import PagesPage404       from '../../comp/pages/404-pages/404PagesPage.vue';


Vue.use(Router);

const EmptyParentComponent = {
  template:'<router-view></router-view>',
};

export default new Router( {
  routes:[
    { path:'*', redirect:{ name:'dashboard' } },
    { path:'/auth', component:AuthLayout, children:[
      { path:'login',  name:'login',  component:Login  }, // lazyLoading('auth/login/Login'),
      { path:'signup', name:'signup', component:Signup }, // lazyLoading('auth/signup/Signup'),
      { path:'', redirect:{ name:'login' } } ] },
    { path:'/404', component:EmptyParentComponent, children:[ // lazyLoading('pages/404-pages/VuesticPageNotFoundSearch'),
      { path:'not-found-advanced', name:'not-found-advanced',   component:VuesticPageNotFoundSearch },
      { path:'not-found-simple',   name:'not-found-simple',     component:VuesticPageNotFoundSimple },
      { path:'not-found-custom',   name:'not-found-custom',     component:VuesticPageNotFoundCustom },
      { path:'/pages/not-found-large-text', name:'not-found-large-text', component:VuesticPageNotFoundLargeText } ] },
    { path:'/admin', name:'Admin', component:AppLayout, children:[
      { path:'dashboard', name:'dashboard',  component:Dashboard, default:true }, // lazyLoading('dashboard/Dashboard'),
      { path:'statistics', name:'statistics', component:EmptyParentComponent, children:[
        { path:'charts', name:'charts', component:Charts, // lazyLoading('statistics/charts/Charts'),
          meta:{ wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Charts' } },
        { path:'progress-bars', name:'progress-bars', component:ProgressBars, // lazyLoading('statistics/progress-bars/ProgressBars'),
          meta:{ wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Progress-Bars' } } ] },
        { path:'forms', name:'forms', component:EmptyParentComponent, children:[
            { path:'form-elements', name:'form-elements', component:FormElements, // lazyLoading('forms/form-elements/FormElements'),
              meta:{ wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/inputs'  } },
            { path:'form-wizards', name:'form-wizards', component:FormWizard, // lazyLoading('forms/form-wizard/FormWizard'),
              meta:{ wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Wizards' } },
            { path:'medium-editor', name:'medium-editor', component:MediumEditor, // lazyLoading('forms/medium-editor/MediumEditor'),
              meta:{ wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Medium-Editor' } } ] },
        { path:'tables', name:'tables', component:Tables, // lazyLoading('tables/Table'),
          meta: {wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Tables' } },
        { path:'ui', name:'ui', component:EmptyParentComponent, children:[
            { path:'typography', name:'typography', component:Typography }, // lazyLoading('../../typography/Typography'),
            { path:'buttons', name:'buttons', component:Buttons, // lazyLoading('../../buttons/Buttons'),
              meta:{ wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Buttons' } },
            { name:'color-pickers', path:'color-pickers', component:ColorPickers }, // lazyLoading('../../color-pickers/ColorPickers'),
            { name:'timelines', path:'timelines', component:Timelines, // lazyLoading('../../timelines/Timelines'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Timelines' } },
            { name:'dropdowns', path:'dropdowns', component:Dropdowns, // lazyLoading('../../dropdowns/Dropdowns'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Dropdowns' } },
            { name:'notifications', path:'notifications', component:Notifications }, // lazyLoading('../../notifications/Notifications'),
            { path:'icons', component:Icons,children:[ // lazyLoading('../../icons/Icons')
                { name:'icon-sets', path:'', component:SetsList }, // lazyLoading('../../icons/SetsList'), // Default route
                { name:'icon-set',  path:':name', component:IconSet, props:true } ] }, //lazyLoading('../../icons/IconSet'),
            { name:'spinners', path:'spinners', component:Spinners },//lazyLoading('../../spinners/Spinners'),
            { name:'grid', path:'grid', component:Grid }, // lazyLoading('../../grid/Grid'),
            { name:'modals', path:'modals', component:Modals, // lazyLoading('../../modals/Modals'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Modals' } },
            { name:'cards', path:'cards', component:Cards, // lazyLoading('../../cards/Cards'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Cards' } },
            { name:'file-upload', path:'file-upload', component:FileUpload, // lazyLoading('../../file-upload/FileUpload'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/File-Upload' } },
            { name:'tags', path:'tags', component:Tags, //lazyLoading('../../tags/Tags'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Tags' } },
            { name:'tree-view', path:'tree-view', component:TreeView, // lazyLoading('../../tree-view/TreeView'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Tree-view' } },
            { name:'collapse', path:'collapse', component:Collapse }, // lazyLoading('../../collapse/Collapse')
            { name:'filters', path:'filters',   component:Filters     } ] },  // lazyLoading('../../filters/Filters')

        { name:'extra', path:'extra', component:Extra, // lazyLoading('extra/Extra'),
          meta:{ wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Tabs' } },
        { name:'maps', path:'maps', component:EmptyParentComponent, children:[
            { name:'google-maps', path:'google-maps', component:GoogleMapsPage, // lazyLoading('maps/google-maps/GoogleMapsPage'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Maps' } },
            { name:'yandex-maps', path:'yandex-maps', component:YandexMapsPage, // lazyLoading('maps/yandex-maps/YandexMapsPage'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Maps' } },
            { name:'leaflet-maps', path:'leaflet-maps', component:LeafletMapsPage, // lazyLoading('maps/leaflet-maps/LeafletMapsPage'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Maps' } } ] },
        { name:'pages', path:'pages', component:EmptyParentComponent, children:[
            { name:'404-pages', path:'404-pages', component:PagesPage404 } ] } ], // lazyLoading('pages/404-pages/404PagesPage'),
   } ] } )
