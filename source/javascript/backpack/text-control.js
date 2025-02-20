function initializeTextControl() {
  const demoText = document.querySelector('.text-control__demo-text');
  const codeBlock = document.querySelector('.text-control__code code');

  // Объект для отслеживания активных свойств
  const activeProperties = {};

  // Текст по умолчанию (комментарий)
  const defaultComment = "/* Выбери свойства для текста */";

  // Функция для очистки стилей и кода конкретного свойства
  function clearStyle(property) {
      // Удаляем конкретное свойство из стилей
      const jsProperty = property.replace(/-(\w)/g, (match, letter) => letter.toUpperCase());
      demoText.style[jsProperty] = '';

      // Удаляем свойство из объекта активных свойств
      delete activeProperties[property];

      // Обновляем CSS-код
      updateCSSCode();
  }

  // Функция для применения стиля
  function applyStyle(property, value) {
      // Преобразуем CSS-свойство в формат JavaScript
      const jsProperty = property.replace(/-(\w)/g, (match, letter) => letter.toUpperCase());

      // Применяем стиль к демонстрационному тексту
      demoText.style[jsProperty] = value;

      // Добавляем свойство в объект активных свойств
      activeProperties[property] = value;

      // Обновляем CSS-код
      updateCSSCode();
  }

  // Функция для обновления CSS-кода
  function updateCSSCode() {
      if (Object.keys(activeProperties).length === 0) {
          // Если нет активных свойств, показываем комментарий
          codeBlock.textContent = defaultComment;
      } else {
          // Генерируем код на основе активных свойств
          const activeStyles = [];
          for (const [property, value] of Object.entries(activeProperties)) {
              activeStyles.push(`${property}: ${value};`);
          }

          // Обновляем содержимое блока с кодом
          codeBlock.textContent = activeStyles.join('\n');
      }

      // Перезапускаем подсветку кода с помощью Prism
      if (typeof Prism !== 'undefined' && typeof Prism.highlightElement === 'function') {
          Prism.highlightElement(codeBlock);
      }
  }

  // Обработчик изменения чекбокса
  function handleCheckboxChange(event) {
      const checkbox = event.target;
      const selectId = checkbox.id.replace('checkbox', 'select'); // Получаем ID связанного селекта
      const select = document.getElementById(selectId);

      if (checkbox.checked) {
          // Если чекбокс активирован, разблокируем селект
          select.disabled = false;

          // Добавляем обработчик изменения селекта
          select.addEventListener('change', () => {
              const property = checkbox.name; // Имя свойства из атрибута name чекбокса
              const value = select.value; // Текущее значение селекта

              if (value) {
                  applyStyle(property, value); // Применяем стиль
              } else {
                  clearStyle(property); // Очищаем стиль, если значение пустое
              }
          });

          // Инициализация со значением по умолчанию
          select.dispatchEvent(new Event('change'));
      } else {
          // Если чекбокс деактивирован, блокируем селект и очищаем стиль
          select.disabled = true;

          const property = checkbox.name; // Имя свойства из атрибута name чекбокса
          clearStyle(property); // Удаляем стиль
      }
  }

  // Добавляем обработчики для всех чекбоксов
  const checkboxes = document.querySelectorAll('.text-control__row input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', handleCheckboxChange);
  });

  // Инициализация: показываем комментарий по умолчанию
  updateCSSCode();
}

// Инициализация функции
initializeTextControl();