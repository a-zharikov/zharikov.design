---
title: Кастомный input checkbox
description: Простоя кастомизация input checkbox
img: /images/blog/checkbox.svg
alt: Кастомный input checkbox
tag: css
tools: html, css
---
HTML - код выглядит следующим образом.

### HTML
```ruby
<div class="checkbox">
  <label class="control">
    <input type="checkbox" name="checkbox" checked="checked">
    <div class="control_indicator"></div>
    Checked
  </label>
  <label class="control">
    <input type="checkbox" name="checkbox">
    <div class="control_indicator"></div>
    No checked
  </label>
  <label class="control">
    <input type="checkbox" name="checkbox">
    <div class="control_indicator"></div>
    No checked
  </label>
  <label class="control">
    <input type="checkbox" name="checkbox" disabled="disabled">
    <div class="control_indicator"></div>
    Disabled
  </label>
</div>
```

### О чем этот код?
`checkbox` - общий контейнер для input checkbox;  
`label class="control"` - контейнер для input и всего содержимого. Важно чтобы тег был `<label>`, иначе клик не сработает;  
`input type="checkbox"` - сам input для передачи состояния, но сам по себе он скрыт;  
`control_indicator` - блок для отрисовки input checkbox и нужных состояний;  
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

.checkbox {
  
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
<iframe height="300" style="width: 100%;" scrolling="no" title="Кастомный Checkbox" src="https://codepen.io/a-zharikov/embed/zYjMQJv?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>