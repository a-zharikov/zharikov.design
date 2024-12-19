function aspectRatioCalculator() {
  const widthInput = document.getElementById("width");
  const heightInput = document.getElementById("height");
  const aspectRatioRadios = document.querySelectorAll('input[name="direction"]');
  const aspectRatioCodeContainer = document.querySelector(".aspectratio__code"); // Родитель для <pre><code>

  // Helper для получения текущего соотношения сторон
  function getSelectedAspectRatio() {
    const selectedRadio = document.querySelector('input[name="direction"]:checked');
    if (selectedRadio) {
      const [width, height] = selectedRadio.value.split("-").map(Number);
      return { width, height };
    }
    return null;
  }

  // Установка начального пресета, если ничего не выбрано
  function setDefaultPreset() {
    if (!document.querySelector('input[name="direction"]:checked')) {
      aspectRatioRadios[0].checked = true; // Устанавливаем первый пресет как выбранный
    }
  }

  // Обновление высоты или ширины в зависимости от соотношения
  function updateDimensions() {
    const aspectRatio = getSelectedAspectRatio();
    if (!aspectRatio) return;

    const width = parseFloat(widthInput.value);
    const height = parseFloat(heightInput.value);

    if (document.activeElement === widthInput && width) {
      heightInput.value = Math.round((width / aspectRatio.width) * aspectRatio.height);
    } else if (document.activeElement === heightInput && height) {
      widthInput.value = Math.round((height / aspectRatio.height) * aspectRatio.width);
    } else if (width) {
      heightInput.value = Math.round((width / aspectRatio.width) * aspectRatio.height);
    }

    updateAspectRatioCode();
  }

  // Обновление содержимого кода
  function updateAspectRatioCode() {
    const width = widthInput.value || 0;
    const height = heightInput.value || 0;
    const cssCode = `width: ${width}px;\nheight: ${height}px;`;

    // Ищем <pre><code> внутри aspectratio__code
    const codeElement = aspectRatioCodeContainer.querySelector("pre code");
    if (codeElement) {
      codeElement.textContent = cssCode; // Обновляем содержимое <code>
      Prism.highlightElement(codeElement); // Применяем подсветку
    }
  }

  // Заполнение значений по умолчанию при открытии
  function initializeAspectRatioCode() {
    setDefaultPreset(); // Устанавливаем пресет по умолчанию, если он не выбран

    const aspectRatio = getSelectedAspectRatio();
    if (!aspectRatio) return;

    const defaultWidth = 1280; // Ширина по умолчанию
    const defaultHeight = Math.round((defaultWidth / aspectRatio.width) * aspectRatio.height);

    // Устанавливаем значения в инпуты
    widthInput.value = defaultWidth;
    heightInput.value = defaultHeight;

    // Генерируем CSS код
    const cssCode = `width: ${defaultWidth}px;\nheight: ${defaultHeight}px;`;

    // Ищем <pre><code> внутри aspectratio__code
    const codeElement = aspectRatioCodeContainer.querySelector("pre code");
    if (codeElement) {
      codeElement.textContent = cssCode; // Устанавливаем начальное содержимое
      Prism.highlightElement(codeElement); // Применяем подсветку
    }
  }

  // Смена соотношения сторон
  function onAspectRatioChange() {
    const aspectRatio = getSelectedAspectRatio();
    if (!aspectRatio) return;

    const width = parseFloat(widthInput.value) || 1280; // Значение по умолчанию
    widthInput.value = width; // Устанавливаем ширину, если она пустая
    heightInput.value = Math.round((width / aspectRatio.width) * aspectRatio.height);

    updateAspectRatioCode();
  }

  // Добавляем обработчики событий
  widthInput.addEventListener("input", updateDimensions);
  heightInput.addEventListener("input", updateDimensions);
  aspectRatioRadios.forEach((radio) => radio.addEventListener("change", onAspectRatioChange));

  // Инициализация по умолчанию при открытии
  initializeAspectRatioCode();
}
