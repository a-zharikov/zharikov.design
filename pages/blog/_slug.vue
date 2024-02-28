<template>
  <div>
    <PageTitle>Блог</PageTitle>
    <div class="page blog page">
      <div class="blog-page">
        <div class="blog-page__cover">
          <div class="image">
            <span :class="['tag', article.tag]">{{ article.tag }}</span>
            <img :src="article.img" :alt="article.alt" />
          </div>
          <div class="head">
            <div class="date">{{ formatDate(article.createdAt) }}</div>
            <h2>{{ article.title }}</h2>
            <div class="tools">
              <span v-for="(tool, index) in article.tools.split(',')" :key="index">  
                {{ tool }}  
              </span>
            </div>  
          </div>
        </div>
        <nuxt-content :document="article" />
        <prev-next :prev="prev" :next="next" class="blog-page__nav" />
      </div>
    </div>
  </div>
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
  head() {
    return {
      title: this.article.title + ' // Zharikov.design',
      meta: [
        { hid: 'description', name: 'description', content: this.article.description || 'Fallback description' },
      ],
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
