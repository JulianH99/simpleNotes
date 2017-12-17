<template lang="pug">
button.bottombar-button(@click="clickEvent()")
    i.material-icons {{icon}}
    span {{text}}
</template>


<style lang="scss">
.bottombar-button{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: .5em .4em;
    align-items: center;
    justify-content: center;
    background: $darkGray;
    color: #fff;
    &:focus{
        background: darken($darkGray, 2);
    }
    i{
        width: 24px !important;
    }
}

</style>


<script>
export default {
    name: 'bottom-bar-button',
    props:{
        icon: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        clickEvent:{
            type: Function,
            required: true
        }
    }
}
</script>


