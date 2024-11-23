<template>
  <div>
    <button class="burder" @click="toggleSidebar">
      <span class="lt"></span>
      <span class="rt"></span>
      <span class="lb"></span>
      <span class="rb"></span>
    </button>
    <aside :class="{ active: isSidebarActive }">
      <div class="sidebar">
        <nuxt-link @click="closeSidebar" to="/">
          <img src="/images/logo.svg" alt="Zharikov.design">
        </nuxt-link>
        <nav>
          <nuxt-link active-class="active" @click="closeSidebar" to="/resume">
            <i class="icon resume"></i>
            <span>Резюме</span>
          </nuxt-link>
          <nuxt-link active-class="active" @click="closeSidebar" to="/portfolio">
            <i class="icon portfolio"></i>
            <span>Портфолио</span>
          </nuxt-link>
          <nuxt-link active-class="active" @click="closeSidebar" to="/blog">
            <i class="icon blg"></i>
            <span>Блог</span>
          </nuxt-link>
          <nuxt-link active-class="active" @click="closeSidebar" to="/backpack">
            <i class="icon backpack"></i>
            <span>Рюкзак</span>
          </nuxt-link>
          <nuxt-link active-class="active" @click="closeSidebar" to="/contacts">
            <i class="icon contacts"></i>
            <span>Контакты</span>
          </nuxt-link>
        </nav>
        <div class="copyright">
          <span>© 2000 – {{ new Date().getFullYear() }}</span>
          <span>Alexander Zharikov</span>
        </div>
      </div>
    </aside>
    <div class="overlay" :class="{ active: isSidebarActive }" @click="closeSidebar"></div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

// Реактивная переменная для отслеживания состояния
const isSidebarActive = ref(false);

// Метод для переключения состояния
function toggleSidebar() {
  isSidebarActive.value = true;
}

// Метод для закрытия sidebar
function closeSidebar() {
  isSidebarActive.value = false;
}
</script>