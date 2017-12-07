import Vuex from 'vuex'
import Vue from 'vue'

import mutations from './mutations'

Vue.use(Vuex)

var store = new Vuex.Store({

    state: {
        notes: [],
        trashedNotes: [],
        selectedNote: {}
    },
    getters: {
        notes : state => state.notes,
        trashedNotes: state => state.trashedNotes,
        selectedNote:  state => state.selectedNote
    },
    mutations
    //actions

})

export default store
