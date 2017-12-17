<template lang="pug">

.note-details
    .details-container

        .title-container
            input(type="text" v-model="note.title" placeholder="title").title-input
        .content-container
            textarea(v-model="note.content" rows="18" placeholder="type something").content-input

    bottom-bar
        bottom-bar-button(icon="delete" text="Delete" :click-event="showSnackbar")
        bottom-bar-button(icon="checkmark" text="Save" :click-event="updateNote")

    snack-bar(:isActive="activeSnackbar" v-on:yes="sendTaskToTrash()" v-on:no="cancelDelete()")

</template>


<style lang="scss">
.note-details{

    .details-container{
        max-width: 100vw;
        //border:1px solid pink;
        padding: 1em 0;
        .title-input, .content-input{
            background: $backgroundColor;
            color: #fff;
            padding: .3em 1em;
            &, &:hover, &:focus{
                border: none;
                outline: none;
            }
        }
        .title-container{

            .title-input{
                font-size: 1.4em;
                font-weight: bold;

            }
        }
        .content-container{
            margin-top: 1em;
            .content-input{
                //border: 1px solid red;
                resize: none;
                width: 90%;
                font-family: 'Roboto';
                font-weight: 300;
                font-size: 1.2em;
            }
        }
    }

}
</style>

<script>
import types from '../../store/types'
import SnackBar from './SnackBar'
import BottomBar from '../BottomBar'
import BottomBarButton from '../BottomBarButton'


export default {
    name: 'note-details',
    data(){
        return{
            activeSnackbar: false
        }
    },
    components:{
        SnackBar,
        BottomBar,
        BottomBarButton
    },
    computed: {
        note(){
            return this.$store.getters.selectedNote
        }
    },
    methods:{
        updateNote(){
            if(this.note.title && this.note.content){
                this.$store.commit(types.EDIT_NOTE, {note: this.note})
                this.$router.push('/notes')
            }
        },
        showSnackbar(){
            this.activeSnackbar = true;
        },
        sendTaskToTrash(){
            this.$store.commit(types.DELETE_NOTE, {note: this.note})
            this.$router.push('/notes')
        },
        cancelDelete(){
            this.activeSnackbar = false;
        }
    },
    mounted(){

        let id = this.$route.params.id

        this.$store.commit(types.GET_NOTE, {id: id})

    },
    destroyed(){
        this.$store.commit(types.RESET_SELECTED)
    }

}
</script>
