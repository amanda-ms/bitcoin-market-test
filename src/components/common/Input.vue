<template>
  <div class="input-group">
    <label v-if="label" :for="id" class="input-group__label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="updateValue"
      :maxlength="maxlength"
      class="input-group__field"
    />
    <div v-if="error" class="input-group__error-message">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"
const props = defineProps({
  id: String,
  label: String,
  type: {
    type: String,
    default: "text",
    validator: (value) =>
      ["text", "date", "password", "email", "tel"].includes(value),
  },
  modelValue: String,
  error: String,
  maxlength: Number,
})

const emit = defineEmits(["update:modelValue"])

const updateValue = (event) => {
  emit("update:modelValue", event.target.value)
}
</script>

<style scoped lang="scss">
.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  &__label {
    font-weight: 500;
  }
  &__field {
    border: 0.07rem solid #828282;
    border-radius: 0.3rem;
    font-size: 0.8rem;
    margin-top: 0.5rem;
    padding: 0.5rem;
    transition: border-color 0.3s ease;
    &:focus {
      border-color: var(--primary-color);
      outline: none;
    }
  }
  &__error-message {
    color: red;
    font-size: 0.8rem;
    margin-top: 0.25rem;
  }
}
</style>
