<template>
  <div>
    <PageTitle>Портфолио</PageTitle>
    <div class="page portfolios">
      <NuxtLink v-for="item in reversedPortfolioItems" :key="item.id" :to="item.link" class="portfolios-item" target="_blank" :href="item.link">
        <p>
          <span>{{ item.title }}</span>
        </p>
        <img :src="item.image" :alt="item.title">
      </NuxtLink>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Портфолио // Zharikov.design'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Мои кейсы'
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: 'портфолио, работы, кейсы, portfolio, job, case'
          }
        ]
      }
    }
  }
</script>

<script setup>
  import { computed } from 'vue';
  const portfolioItems = [
    {
      id: 1,
      title: 'Skyderby',
      image: 'images/portfolio/sd.jpg',
      link: 'https://skyderby.ru/'
    },
    {
      id: 2,
      title: 'Академия Новые Горизонты',
      image: 'images/portfolio/ng.jpg',
      link: 'http://academy-newgorizont.ru/'
    },
    {
      id: 3,
      title: 'Алекс Прайс',
      image: 'images/portfolio/ap.jpg',
      link: 'http://www.alexprice.ru/'
    },
    {
      id: 4,
      title: 'Легенда о Volkswagen Bulli',
      image: 'images/portfolio/wvb.jpg',
      link: 'https://autoreview.ru/special/bulli'
    },
    {
      id: 5,
      title: 'Рейтинг - тест Авторевю 2020',
      image: 'images/portfolio/rt20.jpg',
      link: 'https://autoreview.ru/ratingtest2020'
    },
    {
      id: 6,
      title: 'Mono Family',
      image: 'images/portfolio/mf.jpg',
      link: 'https://mono.family/'
    },
    {
      id: 7,
      title: 'А вам шипы по зубам?',
      image: 'images/portfolio/cord.jpg',
      link: 'https://autoreview.ru/special/cordiant-2019'
    },
    {
      id: 8,
      title: 'Рейтинг - тест Авторевю 2021',
      image: 'images/portfolio/rt21.jpg',
      link: 'https://autoreview.ru/ratingtest2021'
    },
    {
      id: 9,
      title: '30 лет Авторевю',
      image: 'images/portfolio/ar30.jpg',
      link: 'https://autoreview.ru/special/thirty-years'
    },
    {
      id: 10,
      title: 'Центр парашютной подготовки и спорта',
      image: 'images/portfolio/sc.jpg',
      link: 'https://skycenter.su'
    },
    {
      id: 11,
      title: 'Рейтинг - тест Авторевю 2022',
      image: 'images/portfolio/rt22.jpg',
      link: 'https://autoreview.ru/ratingtest2022'
    },
    {
      id: 12,
      title: 'DoggyDog',
      image: 'images/portfolio/dd.jpg',
      link: 'https://doggydog.blog/'
    },
    {
      id: 13,
      title: 'Telega.in',
      image: 'images/portfolio/tl.jpg',
      link: 'https://telega.in/'
    },
    {
      id: 14,
      title: 'Рейтинг - тест Авторевю 2023',
      image: 'images/portfolio/rt23.jpg',
      link: 'https://autoreview.ru/ratingtest2023'
    }
  ];
  const reversedPortfolioItems = computed(() => {
    return [...portfolioItems].reverse();
  });
</script>