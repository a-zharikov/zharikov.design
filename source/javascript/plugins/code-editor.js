document.addEventListener('DOMContentLoaded', () => {
  const codeEditor = document.querySelector('textarea');
  
  // Создаем элементы <pre> и <code>
  const pre = document.createElement('pre');
  const code = document.createElement('code');
  
  // Добавляем классы для подсветки синтаксиса
  code.className = codeEditor.className;
  
  // Копируем содержимое <textarea> в <code>
  code.textContent = codeEditor.value;
  
  // Вставляем <code> внутрь <pre>
  pre.appendChild(code);
  
  // Заменяем <textarea> на <pre>
  codeEditor.parentNode.replaceChild(pre, codeEditor);
  
  // Применяем подсветку синтаксиса
  Prism.highlightAll();

  // Обработчик нажатия на кнопку копирования
  document.querySelector('.js-textarea-copy').addEventListener('click', function() {
    // Получаем текст из элемента <code>
    const formattedText = document.querySelector('pre code').textContent;

    // Создаём временный input для копирования текста
    const tempInput = document.createElement('textarea');
    document.body.appendChild(tempInput);
    
    // Устанавливаем текст в созданный элемент
    tempInput.value = formattedText;
    tempInput.select();
    document.execCommand('copy'); // Выполняем команду копирования
    document.body.removeChild(tempInput); // Удаляем временный input

    // Визуальное подтверждение копирования
    this.classList.add('__copy'); // Добавляем класс __copy
    setTimeout(() => this.classList.remove('__copy'), 2000); // Убираем класс через 2 секунды
  });
});