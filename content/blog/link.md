---
title: Вложенные ссылки в HTML
description: Можно ли врожить ссылку в ссылку
img: /images/blog/link.svg
alt: Вложенные ссылки в HTML
tag: html
tools: html
---

Как известно, в спецификации HTML чётко указано, что вложенных ссылок нет и быть не может. Но, решение есть!

Для этого вторую ссылку надо обернуть в тег `<object>`.

### Пример
```ruby
<a href="post.html">
  <p>Мой пост</p>
  <object>
    <a href="category.html">Категория</a>
  </object>
</a>
```