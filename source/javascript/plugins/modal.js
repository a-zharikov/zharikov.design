$(document).ready(function () {
  // Функция для открытия модального окна
  function openModal(modalId, url, scriptFunc) {
      // Создаем структуру модального окна с кнопкой закрытия
      var modal = $('<div class="modal" id="' + modalId + '"></div>');
      var overlay = $('<div class="modal-overlay"></div>');

      // Кнопка закрытия
      var closeBtn = $('<button class="button fab tertiary modal__close js-modal-close"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"/></svg></button>');

      // Загружаем контент через $.get()
      $.get(url, function(response) {
          // Вставляем полученный HTML в модальное окно
          modal.html(response);

          // Добавляем кнопку закрытия
          modal.append(closeBtn);

          // Добавляем модальное окно и оверлей в DOM
          $('body').append(overlay).append(modal);

          // Открываем модальное окно
          modal.addClass('__active');

          // Закрытие модального окна по оверлею
          overlay.click(function () {
              closeModal(modalId);
          });

          // Закрытие модального окна по кнопке
          closeBtn.click(function () {
              closeModal(modalId);
          });

          // Выполняем функцию, если она указана в data-script
          if (scriptFunc) {
              window[scriptFunc]();  // Вызываем функцию, переданную через data-script
          }

          // Внедрение функции для авто-увеличения высоты textarea в модальном окне
          setAutoHeightTextareas(modal);
      });
  }

  // Функция для закрытия модального окна
  function closeModal(modalId) {
      $('#' + modalId).remove();
      $('.modal-overlay').remove();
      history.replaceState(null, null, window.location.pathname); // Убираем хеш из URL
      localStorage.setItem('modalClosed', 'true'); // Запоминаем, что окно было закрыто
  }

  // Открытие модального окна при клике на ссылку
  $('.js-open-modal').click(function (e) {
      e.preventDefault();

      // Получаем хеш, URL для подгрузки и функцию скрипта
      var modalId = $(this).attr('href').replace('#', '');
      var url = $(this).data('url');
      var scriptFunc = $(this).data('script'); // Получаем имя функции из data-атрибута

      // Открываем модальное окно
      openModal(modalId, url, scriptFunc);

      // Меняем хеш в URL
      history.pushState(null, null, $(this).attr('href'));
      localStorage.removeItem('modalClosed'); // Убираем запись, если окно открыто
  });

  // Проверяем URL при загрузке страницы
  if (window.location.hash && !localStorage.getItem('modalClosed')) {
      var modalId = window.location.hash.replace('#', '');
      var url = $('.js-open-modal[href="#' + modalId + '"]').data('url');
      var scriptFunc = $('.js-open-modal[href="#' + modalId + '"]').data('script');
      openModal(modalId, url, scriptFunc);
  }

  // Обработчик события "Назад"
  $(window).on('popstate', function () {
      if (!window.location.hash) {
          $('.modal').remove();
          $('.modal-overlay').remove();
      }
  });

  // Функция для автоматического изменения высоты textarea по содержимому
  function setAutoHeightTextareas(modal) {
      modal.find('__full').each(function () {
          var $textarea = $(this);
          // Устанавливаем начальную высоту
          $textarea.css('height', 'auto');
          $textarea.css('height', $textarea[0].scrollHeight + 'px');

          // Слушаем изменения в textarea
          $textarea.on('input', function () {
              // Сбрасываем высоту перед вычислением
              $(this).css('height', 'auto');
              // Устанавливаем высоту равной scrollHeight
              $(this).css('height', this.scrollHeight + 'px');
          });
      });
  }
});
