<template lang="pug">
.snackbar(v-bind:class="{show: isActive}")
    .snackbar__content
        span Are you sure you want to send this note to trash?
    .snackbar__actions
        button.snackbar__button(@click="$emit('no')") No
        button.snackbar__button.highlight(@click="$emit('yes')") Yes
</template>


<style lang="scss">

.snackbar{
    transition: all .2s;
    opacity: 0;
    background: $darkGray;
    position: fixed;
    bottom: 3.2em;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    &__content{
        padding: 1em;
    }
    &__actions{
        padding: .6em;
        align-self: flex-end;
    }
    &__button{
        padding: .4em;
        color: #fff;
        font-size: 1.2em;
        font-weight: 300;
        background: inherit;
        &:focus{
            background: darken($darkGray, 2);
        }
    }
    .highlight{
        font-weight: bold;
    }

}
.show{
    opacity: 1;
}

</style>


<script>
export default {
    name:'snack-bar',
    props:{
        isActive: {
            type: Boolean
        }
    }
}
</script>
