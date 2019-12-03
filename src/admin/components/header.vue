<template lang="pug">
  header.header
    .container.container--header
      .header__pic-wrapper
        img.header__pic(src='../../images/content/user.jpg')
      span.header__user-name  Егор Казуров
      span.header__title  Панель администрирования
      a.header__btn Выйти
</template>

<script>
export default {
  
}
</script>

<style lang="pcss" scoped>
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
</style>