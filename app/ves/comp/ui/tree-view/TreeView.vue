<template>
  <div class="sets-list va-row">
    <div class="flex md12 xs12">
      <div class="va-row">

        <div class="small-set flex lg6 xs12">
          <vuestic-widget :headerText="$t('treeView.basic')">
            <tree-view-basic-preview/>
          </vuestic-widget>
        </div>

        <div class="small-set flex lg6 xs12">
          <vuestic-widget :headerText="$t('treeView.icons')">
            <tree-view-icons-preview/>
          </vuestic-widget>
        </div>
      </div>

      <div class="va-row">
        <div class="small-set flex lg6 xs12">
          <vuestic-widget :headerText="$t('treeView.advanced')">
            <tree-view-advanced-preview/>
          </vuestic-widget>
        </div>

        <div class="small-set flex lg6 xs12">
          <vuestic-widget :headerText="$t('treeView.editable')">
            <tree-view-editable-preview/>
          </vuestic-widget>
        </div>
      </div>
      <div class="small-set flex lg6 xs12">
        <vuestic-widget :headerText="$t('treeView.selectable')">
          <tree-view-selectable-preview/>
        </vuestic-widget>
      </div>

    </div>
  </div>
</template>

<script>
import VuesticWidget
  from '../../../vesc/widget/VuesticWidget.vue'
import TreeViewBasicPreview from './TreeViewBasicPreview.vue'
import TreeViewIconsPreview from './TreeViewIconsPreview.vue'
import TreeViewSelectablePreview from './TreeViewSelectablePreview.vue'
import TreeViewAdvancedPreview from './TreeViewAdvancedPreview.vue'
import TreeViewEditablePreview from './TreeViewEditablePreview.vue'

export default {
  name: 'tree-view',
  components: {
    TreeViewEditablePreview,
    TreeViewAdvancedPreview,
    TreeViewSelectablePreview,
    TreeViewIconsPreview,
    TreeViewBasicPreview,
    VuesticWidget,
  },
  data () {
    return {
      treeViewData: {},
    }
  },
}
</script>

<style lang="scss">

</style>
