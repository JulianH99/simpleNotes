import Vue from 'vue'
import Router from 'vue-router'
import NotesList from '@/components/Notes/NoteList'
import TrashedNoteList from '@/components/Notes/TrashedNoteList'
import NoteDetails from '@/components/Notes/NoteDetails'
import AddNote from '@/components/Notes/AddNote'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: 'notes'
        },
        {
            path: '/notes',
            component : NotesList
        },
        {
            path: '/details/:id',
            component: NoteDetails
        },
        {
            path: '/add',
            component: AddNote
        },
        {
            path: '/trash',
            component: TrashedNoteList
        }

  ]
})
