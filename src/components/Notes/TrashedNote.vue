<template lang="pug">
transition(name="slide"
        leave-active-class="slide-out")
    card(v-if="!hide")
        h2.title(slot="title") {{note.title}}
        p.content(slot="content") {{shorten(note.content)}}
        div(slot="actions")
            button.card__button(@click="untrash()")
                i.material-icons arrow_back
            button.card__button(@click="fullDelete()")
                i.material-icons delete
</template>


<style lang="scss">

@keyframes slide-out {
    from{
        opacity: 1;
    }
    to{
        height: 0;
        opacity: 0;
    }
}

.slide-out{
    animation: slide-out .2s ease-in both;
}

.slide-enter, .slide-leave{

}
</style>


<script>
import Card from  '../Card'
import ShortenTextMixin from '../../Mixins/ShortenTextMixin'
import types from '../../store/types'

export default {
    name: 'trashed-note',
    mixins: [ShortenTextMixin],
    data(){
        return{
            hide: false
        }
    },
    components:{
        Card
    },
    props: {
        note:{
            type: Object,
            required: true
        }
    },
    methods:{
        untrash(){
            this.$store.commit(types.UNDELETE_NOTE,{note: this.note})
            this.hide = true;
        },
        fullDelete(){
            this.$store.commit(types.FULL_DELETE_NOTE, {note: this.note})
            this.hide = true;
        }
    }
}
</script>

