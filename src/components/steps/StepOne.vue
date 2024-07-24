<template>
  <div class="step-container">
    <Title title="Seja bem-vindo(a)" />
    <div>
      <Input
        id="email"
        type="email"
        v-model="formData.email"
        label="Endereço de e-mail"
        :error="emailError"
      />
    </div>
    <RadioGroup
      label="Tipo de cadastro:"
      :options="radioOptions"
      v-model="formData.type"
      name="tipo-cadastro"
    />
  </div>
</template>

<script setup>
import { ref } from "vue"
import Title from "../common/Title.vue"
import Input from "../common/Input.vue"
import RadioGroup from "../common/Radio.vue"
import { validateEmail } from "../../validation/formValidation"

const props = defineProps(["formData"])

const emailError = ref("")

const radioOptions = [
  { label: "Pessoa Física", value: "PF" },
  { label: "Pessoa Jurídica", value: "PJ" },
]

const validate = () => {
  const isEmailValid = validateEmail(
    props.formData.email,
    (value) => (emailError.value = value)
  )
  return isEmailValid
}

defineExpose({ validate })
</script>
