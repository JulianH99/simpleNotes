<template lang="pug">
.note(@click="selectNote()")
    .note__title
        h2.title {{note.title}}
    .note__content
        p.content {{shorten(note.content)}}

</template>

<style lang="scss">
.note{
    background: $darkGray;
    font-family: 'Roboto';
    border-radius: 8px;

    //float: left;
    width: 100%;
    //margin-right: .8em;
    margin-bottom: .8em;
    padding: .9em;
    &__title{
        .title{
            @extend %noteFont;
        }
    }
    &__content{
        margin-top: .4em;
        .content{
            font-weight: 300;
            font-size: 15px;
        }
    }
}

</style>


<script>
export default {
  name: 'note',
  props: {
      note: {
          type: Object
      }
  },
  methods: {
      shorten(text){
          if(text.length > 30){
              return text.substr(0, 27) + "..."
          }
          else
            return text
      },
      selectNote(){

          this.$router.push(`/details/${this.note.id}`)

      }
  }
}
</script>
