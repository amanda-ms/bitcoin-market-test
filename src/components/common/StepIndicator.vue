<template>
  <div class="step-indicator">
    <span class="step-indicator__current-step">{{ currentStep }}</span> de
    <span>{{ totalSteps }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  currentStep: {
    type: Number,
    required: true,
  },
  totalSteps: {
    type: Number,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.step-indicator {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  &__current-step {
    color: var(--primary-color);
  }
}
</style>
