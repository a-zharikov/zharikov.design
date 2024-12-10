function initializeTriangleGenerator() {
  const widthInput = document.getElementById("width");
  const heightInput = document.getElementById("height");
  const directionInputs = document.querySelectorAll('input[name="direction"]');
  const triangle = document.getElementById("triangle");
  const cssCode = document.getElementById("cssCode");
  const copyButton = document.getElementById("copyCode");
  const copyMessage = document.getElementById("copyMessage");
  const selectedDirection = document.getElementById("selectedDirection");

  const defaultColor = "#40b4ea"; // Цвет по умолчанию

  function updateTriangle() {
    const width = parseInt(widthInput.value);
    const height = parseInt(heightInput.value);
    const direction = document.querySelector('input[name="direction"]:checked').value;

    let cssText = `width: 0;\nheight: 0;\n`;
    let borderStyle = "solid";

    switch (direction) {
      case "top":
        cssText += `border-style: ${borderStyle};\nborder-width: 0 ${width}px ${height}px ${width}px;\nborder-color: transparent transparent ${defaultColor} transparent;`;
        break;
      case "right":
        cssText += `border-style: ${borderStyle};\nborder-width: ${height}px 0 ${height}px ${width}px;\nborder-color: transparent transparent transparent ${defaultColor};`;
        break;
      case "bottom":
        cssText += `border-style: ${borderStyle};\nborder-width: ${height}px ${width}px 0 ${width}px;\nborder-color: ${defaultColor} transparent transparent transparent;`;
        break;
      case "left":
        cssText += `border-style: ${borderStyle};\nborder-width: ${height}px ${width}px ${height}px 0;\nborder-color: transparent ${defaultColor} transparent transparent;`;
        break;
      case "top-left":
        cssText += `border-style: ${borderStyle};\nborder-width: ${height}px ${width}px 0 0;\nborder-color: ${defaultColor} transparent transparent transparent;`;
        break;
      case "top-right":
        cssText += `border-style: ${borderStyle};\nborder-width: 0 ${height}px ${width}px 0;\nborder-color: transparent ${defaultColor} transparent transparent;`;
        break;
      case "bottom-left":
        cssText += `border-style: ${borderStyle};\nborder-width: ${height}px 0 0 ${width}px;\nborder-color: transparent transparent transparent ${defaultColor};`;
        break;
      case "bottom-right":
        cssText += `border-style: ${borderStyle};\nborder-width: 0 0 ${height}px ${width}px;\nborder-color: transparent transparent ${defaultColor} transparent;`;
        break;
      default:
        break;
    }

    triangle.style.cssText = cssText;
    cssCode.value = cssText;

    // Обновляем название выбранного треугольника
    selectedDirection.textContent = `${direction.replace('-', ' ').toUpperCase()}`;
  }

  copyButton.addEventListener("click", () => {
    cssCode.select();
    document.execCommand("copy");
  
    copyMessage.innerHTML = '<span class="badge medium success">Скопировано!</span>';
    copyButton.disabled = true; // Блокируем кнопку
    setTimeout(() => {
      copyMessage.innerHTML = ""; // Убираем сообщение через 2 секунды
      copyButton.disabled = false; // Разблокируем кнопку
    }, 2000);
  });

  // Добавляем обработчики на изменение радиокнопок
  [widthInput, heightInput, ...directionInputs].forEach((input) =>
    input.addEventListener("input", updateTriangle)
  );

  updateTriangle();
}
