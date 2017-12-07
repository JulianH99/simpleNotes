import Vue from 'vue'
import Router from 'vue-router'
import NotesList from '@/components/Notes/NoteList'
import NoteDetails from '@/components/Notes/NoteDetails'

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
      }

  ]
})
