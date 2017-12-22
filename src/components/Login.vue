<template lang="pug">
.login
    h1.login__title Welcome to Simple Notes!
    button(@click="login").login__button Let's login
</template>


<style lang="scss">
.login{
    height: 100vh;
    padding: 5em;
    background: linear-gradient(to right, #232526, #414345);
    &__title{
        font-size: 1.9em;
        text-align: center;
    }
    &__button{
        padding: 1em;
        font-size: 1.5em;
        color: #fff;
        border-radius: 50px;
        background: linear-gradient($darkGray, #222);
        margin-top: 10em;
        width: 80%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
}

</style>


<script>
import types from '../store/types'
import firebase from 'firebase'

export default {
    name: 'login',
    methods: {
        login(){
            firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
                .then(result => {
                    this.$router.replace('/notes')
                })
                .catch(error => {
                    console.log(`Error ${error}`)
                })
        }
    },
    beforeMount(){
        if(firebase.auth().currentUser){
            this.$router.replace('/notes')

        }

    }
}
</script>
