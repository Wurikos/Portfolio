
<style lang="postcss">
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600..");
body {
  margin: 0;
  box-sizing: border-box;
}

.container {
  @include phones {
    width: 100%;
  } 
}

li {
  list-style: none;
}

.head__up {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-image: -webkit-linear-gradient(
    0deg,
    rgb(62, 62, 89) 0%,
    rgb(69, 69, 115) 100%
  );
}

.head__up-row {
  display: flex;
  color: white;
  align-items: center;
}
.head__user{
  display: flex;
  justify-items: center;
  align-items: center;
}

.head__user-avatar{
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: url("../images/content/mentor/vlad.png") no-repeat center center;
  margin-right: 10px;
}
.head__user-name {
  font-size: 18px;
  font-weight: 700px;
  margin-right: 30px;
  @include phones{
    display: none;
  }
}

.head__text {
  font-size: 14px;
  font-weight: 400px;
  opacity: 0.5;
  @include phones{
    display: none;
  }
}

.head__down {
  display: flex;
  align-items: center;
    @include phones{
    justify-content: center;
  }
}

.head__btn-link {
  opacity: 0.5;
  font-size: 16px;
  font-weight: 400px;
}

.head__nav-list {
  display: flex;

}

.nav__item {
  padding: 30px;
  border-bottom: 2px solid transparent;
  &:last-child {
    margin-right: 0px;
  }
  &:hover {
    border-bottom: 2px solid blue;
  }
  @include phones{
    padding: 20px;
  }
}

.nav__link {
  text-decoration: none;
  color: #414c63;
  font-size: 16px;
  font-weight: 600;
}

.aboutme {
  background-color: #f8f9fe;
}

.aboutme__head {
  display: flex;
  align-items: center;
  @include phones {
    display: flex;
    flex-direction:column;
    align-items: start;
    padding: 20px 0px;
  }
}

.aboutme__head-title {
  font-weight: 600;
  color: #414c63;
  margin-right: 60px;
  @include phones{
    font-size: 18px;
  }
}

.aboutme__btn-icon {
  position: relative;
  height: 20px;
  width: 20px;
  background: url("../images/content/admin/circle.png");
  background-size: cover;
  background-position: center center/ no repeat;
  margin-right: 7px;
}

.aboutme__icon-plus {
  display: block;
  position: absolute;
  color: white;
  line-height: 20px;
  font-size: 20px;
  font-weight: 700px;
  text-align: center;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}

.aboutme__head-btn {
  padding: 40px 0px;
  display: flex;
  align-items: center;
  @include phones{
    padding: 16px 0px;
  }
}

.aboutme__btn {
  font-weight: 700;
  font-size: 16px;
  color: #383bcf;
}

.aboutme {
  padding: 20px;
  background-color: white;
  min-width: 530px;
  min-height: 390px;
  margin-bottom: 30px;
  box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);
  
  @include tablets{
     padding: 14px;
     min-width: 350px;
     .aboutme--new{
       display:none;
     }
  }
  @include phones{
    min-width: 340px;
  }
 
}

.form__aboutme-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.form__head {
  display: flex;
  justify-content: space-between;
}

.form__content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 250px;
}

.form__group-name {
  padding: 7px;
  border-bottom: 0.9px solid grey;
}

.form__btn__icon-accept {
  display: block;
  background: svg-load("tick.svg", fill= "green", width= "10px", height= "10px")
    center center no-repeat;
  width: 30px;
  height: 30px;
}

.form__btn-group {
  display: flex;
}

.form__btn__icon-close {
  display: block;
  background: svg-load(
      "Cross.svg",
      fill= "#c92e2e",
      width= "10px",
      height= "10px"
    )
    center center no-repeat;
  width: 30px;
  height: 30px;
}

.form__skill-item {
  display: flex;
  justify-content: space-between;
}

.form__skill-name {
  margin-right: 10px;
  border-bottom: 1px solid black;
}

.item__row {
  display: flex;
  width:50%;
}
.item__skill-btn{
  display:flex;
  align-items:center;
}
.item__skill-value {
  margin-right: 60px;
  border-bottom: 1px solid black;
   @include tablets{
     margin-right: 10px;
   }
}

