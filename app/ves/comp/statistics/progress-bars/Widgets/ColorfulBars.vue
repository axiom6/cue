<template>
  <vuestic-widget headerText="Colorful Bars">
    <div class="va-row">
      <div class="flex sm4 md4">
        {{'progressBars.basic' | translate}}
        <vuestic-progress-bar :value="100" theme="Danger"></vuestic-progress-bar>
      </div>
      <div class="flex sm4 md4">
        {{'progressBars.thin' | translate}}
        <vuestic-progress-bar :value="100" size="thin" theme="Info"></vuestic-progress-bar>
      </div>
      <div class="flex sm4 md4">
        {{'progressBars.thick' | translate}}
        <vuestic-progress-bar :value="100" size="thick" theme="Warning"></vuestic-progress-bar>
      </div>
    </div>
    <div class="va-row">
      <div class="flex sm4 md4">
        {{'progressBars.basicVertical' | translate}}
        <div class="pb-container">
          <vuestic-progress-bar :value="100" type="vertical" theme="Success"></vuestic-progress-bar>
        </div>
      </div>
      <div class="flex sm4 md4">
        {{'progressBars.thinVertical' | translate}}
        <div class="pb-container">
          <vuestic-progress-bar :value="100" size="thin" type="vertical"
                                theme="Black"></vuestic-progress-bar>
        </div>
      </div>
      <div class="flex sm4 md4">
        {{'progressBars.circle' | translate}}
        <div class="pb-container">
          <vuestic-progress-bar :value="100" type="circle"></vuestic-progress-bar>
        </div>
      </div>
    </div>
  </vuestic-widget>
</template>

<script>
export default {
  name: 'standard-bars',
}
</script>
