<template lang="pug">
.bottombar
    .bottombar__buttons
        slot

</template>

<style lang="scss">
.bottombar{
    position: fixed;
    bottom: 0;
    width: 100%;

    &__buttons{
        display: flex;
    }
}
</style>

<script>
export default {
    name: 'bottom-bar'
}
</script>
