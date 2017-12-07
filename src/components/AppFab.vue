<template lang="pug">
.fab-button
    span.fab-button__text.material-icons add

</template>


<style lang="scss">
.fab-button{
    position: absolute;
    background: #fff;
    right: 1em;
    top: 2.7em;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #222;
    box-shadow: 0 5px 20px 0 #222;

    &__text{
        position: relative;
        font-size: 2em;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

</style>

<script>
export default {
    name: 'app-fab',
    methods: {

    }
}
</script>
