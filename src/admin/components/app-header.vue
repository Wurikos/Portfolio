<template lang="pug">
    header.header
      .container
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
              router-link(
                tag='button'
                to="/reviews"  
              )
</template>