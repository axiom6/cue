<template>
  <div class="leaflet-map">
  </div>
</template>

<script type="module">
import './leaflet-map.js'
import L from './leaflet-src.js'

export default {
  name: 'leaflet-map',

  mounted () {
    //    L.Icon.Default.imagePath = 'assets/vendor/leaflet' TODO: make it work with webpack
    L.Icon.Default.imagePath = './images'

    let map = L.map(this.$el).setView([51.505, -0.09], 13)

    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup()
  },
}
</script>

<style lang="scss">
@import "leaflet.css";

.leaflet-map {
  height: 100%;
}
</style>
