<template>
  <vuestic-tree-root>
    <vuestic-tree-category label="Images">
      <div slot="icon" class="icon">
        <span aria-hidden="true" class="ion ion-md-images"></span>
      </div>
      <vuestic-tree-node>
        <div slot="icon" class="icon">
          <span aria-hidden="true" class="ion ion-md-image"></span>
        </div>
        sick_catz_cuddling.jpg
      </vuestic-tree-node>
      <vuestic-tree-node>
        <div slot="icon" class="icon">
          <span aria-hidden="true" class="ion ion-md-image"></span>
        </div>
        pins-and-needles.jpg
      </vuestic-tree-node>
      <vuestic-tree-node>
        <div slot="icon" class="icon">
          <span aria-hidden="true" class="ion ion-md-image"></span>
        </div>
        avatar_50x50.jpg
      </vuestic-tree-node>
    </vuestic-tree-category>
    <vuestic-tree-category label="Music" isOpen>
      <div slot="icon" class="icon">
        <span aria-hidden="true" class="ion ion-md-star-outline"></span>
      </div>
      <vuestic-tree-node>
        <div slot="icon" class="icon">
          <span aria-hidden="true" class="ion ion-md-musical-notes"></span>
        </div>
        Taylor_swift_hello.mp3
      </vuestic-tree-node>
      <vuestic-tree-node>
        <div slot="icon" class="icon">
          <span aria-hidden="true" class="ion ion-md-musical-notes"></span>
        </div>
        straight_to_the_bank.wav
      </vuestic-tree-node>
      <vuestic-tree-node>
        <div slot="icon" class="icon">
          <span aria-hidden="true" class="ion ion-md-musical-notes"></span>
        </div>
        imagine_dragons_promo.mp3
      </vuestic-tree-node>
    </vuestic-tree-category>
    <vuestic-tree-category label="Miscellaneous">
      <div slot="icon" class="icon">
        <span aria-hidden="true" class="ion ion-md-list"></span>
      </div>
      <vuestic-tree-node>
        <div slot="icon" class="icon">
          <span aria-hidden="true" class="ion ion-md-grid"></span>
        </div>
        dump.sql
      </vuestic-tree-node>
      <vuestic-tree-node>
        <div slot="icon" class="icon">
          <span aria-hidden="true" class="ion ion-md-help"></span>
        </div>
        unknown-file
      </vuestic-tree-node>
      <vuestic-tree-node>
        <div slot="icon" class="icon">
          <span aria-hidden="true" class="ion ion-md-key"></span>
        </div>
        secure.key
      </vuestic-tree-node>
    </vuestic-tree-category>
  </vuestic-tree-root>
</template>

<script>
export default {
  name: 'tree-view-icons-preview',
}
</script>
