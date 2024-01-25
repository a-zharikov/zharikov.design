<template>
  <div class="home-page">
	  <h2>Latest Posts</h2>
	  <div class="articles">
		  <div class="article" v-for="article of articles" :key="article">
			  <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
				  <div class="article-inner">
						<img :src="article.img" :alt="article.alt" />
						<div class="detail">
							<h3>{{ article.title }}</h3>
							<p>{{ article.description }}</p>
						</div>
				  </div>
			  </NuxtLink>
		  </div>
	  </div>
  </div>
</template>
<script>
export default {
	async asyncData({ $content, params }) {
		const articles = await $content('blog', params.slug)
			.only(['title', 'description', 'img', 'slug'])
			.sortBy('createdAt', 'asc')
			.fetch();

		return {
			articles
		}
	}
}
</script>