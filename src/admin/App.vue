<template lang="pug">
  .root   
    header.header
      .container.container--header
        .header__pic-wrapper
          img.header__pic(src='../images/content/user.jpg')
        span.header__user-name  Егор Казуров
        span.header__title  Панель администрирования
        a.header__btn Выйти
    nav.menu
      .container.container--menu
        ul.menu__list
          li.menu__item
            a.menu__elem Обо мне
          li.menu__item
            a.menu__elem Работы
          li.menu__item
            a.menu__elem Отзывы
    
    main.content
      .container.container--content
        .title
          span.title__item  Блок &laquo;Обо мне&raquo;
          a.title__btn  Добавить группу
        ul.skills-card__list
          li.skills-card__item
            form.form
              .form__row
                label.form__label--top
                  .form__input-wrapper.form__input-wrapper--active
                    input(
                      type='text',
                      class='form__input form__input--group-name',
                      name='group-name', required, placeholder='Название новой группы')
                .form__btns--top
                  button(type="submit" class="btn btn--submit")
                  button(type="reset" class="btn btn--reset")
              .form__row
              .form__row
                label.form__label--bottom
                  .form__input-wrapper
                    input( 
                      type='text',
                      class='form__input form__input--skill-name',
                      name='skill-name', disabled, placeholder='Новый навык')
                label.form__label--bottom
                  .form__input-wrapper
                    input(
                      type='text',
                      class='form__input form__input--skill-value',
                      name='skill-value', disabled, placeholder='0 %')
                .form__btns--bottom
                  button(type="submit" class="btn btn--add-skill btn--disabled")

          li.skills-card__item
            form.form
              .form__row
                span.form__group-name Frontend
                .form__btns--top
                  button(type="submit" class="btn btn--rename")
              .form__row
                ul.form__skills-list
                  li.form__skills-item
                    label.form__label--middle
                      .form__input-wrapper
                        input( 
                          type='text',
                          class='form__input form__input--skill-name',
                          name='skill', disabled, placeholder='html')
                        input( 
                          type='text',
                          class='form__input form__input--skill-value',
                          name='skill', disabled, placeholder='30 %')
                      .form__btns--middle
                        button(type="submit" class="btn btn--rename")
                        button(type="submit" class="btn btn--delete")
                  li.form__skills-item
                    label.form__label--middle
                      .form__input-wrapper
                        input( 
                          type='text',
                          class='form__input form__input--skill-name',
                          name='skill', disabled, placeholder='CSS')
                        input( 
                          type='text',
                          class='form__input form__input--skill-value',
                          name='skill', disabled, placeholder='50 %')
                      .form__btns--middle
                        button(type="submit" class="btn btn--rename")
                        button(type="submit" class="btn btn--delete")
                  li.form__skills-item
                    label.form__label--middle
                      .form__input-wrapper
                        input( 
                          type='text',
                          class='form__input form__input--skill-name',
                          name='skill', disabled, placeholder='Javascript')
                        input( 
                          type='text',
                          class='form__input form__input--skill-value',
                          name='skill', disabled, placeholder='100 %')
                      .form__btns--middle
                        button(type="submit" class="btn btn--rename")
                        button(type="submit" class="btn btn--delete")                
              .form__row
                label.form__label--bottom
                  .form__input-wrapper.form__input-wrapper--active
                    input( 
                      type='text',
                      class='form__input form__input--skill-name',
                      name='skill-name', required, placeholder='Новый навык')
                label.form__label--bottom
                  .form__input-wrapper.form__input-wrapper--active
                    input(
                      type='text',
                      class='form__input form__input--skill-value',
                      name='skill-value', required, placeholder='0 %')
                .form__btns--bottom
                  button(type="submit" class="btn btn--add-skill")

      .container.container--content
        .title
          span.title__item  Блок &laquo;Работы&raquo;
        .edits-work
          .edits-work__title
            span.edits-work__title-elem  Редактирование работы
          form.form.form--edits-work
            .form__column.form__column--left
              .drag-n-drop
                span.drag-n-drop__text  Перетащите или загрузите<br>для загрузки изображения
                button.btn-with-text.btn-with-text--drag-n-drop Загрузить
            .form__column.form__column--right
              label.form__label--edits-work
                .form__title  Название
                .form__input-wrapper
                  input(
                    type='text', class='form__input form__input--edits-work', name='work-name',
                    required, placeholder='Дизайн какого-то сайта')
              label.form__label--edits-work
                .form__title  Ссылка
                .form__input-wrapper
                  input(
                    type='text', class='form__input form__input--edits-work', name='work-link',
                    required, placeholder='https://www.something.com')
              label.form__label--edits-work.form__label--text-area
                .form__title  Описание
                .form__input-wrapper
                  textarea(class='form__input  form__input--edits-work form__input--textarea', name="work-desc",
                  placeholder='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, nostrum.')
              label.form__label--edits-work
                .form__title  Добавление тэга
                .form__input-wrapper
                  input(
                    type='text', class='form__input form__input--edits-work', name='tag-add',
                    required, placeholder='Jquery, Vue.js, HTML5')
              .form__tags
                ul.tags__list
                  li.tags__item
                    span.tags__text Jquery
                    button.tags__cross
                  li.tags__item
                    span.tags__text Vue.js
                    button.tags__cross
                  li.tags__item
                    span.tags__text HTML5
                    button.tags__cross
              .form__btns--edits-work
                button.btn-with-text.btn-with-text--cancel Отмена
                button.btn-with-text.btn-with-text--save Сохранить

      .container.container--content
        .works
          ul.works__list
            li.works__item.works__item--add-work
              button.works__plus-btn--add-work
              span.works__text--add-work  Добавить<br>работу
            li.works__item.works__item--editing
              .works__img-wrapper
                img.works__img(src='../images/content/works-preview/1.jpg')
                .works__tags.works__tags--works
                  ul.tags__list
                    li.tags__item.tags__item--works  HTML
                    li.tags__item.tags__item--works  CSS
                    li.tags__item.tags__item--works  Javascript
              .works__desc
                .works__name  Какой-то сайт 1
                .works__text  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, aliquam!
                a.works__link  https://www.google.com/
                .works__btns
                  button.works__btn.works__btn--edit  Править
                  button.works__btn.works__btn--delete Удалить 
            li.works__item
              .works__img-wrapper
                img.works__img(src='../images/content/works-preview/2.jpg')
                .works__tags.works__tags--works
                  ul.tags__list
                    li.tags__item.tags__item--works  HTML
                    li.tags__item.tags__item--works  CSS
                    li.tags__item.tags__item--works  Javascript
              .works__desc
                .works__name  Какой-то сайт 2
                .works__text  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, aliquam!
                a.works__link  https://www.google.com/
                .works__btns
                  button.works__btn.works__btn--edit  Править
                  button.works__btn.works__btn--delete Удалить
            li.works__item
              .works__img-wrapper
                img.works__img(src='../images/content/works-preview/3.jpg')
                .works__tags.works__tags--works
                  ul.tags__list
                    li.tags__item.tags__item--works  HTML
                    li.tags__item.tags__item--works  CSS
                    li.tags__item.tags__item--works  Javascript
              .works__desc
                .works__name  Какой-то сайт 3
                .works__text  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, aliquam!
                a.works__link  https://www.google.com/
                .works__btns
                  button.works__btn.works__btn--edit  Править
                  button.works__btn.works__btn--delete Удалить
                  
      .container.container--content
        .title
          span.title__item  Блок &laquo;Отзывы&raquo;
        .edits-comment
          .edits-comment__title
            span.edits-comment__title-elem  Новый отзыв
          form.form.form--edits-comment
            .form__column.form__column--left--edits-comment
              .avatar
                img.avatar__img(src='../images/content/slideshow/man-user.png')
                button.btn-with-text.btn-with-text--avatar Добавить фото


            .form__column.form__column--right--edits-comment
              .form__row--edits-comment
                label.form__label--edits-comment
                  .form__title  Имя автора
                  .form__input-wrapper
                    input(
                      type='text', class='form__input form__input--edits-comment', name='author-name',
                      required, placeholder='Ковальчук Дмитрий')
                label.form__label--edits-comment
                  .form__title  Титул автора
                  .form__input-wrapper
                    input(
                      type='text', class='form__input form__input--edits-comment', name='author-title',
                      required, placeholder='Основатель LoftSchool')
              .form__row--edits-comment
                label.form__label--edits-comment.form__label--text-area
                  .form__title  Отзыв
                  .form__input-wrapper
                    textarea(class='form__input  form__input--edits-comment form__input--textarea--edits-comment', name="comment",
                    placeholder='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, nostrum.')
              .form__btns--edits-comment
                button.btn-with-text.btn-with-text--cancel Отмена
                button.btn-with-text.btn-with-text--save Сохранить

      .container.container--content
        .comments
          ul.comments__list
            li.comments__item.comments__item--add-comment
              button.comments__plus-btn--add-comment
              span.comments__text--add-comment  Добавить<br>отзыв
            li.comments__item.comments__item--editing
              .comments__avatar
                .comments__img-wrapper
                  img.comments__img(src='../images/content/slideshow/2a.png')
                .comments__title-wrapper
                  span.comments__title Владимир Сабанцев
                  span.comments__subtitle Преподаватель
              .comments__desc
                .comments__text  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, aliquam!
                .comments__btns
                  button.comments__btn.comments__btn--edit  Править
                  button.comments__btn.comments__btn--delete Удалить
            li.comments__item
              .comments__avatar
                .comments__img-wrapper
                  img.comments__img(src='../images/content/slideshow/1a.png')
                .comments__title-wrapper
                  span.comments__title Ковальчук Дмитрий
                  span.comments__subtitle Основатель Loftschool
              .comments__desc
                .comments__text  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, aliquam!
                .comments__btns
                  button.comments__btn.comments__btn--edit  Править
                  button.comments__btn.comments__btn--delete Удалить
            li.comments__item
              .comments__avatar
                .comments__img-wrapper
                  img.comments__img(src='../images/content/slideshow/man-user.png')
                .comments__title-wrapper
                  span.comments__title Name
                  span.comments__subtitle Occupation
              .comments__desc
                .comments__text  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, aliquam!
                .comments__btns
                  button.comments__btn.comments__btn--edit  Править
                  button.comments__btn.comments__btn--delete Удалить

    .authorization-wrapper
      .authorization
        .authorization__block
          .authorization__container
            
            form.form--authorization
              .form__row
                .form__maintitle Авторизация
              .form__row
                label.form__elem
                  .form__title  Логин
                  .form__input-wrapper
                    .form__icon-wrapper 
                      .form__icon.form__icon--user
                    input(
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
                      type='text',
                      class='form__input form__input--required',
                      name='password', required, placeholder='password')
              .form__row
                button(type='submit', class='btn btn--submit')  Отправить
          button.close-button
