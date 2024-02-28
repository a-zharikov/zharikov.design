---
title: Исправляем css hover эффект на тач-устройствах
description: Hover на мобильных устройствах
img: /images/blog/hover.svg
alt: Исправляем css hover эффект на тач-устройствах
tag: css
tools: css
---

На любом элементе у которого есть состояние `:hover` добавляем атрибут `aria-haspopup="true"`.

### Пример
```ruby
<a href="http://doggydog.blog" aria-haspopup="true">DoggyDog.blog</a>
```