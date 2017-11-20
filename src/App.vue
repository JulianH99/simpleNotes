<template>
  <div id="app">
    <app-toolbar></app-toolbar>
    <app-sidebar></app-sidebar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import store from './store'
import AppToolbar from '@/components/AppToolbar';
import AppSidebar from '@/components/AppSidebar';

export default {
  name: 'app',
  store: store,
  components: {
    AppToolbar,
    AppSidebar
  }
}
</script>

<style lang="scss">

body{
  background: $backgroundColor;
  
  color: #fff;
}

</style>
