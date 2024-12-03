$(document).ready(function () {
  // Изначально выставляем тему при загрузке страницы
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const defaultTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  // Устанавливаем текущую тему
  $('html').attr('data-theme', defaultTheme);
  localStorage.setItem('theme', defaultTheme);

  // Обработчик переключения темы
  $('.js-toggle-theme').on('click', function () {
    const currentTheme = $('html').attr('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    $('html').attr('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // Обновляем тему, если системные предпочтения изменились
  const themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  themeMediaQuery.addEventListener('change', (e) => {
    // Проверяем, не был ли уже установлен пользовательский выбор
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      $('html').attr('data-theme', newTheme);
    }
  });
});
