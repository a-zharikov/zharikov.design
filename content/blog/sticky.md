---
title: Липкий блок на чистом CSS
description: Липкий блок на чистом CSS
img: /images/blog/sticky.svg
alt: Липкий блок на чистом CSS
tag: css
tools: css 
---

Нестандартное значение для позиционирования под названием `sticky` предложенное Эдвардом О`Коннером в рассылке <a href="https://lists.w3.org/Archives/Public/www-style/2012Jun/0627.html" target="_blank"><span>www-style</span></a>.

## Что это такое position: sticky?
Это гибрид значений `relative` и `fixed`. В результате присвоения элементу значения `position: sticky;` для позиционирования, он прокручивается вместе со страницей как статический, но только до указанного предела, после которого становится фиксированным.

### Важно
Родительский элемент должен быть `relative`, а у элемента `sticky` обязятельн должно быть свойство `top` или `bottom`.

<iframe height="400" style="width: 100%;" scrolling="no" title="Липкий блок на чистом CSS" src="https://codepen.io/a-zharikov/embed/dyeKpjd?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>