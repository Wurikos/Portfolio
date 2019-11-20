<template lang="pug">
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
</template>template
<script>
export default {
  data() {
    return {
      categoryTitle: ""
    };
  },
  methods: {
    ...mapActions("categories", ["addCategory"]),
    async addSkillCategory() {
        console.log("a");
      try {
        const response = await this.addCategory(this.categoryTitle);
        console.log(response);
      } catch (e) {}
    }
  }  
}
</script>