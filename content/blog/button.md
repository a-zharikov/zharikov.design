---
title: Создаем компонент для кнопок
description: Создаем компонент для кнопок
img: /images/blog/button.svg
alt: Создаем компонент для кнопок
tag: css
tools: css 
---

### Размеры
`large` - большая  
`middle` - средняя  
`small` - маленькая

### Цвета
<code class="line" style="background: #325FEB !important; color: #fff; border-color: #325FEB;">primary</code>
<code class="line" style="background: #F9AA34 !important; color: #333; border-color: #F9AA34;">secondary</code>
<code class="line" style="background: #202327 !important; color: #fff; border-color: #202327;">tertiary</code>
<code class="line" style="background: #52B530 !important; color: #fff; border-color: #52B530;">success</code>
<code class="line" style="background: #E85656 !important; color: #fff; border-color: #E85656;">danger</code>

### Модификации
`outline` - обводка и фон  
`transparent` - текстовая кнопка  
`pressed` - активная кнопка  
`loading` - загрузка  
`full` - на весь контейнер  
`disabled` - отключенный

### Состояния
`hover` и `active` задается в соответствии выбранному цвету кнопки.

### Вызов
Инициализация кнопки начинается с класса `button`, далее накидываем размер, цвет и модификацию.  
`.button.large.primary` - первая кнопка в примере ниже.

### Демонстрация
<iframe height="500" style="width: 100%;" scrolling="no" title="Buttons" src="https://codepen.io/a-zharikov/embed/xxmgNWb?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>