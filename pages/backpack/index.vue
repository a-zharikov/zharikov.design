<template>
  <div>
    <PageTitle>Рюкзак</PageTitle>
    <div class="page backpack-main">
      <div class="backpack-main__wrapper">
        <nuxt-link class="item" to="/backpack/triangle">
          <div class="item-header">
            <svg width="22.510986" height="20.000000" viewBox="0 0 22.511 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M9.6 0.95L0.25 17.14C-0.48 18.41 0.44 20 1.9 20L20.6 20C22.07 20 22.98 18.41 22.25 17.14L12.9 0.95C12.17 -0.32 10.34 -0.32 9.6 0.95ZM3.8 17L18.7 17L11.25 4.09L3.8 17Z" fill="#40B4EA" fill-opacity="1.000000" fill-rule="evenodd"/>
            </svg>
            <div class="item-header__title">CSS — треугольник</div>
          </div>
          <div class="item__text">Генератор CSS треугольников разных направлений и размеров.</div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Рюкзак // Zharikov.design'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Инструменты для веб разработки'
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: 'треугольник, github, html, slim, haml, css, sass, less, javascritp, jquery, vue, nuxt, react,'
          }
        ]
      }
    },

    async asyncData({ $content, params }) {
      const articles = await $content('blog', params.slug)
        .only(['title', 'description', 'img', 'tag', 'slug', 'createdAt'])
        .sortBy('createdAt', 'desc')
        .fetch();

      return {
        articles
      }
    }
  }
</script>