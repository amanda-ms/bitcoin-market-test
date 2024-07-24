<template>
  <div class="step-container">
    <Title title="Senha de acesso" />
    <Input
      id="password"
      type="password"
      v-model="formData.password"
      label="Sua senha"
      :error="passwordError"
    />
  </div>
</template>

<script setup>
import { ref } from "vue"
import Title from "../common/Title.vue"
import Input from "../common/Input.vue"

const props = defineProps(["formData"])

const passwordError = ref("")

const validatePassword = () => {
  if (!props.formData.password) {
    passwordError.value = "Senha é obrigatória."
    return false
  }
  passwordError.value = ""
  return true
}

const validate = () => {
  return validatePassword()
}

defineExpose({ validate })
</script>
