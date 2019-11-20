<template lang="pug">
    .authorization__wrapper
        .authorization
            .authorization__title
                .authorization__title-text Авторизация
            form.form__authorization(@submit.prevent="login")
                .form__authorization-row
                    label.form__authorization-label.form__label-login
                        span.form__author-title.form__login-title Логин
                        .form__input-hover
                            input.form__author-input(type="text" name="name" v-model="user.name")
                            .form__login-icon.form__icon
                    label.form__authorization-label.form__label-password
                        span.form__author-title.form__password-title Пароль
                        .form__input-hover
                            input.form__author-input(type="password" name="password" v-model="user.password")
                            .form__password-icon.form__icon
                .form__authorization-button
                    input(type="submit" value="Отправить").form__author-button 
            button(type="button").authorization__button
                .authorization__close         
</template>
<script>
import { setToken, setAuthHttpHeaderToAxios } from "@/helpers/token.js";
import { mapActions} from "vuex";
import $axios from '@/requests';
export default {
    data(){
        return{
            user:{
                name: 'sulin',
                password: '12345'
            }
        }
    },
    methods: {
        ...mapActions('user', ['loginUser']),
        async login(){
          
            try {
                const {data:{token}} =await this.loginUser(this.user);
                console.log('a');
                setToken(token);
                setAuthHttpHeaderToAxios($axios, token);
                this.$router.replace('/');
            } catch (error) {
                  console.log('b');
                
            }
        } 
    } 
}
</script>