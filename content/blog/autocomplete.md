---
title: Убрать желтый фон у полей с autocomplete
description: Как убрать желтый фон у полей
img: /images/blog/autocomplete.svg
alt: Убрать желтый фон у полей с autocomplete
tag: css
tools: css
---

### Первый вариант
Добавить `input` свойство `autocomplete="off"`, но в таком случае отключится автозаполнение формы.

### Второй вариант
Задать большую внутреннюю тень для полей с цветом равным цвету желаемого фона.

```scss
input {
  border: 2px solid #ccc;
  font: 20px/20px 'Verdana';
  padding: 8px;
  outline: none; // Убираем обводку
  
  // Магия CSS
  &:-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0 50px #fff !important; // Цвет фона 
    -webkit-text-fill-color: #999 !important; // цвет текста
    color: #999 !important; // цвет текста
  }
  
  &:focus {
    border-color: #40B4EA;
  }
}
```

### Демонстрация
<iframe height="300" style="width: 100%;" scrolling="no" title="Убрать желтый фон у полей с autocomplete" src="https://codepen.io/a-zharikov/embed/PoexGap?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>