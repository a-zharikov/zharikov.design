<template>
  <div>
    <PageTitle>Привет!</PageTitle>
    <div class="page main">
      <div class="page-header">
        <img src="/images/avatar.jpg" alt="I` am">
        <div class="page-header__content">меня зовут<span>Александр Жариков</span>и я фронденд-дизайнер</div>
      </div>
      <div class="main-item" v-for="(item, index) in mainItems" :key="index">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
        <Spoiler
          :index="index"
          :initial-collapsed="item.isCollapsed"
          :button-text-more="item.buttonTextMore"
          :button-text-less="item.buttonTextLess"
          @update:collapsed="updateCollapsed"
        >
          <div class="main-spoller" v-html="item.detailedContent"></div>
        </Spoiler>

      </div>
      <div class="main-item">
        <h2>Но самое главное!</h2>
        <p>Семья! Жена, в чьих глазах ты готов тонуть снова и снова. Сын, мечтающий стать как его папа, берущий с него пример. Белопопый терьер для которого весь мир это ты.</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Zharikov.design'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Александр Жариков - сайт портфолио'
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: 'сайт, портфолио, хомяк, site, portfolio, homepage'
          }
        ]
      }
    }
  }
</script>

<script setup>
  import PageTitle from '~/components/PageTitle.vue';
  import Spoiler from '~/components/main/Spoiler.vue'; 
  import { ref } from 'vue';

  const mainItems = ref([
    {
      title: 'Кто такой frontend — дизайнер',
      description: 'Frontend — дизайн включает в себя работу с дизайн — макетами, HTML, CSS и презентационным кодом JavaScript для создания пользовательского интерфейса.',
      detailedContent: `
        <h3>frontend — дизайнер:</h3>
        <ul>
          <li>Понимает принципы и лучшие практики UX, но не тратит время на проведение исследований, создание флоу и планирование сценариев;</li>
          <li>Обладает эстетическим вкусом, может разработать дизайн — макет, подобрать шрифтовую пару, цветовую палитру и отрисовать векторные иконки;</li>
          <li>Пишет на JavaScript, но не тратит время на написание кода прикладного уровня, подключение middleware и отладку;</li>
          <li>Понимает важность backend — разработки, но не тратит время на написание backend — логики, запуск серверов, нагрузочное тестирование и тд.</li>
        </ul>
      `,
      isCollapsed: true,
      buttonTextMore: 'чуть подробнее',
      buttonTextLess: 'свернуть'
    },
    {
      title: 'Немного обо мне',
      description: 'Не могу назвать свою работу — работой это хобби, которым я увлёкся в старших классах на уроках информатики в далеком 1999 году. Со временем, хобби стало приносить какую — то прибыль, но основная работа была связана совершенно с другим ремеслом, так продлилось до 2006 года.',
      detailedContent: `
        <p>С 2006 по 2008 год я проходил военную службу в ВС РФ, по возвращению из армии был выбор: вернуться в ресторанный бизнес или сделать упор на веб — разработку. За два года моего отсутствия в ресторанном бизнесе всё очень сильно изменилось, причем не в лучшую сторону. А вот в вебе всё только улучшилось и я видел гораздо больше перспектив в работе веб-дизайнера, чем флейринг — бармена.</p>
        <p>И уже с конца 2008 года я начал профессиональную карьеру веб-дизайнера в маленькой дизайн студии.</p>
      `,
      isCollapsed: true,
      buttonTextMore: 'и еще чуть — чуть',
      buttonTextLess: 'свернуть'
    },
    {
      title: 'А что с вдохновением?',
      description: 'Behance и тематические паблики в Telegram и Instagram конечно же да! Утро дизайнера начинается не с кофе, а с просмотра ленты дизайн — пабликов и каналов. Но все же основное вдохновение я черпаю из полетов. Уже более 10 лет я активно занимаюсь парашютным спортом. И тот, другой мир позволяет «обнулиться», набраться сил и идей для работы.',
      detailedContent: `
        <p>А с начала 2020 года , после известных всем событий в мою жизнь вошли FPV дроны. Они подарили мне совершенно иной перфоманс полета в доль гор и крон деревьев. Открыли мир микроэлектроники, научили проектировать и создавать мультикоптеры с нуля от идеи до первого полета.</p>
        <p>Небо — это очень дорогое хобби, которое стимулирует узнавать новые технологии и постоянно совершенствоваться в веб — разработке качая мой скилл.</p>
      `,
      isCollapsed: true,
      buttonTextMore: 'и еще чуть — чуть',
      buttonTextLess: 'свернуть'
    },
  ]);

  const updateCollapsed = ({ index, value }) => {
    mainItems.value[index].isCollapsed = value;
  };
</script>
