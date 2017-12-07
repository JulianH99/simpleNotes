<template>
  <div id="app">
    <app-toolbar v-on:toggle="toggleSidebar()"></app-toolbar>
    <app-sidebar :active="sidebarActive" v-on:close="toggleSidebar()"></app-sidebar>
    <div class="container">
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
  data(){
      return{
          sidebarActive: false
      }
  },
  components: {
    AppToolbar,
    AppSidebar
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
