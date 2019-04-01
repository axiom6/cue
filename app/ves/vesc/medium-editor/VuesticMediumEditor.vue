<template>
  <div class="vuestic-medium-editor">
    <slot></slot>
  </div>
</template>

<script>
//import MediumEditor from 'medium-editor.j' // medioum-editor.js is NodeJS

export default {
  name: 'vuestic-medium-editor',

  props: {
    editorOptions: {
      type: Object,
      default: () => {
        return {
          buttonLabels: 'fontawesome',
          autoLink: true,
          toolbar: {
            buttons: [
              'bold',
              'italic',
              'underline',
              'anchor',
              'h1',
              'h2',
              'h3',
            ],
          },
        }
      },
    },
  },

  data () {
    return {
      editor: null,
    }
  },

  mounted () {
    this.initEditor()
  },

  beforeDestroy () {
    this.destroyEditor()
  },

  methods: {
    initEditor () {
      //this.editor = new MediumEditor(this.$el, this.editorOptions)
      //this.$emit('initialized', this.editor)
    },

    destroyEditor () {
      //this.editor.destroy()
    },
  },
}
</script>

<style>

@import "medium-editor.css";

.vuestic-medium-editor       { }
.vuestic-medium-editor:focus { outline: none; }

</style>
