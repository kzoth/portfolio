<template lang="pug">
  nav.nav
    .container.container--nav
      ul.nav__list
        li.nav__item(v-for='item in nav')
          router-link(
            :data-text='item.title'
            :to='item.href'
            exact-active-class='active'
          ).nav__elem {{item.title}}
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          title: 'Обо мне',
          href: '/admin'
        },
        {
          title: 'Работы',
          href: '/admin/works'
        },
        {
          title: 'Отзывы',
          href: '/admin/comments'
        }
      ]
    }
  }
}
</script>

<style lang="pcss" scoped>
  .container--nav {
    min-height: 85px;
  }

  .nav__list {
    display: flex;
  }

  .nav__item {
    align-self: center;
    text-align: center;
    width: 13%;
  }

  .nav__elem {
    font-size: 20px;
    font-weight: 600;
    transition: 0.3s;
    display: block;
    width: 100%;
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
    
    &:hover {
      color: $main-color;
    }
  }

  .active {
    color: $main-color;
    
    &::before,
    &::after {
      width: 50%;
    }

    &::before {
      left: 0;
    }
  }
</style>