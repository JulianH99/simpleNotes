<template>
  <div id="app">
    <div v-if="authenticatedUser">
        <app-toolbar @toggle="toggleSidebar()"/>
        <app-sidebar
            @close="toggleSidebar()"
            :active="sidebarActive" />
    </div>

    <div class="container">
        <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
  </div>
</template>

<script>

import store from './store'
import AppToolbar from '@/components/AppToolbar';
import AppSidebar from '@/components/AppSidebar';
import firebase from 'firebase'
import types from './store/types'

export default {
  name: 'app',
  data(){
      return{
          sidebarActive: false
      }
  },
  computed:{
      authenticatedUser() {
          return firebase.auth().currentUser
      }

  },
  components: {
    AppToolbar,
    AppSidebar
  },
  methods: {
        toggleSidebar(){
            this.sidebarActive = !this.sidebarActive
        },
        setCurrentUser(uid){
            this.$store.commit(types.SET_CURRENT_USER, {user_uid: uid})
        }
  },
  mounted(){
      this.setCurrentUser(firebase.auth().currentUser?
        firebase.auth().currentUser.uid: null)
  }
}
</script>

<style lang="scss">

#app, body{
    max-height: 100vh;
}
body{
    background: $backgroundColor;

    color: #fff;
    border: 3px solid yellow;
}
.container{
    //height: 90%;
}
.slide-fade-enter-active{
    transition: all .7s ease;
}
.slide-fade-leave-active{
    transition: all .2s;
}
.slide-fade-enter, .slide-fade-leave-to{

    opacity: 0;
}
</style>
