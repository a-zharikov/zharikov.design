<template>
  <div class="error-page">
    <h1>500</h1>
    <p>Внутренняя Ошибка Сервера</p>
  </div>
</template>

<script>
export default {
  name: 'error-500',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  data() {
      return {
        title: '500 // Zharikov.design'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Ошибка 500'
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: 'внутренняя, ошибка, сервера'
          }
        ]
      }
    }
};
</script>