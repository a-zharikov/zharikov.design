const backpackItems = [
  {
    href: "#triangle-page",
    url: "triangle.html",
    script: "initializeTriangleGenerator",
    svgPath: "M152-160q-23 0-35-20.5t1-40.5l328-525q12-19 34-19t34 19l328 525q13 20 1 40.5T808-160H152Zm72-80h512L480-650 224-240Zm256-205Z",
    title: "CSS — треугольник",
    text: "Генератор CSS треугольников разных направлений и размеров.",
    modal: "full"
  },
  {
    href: "#aspectratio-page",
    url: "aspectratio.html",
    script: "aspectRatioCalculator",
    svgPath: "M680-360h-80q-17 0-28.5 11.5T560-320q0 17 11.5 28.5T600-280h120q17 0 28.5-11.5T760-320v-120q0-17-11.5-28.5T720-480q-17 0-28.5 11.5T680-440v80ZM280-600h80q17 0 28.5-11.5T400-640q0-17-11.5-28.5T360-680H240q-17 0-28.5 11.5T200-640v120q0 17 11.5 28.5T240-480q17 0 28.5-11.5T280-520v-80ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z",
    title: "Калькулятор пропорций",
    text: "Проверка соотношений сторон изображений любых пропорций.",
    modal: ""
  },
  {
    href: "#remem-page",
    url: "remem.html",
    script: "",
    svgPath: "M320-320v50q0 13 8.5 21.5T350-240q13 0 21.5-8.5T380-270v-50h50q13 0 21.5-8.5T460-350q0-13-8.5-21.5T430-380h-50v-50q0-13-8.5-21.5T350-460q-13 0-21.5 8.5T320-430v50h-50q-13 0-21.5 8.5T240-350q0 13 8.5 21.5T270-320h50Zm230 50h140q13 0 21.5-8.5T720-300q0-13-8.5-21.5T690-330H550q-13 0-21.5 8.5T520-300q0 13 8.5 21.5T550-270Zm0-100h140q13 0 21.5-8.5T720-400q0-13-8.5-21.5T690-430H550q-13 0-21.5 8.5T520-400q0 13 8.5 21.5T550-370ZM280-592h140q13 0 21.5-8.5T450-622q0-13-8.5-21.5T420-652H280q-13 0-21.5 8.5T250-622q0 13 8.5 21.5T280-592Zm-80 472q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Zm420 182 35 35q9 9 21 9t21-9q8-8 8.5-20.5T698-585l-36-37 35-35q9-9 9-21t-9-21q-9-9-21-9t-21 9l-35 35-35-35q-9-9-21-9t-21 9q-9 9-9 21t9 21l35 35-36 37q-8 9-8 21t9 21q9 9 21 9t21-9l35-35Z",
    title: "Rem/Em — калькулятор",
    text: "Перевести Rem/Em в Px по заданному базовому значению в.",
    modal: ""
  }
];

function generateBackpackItems() {
  const list = document.querySelector('.backpack__list');
  backpackItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.className = 'backpack__item';
    listItem.innerHTML = `
      <a class="backpack__link js-open-modal" aria-haspopup="true" href="${item.href}" data-url="${item.url}" data-script="${item.script}" data-modal="${item.modal}">
        <div class="backpack__header">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="${item.svgPath}"/>
          </svg>
          <h2 class="backpack__title">${item.title}</h2>
        </div>
        <p class="backpack__text">${item.text}</p>
      </a>
    `;
    list.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', generateBackpackItems);
