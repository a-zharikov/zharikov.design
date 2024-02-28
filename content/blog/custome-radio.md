---
title: Кастомный input radio
description: Простоя кастомизация input radio
img: /images/blog/radio.svg
alt: Кастомный input radio
tag: css
tools: html, css
---
HTML - код выглядит следующим образом.

### HTML
```ruby
<div class="radio">
  <label class="control">
    <input type="radio" name="radio" checked="checked">
    <div class="control_indicator"></div>
    Checked
  </label>
  <label class="control">
    <input type="radio" name="radio">
    <div class="control_indicator"></div>
    No checked
  </label>
  <label class="control">
    <input type="radio" name="radio">
    <div class="control_indicator"></div>
    No checked
  </label>
  <label class="control">
    <input type="radio" name="radio" disabled="disabled">
    <div class="control_indicator"></div>
    Disabled
  </label>
</div>
```

### О чем этот код?
`radio` - общий контейнер для input radio;  
`label class="control"` - контейнер для input и всего содержимого. Важно чтобы тег был `<label>`, иначе клик не сработает;  
`input type="radio"` - сам input для передачи состояния, но сам по себе он скрыт;  
`control_indicator` - блок для отрисовки input radio и нужных состояний;  
`Checked` - любой текст.

### SCSS
```scss
$gray: #ccc;

html, body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.radio {
  
  .control {
    font: 20px/20px 'Verdana';
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    input {
      position: absolute;
      z-index: -1;
      opacity: 0;

      &:checked {

        & ~ .control_indicator {
          border-color: $gray;

          &:after {
            display: block;
          }
        }
      }

      &:disabled {

        & ~ .control_indicator {
          background: transparent;
          opacity: .4;
          pointer-events: none;

          &:after {
            background: transparent;
          }
        }
      }
    }

    &_indicator {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      position: relative;
      margin-right: 12px;
      border: 2px solid $gray;

      &:after {
        box-sizing: unset;
        content: '';
        position: absolute;
        display: none;
        left: 4px;
        top: 4px;
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background: $gray;
      }
    }

    &:hover {

      .control_indicator {

        &:after {
          display: block;
        }
      }
    }
  }
}
```

### Демонстрация
<iframe height="300" style="width: 100%;" scrolling="no" title="Кастомный RadioButton" src="https://codepen.io/a-zharikov/embed/RwyqOXG?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>