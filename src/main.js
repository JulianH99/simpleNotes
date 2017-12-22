// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import firebase from 'firebase'

var VueTouch = require('vue-touch')

Vue.use(VueTouch, {name:'v-touch'})
Vue.config.productionTip = false

/* eslint-disable no-new */

firebase.auth().onAuthStateChanged(user => {
    console.log(user)
    new Vue({
        el: '#app',
        router,
        store: store,
        template: '<App/>',
        components: { App }
    })

})



