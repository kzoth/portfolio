<template lang="pug">
  .container.container--content
    .title
      span.title__item  Блок &laquo;Обо мне&raquo;
      button.title__btn  Добавить группу
    ul.skills-card__list
      li.skills-card__item
        form(@submit.prevent='addNewCategory')
          input(type='text' v-model='title' placeholder='Имя категории')
          input(type='submit' value='Добавить')
        //- form.form
        //-   .form__row
        //-     label.form__label--top
        //-       .form__input-wrapper.form__input-wrapper--active
        //-         input(
        //-           type='text',
        //-           class='form__input form__input--group-name',
        //-           name='group-name', required, placeholder='Название новой группы')
        //-     .form__btns--top
        //-       button(type="submit" class="btn btn--submit")
        //-       button(type="reset" class="btn btn--reset")
        //-   .form__row
        //-   .form__row
        //-     label.form__label--bottom
        //-       .form__input-wrapper
        //-         input( 
        //-           type='text',
        //-           class='form__input form__input--skill-name',
        //-           name='skill-name', disabled, placeholder='Новый навык')
        //-     label.form__label--bottom
        //-       .form__input-wrapper
        //-         input(
        //-           type='text',
        //-           class='form__input form__input--skill-value',
        //-           name='skill-value', disabled, placeholder='0 %')
        //-     .form__btns--bottom
        //-       button(type="submit" class="btn btn--add-skill btn--disabled")

      //- li.skills-card__item
      //-   form.form
      //-     .form__row
      //-       span.form__group-name Frontend
      //-       .form__btns--top
      //-         button(type="submit" class="btn btn--rename")
      //-     .form__row
      //-       ul.form__skills-list
      //-         li.form__skills-item
      //-           label.form__label--middle
      //-             .form__input-wrapper
      //-               input( 
      //-                 type='text',
      //-                 class='form__input form__input--skill-name',
      //-                 name='skill', disabled, placeholder='html')
      //-               input( 
      //-                 type='text',
      //-                 class='form__input form__input--skill-value',
      //-                 name='skill', disabled, placeholder='30 %')
      //-             .form__btns--middle
      //-               button(type="submit" class="btn btn--rename")
      //-               button(type="submit" class="btn btn--delete")
      //-         li.form__skills-item
      //-           label.form__label--middle
      //-             .form__input-wrapper
      //-               input( 
      //-                 type='text',
      //-                 class='form__input form__input--skill-name',
      //-                 name='skill', disabled, placeholder='CSS')
      //-               input( 
      //-                 type='text',
      //-                 class='form__input form__input--skill-value',
      //-                 name='skill', disabled, placeholder='50 %')
      //-             .form__btns--middle
      //-               button(type="submit" class="btn btn--rename")
      //-               button(type="submit" class="btn btn--delete")
      //-         li.form__skills-item
      //-           label.form__label--middle
      //-             .form__input-wrapper
      //-               input( 
      //-                 type='text',
      //-                 class='form__input form__input--skill-name',
      //-                 name='skill', disabled, placeholder='Javascript')
      //-               input( 
      //-                 type='text',
      //-                 class='form__input form__input--skill-value',
      //-                 name='skill', disabled, placeholder='100 %')
      //-             .form__btns--middle
      //-               button(type="submit" class="btn btn--rename")
      //-               button(type="submit" class="btn btn--delete")                
      //-     .form__row
      //-       label.form__label--bottom
      //-         .form__input-wrapper.form__input-wrapper--active
      //-           input( 
      //-             type='text',
      //-             class='form__input form__input--skill-name',
      //-             name='skill-name', required, placeholder='Новый навык')
      //-       label.form__label--bottom
      //-         .form__input-wrapper.form__input-wrapper--active
      //-           input(
      //-             type='text',
      //-             class='form__input form__input--skill-value',
      //-             name='skill-value', required, placeholder='0 %')
      //-       .form__btns--bottom
      //-         button(type="submit" class="btn btn--add-skill")
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    title: ''
  }),
  methods: {
    // ...mapActions('categories', ['addCategory']),
    // async addNewCategory() {
    //   try {
    //     await this.addCategory(this.title)
    //   } catch (error) {
    //     alert(error.message)
    //   }
    // }
  }
}
</script>

