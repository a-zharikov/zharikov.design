---
title: Переключатель (toggle) для input checkbox
description: Простоя кастомизация переключателя (toggle) для input checkbox
img: /images/blog/toggle.svg
alt: Переключатель (toggle) для input checkbox
tag: css
tools: html, css
---
Просто накидываем стили для `<input>`.

### HTML
```ruby
<input type="checkbox">
```

### SCSS
```css
html,body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

input {

  &[type="checkbox"] {
    position: relative;
    width: 80px;
    height: 40px;
    background: #ccc;
    outline: none;
    border-radius: 20px;
    appearance: none;

    &:before {
      content: '';
      position: absolute;
      width: 36px;
      height: 36px;
      border-radius: 20px;
      top: 2px;
      left: 2px;
      background: #fff;
      transition: .2s;
    }

    &:checked {
      background: #03a9f4;

      &:before {
        left: 42px;
      }
    }
  }
}
```

### Демонстрация
<iframe height="300" style="width: 100%;" scrolling="no" title="Toggle переключатель из checkbox" src="https://codepen.io/a-zharikov/embed/vYjQyBg?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>