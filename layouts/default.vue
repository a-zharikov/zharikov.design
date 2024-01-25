<!-- layouts/default.vue -->

<template>
  <div class="container">
    <LayoutHeader />
    <LayoutSidebar />
    <div class="wrapper">
      <Nuxt />
      <LayoutFooter />
    </div>
  </div>
</template>

<style>
/* Ваши стили для макета */
</style>
<!--<template>
  <LayoutHeader />
  <LayoutSidebar />
  <div class="wrapper">
    <slot />
    <LayoutFooter />
  </div>
</template>-->