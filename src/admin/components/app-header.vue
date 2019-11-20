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
                ['Обо мне','/'],
                ['Работы','/works'],
                ['Отзывы','/reviews']
              ]
            each item in menu
              li.nav__item 
                router-link(tag="a" to=item[1]).nav__link #{item[0]}
                //- a(href=item[1]).nav__link #{item[0]}
</template>