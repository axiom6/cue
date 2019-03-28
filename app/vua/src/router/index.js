import Vue         from '../../pub/js/lib/vue.esm.browser.js'
import Router      from '../../pub/js/lib/vue-router.esm.js'
import AppLayout   from '../components/admin/AppLayout.vue'
import AuthLayout  from '../components/auth/AuthLayout.vue'



//let lazyLoading = (name) => {
 // return import(`../../../src/components/${name}.vue`); };

import Login from '../components/auth/login/Login.vue';
import Signup from '../components/auth/signup/Signup.vue';
import VuesticPageNotFoundSearch  from '../components/pages/404-pages/VuesticPageNotFoundSearch.vue';
import VuesticPageNotFoundSimple   from '../components/pages/404-pages/VuesticPageNotFoundSimple.vue';
import VuesticPageNotFoundCustom   from '../components/pages/404-pages/VuesticPageNotFoundCustom.vue';
import VuesticPageNotFoundLargeText  from '../components/pages/404-pages/VuesticPageNotFoundLargeText.vue';
import Dashboard  from '../components/dashboard/Dashboard.vue';
import Charts  from '../components/statistics/charts/Charts.vue';
import ProgressBars  from '../components/statistics/progress-bars/ProgressBars.vue';
import FormElements  from '../components/forms/form-elements/FormElements.vue';
import FormWizard   from '../components/forms/form-wizard/FormWizard.vue';
import MediumEditor  from '../components/forms/medium-editor/MediumEditor.vue';
import Tables         from '../components/tables/Table.vue';
import Typography     from '../components/ui/typography/Typography.vue';
import Buttons         from '../components/ui/buttons/Buttons.vue';
import ColorPickers   from '../components/ui/color-pickers/ColorPickers.vue';
import Timelines       from '../components/ui/timelines/Timelines.vue';
import Dropdowns        from '../components/ui/dropdowns/Dropdowns.vue';
import Notifications   from '../components/ui/notifications/Notifications.vue';
import SetsList        from '../components/ui/icons/SetsList.vue';
import Icons        from '../components/ui/icons/Icons.vue';
import IconSet         from '../components/ui/icons/IconSet.vue';
import Spinners         from '../components/ui/spinners/Spinners.vue';
import Grid              from '../components/ui/grid/Grid.vue';
import Modals              from '../components/ui/modals/Modals.vue';
import Cards             from '../components/ui/cards/Cards.vue';
import FileUpload       from '../components/ui/file-upload/FileUpload.vue';
import Tags              from '../components/ui/tags/Tags.vue';
import TreeView           from '../components/ui/tree-view/TreeView.vue';
import Collapse            from '../components/ui/collapse/Collapse.vue';
import Filters            from '../components/ui/filters/Filters.vue';
import Extra              from '../components/extra/Extra.vue';
import GoogleMapsPage     from '../components/maps/google-maps/GoogleMapsPage.vue';
import YandexMapsPage      from '../components/maps/yandex-maps/YandexMapsPage.vue';
import LeafletMapsPage     from '../components/maps/leaflet-maps/LeafletMapsPage.vue';
//port BubbleMapsPage      from '../components/maps/bubble-maps/BubbleMapsPage.vue';  // Still has NodeJS dependencies
//port LineMapsPage        from '../components/maps/line-maps/LineMapsPage.vue';      // Still has NodeJS dependencies
import PagesPage404       from '../components/pages/404-pages/404PagesPage.vue';


Vue.use(Router)

const EmptyParentComponent = {
  template: '<router-view></router-view>',
}

