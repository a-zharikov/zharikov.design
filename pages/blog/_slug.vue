<template>
  <article>
    <!-- <pre> {{ article }} </pre> -->
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <img :src="article.img" :alt="article.alt" />
    <p>{{ formatDate(article.createdAt) }}</p>
    <nuxt-content :document="article" />
    <prev-next :prev="prev" :next="next" />
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('blog', params.slug).fetch()

      const [prev, next] = await $content('blog')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()

      return {
        article,
        prev,
        next
      }
    },
    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('ru', options)
      }
    }
  }
</script>