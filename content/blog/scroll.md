---
title: Добавляем класс элементу по скроллу страницы
description: Добавляем класс элементу по скроллу страницы
img: /images/blog/scroll.svg
alt: Добавляем класс элементу по скроллу страницы
tag: js
tools: jquery, html, css 
---

Прячем блок когда скролим вниз и показываем когда скролим наверх.

### html
```ruby
<div class="header">  
  <div class="header-wrapper">  
    Header  
  </div>  
</div>  
```

`header` - основной контейнер с фиксированной высотой;  
`header-wrapper` - контейнер шапки, основной стиль вешаем на него.

### SCSS
```css
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.header {
  width: 100%;
  height: 52px;
  margin: 0 auto;
  
  &-wrapper {
    width: 70%;
    height: 52px;
    font: 24px/24px "Verdana";
    position: fixed;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ccc;
    transform: translate(-50%, 0);
    transition: all 550ms ease-in-out;
    
    &.fixed {
      transform: translate(-50%, -100%);
    }
  }
}

.content {
  width: 70%;
  margin: 0 auto;
  padding: 16px;
  
  p {
    font: 16px/24px "Verdana";
  }
}

.footer {
  width: 70%;
  margin: 0 auto;
  padding: 16px;
  text-align: center;
  font: 24px/24px "Verdana";
  background: #ccc;
}
```

Класс `.fixed` задает положение шапки.

### JQ
```js
var header = $('.header-wrapper'),
scrollPrev = 0;

$(window).on('scroll', function() {
  var scrolled = $(window).scrollTop();

  if ( scrolled > 0 && scrolled > scrollPrev ) {
    header.addClass('fixed');
  } else {
    header.removeClass('fixed');
  }
  scrollPrev = scrolled;
});
```
### О чем этот код?
`var header = $('.header-wrapper')` - ловим элемент с классом `.header-wrapper`;

`scrollPrev = 0;` - переменная для хранения предыдущей позиции скролла;

`$(window).on('scroll', function() {});` - навешиваем обработчик события скролл на объект window;

`var scrolled = $(window).scrollTop();` - получаем текущую позицию скролла страницы;

`if (scrolled > 0 && scrolled > scrollPrev)` - проверяем, была ли прокрутка больше 0 (страница не в самом верху) и больше, чем предыдущая прокрутка;

`header.addClass('fixed');` - если условия выполняются, добавляем класс 'fixed' к .header-wrapper;

`header.removeClass('fixed');` -   если условия не выполняются, удаляем класс 'fixed' у .header-wrapper.


### Демонстрация
<iframe height="360" style="width: 100%;" scrolling="no" title="Добавляем класс элементу по скроллу страницы" src="https://codepen.io/a-zharikov/embed/KKRboLM?default-tab=js%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>