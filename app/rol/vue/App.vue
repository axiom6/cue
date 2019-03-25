<template>
  <div id="app" class="layout">
    <header>
      <app-header title="Boilerplate App" />
    </header>
    <div class="body">
      <main class="content">
        <app-body />
      </main>
    </div>
    <footer>
      <app-footer />
    </footer>
  </div>
</template>

<script type="module">
import AppBody   from './AppBody.vue';
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';

export default {
  name: 'App',
  components: { AppHeader, AppBody, AppFooter }
};
</script>
