<template>
  <button :class="buttonClass">
    {{ name }}
  </button>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: "contained",
  },
})

const buttonClass = computed(() => {
  return {
    button: true,
    "button--outlined": props.variant === "outlined",
    "button--contained": props.variant === "contained",
  }
})
</script>

<style scoped lang="scss">
.button {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 1rem;
  &--contained {
    background-color: var(--primary-color);
    color: white;
    border: none;
  }
  &--outlined {
    background-color: transparent;
    color: var(--primary-color);
    border: 0.125rem solid var(--primary-color);
  }
}
</style>
