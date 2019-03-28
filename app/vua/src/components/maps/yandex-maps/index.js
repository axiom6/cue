
import Vue        from '../../../../pub/js/lib/vue.esm.browser.js'
import YMapPlugin from './YMap';
import Marker     from './Marker';

const install = function() {
  Vue.component('yandex-map', YMapPlugin);
  Vue.component('ymap-marker', Marker);
};

YMapPlugin.install = install;

Vue.use(YMapPlugin);


export const yandexMap = YMapPlugin;
export const ymapMarker = Marker;

export default { yandexMap, ymapMarker };