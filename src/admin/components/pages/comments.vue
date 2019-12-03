<template lang="pug">
  div
    .container.container--content
      .title
        span.title__item  Блок &laquo;Отзывы&raquo;
      .edits-comment
        .edits-comment__title
          span.edits-comment__title-elem  Новый отзыв
        form.form.form--edits-comment
          .form__column.form__column--left--edits-comment
            .avatar
              //- img.avatar__img(src='../images/content/slideshow/man-user.png')
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
                //- img.comments__img(src='../images/content/slideshow/2a.png')
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
                //- img.comments__img(src='../images/content/slideshow/1a.png')
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
                //- img.comments__img(src='../images/content/slideshow/man-user.png')
              .comments__title-wrapper
                span.comments__title Name
                span.comments__subtitle Occupation
            .comments__desc
              .comments__text  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, aliquam!
              .comments__btns
                button.comments__btn.comments__btn--edit  Править
                button.comments__btn.comments__btn--delete Удалить
</template>

<script>
export default {};
</script>

<style lang="pcss">
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
    content: "";
    display: inline-block;
    left: 0;
    top: 0;
    background: svg-load(
      "admin-plus-btn.svg",
      fill=$text-color,
      width=100%,
      height=100%
    );
    width: 25px;
    height: 25px;
    margin-right: 10px;
    vertical-align: middle;
  }
}
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
  border: solid 1px rgba(65, 76, 99, 0.5);
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
    content: "";
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

.comments__text--add-comment {
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  line-height: 1.67;
}

.comments__avatar {
  display: flex;
  width: 90%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
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
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-left: 20px;
  vertical-align: middle;
}

.comments__btn--edit::after {
  background: svg-load("pencil.svg", fill=$href-color, width=100%, height=100%)
    no-repeat;
}

.comments__btn--delete::after {
  background: svg-load("Cross.svg", fill=red, width=100%, height=100%) no-repeat;
}
</style>