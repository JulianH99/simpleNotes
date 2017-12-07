<template lang="pug">
.toolbar
    .toolbar__container
        i.material-icons.md-light.toolbar__icon#menu-button(@click="$emit('toggle')") menu
        .toolbar__title
            span Simple Notes


</template>


<style lang="scss">
.toolbar{
    @extend %titleFont;
    padding-bottom: 1em;
    padding-top: 1em;
    height: 10%;
    &__container{
        display: flex;
        padding-left: .5em;
    }
    background: #222;
    color: #fff;
    &__icon{
        align-self: flex-start;
        width: 10%;
        font-size: 1.3em;
    }
    &__title{
        text-align: center;
        align-self: center;
        width: 50%;
        margin-left: 15%;
    }
}

</style>

<script>
export default {
    name: 'app-toolbar'
}
</script>

