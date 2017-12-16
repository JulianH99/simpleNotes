<template lang="pug">
    div
        app-fab
        list
            note(v-for="note in notes" :key="note.title" :note="note")
</template>


<script>
import types from '../../store/types'
import Note from './Note'
import AppFab from '../AppFab'
import List from '../List'

export default {
    name: 'notes-list',
    mounted(){
        this.$store.commit(types.FETCH_NOTES)

    },
    components: {
        Note,
        AppFab,
        List
    },
    computed: {
        notes(){
            return this.$store.getters.notes;
        }
    }
}
</script>
