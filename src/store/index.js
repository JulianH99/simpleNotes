import Vuex from 'vuex'
import Vue from 'vue'

import mutations from './mutations'

Vue.use(Vuex)

var store = new Vuex.Store({

    state: {
        notes: [],
        trashedNotes: []
    },
    mutations : mutations

})

export default store