const pluginItems = [
  {
    href: "#select-page",
    url: "select.html",
    modal: "",
    lightImg: "/images/plugins/select.svg",
    darkImg: "/images/plugins/select_dark.svg",
    title: "Умный select",
    tag: "javascript"
  },
  {
    href: "#ancore-page",
    url: "ancore.html",
    modal: "",
    lightImg: "/images/plugins/ancore.svg",
    darkImg: "/images/plugins/ancore_dark.svg",
    title: "Якорное меню из заголовков",
    tag: "javascript"
  },
  {
    href: "#length-page",
    url: "length.html",
    modal: "",
    lightImg: "/images/plugins/length.svg",
    darkImg: "/images/plugins/length_dark.svg",
    title: "Подсчет слов в элементе",
    tag: "javascript"
  },
  {
    href: "#scroll-page",
    url: "scroll.html",
    modal: "",
    lightImg: "/images/plugins/scroll.svg",
    darkImg: "/images/plugins/scroll_dark.svg",
    title: "Добавляем класс элементу по скроллу страницы",
    tag: "javascript"
  },
  {
    href: "#table-page",
    url: "table.html",
    modal: "",
    lightImg: "/images/plugins/table.svg",
    darkImg: "/images/plugins/table_dark.svg",
    title: "Поиск по таблице и спискам",
    tag: "javascript"
  },
  {
    href: "#tabs-page",
    url: "tabs.html",
    modal: "",
    lightImg: "/images/plugins/tabs.svg",
    darkImg: "/images/plugins/tabs_dark.svg",
    title: "Простые и легкие табы",
    tag: "javascript"
  }
];

function generatePluginItems() {
  const list = document.querySelector('.plugins__list');
  pluginItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.className = 'plugins__item';
    listItem.innerHTML = `
      <a class="plugins__link js-open-modal" href="${item.href}" data-url="${item.url}" data-modal="${item.modal}">
        <span class="badge medium ${item.tag}">${item.tag}</span>
        <img class="plugins__cover __light" src="${item.lightImg}" alt="${item.title}">
        <img class="plugins__cover __dark" src="${item.darkImg}" alt="${item.title}">
        <h2 class="plugins__title">${item.title}</h2>
      </a>
    `;
    list.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  generatePluginItems();
  const list = document.querySelector('.plugins__list');
  const tagList = document.querySelector('.page__tag-list');
  const allTags = new Set();

  // Собираем все теги из элементов списка
  pluginItems.forEach(item => {
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

document.addEventListener('DOMContentLoaded', generatePluginItems);