.form__skill-item {
  margin: 20px 0px;
}

input {
  outline: none;
  border: none;
}

.form__skill-newitem {
  position: absolute;
  bottom: -15%;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.new__item-confirm {
  position: relative;
  border-radius: 50%;
  color: white;
  background-image: -webkit-linear-gradient(
    0deg,
    rgb(0, 106, 237) 0%,
    rgb(32, 80, 220) 48%,
    rgb(63, 53, 203) 100%
  );
  width: 40px;
  height: 40px;
}

.new__item-confirm-plus {
  display: block;
  position: absolute;
  color: white;
  line-height: 20px;
  font-size: 30px;
  font-weight: 700px;
  text-align: center;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}

.item__btn-edit {
  margin-right: 10px;
  width: 20px;
  height: 20px;
  background: svg-load(
      "pencil.svg",
      fill= "#a0a5b1",
      width= "10px",
      height= "10px"
    )
    center center no-repeat;
}

.item__btn-delete {
  width: 20px;
  height: 20px;
  background: svg-load(
      "trash.svg",
      fill= "#a0a5b1",
      width= "10px",
      height= "10px"
    )
    center center no-repeat;
}

.works {
  background-color: #f8f9fe;
}

.works__content {
  margin-bottom: 30px;
  display: flex;

  @include tablets{
    flex-direction:column;
    align-items:center;
    justify-content:center;
  }
  @include phones{
    min-width:320px;
  }
}

.works__content-btn {
  display: flex;
  justify-content: flex-end;
  @include tablets{
    justify-content: center;
  }
}
.works__content-btn-save {
  border-radius: 30px;
  color: white;
  background-image: -webkit-linear-gradient(
    0deg,
    rgb(0, 106, 237) 0%,
    rgb(32, 80, 220) 48%,
    rgb(63, 53, 203) 100%
  );
  width: 181px;
  height: 50px;
}
.works__content-btn-cancel {
  font-size: 16px;
  color: #383bcf;
  margin-right: 30px;
}
.works__head {
  padding: 40px 0px;
  display: flex;
  align-items: center;
}

.works-wrapper {
  margin-right: 30px;
  margin-bottom: 30px;
  padding: 20px;
  background-color: white;
  min-width: 1080px;
  min-height: 780px;
  box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);
  @include tablets{
    min-width: 768px;
    margin-right: 0px;
  }
  @include phones{
    min-width: 320px;
  }
}

.works__edit {
  margin-bottom: 55px;
}

.works__edit-subtitle {
  font-size: 18px;
  font-weight: 600;
  color: #414c63;
}

.works__content-desc {
  margin-right: 28px;
  &--right {
    display: flex;
    flex-direction: column;
    width: 100%;
    @include tablets{
      padding: 30px 80px;
    }
    @include phones {
      margin:0;
      padding: 15px 0px;
    }
  }
   @include phones {
      margin:0;}
}

.works__img-block {
  border: 1px dashed black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #dee4ed;
  min-width: 500px;
  min-height: 280px;
  
  @include phones{
    min-width: 320px;
  }
}

.works__img-title {
  padding: 0 50px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 30px;
}

.works__download-btn {
  border-radius: 30px;
  color: white;
  background-image: -webkit-linear-gradient(
    0deg,
    rgb(0, 106, 237) 0%,
    rgb(32, 80, 220) 48%,
    rgb(63, 53, 203) 100%
  );
  width: 181px;
  height: 50px;
}

.site__title {
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;

}

.site__text {
  color: #414c63;
  font-size: 16px;
  font-weight: 600;
  padding: 15px 0px;
  border-bottom: 1px solid black;
}

.site__textarea {
  margin-top: 10px;
  min-height: 145px;
}

.add__works-list {
  display: flex;
  flex-wrap: wrap;
}

