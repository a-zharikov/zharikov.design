const pluginItems = [
  {
    href: "#select-page",
    url: "select.html",
    modal: "",
    lightImg: "/images/plugins/select.svg",
    darkImg: "/images/plugins/select_dark.svg",
    title: "Умный select"
  },
  {
    href: "#ancore-page",
    url: "ancore.html",
    modal: "",
    lightImg: "/images/plugins/ancore.svg",
    darkImg: "/images/plugins/ancore_dark.svg",
    title: "Якорное меню из заголовков"
  },
  {
    href: "#length-page",
    url: "length.html",
    modal: "",
    lightImg: "/images/plugins/length.svg",
    darkImg: "/images/plugins/length_dark.svg",
    title: "Подсчет слов в элементе"
  },
  {
    href: "#scroll-page",
    url: "scroll.html",
    modal: "",
    lightImg: "/images/plugins/scroll.svg",
    darkImg: "/images/plugins/scroll_dark.svg",
    title: "Добавляем класс элементу по скроллу страницы"
  },
  {
    href: "#table-page",
    url: "table.html",
    modal: "",
    lightImg: "/images/plugins/table.svg",
    darkImg: "/images/plugins/table_dark.svg",
    title: "Поиск по таблице и спискам"
  },
  {
    href: "#tabs-page",
    url: "tabs.html",
    modal: "",
    lightImg: "/images/plugins/tabs.svg",
    darkImg: "/images/plugins/tabs_dark.svg",
    title: "Простые и легкие табы"
  }
];

function generatePluginItems() {
  const list = document.querySelector('.plugins__list');
  pluginItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.className = 'plugins__item';
    listItem.innerHTML = `
      <a class="plugins__link js-open-modal" href="${item.href}" data-url="${item.url}" data-modal="${item.modal}">
        <img class="plugins__cover __light" src="${item.lightImg}" alt="${item.title}">
        <img class="plugins__cover __dark" src="${item.darkImg}" alt="${item.title}">
        <h2 class="plugins__title">${item.title}</h2>
      </a>
    `;
    list.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', generatePluginItems);
