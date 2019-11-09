<template lang="pug">
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
                    img(src='../../../images/content/mentor/vlad.png',).mentor__avatar-pic
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
                    img(src='../../../images/content/mentor/kov.png',).mentor__avatar-pic
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
                    img(src='../../../images/content/mentor/vlad.png',).mentor__avatar-pic
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
                    img(src='../../../images/content/mentor/kov.png',).mentor__avatar-pic
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
    
</template>