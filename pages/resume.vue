<template>
  <div>
    <PageTitle>Резюме</PageTitle>
    <div class="page resume">
      <div class="page-header">
        <img src="/images/avatar.jpg" alt="I am">
        <div class="page-header__content"><span>Александр Жариков</span>фронденд-дизайнер</div>
      </div>
      <div class="resume-wrapper">
        <div class="resume-tabs">
          <button class="resume-tabs__item" @click="currentTab = 'skills'" :class="{ active: currentTab === 'skills' }">НАВЫКИ</button>
          <button class="resume-tabs__item" @click="currentTab = 'career'" :class="{ active: currentTab === 'career' }">КАРЬЕРА</button>
        </div>
        <div class="resume-tabs__content">
          <component :is="currentTabComponent"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          title: 'Резюме // Zharikov.design'
        }
      },
      head() {
        return {
          title: this.title,
          meta: [
            {
              hid: 'description',
              name: 'description',
              content: 'Опыт работы и навыки'
            },
            {
              hid: 'keywords',
              name: 'keywords',
              content: 'figma, photoshop, illustrator, Davinci Resolve, html, slim, haml, css, scss, sass, less, JavaScript, jQuery, Vue, nuxt, ror, php, react, mysql'
            }
          ]
        }
      }
    }
</script>

<script setup>
  import { ref, computed } from 'vue';
  import SkillsTab from '@/components/resume/SkillsTab.vue';
  import CareerTab from '@/components/resume/CareerTab.vue';

  const currentTab = ref('skills');

  const tabs = {
    skills: SkillsTab,
    career: CareerTab,
  };

  const currentTabComponent = computed(() => tabs[currentTab.value]);
</script>
