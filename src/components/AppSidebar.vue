<template lang="pug">
.sidebar__wrapper(v-bind:class='{"show": active == true}')
    .sidebar
        .sidebar__title
            span Simple Notes
        .sidebar__content
            .sidebar__content-items
                .sidebar__item
                    a(href="#")
                        i.material-icons.md-light#home-icon home
                        span Notes
                .sidebar__item
                    a(href="#")
                        i.material-icons.md-light delete
                        span Trash
                .sidebar__item
                    a(href="#")
                        i.material-icons.md-light info
                        span About
</template>

<style lang="scss">
.sidebar__wrapper{
    position: fixed;
    top: 0;
    //left: 0;
    width: 90%;
    height: 100vh;
    left: -100%;
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
            span{
                position: relative;
                top: 1em;
                left: .6em;
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
    data(){
        return {
            active: false
        }
    }
}
</script>

