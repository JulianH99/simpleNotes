<template lang="pug">
.card
    .card__title
        slot(name="title")
    .card__content
        slot(name="content")
    .card__actions
        slot(name="actions")
</template>


<style lang="scss">
.card{
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
    &__actions{
        display: flex;
        justify-content: flex-end;
    }
    &__button{
        padding: .5em;
        background: inherit;
        color: #fff;
    }
}


</style>


<script>
export default {
    name: 'card'
}
</script>
