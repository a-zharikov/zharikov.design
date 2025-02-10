// Смена аватарок
document.addEventListener('DOMContentLoaded', function() {
  const avatarElement = document.querySelector('.js-click-avatar');
  const imageElement = document.querySelector('.resume-hellow__image');
  const images = [
    '/images/avatar/az_0.jpg',
    '/images/avatar/az_1.jpg',
    '/images/avatar/az_2.jpg',
    '/images/avatar/az_3.jpg',
    '/images/avatar/az_4.jpg'
  ];

  // Функция для получения случайного изображения, исключая повторение
  function getRandomImage() {
    let lastIndex = localStorage.getItem('lastImageIndex');
    lastIndex = lastIndex !== null ? parseInt(lastIndex, 10) : -1;

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * images.length);
    } while (randomIndex === lastIndex); // Исключаем повторение

    localStorage.setItem('lastImageIndex', randomIndex); // Сохраняем индекс
    return images[randomIndex];
  }

  // Устанавливаем случайное изображение при загрузке страницы
  imageElement.src = getRandomImage();

  // Меняем изображение по клику на аватар
  avatarElement.addEventListener('click', function() {
    imageElement.src = getRandomImage();
  });
});

// Табы
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tabs-item');
  const tabContents = document.querySelectorAll('.resume-page__item');

  // Функция для активации вкладки
  function activateTab(tab) {
    // Убираем активный класс у всех вкладок и контента
    tabs.forEach(t => t.classList.remove('tabs-item--active'));
    tabContents.forEach(tc => tc.classList.remove('resume-page__item--active'));

    // Добавляем активный класс выбранной вкладке и соответствующему контенту
    tab.classList.add('tabs-item--active');
    const target = document.querySelector(`[data-tabs="${tab.querySelector('a').getAttribute('href').slice(1)}"]`);
    target.classList.add('resume-page__item--active');

    // Сохраняем активную вкладку в localStorage
    localStorage.setItem('activeTab', tab.querySelector('a').getAttribute('href'));

    // Обновляем хеш в URL
    window.location.hash = tab.querySelector('a').getAttribute('href');
  }

  // Функция для активации таба по хешу
  function activateTabByHash() {
    const hash = window.location.hash;
    if (hash) {
      const tabToActivate = document.querySelector(`.tabs-item a[href="${hash}"]`)?.parentElement;
      if (tabToActivate) {
        activateTab(tabToActivate);
        return;
      }
    }

    // Если хеша нет или он некорректен, восстанавливаем из localStorage
    const activeTab = localStorage.getItem('activeTab');
    if (activeTab) {
      const tabToActivate = document.querySelector(`.tabs-item a[href="${activeTab}"]`)?.parentElement;
      if (tabToActivate) {
        activateTab(tabToActivate);
        return;
      }
    }

    // Если в localStorage ничего нет, активируем первую вкладку
    activateTab(tabs[0]);
  }

  // Активируем таб при загрузке страницы
  activateTabByHash();

  // Обрабатываем изменение хеша (например, при переходе по ссылке)
  window.addEventListener('hashchange', activateTabByHash);

  // Добавляем обработчики событий для вкладок
  tabs.forEach(tab => {
    tab.addEventListener('click', function(event) {
      event.preventDefault();
      activateTab(tab);
    });
  });
});

