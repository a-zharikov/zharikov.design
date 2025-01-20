const portfolioItems = [
  {
    href: "#",
    url: "",
    image: "/images/portfolio/preview/mf.png",
    alt: "Проект Elle",
    name: "Elle",
    stack: "fornt-end",
    modal: "large"
  },
  {
    href: "#",
    url: "",
    image: "/images/portfolio/preview/mf.png",
    alt: "Проект Psychologies",
    name: "Psychologies",
    stack: "fornt-end",
    modal: "large"
  },
  {
    href: "#",
    url: "",
    image: "/images/portfolio/preview/mf.png",
    alt: "Проект Marieclaire",
    name: "Marie Claire",
    stack: "fornt-end",
    modal: "large"
  },
  {
    href: "#",
    url: "",
    image: "/images/portfolio/preview/mf.png",
    alt: "Проект Parents",
    name: "Parents",
    stack: "fornt-end",
    modal: "large"
  },
  {
    href: "#yunost75-page",
    url: "yunost75.html",
    image: "/images/portfolio/preview/mf.png",
    alt: "Проект Юность 75",
    name: "Юность 75",
    stack: "fornt-end",
    modal: "large"
  },
  {
    href: "#",
    url: "",
    image: "/images/portfolio/preview/mf.png",
    alt: "Проект StarHit",
    name: "StarHit",
    stack: "fornt-end",
    modal: "large"
  },
  {
    href: "#",
    url: "",
    image: "/images/portfolio/preview/mf.png",
    alt: "Проект Skyderby",
    name: "Skyderby",
    stack: "fornt-end",
    modal: "large"
  },
  {
    href: "#",
    url: "",
    image: "/images/portfolio/preview/mf.png",
    alt: "Проект Академия Новые Горизонты",
    name: "Академия Новые Горизонты",
    stack: "full stack",
    modal: "large"
  },
  {
    href: "#",
    url: "",
    image: "/images/portfolio/preview/mf.png",
    alt: "Проект Алекс Прайс",
    name: "Алекс Прайс",
    stack: "full stack",
    modal: "large"
  },
  {
    href: "#",
    url: "",
    image: "/images/portfolio/preview/mf.png",
    alt: "Проект Легенда о Volkswagen Bulli",
    name: "Легенда о Volkswagen Bulli",
    stack: "fornt-end",
    modal: "large"
  },
  {
    href: "#",
    url: "",
    image: "/images/portfolio/preview/mf.png",
    alt: "Проект Рейтинг - тест Авторевю 2020",
    name: "Рейтинг - тест Авторевю 2020",
    stack: "fornt-end",
    modal: "large"
  },
  {
    href: "#",
    url: "",
    image: "/images/portfolio/preview/mf.png",
    alt: "Проект А вам шипы по зубам?",
    name: "А вам шипы по зубам?",
    stack: "fornt-end",
    modal: "large"
  },
  {
    href: "#",
    url: "",
    image: "/images/portfolio/preview/mf.png",
    alt: "Проект Рейтинг - тест Авторевю 2021",
    name: "Рейтинг - тест Авторевю 2021",
    stack: "fornt-end",
    modal: "large"
  },
  {
    href: "#",
    url: "",
    image: "/images/portfolio/preview/mf.png",
    alt: "Проект 30 лет Авторевю",
    name: "30 лет Авторевю",
    stack: "fornt-end",
    modal: "large"
  },
  {
    href: "#",
    url: "",
    image: "/images/portfolio/preview/mf.png",
    alt: "Проект Skycenter",
    name: "Skycenter",
    stack: "full stack",
    modal: "large"
  },
  {
    href: "#",
    url: "",
    image: "/images/portfolio/preview/mf.png",
    alt: "Проект Рейтинг - тест Авторевю 2022",
    name: "Рейтинг - тест Авторевю 2022",
    stack: "fornt-end",
    modal: "large"
  },
  {
    href: "#",
    url: "",
    image: "/images/portfolio/preview/mf.png",
    alt: "Проект DoggyDog.blog",
    name: "DoggyDog.blog",
    stack: "full stack",
    modal: "large"
  },
  {
    href: "#",
    url: "",
    image: "/images/portfolio/preview/mf.png",
    alt: "Проект Рейтинг - тест Авторевю 2023",
    name: "Рейтинг - тест Авторевю 2023",
    stack: "fornt-end",
    modal: "large"
  },
  {
    href: "#",
    url: "",
    image: "/images/portfolio/preview/mf.png",
    alt: "Проект Telega.in",
    name: "Telega.in",
    stack: "fornt-end",
    modal: "large"
  },
  {
    href: "#",
    url: "",
    image: "/images/portfolio/preview/mf.png",
    alt: "Проект mono.family",
    name: "mono.family",
    stack: "full stack",
    modal: "large"
  }
];

function generatePortfolioItems() {
  const list = document.querySelector('.portfolio-list');
  portfolioItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.className = 'portfolio-list__item';
    listItem.innerHTML = `
      <a class="portfolio-list__link js-open-modal" href="${item.href}" data-url="${item.url}" data-modal="${item.modal}">
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