</template> 

<script>
export default {};
</script>

<style lang="pcss">
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

.header {
  background: #424267;
}

.container--header {
  width: 93%;
  grid-template-columns: 0.2fr 0.4fr 1.5fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  min-height: 90px;
}

.header__pic-wrapper {
  border-radius: 50%;
  overflow: hidden;
  width: 50px;
  height: 50px;
}

.header__user-name {
  color: #fff;
  font-weight: bold;
  font-size: 20px;
}

.header__title {
  color: #fff;
  opacity: 0.5;
}

.header__btn {
  color: #fff;
  text-decoration: underline;
  justify-self: end;
  opacity: 0.7;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
}

//////////////////////////////////////////////////////

.menu {

}

.container--menu {
  min-height: 85px;
}

.menu__list {
  display: flex;
}

.menu__item {
  align-self: center;
  text-align: center;
  width: 13%;
  position: relative;

  &:before,
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    height: 4px;
    left: 50%;
    bottom: -30px;
    background-color: $main-color;
  }

  &:before {
    transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
  }

  &:after {
    transition: width 0.3s ease-in-out;
  }

  &:focus:before,
  &:focus:after {
    width: 50%;
  }

  &:focus:before {
    left: 0;
  }
}

.menu__elem {
  font-size: 20px;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    color: $main-color;
  }
}

