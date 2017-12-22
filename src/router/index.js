import Vue from 'vue'
import Router from 'vue-router'
import NotesList from '@/components/Notes/NoteList'
import TrashedNoteList from '@/components/Notes/TrashedNoteList'
import NoteDetails from '@/components/Notes/NoteDetails'
import AddNote from '@/components/Notes/AddNote'
import About from '@/components/About'
import Login from '@/components/Login'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: 'login'
        },
        {
            path: '/login',
            component: Login
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
        },
        {
            path: '/about',
            component: About
        }

  ]
})

export default router
