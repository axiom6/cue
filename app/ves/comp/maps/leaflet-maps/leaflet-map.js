
import L from './leaflet-src.js'

function LeafletMap (opt) {
  opt = opt || {
    defaultStyle: true
  }
  if (opt.defaultStyle) {
    L.Icon.Default.imagePath = './images'
    ensureStyle()
  }

  let mapEl = document.createElement('div')
  mapEl.setAttribute('style','width:100%;height:100%;position:inherit;')
  document.body.appendChild(mapEl)

  return L.map(mapEl)
}

function ensureStyle() {
  document.documentElement.style.height = '100%'
  document.body.style.height = '100%'
  document.body.style.margin = '0'

  let mapStyle = document.createElement('link')
  mapStyle.setAttribute('rel','stylesheet')
  mapStyle.setAttribute('href','//cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.css')
  document.body.appendChild(mapStyle)
}

export default LeafletMap;