<template lang="pug">
  .note-form
    form.form(autocomplete="off")
        .form__group
            input(type="text" v-model="note.title" placeholder="Title").form__input#title
        .form__group
            textarea(v-model="note.content" placeholder="Content" rows="18" resize="none").form__input#content
    bottom-bar
        bottom-bar-button(icon="checkmark" text="Save" :click-event="saveNote")
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


}
</style>

<script>
import types from '../../store/types'
import BottomBar from '../BottomBar'
import BottomBarButton from '../BottomBarButton'

export default {
    name: 'add-note',
    data(){
        return {
            note:{}
        }
    },
    components:{
        BottomBar,
        BottomBarButton
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
