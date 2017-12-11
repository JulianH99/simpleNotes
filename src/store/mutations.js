import types from './types'
import notesRef from '../firebase'

export default {

    // method used to add a note to the list
    [types.ADD_NOTE](state, payload) {
        notesRef.add(
            {
                title : payload.note.title,
                content: payload.note.content,
                created : new Date(),
                trashed : false
            }
        )
    },

    // method used to send a note to the trashed notes
    [types.DELETE_NOTE](state, payload){
        notesRef.doc(payload.note.id).set({
            trashed : true
        }, {merge : true})

    },

    // method used to fully delete a note from the database
    [types.FULL_DELETE_NOTE](state, payload){
        notesRef.doc(payload.note.id).delete()
    },

    // method used to edit a note based on the id given in payload object
    [types.EDIT_NOTE](state, payload){

        notesRef.doc(payload.note.id).set({
            content: payload.note.content,
            title: payload.note.title,
        }, {merge : true})

    },

    // method to fetch the notes from firebase and add them to the notes list
    [types.FETCH_NOTES](state){
        state.notes = []
        notesRef.where('trashed', '==', false).orderBy('created')
            .onSnapshot( snapShot => {

                snapShot.docChanges.forEach( change => {

                    var data = change.doc.data()
                    var id = change.doc.id

                    switch(change.type){
                        case 'added':
                            state.notes.unshift({
                                title: data.title,
                                content:  data.content,
                                id: id
                            })
                            break
                        case 'modified':
                            state.notes = state.notes.map( note => {
                                if(note.id == id){
                                    return  {
                                        title : data.title,
                                        content: data.content,
                                        id: id
                                    }

                                }
                                return note
                            })
                            break
                    }

                })

            } )

    },
    [types.FETCH_TRASHED_NOTES](state){
        state.trashedNotes = []
        notesRef.where('trashed', '==', true).orderBy('created')
        .onSnapshot( snapShot => {

            snapShot.docChanges.forEach( change => {

                var data = change.doc.data()
                var id = change.doc.id

                switch(change.type){
                    case 'added':
                        state.notes.unshift({
                            title: data.title,
                            content:  data.content,
                            id: id
                        })
                        break
                    case 'deleted':
                        var index = state.trashedNotes.findIndex(note => note.id == id);
                        state.trashedNotes.splice(index, 1)
                        break
                }

            })

        } )

    },
    [types.GET_NOTE](state, payload){

        notesRef.doc(payload.id).get()
            .then(note => {
                state.selectedNote = {
                    id : payload.id,
                    content : note.data().content,
                    title : note.data().title,
                    created : note.data().created

                }

            })
    },
    [types.RESET_SELECTED](state){
        state.selectedNote = {}
    }


}
