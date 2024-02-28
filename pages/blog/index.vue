<template>
  <div>
    <PageTitle>Блог</PageTitle>
    <div class="page blog-main">
      <NuxtLink  v-for="article in articles" :key="article.slug" :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="item">
        <span :class="['tag', article.tag]">{{ article.tag }}</span>
        <div class="item-image">
          <img :src="article.img" :alt="article.alt" />
        </div>
        <div class="item-title">
          {{ article.title }}
        </div>
      </NuxtLink>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        title: 'Блог // Zharikov.design'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Блог у веб разработке'
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: 'github, html, slim, haml, css, sass, less, javascritp, jquery, vue, nuxt, react,'
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