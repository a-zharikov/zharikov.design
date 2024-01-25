<template>
  <div>
    <div class="career">
      <ul class="career-timeline">
        <li v-for="job in careerHistory" :key="job.year" class="career-timeline__item">
          <div class="career-timeline__time">{{ job.year }}</div>
          <div class="career-timeline__wrapper">
            <div class="career-timeline__title">{{ job.title }}</div>
            <div class="career-timeline__subtitle">{{ job.role }}</div>
            <div class="career-timeline__description">{{ job.description }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const careerHistory = [
  {
    year: '1999',
    title: 'FREELANCE',
    role: 'web-master',
    description: 'Разработка сайтов визиток, форумов, корпоративных сайтов, тематических порталов. Разработка визитных карточек, рекламных баннеров, меню баров и ресторанов. Брал абсолютно любой заказ с целью получения опыта работы в разных программах.'
  },
  {
    year: '2008',
    title: 'ВЕБ СТУДИЯ «WBAT»',
    role: 'team lead',
    description: 'Разработка дизайн макетов сайтов медицинской и косметологической тематики. Разработка уличных баннеров, рекламных брошюр, визиток. HTML - верстка сайтов и их наполнение. За время работы в студии начал изучать HTML/CSS/JS, а также PHP движки: ModX, Joomla, WordPress.'
  },
  {
    year: '2011',
    title: 'Журнал «Золотой гид»',
    role: 'frontend',
    description: 'Разработка дизайн макетов сайта и спецпроектов, создание гайдлайнов. HTML - верстка макетов сайта и спецпроектов. Также начал изучать jQuery и PHP фреймворк Yii.'
  },
  {
    year: '2011',
    title: 'Hearst Shkulev Media',
    role: 'web-designer, frontend',
    description: 'В команде спецпроектов разрабатывал дизайн макеты промо сайтов рекламных кампаний для разных брендов. После расформирования команды перешел в подразделение frontend разработки. Работал над сайтами: elle.ru, starhit.ru, marieclaire.ru, psychologies.ru, parents.ru.'
  },
  {
    year: '2016',
    title: 'Журнал «Авторевю»',
    role: 'frontend-designer',
    description: 'Разработка дизайна сайта журнала и спецпроектов по автомобильной тематики. Создание статичных и анимированных баннеров для рекламных проектов на сайте журнала. После быстрого перезапуска сайта было принято решение создать собственный движок и разработать CSS фреймворк. Для нового движка был разработан дизайн - макет на основе которого с нуля был написан фреймворк. Под новый движок также разработали новый сайт, со своим фреймворком.'
  },
  {
    year: '2017',
    title: 'zharikov.design',
    role: 'CEO',
    description: 'С легкой руки журнала «Авторевю» я открыл ИП и снова перешел на удаленную работу. В данный момент я с нуля создаю сайты от прототипирования до запуска, то есть полный цикл работ со сроками и отчетностью.',
  }
];
</script>