export default new Router({
  routes: [
    {
      path: '*',
      redirect: { name: 'dashboard' },
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          name: 'login',
          path: 'login',
          component: Login // lazyLoading('auth/login/Login'),
        },
        {
          name: 'signup',
          path: 'signup',
          component: Signup // lazyLoading('auth/signup/Signup'),
        },
        {
          path: '',
          redirect: { name: 'login' },
        },
      ],
    },
    {
      path: '/404',
      component: EmptyParentComponent,
      children: [
        {
          name: 'not-found-advanced',
          path: 'not-found-advanced',
          component: VuesticPageNotFoundSearch // lazyLoading('pages/404-pages/VuesticPageNotFoundSearch'),
        },
        {
          name: 'not-found-simple',
          path: 'not-found-simple',
          component: VuesticPageNotFoundSimple // lazyLoading('pages/404-pages/VuesticPageNotFoundSimple'),
        },
        {
          name: 'not-found-custom',
          path: 'not-found-custom',
          component: VuesticPageNotFoundCustom // lazyLoading('pages/404-pages/VuesticPageNotFoundCustom'),
        },
        {
          name: 'not-found-large-text',
          path: '/pages/not-found-large-text',
          component: VuesticPageNotFoundLargeText // lazyLoading('pages/404-pages/VuesticPageNotFoundLargeText'),
        },
      ],
    },
    {
      name: 'Admin',
      path: '/admin',
      component: AppLayout,
      children: [
        {
          name: 'dashboard',
          path: 'dashboard',
          component: Dashboard, // lazyLoading('dashboard/Dashboard'),
          default: true,
        },
        {
          name: 'statistics',
          path: 'statistics',
          component: EmptyParentComponent,
          children: [
            {
              name: 'charts',
              path: 'charts',
              component: Charts, // lazyLoading('statistics/charts/Charts'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Charts',
              },
            },
            {
              name: 'progress-bars',
              path: 'progress-bars',
              component: ProgressBars, // lazyLoading('statistics/progress-bars/ProgressBars'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Progress-Bars',
              },
            },
          ],
        },
        {
          name: 'forms',
          path: 'forms',
          component: EmptyParentComponent,
          children: [
            {
              name: 'form-elements',
              path: 'form-elements',
              component: FormElements, // lazyLoading('forms/form-elements/FormElements'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/inputs',
              },
            },
            {
              name: 'form-wizards',
              path: 'form-wizards',
              component: FormWizard, // lazyLoading('forms/form-wizard/FormWizard'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Wizards',
              },
            },
            {
              name: 'medium-editor',
              path: 'medium-editor',
              component: MediumEditor, // lazyLoading('forms/medium-editor/MediumEditor'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Medium-Editor',
              },
            },
          ],
        },
        {
          name: 'tables',
          path: 'tables',
          component: Tables, // lazyLoading('tables/Table'),
          meta: {
            wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tables',
          },
        },
        {
          name: 'ui',
          path: 'ui',
          component: EmptyParentComponent,
          children: [
            {
              name: 'typography',
              path: 'typography',
              component: Typography // lazyLoading('ui/typography/Typography'),
            },
            {
              name: 'buttons',
              path: 'buttons',
              component: Buttons, // lazyLoading('ui/buttons/Buttons'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Buttons',
              },
            },
            {
              name: 'color-pickers',
              path: 'color-pickers',
              component: ColorPickers, // lazyLoading('ui/color-pickers/ColorPickers'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Color-Pickers',
              },
            },
            {
              name: 'timelines',
              path: 'timelines',
              component: Timelines, // lazyLoading('ui/timelines/Timelines'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Timelines',
              },
            },
            {
              name: 'dropdowns',
              path: 'dropdowns',
              component: Dropdowns, // lazyLoading('ui/dropdowns/Dropdowns'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Dropdowns',
              },
            },
            {
              name: 'notifications',
              path: 'notifications',
              component: Notifications, // lazyLoading('ui/notifications/Notifications'),
            },
            {
              path: 'icons',
              component: Icons, // lazyLoading('ui/icons/Icons'),
              children: [
                {
                  name: 'icon-sets',
                  path: '', // Default route
                  component: SetsList // lazyLoading('ui/icons/SetsList'),
                },
                {
                  name: 'icon-set',
                  path: ':name',
                  component: IconSet, //lazyLoading('ui/icons/IconSet'),
                  props: true,
                },
              ],
            },
            {
              name: 'spinners',
              path: 'spinners',
              component: Spinners //lazyLoading('ui/spinners/Spinners'),
            },
            {
              name: 'grid',
              path: 'grid',
              component: Grid // lazyLoading('ui/grid/Grid'),
            },
            {
              name: 'modals',
              path: 'modals',
              component: Modals, // lazyLoading('ui/modals/Modals'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Modals',
              },
            },
            {
              name: 'cards',
              path: 'cards',
              component: Cards, // lazyLoading('ui/cards/Cards'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Cards',
              },
            },
            {
              name: 'file-upload',
              path: 'file-upload',
              component: FileUpload, // lazyLoading('ui/file-upload/FileUpload'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/File-Upload',
              },
            },
            {
              name: 'tags',
              path: 'tags',
              component: Tags, //lazyLoading('ui/tags/Tags'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tags',
              },
            },
            {
              name: 'tree-view',
              path: 'tree-view',
              component: TreeView, // lazyLoading('ui/tree-view/TreeView'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tree-view',
              },
            },
            {
              name: 'collapse',
              path: 'collapse',
              component: Collapse // lazyLoading('ui/collapse/Collapse')
            },
            {
              name: 'filters',
              path: 'filters',
              component: Filters // lazyLoading('ui/filters/Filters')
            }
          ]
        },
        {
          name: 'extra',
          path: 'extra',
          component: Extra, // lazyLoading('extra/Extra'),
          meta: {
            wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tabs',
          },
        },
        {
          name: 'maps',
          path: 'maps',
          component: EmptyParentComponent,
          children: [
            {
              name: 'google-maps',
              path: 'google-maps',
              component: GoogleMapsPage, // lazyLoading('maps/google-maps/GoogleMapsPage'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
              },
            },
            {
              name: 'yandex-maps',
              path: 'yandex-maps',
              component: YandexMapsPage, // lazyLoading('maps/yandex-maps/YandexMapsPage'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
              },
            },
            {
              name: 'leaflet-maps',
              path: 'leaflet-maps',
              component: LeafletMapsPage, // lazyLoading('maps/leaflet-maps/LeafletMapsPage'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
              },
            }
            /*{
              name: 'bubble-maps',
              path: 'bubble-maps',
              component: BubbleMapsPage, // lazyLoading('maps/bubble-maps/BubbleMapsPage'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
              },
            },
            {
              name: 'line-maps',
              path: 'line-maps',
              component: LineMapsPage, // lazyLoading('maps/line-maps/LineMapsPage'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
              },
            },*/
          ],
        },
        {
          name: 'pages',
          path: 'pages',
          component: EmptyParentComponent,
          children: [
            {
              name: '404-pages',
              path: '404-pages',
              component: PagesPage404 // lazyLoading('pages/404-pages/404PagesPage'),
            },
          ],
        },
      ],
    },
  ],
})