.add__works-item {
  background: white;
  opacity: 0.702;
  transition: 0.2s;
  margin-bottom: 30px;
  box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);
  margin-right: 30px;
  width: 375px;
  min-height: 560px;
  &:hover {
    opacity: 1;
  }
  &--new {
    background-image: -webkit-linear-gradient(
      0deg,
      rgb(0, 106, 237) 0%,
      rgb(32, 80, 220) 48%,
      rgb(63, 53, 203) 100%
    );
    opacity: 1;
    @include phones{
      min-width: 320px;
      min-height: 110px;
      margin-bottom: 14px;
    }
  }
  @include tablets{
    margin-right: 15px;
  }
}

.add__item-pic--new {
  border-width: 2px;
  border-color: rgb(255, 255, 255);
  border-style: solid;
  border-radius: 50%;
  width: 146px;
  height: 146px;
  margin-bottom: 35px;
  position: relative;

  @include phones{
    margin-bottom: 10px;
    width: 50px;
    height: 50px
    }
}

.add__item-title {
  color: white;
  font-weight: 600;
  font-size: 18px;
}

.add__item-plus {
  font-size: 70px;
  color: white;
  display: block;
  width: 80px;
  height: 80px;
  line-height: 80px;
  position: absolute;
  text-align: center;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 5;
   @include phones{
     font-size: 30px;
   }
}

