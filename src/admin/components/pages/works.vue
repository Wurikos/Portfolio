<template lang="pug">
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
                      img(src="../../../images/content/1.jpg")
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
                      img(src="../../../images/content/2.jpg")
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
                      img(src="../../../images/content/3.jpg")
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
                      img(src="../../../images/content/4.jpg")
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

</template>