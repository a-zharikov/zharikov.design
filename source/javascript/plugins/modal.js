$(document).ready(function () {
  // Функция для открытия модального окна
  function openModal(modalId, url, scriptFunc, modalClass) {
      var modal = $('<div class="modal" id="' + modalId + '"></div>');
      if (modalClass) {
          modal.addClass(modalClass);
      }
      var overlay = $('<div class="modal-overlay"></div>');
      var preloader = $('<div class="modal__preloader"><svg viewBox="25 25 50 50" class="p-progress-spinner-svg" style="animation-duration: 2s;"><circle cx="50" cy="50" r="20" stroke-miterlimit="10" class="p-progress-spinner-circle" fill="none" stroke-width="6"></circle></svg></div>');
      var closeBtn = $('<button class="button fab tertiary modal__close js-modal-close"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q-11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"/></svg></button>');

      // Загружаем контент через $.get()
      $.get(url, function(response) {
          modal.html(response);
          modal.append(preloader);
          modal.append(closeBtn);

          $('body').append(overlay).append(modal);

          modal.addClass('__active');

          overlay.click(function () {
              closeModal(modalId);
          });

          closeBtn.click(function () {
              closeModal(modalId);
          });

          if (scriptFunc) {
              window[scriptFunc]();
          }

          // Обновляем подсветку синтаксиса
          transformTextareaToPre(modal);

          // Обработчик для копирования текста
          enableCopyButton(modal);

          // Инициализируем отслеживание загрузки изображений и iframe
          var images = modal.find('img');
          var iframes = modal.find('iframe');
          var totalItems = images.length + iframes.length;

          // Массив промисов для отслеживания загрузки
          var loadPromises = [];

          // Для изображений
          images.each(function () {
              loadPromises.push(new Promise((resolve, reject) => {
                  if (this.complete) {
                      resolve();  // Если изображение уже загружено
                  } else {
                      $(this).on('load', resolve); // Если изображение загрузится
                      $(this).on('error', reject); // Если ошибка загрузки
                  }
              }));
          });

          // Для iframes
          iframes.each(function () {
              loadPromises.push(new Promise((resolve, reject) => {
                  $(this).on('load', resolve); // Если iframe загрузится
                  $(this).on('error', reject); // Если ошибка загрузки
              }));
          });

          // Когда все изображения и iframes загружены
          Promise.all(loadPromises).then(function () {
              // Все элементы загружены
              modal.find('.modal__page').css('opacity', '0').animate({ opacity: 1 }, 500);
              
              // Ждем несколько миллисекунд, чтобы прелоадер был виден
              setTimeout(function() {
                  preloader.addClass('__hide');  // Добавляем класс __hide для скрытия прелоадера
              }, 200); // Задержка 200 мс для лучшего визуального эффекта
          }).catch(function () {
              console.error("Ошибка загрузки ресурсов.");
              setTimeout(function() {
                  preloader.addClass('__hide');  // Добавляем класс __hide в случае ошибки
              }, 200);  // Задержка 200 мс
          });
      });
  }

  // Функция для закрытия модального окна
  function closeModal(modalId) {
      $('#' + modalId).remove();
      $('.modal-overlay').remove();
      history.replaceState(null, null, window.location.pathname);
  }

  // Функция для замены <textarea> на <pre><code>
  function transformTextareaToPre(modal) {
      modal.find('textarea.language-css, textarea.language-js, textarea.language-html').each(function () {
          var $textarea = $(this);
          var codeContent = $textarea.val(); // Получаем содержимое из <textarea>
          var languageClass = $textarea.attr('class').match(/language-(\w+)/)[0]; // Определяем язык

          // Создаем <pre><code>
          var preElement = $('<pre></pre>');
          var codeElement = $('<code></code>').addClass(languageClass).text(codeContent);

          preElement.append(codeElement); // Вставляем <code> внутрь <pre>
          $textarea.replaceWith(preElement); // Заменяем <textarea> на <pre><code>

          // Применяем подсветку PrismJS
          Prism.highlightElement(codeElement[0]);
      });
  }

  // Обработчик для кнопок копирования
  function enableCopyButton(modal) {
      modal.find('.js-textarea-copy').click(function () {
          var $textareaContainer = $(this).closest('.textarea-code');
          var $textarea = $textareaContainer.find('textarea, code'); // Ищем textarea или code

          // Копируем содержимое
          var textToCopy = $textarea.text() || $textarea.val();
          navigator.clipboard.writeText(textToCopy).then(() => {
              var $button = $(this);
              $button.addClass('__copy');
              setTimeout(() => {
                  $button.removeClass('__copy');
              }, 2000);
          });
      });
  }

  // Открытие модального окна при клике на ссылку
  $('.js-open-modal').click(function (e) {
      e.preventDefault();

      var modalId = $(this).attr('href').replace('#', '');
      var url = $(this).data('url');
      var scriptFunc = $(this).data('script');
      var modalClass = $(this).data('modal');

      openModal(modalId, url, scriptFunc, modalClass);

      history.pushState(null, null, $(this).attr('href'));
  });

  // Обработка события "Назад"
  $(window).on('popstate', function () {
      if (!window.location.hash) {
          $('.modal').remove();
          $('.modal-overlay').remove();
      }
  });

  // Открытие модального окна при загрузке страницы, если в URL есть хеш
  if (window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      const link = $(`.js-open-modal[href="#${hash}"]`);
      if (link.length) {
          const url = link.data('url');
          const scriptFunc = link.data('script');
          const modalClass = link.data('modal');
          openModal(hash, url, scriptFunc, modalClass);
      }
  }
});
