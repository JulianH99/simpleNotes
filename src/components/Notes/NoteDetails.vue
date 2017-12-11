<template lang="pug">

.note-details
    .details-container

        .title-container
            input(type="text" v-model="note.title" placeholder="title").title-input
        .content-container
            textarea(v-model="note.content" rows="18" placeholder="type something").content-input

    .bottombar
        .bottombar__buttons
            button.bottombar-button
                i.material-icons delete
                span Delete
            button.bottombar-button(@click="updateNote()")
                i.material-icons#checkicon checkmark
                span Save


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
    .bottombar{
        position: fixed;
        bottom: 0;
        width: 100%;

        &__buttons, &-button{
            display: flex;

        }
        &-button{
            width: 50%;
            flex-direction: column;
            padding: .5em .4em;
            align-items: center;
            justify-content: center;
            background: $darkGray;
            color: #fff;
            &:focus{
                outline: none;
                background: darken($darkGray, 2);
            }
        }
        #checkicon{
            width: 24px !important;
            //border: 1px solid red;
        }
    }
}
</style>

<script>
import types from '../../store/types'

export default {
    name: 'note-details',
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