<style lang="pcss" scoped>
  .container--content {
    width: 93%;
  }

  .title {
    min-height: 160px;
    display: flex;
    align-items: center;
  }

  .title__item {
    font-size: 24px;
    font-weight: bold;
    margin-right: 65px;
  }

  .title__btn {
    color: $href-color;
    font-size: 18px;
    font-weight: 600;
    background: transparent;

    &::before {
      content: '';
      display: inline-block;
      left: 0;
      top: 0;
      background: svg-load('admin-plus-btn.svg', fill=$text-color, width=100%, height=100%);
      width: 25px;
      height: 25px;
      margin-right: 10px;
      vertical-align: middle;
    }
  }

  .skills-card__list {
    display: grid;
    grid-gap: 35px;
    grid-template-columns: 600px 600px;
  }

  .skills-card__item {
    min-height: 440px;
    background: #fff;
    display: flex;
    justify-content: center;
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  }

  .form {
    width: 94%;
  }

  .form__row {
    display: flex;
    height: 20%;

    &:first-child {
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      justify-content: space-between;
      align-items: center;
    }
    
    &:nth-child(2n) {
      height: 60%;
    }

    &:last-child {
      align-items: flex-start;
      justify-content: flex-end;
    }
  }

  .form__input-wrapper {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0px;
      bottom: -3px;
      background-color: #000;
      opacity: 0.5;
    }
  }

  .form__input-wrapper--active {
    &::after {
      opacity: 1;
    }
  }

  .form__label--top .form__input-wrapper {
    margin-left: 10px;
  }

  .form__label--middle {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .form__label--middle .form__input-wrapper::after {
    display: none;
  }

  .form__label--bottom {
    margin-left: 10px;
    &:first-child {
      margin: 0;
    }
  }

  .form__input {
    outline: none;
    border: transparent;
    font-size: 20px;
    font-weight: 600;
    padding: 15px 0px;
    width: inherit;
    background: transparent;
  }

  .form__input--group-name {
    width: 310px;
  }

  .form__input--skill-name {
    width: 245px;
    padding: 15px 15px;
  }

  .form__label--middle .form__input--skill-name{
    width: 350px;
  } 

  .form__input--skill-value {
    width: 85px;
    padding: 15px 10px;
  }

  .form__btns--top {
    margin-right: 10px;
  }

  .form__btns--bottom {
    margin-left: 30px;
    margin-right: 20px;
    padding-top: 10px;
  }

  .btn {
    width: 20px;
    height: 15px;
  }

  .form__btns--middle {
    margin-right: 10px;
    width: 60px;
    display: flex;
    justify-content: space-between;

    & .btn {
      width: 20;
      height: 20px;
    }
  }

  .btn--submit {
    background: svg-load('tick.svg', fill=#00d70a, width=100%, height=100%) no-repeat;
    margin-right: 20px;
  }

  .btn--reset {
    background: svg-load('Cross.svg', fill=#bf2929, width=100%, height=100%) no-repeat;
  }

  .btn--add-skill {
    width: 50px;
    height: 50px;
    background: svg-load('admin-plus-btn.svg', width=100%, height=100%) no-repeat;
  }

  .btn--disabled {
    opacity: 0.1;
  }

  .btn--rename,
  .btn--delete {
    opacity: 0.5;
    transition: 0.3s;

    &:hover {
      opacity: 1;
    }
  }

  .btn--rename {
    background: svg-load('pencil.svg', fill=$text-color, width=100%, height=100%) no-repeat;
  }

  .btn--delete {
    background: svg-load('trash.svg', fill=$text-color, width=100%, height=100%) no-repeat;
  }

  .form__group-name {
    font-weight: 600;
    font-size: 22px;
    margin-left: 20px;
  }

  .form__skills-list {
    width: 100%;
  }

</style>