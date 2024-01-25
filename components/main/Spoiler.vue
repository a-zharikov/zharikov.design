<template>
  <div>
    <div v-if="!isCollapsed">
      <slot></slot>
    </div>
    <button :class="{ active: !isCollapsed }" @click="toggleCollapse">
      <span>{{ isCollapsed ? buttonTextMore : buttonTextLess }}</span>
      <i class="icon arrow"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  index: Number,
  initialCollapsed: Boolean,
  buttonTextMore: String,
  buttonTextLess: String
});

const emits = defineEmits(['update:collapsed']);

const isCollapsed = ref(props.initialCollapsed);

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
  emits('update:collapsed', { index: props.index, value: isCollapsed.value });
};
</script>
