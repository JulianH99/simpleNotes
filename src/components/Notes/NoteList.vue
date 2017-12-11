<template lang="pug">
    div
        app-fab
        .note_list(ref="notes")
            note(v-for="note in notes" :key="note.title" :note="note")
</template>

<style lang="scss">
.note_list{
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 2.5em;
}

</style>


<script>
import types from '../../store/types'
import Note from './Note'
import AppFab from '@/components/AppFab';

export default {
    name: 'notes-list',

    mounted(){
        this.$store.commit(types.FETCH_NOTES)

    },

    components: {
        Note,
        AppFab
    },
    computed: {
        notes(){
            return this.$store.getters.notes;
        }
    }
}
</script>
