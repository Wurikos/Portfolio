
 <style  lang="postcss">
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600..");

 body{
   margin: 0;
   box-sizing: border-box;
 }
  header{
    
  }
  li{
    list-style: none;
  }
  .head__up{
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #424267;
  }
  .head__up-row{
    display: flex;
    color: white;
  }
  .head__down{
    height: 80px;
    background-color: yellow;
  }
  .head__nav-list{
    display: flex;
  }
  .nav__item{
    margin-right: 10px;
    &:last-child{
      margin-right: 0px;
    }
  }
  .nav__link{
    text-decoration: none;
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
            .head__btn
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

</template>