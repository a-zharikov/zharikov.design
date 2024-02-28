---
title: Обрезаем текст в три точки
description: Обрезаем текст в три точки на чистом css
img: /images/blog/dots.svg
alt: Обрезаем текст в три точки
tag: css
tools: css
---

Для начала созданим два миксина. Первый для перенос слов, второй для скрытия текст.

### @mixin break_word
```scss
@mixin break_word(){
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
}
```

`overflow-wrap: break-word` - управляет переносом слов, которые не помещаются по длине в родительский элемент, слово разбивается в любом месте, если не помещается в размеры, заданные родительскому элементу;

`word-wrap: break-word` - управляет переносом длинных слов, если они не помещаются в родительский блок, слово переносится на любой букве при достижении края родительской области;

`word-break: break-word` - управляет переносом длинных слов, если они не помещаются в родительский блок, слово переносится на любой букве при достижении края родительской области.

### @mixin text_count_line
```scss
@mixin text_count_line($count){
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: $count;
  -webkit-box-orient: vertical;
  @include break_word();
}
```

`$count` - количество строк;

`text-overflow` - определяет, как будет обрезаться текст, если он не влезает в доступную область полностью;

`webkit-line-clamp` - Ограничивает текст заданным числом строк. Если текст превышает указанное число строк, то текст обрезается и в конце добавляется многоточие;

`@include break_word()` - вызов предыдущего миксина.

### Вызов
```scss
.element{
  @include text_count_line(1);
}
```

### Демонстрация
<iframe height="300" style="width: 100%;" scrolling="no" title="Обрезаем текст в три точки" src="https://codepen.io/a-zharikov/embed/abGQgqV?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>