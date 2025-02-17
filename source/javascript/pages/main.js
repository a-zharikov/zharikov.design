// Смена аватарок
document.addEventListener('DOMContentLoaded', function() {
  const avatarElement = document.querySelector('.js-click-avatar');
  const imageElement = document.querySelector('.main-hero__image');
  const images = [
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

// История
const historyItems = [
  {
    href: "#skydive-page",
    url: "/main/skydive.html",
    image: "/images/main/skydive.jpg",
    modal: "video"
  },
  {
    href: "#fpv-page",
    url: "/main/fpv.html",
    image: "/images/main/fpv.jpg",
    modal: "video"
  },
  {
    href: "#atv-page",
    url: "/main/atv.html",
    image: "/images/main/atv.jpg",
    modal: "video"
  },
];

function generateHistoryItems() {
  const list = document.querySelector('.main-about__history');
  historyItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.className = 'history__item';
    listItem.innerHTML = `
      <a class="history__link js-open-modal" aria-haspopup="true" href="${item.href}" data-url="${item.url}" data-modal="${item.modal}">
        <img src="${item.image}" alt="${item.alt}" class="history__cover">
      </a>
    `;
    list.appendChild(listItem);
  });
}
document.addEventListener('DOMContentLoaded', generateHistoryItems);

// Портфолио
const portfolioItems = [
  {
    href: "#monofamily2-page",
    url: "monofamily2.html",
    image: "/images/portfolio/monofamily2/preview.jpg",
    alt: "Mono Family",
    name: "Mono Family <span class='portfolio-list__sub'>v2</span>",
    stack: "fornt-design",
    modal: "large"
  },
  {
    href: "#krov-page",
    url: "/portfolio/krov.html",
    image: "/images/portfolio/krov/preview.jpg",
    alt: "Krov-m2",
    name: "Krov-m2",
    stack: "fornt-design",
    modal: "large"
  },
  {
    href: "#rt24-page",
    url: "/portfolio/rt24.html",
    image: "/images/portfolio/rt24/preview.jpg",
    alt: "Рейтинг-тест Авторевю 2024",
    name: "Рейтинг-тест Авторевю 2024",
    stack: "fornt-design",
    modal: "large"
  },
  {
    href: "#blogger-telega-page",
    url: "/portfolio/blogger-telega.html",
    image: "/images/portfolio/blogger-telega/preview.jpg",
    alt: "Кабинет админа",
    name: "Blogger.telega",
    stack: "fornt-end",
    modal: "large"
  },
];

function generatePortfolioItems() {
  const list = document.querySelector('.portfolio-list');
  portfolioItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.className = 'portfolio-list__item';
    listItem.innerHTML = `
      <a class="portfolio-list__link js-open-modal" aria-haspopup="true" href="${item.href}" data-url="${item.url}" data-modal="${item.modal}">
        <div class="portfolio-list__project">
          <h2 class="portfolio-list__title">${item.name}</h2>
          <p class="portfolio-list__job">${item.stack}</p>
        </div>
        <div class="portfolio-list__preview">
          <div class="portfolio-list__button">
            <span class="portfolio-list__button-text">посмотреть проект</span>
            <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40.3536 4.35355C40.5488 4.15829 40.5488 3.84171 40.3536 3.64645L37.1716 0.464466C36.9763 0.269204 36.6597 0.269204 36.4645 0.464466C36.2692 0.659728 36.2692 0.976311 36.4645 1.17157L39.2929 4L36.4645 6.82843C36.2692 7.02369 36.2692 7.34027 36.4645 7.53553C36.6597 7.7308 36.9763 7.7308 37.1716 7.53553L40.3536 4.35355ZM0 4.5H40V3.5H0V4.5Z" fill="white"/>
            </svg>
          </div>
          <img src="${item.image}" alt="${item.alt}" class="portfolio-list__cover">
        </div>
      </a>
    `;
    list.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', generatePortfolioItems);