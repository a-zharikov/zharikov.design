<template>
  <div class="error-page">
    <h1>404</h1>
    <p>Эта страница не существует</p>
    <nuxt-link to="/">Главная страница</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'error-404',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  data() {
      return {
        title: '404 // Zharikov.design'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Ошибка 404'
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: 'страница, не, существует'
          }
        ]
      }
    }
};
</script>