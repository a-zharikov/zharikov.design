---
title: Кастомный select
description: Простоя кастомизация select
img: /images/blog/select.svg
alt: Кастомный select
tag: css
tools: html, css
---
Создаем обертку `select` для `<select>` и далее накидываем стили.

### HTML
```ruby
<div class="select">
  <select>
    <option value="HTML">HTML</option>
    <option value="CSS">CSS</option>
    <option value="JavaScript">JavaScript</option>
    <option value="Pixso">Pixso</option>
  </select>
</div> 
```

### SCSS
```css
$gray: #ccc;

html, body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.select {
	position: relative;
	
	select{
	  width: 100%;
		border: 1px solid $gray;
		border-radius: 2px;
		position: relative;
		outline: none;
		padding: 10px 12px 12px;
		padding-right: 40px;
		background: #fff;
		-moz-appearance: none;
		-webkit-appearance: none;
	}

	&:after {
    content: '‹';
    color: $gray;
    font-size: 26px;
    line-height: 0;
    display: block;
    position: absolute;
    top: 20px;
    right: 19px;
    transform: rotate(-90deg);
	}
}
```

### Демонстрация
<iframe height="300" style="width: 100%;" scrolling="no" title="Кастомный Select" src="https://codepen.io/a-zharikov/embed/abGQrMm?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>