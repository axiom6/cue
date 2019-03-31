<template>
  <div class="file-upload-page">
    <div class="flex md12">
      <vuestic-widget :headerText="$t('fileUpload.advancedMediaGallery')">
        <vuestic-file-upload
          type="gallery"
          :file-types="'.png, .jpg, .jpeg, .gif'"
          dropzone
          v-model="advancedGallery"
        ></vuestic-file-upload>
      </vuestic-widget>
    </div>

    <div class="flex md12">
      <vuestic-widget :headerText="$t('fileUpload.advancedUploadList')">
        <vuestic-file-upload
          dropzone
          v-model="advancedList"
        ></vuestic-file-upload>
      </vuestic-widget>
    </div>

    <div class="flex md12">
      <vuestic-widget :headerText="$t('fileUpload.single')">
        <vuestic-file-upload
          type="single"
          v-model="single"
        ></vuestic-file-upload>
      </vuestic-widget>
    </div>

    <div class="flex md12">
      <vuestic-widget :headerText="$t('fileUpload.mediaGallery')">
        <vuestic-file-upload
          type="gallery"
          :file-types="'.png, .jpg, .jpeg, .gif'"
          v-model="gallery"
        ></vuestic-file-upload>
      </vuestic-widget>
    </div>

    <div class="flex md12">
      <vuestic-widget :headerText="$t('fileUpload.uploadList')">
        <vuestic-file-upload
          v-model="list"
        ></vuestic-file-upload>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
export default {
  name: 'file-upload',
  data () {
    return {
      advancedGallery: [],
      advancedList: [],
      single: [],
      gallery: [],
      list: [],
    }
  },
}
</script>
