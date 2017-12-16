<template lang="pug">

list
    trashed-note(v-for="note in notes" :note="note" :key="note.id")

</template>


<script>
import types from '../../store/types'
import TrashedNote from './TrashedNote'
import List from '../List'


export default {
    name: 'trashed-note-list',
    computed: {
        notes(){
            return this.$store.getters.trashedNotes
        }
    },
    mounted(){
        this.$store.commit(types.FETCH_TRASHED_NOTES)
    },
    components:{
        TrashedNote,
        List
    }
}
</script>
