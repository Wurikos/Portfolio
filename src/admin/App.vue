
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
    padding: 10px;
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
      padding: 15px 0px;
    }
  }
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
  @include phones{
    width: 50%;
  }
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
      min-width: 320px;
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
  body
    .wrapper
      .container
        header
          .head__up
            .head__up-row
              .head__user
                .head__user-avatar
                .head__user-name Сулин Александр
              .head__text Панель администрирования
            .head__up-row
              .head__out-btn
                a(href="#").head__btn-link Выйти
          .head__down
            ul.head__nav-list
              -
                var menu = [
                  'Обо мне',
                  'Работы',
                  'Отзывы'
                ]
              each item in menu
                li.nav__item
                  a(href="#").nav__link #{item}
        section.aboutme
          .container
            .aboutme__head
              .aboutme__head-name
                h2.aboutme__head-title Блок «Обо мне»
              .aboutme__head-btn
                button(type="button").aboutme__btn-icon
                  .aboutme__icon-plus +
                button(type="button").aboutme__btn Добавить группу
            .form__aboutme-wrapper
              form.aboutme.aboutme--new
                .form__head
                  .form__skill-group
                    input.form__group-name(type="text" name="name" placeholder="Название новой группы")
                  .form__btn-group 
                    button(type="button").form__btn__icon-accept

                    button(type="button").form__btn__icon-close
                hr.form-divider
                .form__content
                  .form__skill-newitem
                    input.form__skill-name(type="text" name="name" placeholder="Новый навык")
                    input.item__skill-value(type="number" name="name" min='0' max='100' placeholder="100")
                    button(type="button").new__item-confirm
                      .new__item-confirm-plus +
              form.aboutme
                .form__head
                  .form__skill-group
                    input.form__group-name(type="text" name="name" placeholder="Workflow")
                  .form__btn-group 
                    button(type="button").form__btn__icon-accept
                    button(type="button").form__btn__icon-close
                hr.form-divider
                .form__content
                  ul.form__skill-list
                    li.form__skill-item
                      .item__row
                        input.skill__item-name(type="text" name="name" placeholder="Git")
                      .item__row
                        input.item__skill-value(type="number" name="name" min='0' max='100' placeholder="100")
                        .item__skill-btn
                          button(type="button").item__btn-edit
                          button(type="button").item__btn-delete 
                    li.form__skill-item
                      .item__row
                        input.skill__item-name(type="text" name="name" placeholder="Terminal")
                      .item__row
                        input.item__skill-value(type="number" name="name" min='0' max='100' placeholder="90")
                        .item__skill-btn
                          button(type="button").item__btn-edit
                          button(type="button").item__btn-delete 
                    li.form__skill-item
                      .item__row
                        input.skill__item-name(type="text" name="name" placeholder="Gulp")
                      .item__row
                        input.item__skill-value(type="number" name="name" min='0' max='100' placeholder="80")
                        .item__skill-btn
                          button(type="button").item__btn-edit
                          button(type="button").item__btn-delete 
                    li.form__skill-item
                      .item__row
                        input.skill__item-name(type="text" name="name" placeholder="Webpack")
                      .item__row
                        input.item__skill-value(type="number" name="name" min='0' max='100' placeholder="85")
                        .item__skill-btn
                          button(type="button").item__btn-edit 
                          button(type="button").item__btn-delete

                  .form__skill-newitem
                    input.form__skill-name(type="text" name="name" placeholder="Новый навык")
                    input.item__skill-value(type="number" name="name" min='0' max='100' placeholder="100")
                    button(type="button").new__item-confirm
                      .new__item-confirm-plus +

              form.aboutme
                .form__head
                  .form__skill-group
                    input.form__group-name(type="text" name="name" placeholder="Frontend")
                  .form__btn-group 
                    button(type="button").form__btn__icon-accept
                    button(type="button").form__btn__icon-close
                hr.form-divider
                .form__content
                  ul.form__skill-list
                    li.form__skill-item
                      .item__row
                        input.skill__item-name(type="text" name="name" placeholder="Html5")
                      .item__row
                        input.item__skill-value(type="number" name="name" min='0' max='100' placeholder="100")
                        .item__skill-btn
                          button(type="button").item__btn-edit
                          button(type="button").item__btn-delete 
                    li.form__skill-item
                      .item__row
                        input.skill__item-name(type="text" name="name" placeholder="CSS3")
                      .item__row
                        input.item__skill-value(type="number" name="name" min='0' max='100' placeholder="90")
                        .item__skill-btn
                          button(type="button").item__btn-edit
                          button(type="button").item__btn-delete
                    li.form__skill-item
                      .item__row
                        input.skill__item-name(type="text" name="name" placeholder="JavaScript")
                      .item__row
                        input.item__skill-value(type="number" name="name" min='0' max='100' placeholder="80")
                        .item__skill-btn
                          button(type="button").item__btn-edit 
                          button(type="button").item__btn-delete
                    li.form__skill-item
                      .item__row
                        input.skill__item-name(type="text" name="name" placeholder="Jquery и Vue.js")
                      .item__row
                        input.item__skill-value(type="number" name="name" min='0' max='100' placeholder="85")
                        .item__skill-btn
                          button(type="button").item__btn-edit
                          button(type="button").item__btn-delete
                  .form__skill-newitem
                    input.form__skill-name(type="text" name="name" placeholder="Новый навык")
                    input.item__skill-value(type="number" name="name" min='0' max='100' placeholder="100")
                    button(type="button").new__item-confirm
                      .new__item-confirm-plus +
        section.works
          .container
            .works__head
              h2.aboutme__head-title Блок «Работы»
            .works-wrapper
              .works__edit
                .works__edit-title
                  h3.works__edit-subtitle Редактирование Работы
                hr.form-divider
              .works__content
                .works__content-desc
                  .works__img-block
                    .works__img-title Перетащите или загрузите для загрузки изображения
                    button(type="button").works__download-btn Загрузить
                .works__content-desc--right
                  label.site__title Название
                    input.site__text(type="text" name="name" placeholder="Дизайн сайта для авто салона Porsche")
                  label.site__title Ссылка
                    input.site__text(type="text" name="name" placeholder="https://www.porsche-pulkovo.ru")
                  label.site__title Описание
                    textarea.site__text.site__textarea(type="textarea" name="name" )
                  label.site__title Добавление тэга
                    input.site__text(type="text" name="name" placeholder="Jquery Vue.js HTML5")
                  .works__content-btn
                     button(type="button").works__content-btn-cancel Отмена
                     button(type="button").works__content-btn-save Сохранить
                    
            .add__works
              .add__works-content
                ul.add__works-list
                  li.add__works-item.add__works-item--new
                    a(href="#").add__works-llink
                      .add__item-pic--new
                        .add__item-plus +
                      .add__item-title Добавить работу
                  li.add__works-item
                    .add__item-pic
                      img(src="../images/content/1.jpg")
                    .add__item-content
                      .add__item-content-title Сайт школы образования 
                      .add__item-content-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                        a(href="#").add__item-content-link http://loftschool.ru
                      .add__item-content-btn
                        .add__item-btn-row
                          button(type="button").add__item-btn-edit Править
                          .add__item-pic-edit
                        .add__item-btn-row
                          button(type="button").add__item-btn-delete Удалить
                          .add__item-pic-delete
                  li.add__works-item
                    .add__item-pic
                      img(src="../images/content/2.jpg")
                    .add__item-content
                      .add__item-content-title Сайт школы образования 
                      .add__item-content-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                        a(href="#").add__item-content-link http://loftschool.ru
                      .add__item-content-btn
                        .add__item-btn-row
                          button(type="button").add__item-btn-edit Править
                          .add__item-pic-edit
                        .add__item-btn-row
                          button(type="button").add__item-btn-delete Удалить
                          .add__item-pic-delete
                  li.add__works-item
                    .add__item-pic
                      img(src="../images/content/3.jpg")
                    .add__item-content
                      .add__item-content-title Сайт школы образования 
                      .add__item-content-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                        a(href="#").add__item-content-link http://loftschool.ru
                      .add__item-content-btn
                        .add__item-btn-row
                          button(type="button").add__item-btn-edit Править
                          .add__item-pic-edit
                        .add__item-btn-row
                          button(type="button").add__item-btn-delete Удалить
                          .add__item-pic-delete
                  li.add__works-item
                    .add__item-pic
                      img(src="../images/content/4.jpg")
                    .add__item-content
                      .add__item-content-title Сайт школы образования 
                      .add__item-content-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                        a(href="#").add__item-content-link http://loftschool.ru
                      .add__item-content-btn
                        .add__item-btn-row
                          button(type="button").add__item-btn-edit Править
                          .add__item-pic-edit
                        .add__item-btn-row
                          button(type="button").add__item-btn-delete Удалить
                          .add__item-pic-delete


                        
                    
        section.reviews
          .container
            .reviews__head
              h2.aboutme__head-title Блок «Отзывы»
            .reviews__new
              .reviews__new-head
                h4.reviews__new-head-title Новый отзыв
              hr.reviews__divider
              .reviews__new-content
                .new__content-desc
                  .new__content-img
                    .new__content-pic
                  .new__content-btn
                    button(type="button").reviews__content-btn Добавить фото
                .new__content-form
                  .new__form-head
                    label.new__form-avtor Имя автора
                      input.new__form-avtor-text(type="text" name="name" placeholder="Ковальчук Дмитрий")
                    label.new__form-avtor Титул автора
                      input.new__form-avtor-text(type="text" name="name" placeholder="Ковальчук Дмитрий")
                  .new__form-content
                    label.new__form-reviews Отзыв
                      textarea.site__text.site__textarea(type="textarea" name="name" )
                  .new__form-btn 
                    button(type="button").works__content-btn-cancel Отмена
                    button(type="button").works__content-btn-save Сохранить

            .add__reviews
              .add__reviews-content
                  ul.add__reviews-list
                    li.add__reviews-item.add__reviews-item--new
                      a(href="#").add__reviews-llink
                        .add__item-pic--new
                          .add__item-plus +
                        .add__item-title Добавить отзыв
                    li.add__reviews-item
                      .reviews__mentor
                        .mentor__avatar
                          img(src='../images/content/mentor/vlad.png',).mentor__avatar-pic
                        .mentor__info
                          .mentor__name-rev Владимир Сабанцев
                          .mentor__ps Преподаватель
                      hr.form-divider
                      .add__item-content
                        .add__item-content-text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                        .add__item-content-btn
                          .add__item-btn-row
                            button(type="button").add__item-btn-edit Править
                            .add__item-pic-edit
                          .add__item-btn-row
                            button(type="button").add__item-btn-delete Удалить
                            .add__item-pic-delete
                    li.add__reviews-item
                      .reviews__mentor
                        .mentor__avatar
                          img(src='../images/content/mentor/kov.png',).mentor__avatar-pic
                        .mentor__info
                          .mentor__name-rev Ковальчук Дмитрий
                          .mentor__ps Основатель Loftschool
                      hr.form-divider
                      .add__item-content
                        .add__item-content-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                        .add__item-content-btn
                          .add__item-btn-row
                            button(type="button").add__item-btn-edit Править
                            .add__item-pic-edit
                          .add__item-btn-row
                            button(type="button").add__item-btn-delete Удалить
                            .add__item-pic-delete
                    li.add__reviews-item
                      .reviews__mentor
                        .mentor__avatar
                          img(src='../images/content/mentor/vlad.png',).mentor__avatar-pic
                        .mentor__info
                          .mentor__name-rev Владимир Сабанцев
                          .mentor__ps Преподаватель
                      hr.form-divider
                      .add__item-content
                        .add__item-content-text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                        .add__item-content-btn
                          .add__item-btn-row
                            button(type="button").add__item-btn-edit Править
                            .add__item-pic-edit
                          .add__item-btn-row
                            button(type="button").add__item-btn-delete Удалить
                            .add__item-pic-delete
                    li.add__reviews-item
                      .reviews__mentor
                        .mentor__avatar
                          img(src='../images/content/mentor/kov.png',).mentor__avatar-pic
                        .mentor__info
                          .mentor__name-rev Ковальчук Дмитрий
                          .mentor__ps Основатель Loftschool
                      hr.form-divider
                      .add__item-content 
                        .add__item-content-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                        .add__item-content-btn
                          .add__item-btn-row
                            button(type="button").add__item-btn-edit Править
                            .add__item-pic-edit
                          .add__item-btn-row
                            button(type="button").add__item-btn-delete Удалить
                            .add__item-pic-delete
      .authorization__wrapper
        .authorization
          .authorization__title
            .authorization__title-text Авторизация
          form.form__authorization
            .form__authorization-row
              label.form__authorization-label.form__label-login
                span.form__author-title.form__login-title Логин
                .form__input-hover
                  input.form__author-input(type="text" name="name")
                  .form__login-icon.form__icon
              label.form__authorization-label.form__label-password
                span.form__author-title.form__password-title Пароль
                .form__input-hover
                  input.form__author-input(type="password" name="password")
                  .form__password-icon.form__icon
            .form__authorization-button
              button(type="button").form__author-button Отправить
          button(type="button").authorization__button
            .authorization__close


          



      
                    

                


            
            

              


</template>