//////////////////////////////////////////////////////

.content {
  background-image: url('../images/content/mountain-baloon-admin.jpg');
  background-size: cover;
  min-height: 1000px;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    opacity: 0.8;
  }
}

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

//////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////

.edits-work {
  width: 1230px;
  min-height: 775px;
  background: #fff;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form--edits-work {
  width: 95%;
  display: flex;
}

.edits-work__title {
  width: 96%;
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 60px;
}

.edits-work__title-elem {
  font-weight: bold;
  font-size: 20px;
  margin-left: 10px;
}

.form__column {
  width: 50%;
}

.form__column--left {

}

.form__column--right {
  padding-left: 20px;
}

.drag-n-drop {
  background-image: url("data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill: lightgray; stroke: blue; stroke-width: 2; stroke-dasharray: 10 10'/></svg>");
  width: 97%;
  min-height: 315px;
  background-color: #dee4ed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.drag-n-drop__text {
  opacity: 0.5;
  font-size: 18px;
  font-weight: 600;
  line-height: 2.12;
  text-align: center;
  margin-bottom: 30px;
}

.btn-with-text {
  background-image: linear-gradient(to right, #006aed, #3f35cb);
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
}

.btn-with-text--drag-n-drop {
  width: 200px;
  height: 60px;
  border-radius: 30px;

}

.form__label--edits-work {
  display: block;
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 20px;
  }
}

