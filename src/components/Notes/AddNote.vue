<template lang="pug">
  .note-form
    form.form
        .form__group
            input(type="text" v-model="note.title" placeholder="Title").form__input#title
        .form__group
            textarea(v-model="note.content" placeholder="Content" rows="18" resize="none").form__input#content
    .bottombar
        .bottombar__buttons
            button.bottombar-button(@click="goBack()")
                i.material-icons arrow_back
                span Go back
            button.bottombar-button(@click="saveNote()")
                i.material-icons#checkicon checkmark
                span Save
</template>


<style lang="scss">

.note-form{
    padding-top: 1em;
    .form{
        &__input{

            background: $backgroundColor;
            color: #fff;
            padding: .3em 1em;
            &, &:hover, &:focus{
                border: none;
                outline: none;
            }
        }
        &__group:nth-child(2){
            padding-top: 1em;
        }
        #title{
            font-size: 1.4em;
            font-weight: bold;
        }
        #content{
            resize: none;
            width: 90%;
            font-family: 'Roboto';
            font-weight: 300;
            font-size: 1.2em;
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
    name: 'add-note',
    data(){
        return {
            note:{}
        }
    },
    methods: {
        goBack(){
            this.$router.push('/notes')
        },
        saveNote(){
            if(this.note.title && this.note.content){
                this.$store.commit(types.ADD_NOTE, {note: this.note})
                this.goBack()
            }
        }
    }
}
</script>
