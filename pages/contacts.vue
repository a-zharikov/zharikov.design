<template>
  <div class="nuxt_div">
    <PageTitle>Контакты</PageTitle>
    <div class="page contact">
      <div class="contact-wrapper">
        <NuxtLink v-for="item in contactItems" :key="item.id" :to="item.link" class="contact-wrapper__item" :class="item.classWrapper" target="_blank" :href="item.link">
          <i class="icon" :class="item.class"></i>
          <!-- <p>{{ item.title }}</p> -->
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Контакты // Zharikov.design'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Связаться со мной'
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: 'github, behance, codepen'
          }
        ]
      }
    }
  }
</script>

<script setup>
  const contactItems = [
    {
      id: 1,
      title: 'GitHub',
      link: 'https://github.com/a-zharikov',
      class: 'github',
      classWrapper: '_github'
    },
    {
      id: 2,
      title: 'Behance',
      link: 'https://www.behance.net/zharikov_design',
      class: 'behance',
      classWrapper: '_behance'
    },
    {
      id: 3,
      title: 'Codepen',
      link: 'https://codepen.io/a-zharikov',
      class: 'codepen',
      classWrapper: '_codepen'
    },
    {
      id: 4,
      title: 'npm',
      link: 'https://www.npmjs.com/~alexander.zharikov',
      class: 'npm',
      classWrapper: '_npm'
    }
  ];
</script>