.form__label--text-area .form__title {
  margin-bottom: 20px;
}

.form__label--text-area .form__input-wrapper {
  &::after {
    display: none;
  }
}

.form__title {
  opacity: 0.5;
  font-size: 18px;
  font-weight: 600;
}

.form__input-wrapper {

}
.form__input--edits-work {
  width: 100%;
}

.form__input--textarea {
  resize: none;
  padding: 20px 20px;
  height: 160px;
  border: solid 1px rgba(65, 76, 99, 0.5);;
}

.form__tags {
  margin-bottom: 35px;
}

.tags__list {
  display: flex;
  flex-direction: row;
}

.tags__item {
  text-align: center;
  opacity: 0.7;
  font-size: 16px;
  font-weight: 600;
  background-color: #f4f4f4;
  padding: 10px 20px;
  border-radius: 25px;
  min-width: 65px;
  margin-right: 15px;

  &:last-child {
    margin-right: 0px;
  }
}

.tags__text {
  vertical-align: middle;
  margin-right: 10px;
}

.tags__cross {
  width: 15px;
  height: 15px;
  background: svg-load('remove.svg', fill=$text-color, width=100%, height=100%) no-repeat;
  opacity: 0.7;
  transition: 0.3s;
  vertical-align: middle;

  &:hover {
    opacity: 1;
  }
}

.form__btns--edits-work {
  display: flex;
  justify-content: flex-end;
}

.btn-with-text {

}

.btn-with-text--cancel {
  background: transparent;
  color: $href-color;
  text-transform: none;
  margin-right: 60px;
}

.btn-with-text--save {
  width: 210px;
  height: 70px;
  border-radius: 35px;
}

//////////////////////////////////////////////////////

.works {
  padding-top: 70px;
  padding-bottom: 100px;
}

.works__list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3%;
  width: 98%;
}