.add__works-llink {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.add__item-content-btn {
  display: flex;
  justify-content: space-between;
}

.add__item-btn-row {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.add__item-btn-edit {
  color: #414c63;
  font-size: 16px;
  font-weight: 700px;
}

.add__item-btn-delete {
  color: #414c63;
  font-size: 16px;
  font-weight: 700px;
}

.add__item-pic-edit {
  display: block;
  height: 16px;
  width: 16px;
  background: svg-load(
      "pencil.svg",
      fill= "#5a5dd7",
      width= "10px",
      height= "10px"
    )
    center center no-repeat;
}

.add__item-pic-delete {
  height: 16px;
  width: 16px;
  background: svg-load(
      "Cross.svg",
      fill= "#c92e2e",
      width= "10px",
      height= "10px"
    )
    center center no-repeat;
}

.add__item-content {
  padding: 20px;
}

.add__item-content-title {
  font-size: 18px;
  color: #414c63;
  font-weight: 600;
  margin: 30px 0px;
}

.add__item-content-text {
  line-height: 1.9;
  font-size: 16px;
  color: #414c63;
  font-weight: 400;
  margin-bottom: 30px;
}

.add__item-content-link {
  padding-top: 20px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  display: block;
  color: #383bcf;
}

.reviews {
  background-color: #f8f9fe;
}
.reviews__head {
  padding: 40px 0px;
  display: flex;
  align-items: center;
}
.add__reviews-list {
  display: flex;
  flex-wrap: wrap;
}

.add__reviews-item {
  background: white;
  padding: 20px;
  opacity: 0.702;
  transition: 0.2s;
  margin-bottom: 30px;
  box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);
  margin-right: 30px;
  width: 340px;
  min-height: 390px;
  @include tablets{
    &:last-child{
      display:none;
    }
    @include phones{
      margin-right: 0px;
      width: 100%;
      min-height: 110px;
      margin-bottom: 14px;
    }
  }
  &:hover {
    opacity: 1;
  }
  &--new {
    background-image: -webkit-linear-gradient(
      0deg,
      rgb(0, 106, 237) 0%,
      rgb(32, 80, 220) 48%,
      rgb(63, 53, 203) 100%
    );
    opacity: 1;
  }
}

.add__reviews-llink {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.reviews__mentor {
  display: flex;
  margin-bottom: 16px;
}

.mentor__name-rev {
  margin-bottom: 5px;
  color: #414c63;
  font-weight: 600;
  font-size: 18px;
}

.mentor__ps {
  color: #414c63;
  font-size: 16px;
  font-weight: 800;
}

.mentor__avatar {
  margin-right: 20px;
}

.mentor__name {
  font-size: 16px;
  color: #414c63;
  margin-bottom: 25px;
}

.mentor__avatar-pic {
  border-radius: 50%;
}

.reviews__new {
  padding: 20px;
  min-height: 525px;
  margin-bottom: 30px;
  background: white;
  box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);
  @include tablets {
    min-width: 525px;
  }
  @include phones{
    min-width: 320px;
  }
}
.reviews__content-btn {
  font-weight: 600;
  font-size: 16px;
  color: #383bcf;
}
.reviews__new-head {
  padding: 10px;
}
.reviews__divider {
  margin-bottom: 30px;
}
.reviews__new-head-title {
  font-size: 16px;
  font-weight: 600;
  color: gray;
}
.reviews__new-content {
  display: flex;
  @include phones {
    flex-direction:column;
  }
}
.new__content-desc {
  display: flex;
  flex-direction: column;
  align-items: center;
  @include phones{

  }
}
.new__content-img {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #dee4ed;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin-bottom: 30px;
}
.new__content-pic {
  width: 130px;
  height: 130px;
  background: svg-load(
      "user.svg",
      fill= "white",
      width= "120px",
      height= "120px"
    )
    center center no-repeat;
}
.new__form-head {
  margin-bottom: 30px;
  display: flex;
  @include tablets{
    flex-direction:column;
  }
}
.new__content-desc {
  margin-right: 40px;
   @include phones{
   margin-right: 0px; 
  }
}
.new__form-content {
  margin-bottom: 30px;
}
.new__form-avtor {
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  @include tablets{
    margin-bottom: 15px;
    &:last-child{
       margin-bottom: 0px;
    }
  }
}
.new__form-reviews {
  display: flex;
  flex-direction: column;
}
.new__content-form {
  padding-right: 30%;
  width: 100%;
  @include phones{
     padding-right: 0%;
  }
}
.new__form-avtor {
  width: 100%;
}
.new__form-btn {
  display: flex;
  justify-content: flex-end;
}
.new__form-avtor-text {
  color: #414c63;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.9375rem 0;
  border-bottom: 1px solid #000;
  font-size: 16px;
}

.authorization__wrapper {
height: 100vh;
background: url("../images/content/bg/Mountain-Baloon.jpg") no-repeat center
center / cover;
display: flex;
justify-content: center;
align-items: center;
position: relative;
&:after {
content: "";
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(#000, 0.8);
}
}

.authorization {
padding: 60px 75px;
background: #fff;
color: #000;
border-radius: 5px;
z-index: 5;
position: relative;
@include phones {
padding: 260px 23px;
width: 100%;
height: 100%;
border-radius: 0;
}
}

.authorization__title {
font-size: 36px;
font-weight: 600;
text-align: center;
margin-bottom: 30px;
@include phones {
font-size: 30px;
}
}

.form__authorization-row {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

.form__author-title {
font-weight: 600;
opacity: 0.4;
padding-left: 45px;
}

.form__input-hover {
position: relative;
}

.form__author-input {
width: 410px;
font-size: 18px;
font-weight: bold;
padding: 25px 25px 25px 45px;
border: none;
border-bottom: 1px solid #000;
margin-bottom: 35px;
@include phones {
width: auto;
}
}

.form__icon {
  position: absolute;
  top: 20px;
  left: 0;
}

.form__login-icon {
  width: 30px;
  height: 30px;
  background: svg-load(
  "Avatar.svg",
  fill= "grey",
  width= "25px",
  height= "25px"
)
center center no-repeat;
}

.form__password-icon {
  width: 30px;
  height: 30px;
  background: svg-load(
  "key-open.svg",
  fill= "grey",
  width= "25px",
  height= "25px"
)
center center no-repeat;
}

  .form__authorization-button {
  text-align: center;
}

.form__author-button {
  padding: 30px 100px;
  background-image: linear-gradient(
  to right,
  rgba(#9100ef, 1),
  rgba(#5500f2, 1)
);
  border-radius: 40px 5px 40px 5px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
}

.authorization__button {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 31px;
  height: 31px;
  background: svg-load(
  "Cross.svg",
  fill= "black",
  width= "20px",
  height= "20px"
)
center center no-repeat;
}

</style>


<template lang="pug">
  .wrapper
    template(v-if="$route.meta.public")
      router-view
    template(v-else-if="userIsLogged")
      app-header
      app-nav
      main
        router-view(:pageTitle="$route.meta.title")
</template>

<script>
import appHeader from "./components/app-header";
export default {
  name:"app",
  data() {
    return {
      userIsLogged:true
    };
  },
  components:{
    appHeader
  }
};
</script>