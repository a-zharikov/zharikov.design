<template>
  <div>
    <div class="skills">
      <div v-for="skill in skills" :key="skill.name" class="skills-item">
        <div class="skills-item__name" v-html="skill.name"></div>
        <div class="skills-item__level">
          <div v-for="i in 5" :key="i" class="skills-item__block" :class="{ filled: i <= skill.level }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  { name: 'Figma', level: 4 },
  { name: 'Photoshop', level: 4 },
  { name: 'Illustrator', level: 3 },
  { name: 'Davinci Resolve', level: 3 },
  { name: 'HTML<span>slim/haml</span>', level: 5 },
  { name: 'CSS<span>scss/sass/less</span>', level: 5 },
  { name: 'JavaScript', level: 3 },
  { name: 'jQuery', level: 4 },
  { name: 'Vue 3<span>nuxt 3</span>', level: 2 },
  { name: 'RoR', level: 2 },
  { name: 'PHP', level: 3 },
  { name: 'MySQL', level: 2 }
];
</script>