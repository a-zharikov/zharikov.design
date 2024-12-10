function convertUnits() {
  const value1 = parseFloat(document.getElementById("value1").value);
  const unit1 = document.getElementById("unit1").value;
  const unit2 = document.getElementById("unit2").value;
  const rootSize = parseFloat(document.getElementById("rootSize").value);

  if (isNaN(value1) || isNaN(rootSize)) {
      document.getElementById("result").textContent = "Введите корректные данные.";
      return;
  }

  let pxValue;

  // Переводим из текущей единицы в пиксели
  if (unit1 === "px") {
      pxValue = value1;
  } else if (unit1 === "rem" || unit1 === "em") {
      pxValue = value1 * rootSize;
  }

  // Переводим из пикселей в целевую единицу
  let resultValue;
  if (unit2 === "px") {
      resultValue = pxValue;
  } else if (unit2 === "rem" || unit2 === "em") {
      resultValue = pxValue / rootSize;
  }

  // Форматирование результата: убираем нули, если число целое
  const formattedResult = Number.isInteger(resultValue)
      ? resultValue.toString()
      : resultValue.toFixed(4);

  // Обновляем значения
  document.getElementById("value2").value = formattedResult;
  document.getElementById("result").textContent = `${formattedResult}${unit2}`;
}

function copyToClipboard() {
  const resultText = document.getElementById("result").textContent.replace("", "");
  navigator.clipboard.writeText(resultText).then(() => {
      const copyButton = document.getElementById("copyButton");
      copyButton.classList.add("__active");
      setTimeout(() => {
          copyButton.classList.remove("__active");
      }, 2000);
  }).catch((err) => {
      console.error("Ошибка копирования: ", err);
  });
}

// Первичный вызов пересчета при загрузке страницы
convertUnits();