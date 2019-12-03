<template lang="pug">
  .authorization-wrapper
    .authorization
      .authorization__block
        .authorization__container
          
          form(
            @submit.prevent='login'
          ).form--authorization
            .form__row
              .form__maintitle Авторизация
            .form__row
              label.form__elem
                .form__title  Логин
                .form__input-wrapper
                  .form__icon-wrapper 
                    .form__icon.form__icon--user
                  input(
                    v-model='user.name'
                    type='text',
                    class='form__input form__input--required',
                    name='login', required, placeholder='login')
            .form__row
              label.form__elem
                .form__title  Пароль
                .form__input-wrapper
                  .form__icon-wrapper 
                    .form__icon.form__icon--key
                  input(
                    v-model='user.password'
                    type='text',
                    class='form__input form__input--required',
                    name='password', required, placeholder='password')
            .form__row
              button(
                type='submit'
                class='btn btn--submit'
                )  Отправить
        button.close-button
</template>

<script>
import $axios from '../../requests';

export default {
  data: () => ({
    user: {
      name: '',
      password: ''
    }
  }),
  methods: {
    // async login() {
    //   try {
    //     const response = await $axios.post('/login', this.user);
    //     console.log(response);
    //   } catch (error) {
        
    //   }
    // }
  }
}
</script>

<style lang="pcss">
.authorization-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.authorization {
  height: 100%;
  /* background-image: url('../images/content/mountain-baloon-admin.jpg'); */
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;


  &::before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: $text-color;
    opacity: 0.8;
  }
}

.authorization__block {
  width: 650px;
  height: 600px;
  background: #fff;
  z-index: 100;
  position: relative;
}

.close-button {
  position: absolute;
  right: 40px;
  top: 40px;
  width: 30px;
  height: 30px;
  background: svg-load('cross.svg', fill=$text-color, width=100%, height=100%);
}

.authorization__container {
  height: inherit;
}

.form--authorization  {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.form--authorization .form__row {
  height: auto;
  border: none;
  width: 85%;
  justify-content: center;
}

.form__maintitle {
  font-size: 40px;
  font-weight: 600;
}

.form--authorization .form__elem {
  width: inherit;
}

.form--authorization .form__title {
  padding-left: 50px;
}

.form--authorization .form__input-wrapper {
  display: flex;
  width: 100%;
}

.form--authorization .form__icon-wrapper {
  display: flex;
  align-items: center;
}

.form--authorization .form__icon {
  width: 40px;
  height: 40px;
  cursor: pointer;
  opacity: 0.5;
}

.form__icon {
  &--user {
    background: svg-load('user.svg', fill=$text-color, width=100%, height=100%);
  }

  &--key {
    background: svg-load('key.svg', fill=$text-color, width=100%, height=100%);
  }
}

.form--authorization .form__input {
  padding: 20px 10px;
}

.form--authorization .btn--submit {
  width: 350px;
  height: 80px;
  background-image: linear-gradient(to right, #9300e8, #4a00ed);
  border-radius: 40px 0px 40px 0px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
}
</style>