.works__item {
  width: 1fr;
  height: 630px;
  background: white;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.works__item--add-work {
  background-image: linear-gradient(to right, #006aed, #3f35cb);
  justify-content: center;
  text-align: center;
  box-shadow: none;
}

.works__item--editing {
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    background-color: #fff;
  }
}

.works__plus-btn--add-work {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  border: solid 2px #ffffff;
  background: transparent;
  margin-bottom: 20px;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    left: 65px;
    top: 65px;
    width: 35px;
    height: 35px;
    background: svg-load('remove.svg', fill=#fff, width=100%, height=100%) no-repeat;
    transform: rotate(45deg);
  }
}

.works__text--add-work {
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  line-height: 1.67;
}

.works__img-wrapper {
  width: 100%;
  position: relative;
  margin-bottom: 10px;
}

.works__tags--works {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.tags__item--works {
  opacity: 1;
}

.works__desc {
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.works__name {
  font-size: 20px;
  font-weight: bold;
}

.works__text {
  opacity: 0.7;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.88;
  min-height: 200px;
}

.works__link {
  font-size: 18px;
  font-weight: 600;
  color: $href-color;
  height: 10%;
}

.works__btns {
  display: flex;
  justify-content: space-between;
  height: 15%;
}

.works__btn {
  font-size: 18px;
  font-weight: 600;
  opacity: 0.5;
  transition: 0.3s;
  background: transparent;

  &:hover {
    opacity: 1;
  }
}

.works__btn--edit::after,
.works__btn--delete::after {
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-left: 20px;
  vertical-align: middle;
}

.works__btn--edit::after {
  background: svg-load('pencil.svg', fill=$href-color, width=100%, height=100%) no-repeat;
}

.works__btn--delete::after {
  background: svg-load('Cross.svg', fill=red, width=100%, height=100%) no-repeat;
}

//////////////////////////////////////////////////////

.edits-comment {
  width: 1230px;
  min-height: 600px;
  background: #fff;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form--edits-comment {
  width: 95%;
  display: flex;
}

.edits-comment__title {
  width: 96%;
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 60px;
}

.edits-comment__title-elem {
  font-weight: bold;
  font-size: 20px;
  margin-left: 10px;
}

.form__column--left--edits-comment {
  width: 20%;
}

.form__column--right--edits-comment {
  padding-left: 30px;
  width: 80%;
}

.avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar__img {
  border-radius: 50%;
  margin-bottom: 30px;
}

.btn-with-text {
  background-image: linear-gradient(to right, #006aed, #3f35cb);
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
}

.btn-with-text--avatar {
  background: transparent;
  color: $href-color;
  text-transform: none;
}

.form__row--edits-comment {
  display: flex;
  width: 77%;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 30px;
  }
}

.form__row--edits-comment .form__label--text-area {
  width: 100%;
}

.form__label--edits-comment {
  width: 50%;

  &:first-child {
    margin-right: 40px;
  }

  &:last-child {
    margin-right: 0px;
  }
}

.form__label--text-area .form__title {
  margin-bottom: 20px;
}

.form__label--text-area .form__input-wrapper {
  &::after {
    display: none;
  }
}

.form__title {
  opacity: 0.5;
  font-size: 18px;
  font-weight: 600;
}

.form__input-wrapper {
  width: 100%;
}
.form__input--edits-comment {
  width: 100%;
}

.form__input--textarea--edits-comment {
  resize: vertical;
  padding: 20px 20px;
  min-height: 130px;
  max-height: 200px;
  width: inherit;
  border: solid 1px rgba(65, 76, 99, 0.5);;
}

.form__btns--edits-comment {
  display: flex;
  justify-content: flex-end;
  width: 77%;
}

.btn-with-text {

}

.btn-with-text--cancel {
  background: transparent;
  color: $href-color;
  text-transform: none;
  margin-right: 60px;
}

.btn-with-text--save {
  width: 210px;
  height: 70px;
  border-radius: 35px;
}

//////////////////////////////////////////////////////

.comments {
  padding-top: 30px;
  padding-bottom: 50px;
}

.comments__list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3%;
  width: 98%;
}

.comments__item {
  height: 440px;
  background: white;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.comments__item--add-comment {
  background-image: linear-gradient(to right, #006aed, #3f35cb);
  justify-content: center;
  text-align: center;
  box-shadow: none;
}

.comments__item--editing {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    background-color: #fff;
  }
}

.comments__plus-btn--add-comment {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  border: solid 2px #ffffff;
  background: transparent;
  margin-bottom: 20px;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    left: 65px;
    top: 65px;
    width: 35px;
    height: 35px;
    background: svg-load('remove.svg', fill=#fff, width=100%, height=100%) no-repeat;
    transform: rotate(45deg);
  }
}

.comments__text--add-comment {
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  line-height: 1.67;
}

.comments__avatar {
  display: flex;
  width: 90%;
  border-bottom: 1px solid rgba(0,0,0,.3);
  margin-top: 30px;
  height: 22%;
}

.comments__img-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden; 
  margin-right: 20px;
  margin-left: 15px;
}

.comments__img {
  min-height: 100%;
  object-fit: cover;
}

.comments__title {
  display: block;
  font-size: 20px;
  font-weight: bold;
}

.comments__subtitle {
  opacity: 0.5;
  font-size: 18px;
  font-weight: 600;
}

.comments__desc {
  width: 85%;
  height: 68%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.comments__text {
  opacity: 0.7;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.88;
  min-height: 200px;
}

.comments__btns {
  display: flex;
  justify-content: space-between;
}

.comments__btn {
  background: transparent;
  font-size: 18px;
  font-weight: 600;
  opacity: 0.5;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
}

.comments__btn--edit::after,
.comments__btn--delete::after {
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-left: 20px;
  vertical-align: middle;
}

.comments__btn--edit::after {
  background: svg-load('pencil.svg', fill=$href-color, width=100%, height=100%) no-repeat;
}

.comments__btn--delete::after {
  background: svg-load('Cross.svg', fill=red, width=100%, height=100%) no-repeat;
}

//////////////////////////////////////////////////////

.authorization-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.authorization {
  height: 100%;
  background-image: url('../images/content/mountain-baloon-admin.jpg');
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