// Карьера
const careerItems = [
  {
    year: "1999",
    position: "web-master",
    title: "Freelance",
    text: "Разработка сайтов визиток, форумов, корпоративных сайтов, тематических порталов. Разработка визитных карточек, рекламных баннеров, меню баров и ресторанов. Брал абсолютно любой заказ с целью получения опыта работы в разных программах."
  },
  {
    year: "2008",
    position: "CTO",
    title: "Веб студия «wBat»",
    text: "Разработка дизайн макетов сайтов медицинской и косметологической тематики. Разработка уличных баннеров, рекламных брошюр, визиток. HTML - верстка сайтов и их наполнение. За время работы в студии начал изучать HTML/CSS/JS, а также PHP движки: ModX, Joomla, WordPress."
  },
  {
    year: "2010",
    position: "front-end",
    title: "Журнал «Золотой Гид»",
    text: "Разработка дизайн макетов сайта и спецпроектов, создание гайдлайнов. HTML - верстка макетов сайта и спецпроектов. Также начал изучать jQuery и PHP фреймворк Yii."
  },
  {
    year: "2011",
    position: "front-end",
    title: "Hearst Shkulev Media",
    text: "В команде спецпроектов разрабатывал дизайн макеты промо сайтов рекламных кампаний для разных брендов. После расформирования команды перешел в подразделение frontend разработки. Работал над сайтами: elle.ru, starhit.ru, marieclaire.ru, psychologies.ru, parents.ru."
  },
  {
    year: "2016",
    position: "frontend-designer",
    title: "Журнал «Авторевю»",
    text: "Разработка дизайна сайта журнала и спецпроектов по автомобильной тематики. Создание статичных и анимированных баннеров для рекламных проектов на сайте журнала. После быстрого перезапуска сайта было принято решение создать собственный движок и разработать CSS фреймворк. Для нового движка был разработан дизайн - макет на основе которого с нуля был написан фреймворк. Под новый движок также разработали новый сайт, со своим фреймворком."
  },
  {
    year: "2017",
    position: "CEO",
    title: "Zharikov.design",
    text: "Я открыл ИП и стал тем самым IT-специалистом, о которых говорят, что они могут работать там, где хотят, так, как хотят и столько, сколько хотят."
  },
  {
    year: "2020",
    position: "team lead",
    title: "Telega ",
    text: "Руководство командой фронтенд-разработчиков, обеспечение эффективного процесса разработки и соблюдения сроков. Проектирование и разработка масштабируемых и кросс-браузерных решений для платформы рекламных интеграций в Telegram. Проведение код-ревью, наставничество и обучение новых членов команды, содействие профессиональному росту сотрудников."
  }
];
function generateCareerItems() {
  const list = document.querySelector('.resume-career');
  careerItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.className = 'resume-career__item';
    listItem.innerHTML = `
      <div class="resume-career__year">${item.year}</div>
      <div class="resume-career__content">
        <h2 class="resume-career__title">${item.title}</h2>
        <span class="badge small primary">${item.position}</span>
        <p class="resume-career__text">${item.text}</p>
      </div>
    `;
    list.appendChild(listItem);
  });
}
document.addEventListener('DOMContentLoaded', generateCareerItems);

// Навыки
const skillsItems = [
  {
    title: "HTML/CSS",
    text: "Глубокое знание HTML5 и CSS3, включая адаптивную верстку, использование флексбоксов и сеток (Grid Layout), а также препроцессоры SASS/SCSS."
  },
  {
    title: "JavaScript",
    text: "Опыт работы с чистым JavaScript (ES6+), понимание принципов ООП, асинхронного программирования и обработки событий. Умение работать с DOM и API."
  },
  {
    title: "React.js / Vue.js",
    text: "Разработка SPA-приложений с использованием React/Vue, работа с компонентами, роутингом, состоянием приложения (Redux/MobX/Vuex)."
  },
  {
    title: "UI/UX дизайн",
    text: "Создание интерактивных прототипов и макетов интерфейсов в Figma/Pixso, следование принципам Material Design и Human Interface Guidelines."
  },
  {
    title: "Кроссбраузерная и кроссплатформенная верстка",
    text: "Обеспечение корректной работы веб-интерфейсов в различных браузерах и устройствах, тестирование на разных разрешениях экрана."
  },
  {
    title: "GIT",
    text: "Работа с системой контроля версий Git, участие в командном проекте через GitHub/GitLab, умение создавать ветки, делать merge request'ы и решать конфликты."
  },
  {
    title: "Оптимизация производительности",
    text: "Оптимизация загрузки страниц, минимизация кода, использование CDN, кэширование данных, работа с инструментами анализа производительности (Lighthouse, PageSpeed Insights)."
  },
  {
    title: "Работа с CMS",
    text: "Интеграция верстки с популярными системами управления контентом (WordPress, MODX, Joomla)."
  },
  {
    title: "Анимации и эффекты",
    text: "Реализация анимаций с помощью CSS3 и библиотек типа GSAP, создание плавных переходов и эффектов взаимодействия с пользователем."
  },
  {
    title: "Тестирование и отладка",
    text: "Написание юнит-тестов (Jest, Mocha), проведение кроссбраузерного тестирования, работа с DevTools для поиска и устранения багов."
  },
];
function generateSkillsItems() {
  const list = document.querySelector('.resume-skills');
  skillsItems.forEach(item => {
    const listItem = document.createElement('div');
    listItem.className = 'resume-skills__item';
    listItem.innerHTML = `
      <h2 class="resume-skills__title">${item.title}</h2>
      <p class="resume-skills__text">${item.text}</p>
    `;
    list.appendChild(listItem);
  });
}
document.addEventListener('DOMContentLoaded', generateSkillsItems);

