<template lang="pug">
.about
    .about__title
        h1 About Simple Notes
    .about__section
        .about__section__title
            h2 Developer
        .about__section__content
            p Julian Barrios
            p
                a(href="https://github.com/JulianH99/" target="blank") https://github.com/JulianH99/
    .about__section
        .about__section__title
            h2 License
        .about__section__content
            p MIT

</template>

<style lang="scss">
.about{
    padding: 1em;
    &__title, &__section__title{
        font-weight: bold;
    }
    &__title{
        font-size: 2em;
    }
    &__section{
        margin-top: 1em;
        &__title{
            font-size: 1.2em;
            margin-bottom: .5em
        }
        &__content{
            margin-left: .8em;
            color: lightgray;
            a{
                color: inherit;
                &:hover, &:focus{
                    color: #ffffff;
                    font-weight: 600;
                }
            }
        }
    }
}

</style>


<script>
export default {
    name: 'about'

}
</script>
