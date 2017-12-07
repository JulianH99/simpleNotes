<template>
  <div id="app">
    <app-toolbar v-on:toggle="toggleSidebar()"></app-toolbar>
    <app-sidebar :active="sidebarActive" v-on:close="toggleSidebar()"></app-sidebar>
    <app-fab></app-fab>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import store from './store'
import AppToolbar from '@/components/AppToolbar';
import AppSidebar from '@/components/AppSidebar';
import AppFab from '@/components/AppFab';

export default {
  name: 'app',
  data(){
      return{
          sidebarActive: false
      }
  },
  components: {
    AppToolbar,
    AppSidebar,
    AppFab
  },
  methods: {
      toggleSidebar(){
          this.sidebarActive = !this.sidebarActive
      }
  }
}
</script>

<style lang="scss">

body{
    background: $backgroundColor;
    max-height: 100vh;
    color: #fff;
}
.container{
    //height: 90%;
}
</style>
