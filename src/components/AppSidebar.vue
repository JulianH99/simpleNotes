<template lang="pug">
.sidebar__wrapper(v-bind:class='{"show": active == true}')
    .sidebar
        .sidebar__title
            span Simple Notes
            i.material-icons(@click="$emit('close')") keyboard_arrow_left
        .sidebar__content
            .sidebar__content-items
                .sidebar__item
                    router-link(to="/notes")
                        i.material-icons.md-light.sidebar__item__icon#home-icon dashboard
                        span Notes
                .sidebar__item
                    router-link(to="/trash")
                        i.material-icons.md-light.sidebar__item__icon delete
                        span Trash
                .sidebar__item
                    router-link(to="/about")
                        i.material-icons.md-light.sidebar__item__icon info
                        span About
</template>

<style lang="scss" >
.sidebar__wrapper{
    position: fixed;
    z-index: 100;
    top: 0;
    //left: 0;
    width: 90%;
    height: 100vh;
    left: -100%;
    transition: all .4s;
    .sidebar{
        width: 100%;
        height: 100%;
        background: $darkGray;
        box-shadow: 8px 0 20px #222;
        &__title{
            height: 100px;
            text-align: left;
            //border: 1px solid red;
            font-family: 'Roboto';
            font-weight: bold;
            font-size: 2em;
            span, .material-icons{
                position: relative;

            }
            span{
                top: 1em;
                left: .6em;
            }
            .material-icons{
                top: 1.2em;
                margin-left: 1em;
                font-size: 1em;
            }
        }
        &__content{
            &-items{
                display: flex;
                flex-direction: column;
            }
        }
        &__item{
            margin-bottom: .2em;
            a{
                display: block;
                padding: .9em;
                color: #fff;
                font-size: 1.2em;
                i{
                    position: relative;
                    top: 4px;
                }
                span{
                    margin-left: 2em;
                    font-family: 'Roboto';
                }

                &:active, &:hover{
                    background: darken($darkGray, 2);
                }
            }
        }
    }

}

.show{
    left: 0 !important;
}


</style>


<script>
export default {
    name: 'app-sidebar',
    props:{
        active: {
            type: Boolean
        }
    }
}
</script>

