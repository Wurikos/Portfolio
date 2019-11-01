import Vue from "vue";
import { regExpLiteral } from "babel-types";
new Vue({
el: '.aboutme__form',
data:{
    name: '',
    email: '',
    message: '',
    nameValid:true,
    emailValid:true,
    messageValid:true,
    nameError: '',
    emailError:'',
    messageError:'',
    overlayHidden:true,
    resultMessage:''
},
methods:{
    validateName(){
        this.name = this.$el.querySelector('.form__block--name').value;
        if(this.name.length < 3){
            this.nameValid= false;
            this.nameError = 'Слишком короткое имя';
        }else{
            this.nameValid = true;
            this.nameError = '';
        }
        return this.nameValid;
    },
    validateEmail(){
        var reqex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        this.email = this.$el.querySelector('.form__block--email').value;
        if(this.email.length < 8){
            this.emailValid= false;
            this.emailError = 'Короткий email';
        }else if (!reqex.test(this.email)) {
            this.emailValid = false;
            this.emailError = 'Неверный email';
        }else {
            this.emailValid =true;
            this.emailError = '';
        }
        return this.emailValid;
        
    },
    validateMessage(){
        this.message = this.$el.querySelector('.form__desc--message').value;
        if(this.message.length < 20){
            this.mesasgeValid= false;
            this.messageError = 'Слишком короткое сообщение';
        }else {
            this.messageValid = true;
            this.messageError = '';
        }
        return this.emailValid;
        
    },
    submitForm(){
        var nameValid =this.validateName(),
            emailValid =this.validateEmail(),
            messageValid =this.validateMessage();

        if (nameValid && emailValid & messageValid) {
            var userData = {
                username:this.name,
                email:this.email,
                message:this.message
            }
            fetch('src/data/succes.txt', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(userData)
            }).then ( (Response) =>{
                this.resultMessage= "Сообщение отправлено!";
                this.overlayHidden= false;
                setTimeout(this.hideOverlay, 5000);
            });
        }
    },
    hideOverlay() {
        this.overlayHidden =true;
    }
}

});