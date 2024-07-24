<template>
  <div class="radio-group">
    <div
      v-for="option in options"
      :key="option.value"
      class="radio-group__option"
    >
      <input
        type="radio"
        :id="`radio-${option.value}`"
        :name="name"
        :value="option.value"
        v-model="selectedValue"
        @change="updateValue(option.value)"
        class="radio-group__option__input"
      />
      <label
        :for="`radio-${option.value}`"
        class="radio-group__option__label"
        >{{ option.label }}</label
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  label: String,
  options: {
    type: Array,
    required: true,
  },
  modelValue: String,
  name: String,
})

const emit = defineEmits(["update:modelValue"])
const selectedValue = ref(props.modelValue)

const updateValue = (value) => {
  emit("update:modelValue", value)
}
</script>

<style scoped lang="scss">
.radio-group {
  display: flex;
  &__option {
    display: flex;
    align-items: center;
    margin-right: 1.5rem;
    &__input {
      appearance: none;
      width: 1.25rem;
      height: 1.25rem;
      border: 0.125rem solid var(--primary-color);
      border-radius: 50%;
      position: relative;
      margin-right: 0.5rem;
      outline: none;
      cursor: pointer;
      &:checked::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0.75rem;
        height: 0.75rem;
        background-color: var(--primary-color);
        border-radius: 50%;
      }
    }
    &__label {
      font-size: 0.9rem;
      cursor: pointer;
    }
  }
}
</style>
