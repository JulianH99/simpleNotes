<template>
  <div id="app">
    <app-toolbar></app-toolbar>
  </div>
</template>

<script>

import store from './store'
import AppToolbar from '@/components/AppToolbar';

export default {
  name: 'app',
  store: store,
  components: {
    AppToolbar
  }
}
</script>

<style lang="scss">

body{
  background: $backgroundColor;
}

</style>
