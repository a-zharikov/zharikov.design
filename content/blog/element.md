---
title: Абсолютная центровка элемента
description: Выравнивание элемента по центру с position absolute
img: /images/blog/element.svg
alt: Абсолютная центровка элемента
tag: css
tools: css
---

Для позиционирования элемента с `absolute` добавляем `translate(-50%, -50%)`.

```css
.element {
  width: 100px;
  height: 100px;
  background: gray;
  position: absolute;

  // Выравниваем по середине
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### Демонстрация
<iframe height="320" style="width: 100%;" scrolling="no" title="Абсолютная центровка элемента" src="https://codepen.io/a-zharikov/embed/LYmrPwK?default-tab=css%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>