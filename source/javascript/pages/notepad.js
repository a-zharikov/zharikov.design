const backpackItems = [
  {
    href: "#adaptive-image-page",
    url: "adaptive-image.html",
    title: "Адаптивное изображение",
    tag: "html",
    modal: "small"
  },
  {
    href: "#text-balance-page",
    url: "text-balance.html",
    title: "Text balance",
    tag: "css",
    modal: "small"
  },
  {
    href: "#table-layout-page",
    url: "table-layout.html",
    title: "Table layout",
    tag: "css",
    modal: "small"
  },
  {
    href: "#scroll-padding-page",
    url: "scroll-padding.html",
    title: "Scroll padding",
    tag: "css",
    modal: "small"
  },
  {
    href: "#behavior-page",
    url: "behavior.html",
    title: "Предотвращение цепной прокрутки",
    tag: "css",
    modal: "small"
  },
  {
    href: "#content-query-page",
    url: "content-query.html",
    title: "Content query",
    tag: "css",
    modal: "small"
  },
  {
    href: "#textarea-size-page",
    url: "textarea-size.html",
    title: "Автоматическое изменение высоты textarea",
    tag: "html",
    modal: "small"
  },
  {
    href: "#empty-page",
    url: "empty.html",
    title: "Определяем пустой элемент",
    tag: "css",
    modal: "small"
  },
  {
    href: "#drop-shadow-page",
    url: "drop-shadow.html",
    title: "Тень для картинки",
    tag: "css",
    modal: "small"
  },
  {
    href: "#smooth-page",
    url: "smooth.html",
    title: "Плавный скролл",
    tag: "css",
    modal: "small"
  },
  {
    href: "#dots-page",
    url: "dots.html",
    title: "Обрезаем текст в три точки",
    tag: "scss",
    modal: "small"
  },
  {
    href: "#hover-page",
    url: "hover.html",
    title: "Исправляем css hover эффект на тач-устройствах",
    tag: "html",
    modal: "small"
  },
  {
    href: "#autocomplete-page",
    url: "autocomplete.html",
    title: "Убрать желтый фон у полей с autocomplete",
    tag: "css",
    modal: "small"
  },
  {
    href: "#element-page",
    url: "element.html",
    title: "Абсолютная центровка элемента",
    tag: "css",
    modal: "small"
  }
];

function generateBackpackItems() {
  const list = document.querySelector('.notepad__list');
  backpackItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.className = 'notepad__item';
    listItem.dataset.tags = item.tag.toLowerCase();
    listItem.innerHTML = `
      <a class="notepad__link js-open-modal" href="${item.href}" data-url="${item.url}" data-tag="${item.tag}" data-modal="${item.modal}">
        <h2 class="notepad__title">${item.title}</h2>
        <span class="badge medium ${item.tag}">${item.tag}</span>
      </a>
    `;
    list.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  generateBackpackItems();
  const list = document.querySelector('.notepad__list');
  const tagList = document.querySelector('.page__tag-list');
  const allTags = new Set();

  // Собираем все теги из элементов списка
  backpackItems.forEach(item => {
    allTags.add(item.tag.toLowerCase());
  });

  // Создаем элементы навигации по тегам
  const createTagItem = (tag) => {
    const tagItem = document.createElement('li');
    tagItem.className = 'page__tag-item';
    tagItem.innerHTML = `<a href="#" class="page__tag-link">${tag}</a>`;
    return tagItem;
  };

  // Добавляем пункт "Все"
  tagList.appendChild(createTagItem('Все'));

  // Добавляем остальные теги
  allTags.forEach(tag => {
    tagList.appendChild(createTagItem(tag));
  });

  // Функция для фильтрации элементов по тегу
  const filterItemsByTag = (tag) => {
    const items = list.querySelectorAll('li');
    items.forEach(item => {
      const itemTags = item.dataset.tags.split(',').map(t => t.trim());
      if (tag === 'Все' || itemTags.includes(tag)) {
        item.classList.add('__show');
        item.classList.remove('__hide');
      } else {
        item.classList.add('__hide');
        item.classList.remove('__show');
      }
    });

    // Обновляем активный тег
    tagList.querySelectorAll('.page__tag-item').forEach(tagItem => {
      if (tagItem.textContent === tag) {
        tagItem.classList.add('__active');
      } else {
        tagItem.classList.remove('__active');
      }
    });
  };

  // Обработчик клика по тегу
  tagList.addEventListener('click', (e) => {
    if (e.target.classList.contains('page__tag-link')) {
      e.preventDefault();
      const tag = e.target.textContent;
      filterItemsByTag(tag);
    }
  });

  // Изначально показываем все элементы и активируем тег "Все"
  filterItemsByTag('Все');
});
