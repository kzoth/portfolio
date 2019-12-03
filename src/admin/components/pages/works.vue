<template lang="pug">
  div
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
              //- img.works__img(src='../images/content/works-preview/1.jpg')
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
              //- img.works__img(src='../images/content/works-preview/2.jpg')
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
              //- img.works__img(src='../images/content/works-preview/3.jpg')
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
</template>

<script>
export default {};
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
  border: solid 1px rgba(65, 76, 99, 0.5);
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
  background: svg-load("remove.svg", fill=$text-color, width=100%, height=100%)
    no-repeat;
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
    content: "";
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
    content: "";
    left: 65px;
    top: 65px;
    width: 35px;
    height: 35px;
    background: svg-load("remove.svg", fill=#fff, width=100%, height=100%)
      no-repeat;
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
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-left: 20px;
  vertical-align: middle;
}

.works__btn--edit::after {
  background: svg-load("pencil.svg", fill=$href-color, width=100%, height=100%)
    no-repeat;
}

.works__btn--delete::after {
  background: svg-load("Cross.svg", fill=red, width=100%, height=100%) no-repeat;
}
</style>