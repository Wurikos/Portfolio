<template lang="pug">
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
</template>
<script>
export default {
    props: {
    category: Object
  }
}
</script>