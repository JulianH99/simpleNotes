<template lang="pug">
card(@click.native="selectNote()")
    h2(slot="title").title {{note.title}}
    p(slot="content").content {{shorten(note.content)}}
</template>

<style lang="scss">

</style>


<script>
import Card from '../Card'
import ShortenTextMixin from '../../Mixins/ShortenTextMixin'

export default {
    name: 'note',
    mixins: [ShortenTextMixin],
    props: {
        note: {
            type: Object
        },
        trashed: {
            type: Boolean,
            required: false
        }
    },
    components:{
        Card

    },
    methods: {
        selectNote(){

            this.$router.push(`/details/${this.note.id}`)

        }
    }
}
</script>
