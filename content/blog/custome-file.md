---
title: Кастомный input file
description: Простоя кастомизация input file
img: /images/blog/file.svg
alt: Кастомный input file
tag: css
tools: html, css
---
Создаем обертку `file-input` для `<input>` и далее накидываем стили.

### HTML
```ruby
<div class="file-input">
  <input type="file">
</div>
```

### SCSS
```css
html, body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.file-input {
  padding: 10px;
  border-radius: 2px;
  position: relative;
  border: 1px solid #999;
  overflow: hidden;
  
  input {
    color: #999;
    width: calc(100% + 95px);
    text-align: left;
    margin-left: -95px;

    &::-webkit-file-upload-button {
      visibility: hidden;
      position: relative;
    }

    &::before {
      content: '+';
      color: #999;
      display: inline-block;
      background: #eee;
      border: 1px solid #ccc;
      border-radius: 3px;
      padding: 5px 8px;
      outline: none;
      white-space: nowrap;
      position: absolute;
      top: 5px; right: 5px;
      -webkit-user-select: none;
      cursor: pointer;
      font-weight: 700;
      font-size: 14px;
    }

    &:hover {

      &::before {
        border-color: black;
      }
    }

    &:active {

      &:hover {
        background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
      }
    } 
  }
}
```

### Демонстрация
<iframe height="300" style="width: 100%;" scrolling="no" title="Кастомный File" src="https://codepen.io/a-zharikov/embed/xxjQoKq?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>