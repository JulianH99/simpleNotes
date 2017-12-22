<template lang="pug">
.list
    slot
</template>

<style lang="scss">

.list{
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 2.5em;
    column-count: 2;
    column-gap: 1em;
}

</style>

<script>
export default {
    name: 'list'
}
</script>