// Стек
const stackItems = [
  {
    title: "HTML",
    subline: "slim/haml",
    progress: "_5",
  },
  {
    title: "CSS",
    subline: "sass/less/stylus",
    progress: "_5",
  },
  {
    title: "JavaScript",
    subline: "VanillaJS",
    progress: "_4",
  },
  {
    title: "jQuery",
    subline: "",
    progress: "_4",
  },
  {
    title: "Vue",
    subline: "nuxt",
    progress: "_3",
  },
  {
    title: "React",
    subline: "next",
    progress: "_3",
  },
  {
    title: "RoR",
    subline: "",
    progress: "_3",
  },
  {
    title: "PHP",
    subline: "",
    progress: "_3",
  },
  {
    title: "MySQL",
    subline: "",
    progress: "_3",
  },
  {
    title: "Figma",
    subline: "pixso",
    progress: "_4",
  },
  {
    title: "Photoshop",
    subline: "",
    progress: "_4",
  },
  {
    title: "Illustrator",
    subline: "",
    progress: "_4",
  },
];
function generateStackItems() {
  const list = document.querySelector('.resume-stack');
  stackItems.forEach(item => {
    const listItem = document.createElement('div');
    listItem.className = 'resume-stack__item';
    listItem.innerHTML = `
      <div class="resume-stack__header">
        <h2 class="resume-stack__title">${item.title}</h2>
        <span class="resume-stack__subline">${item.subline}</span>
      </div>
      <div class="resume-stack__progress ${item.progress}">
        <div class="resume-stack__progress-item"></div>
        <div class="resume-stack__progress-item"></div>
        <div class="resume-stack__progress-item"></div>
        <div class="resume-stack__progress-item"></div>
        <div class="resume-stack__progress-item"></div>
      </div>
    `;
    list.appendChild(listItem);
  });
}
document.addEventListener('DOMContentLoaded', generateStackItems);

// Инструменты
const toolsItems = ['html', 'slim', 'haml', 'css', 'less', 'sass', 'scss', 'stylus', 'javascript', 'vue', 'nuxt', 'react', 'next', 'ruby on rails', 'php', 'mysql', 'postgresql', 'docker', 'github', 'gitlab', 'codekit', 'grunt', 'gulp', 'webpack', 'vs code', 'zed', 'mamp', 'wrap', 'marta', 'file zilla', 'ftp', 'ssl', 'ssh', 'figma', 'pixso', 'sketch', 'photoshop', 'illustrator', 'davinci resolve']; // Используем массив строк для упрощения

function generateToolsItems() {
  const list = document.querySelector('.resume-tools');
  toolsItems.forEach(tool => {
    const listItem = document.createElement('div');
    listItem.className = 'resume-stack__item';
    listItem.innerHTML = `<span class="badge medium tools">${tool}</span>`;
    list.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', generateToolsItems);