<template>
  <div class="step-container">
    <Title title="Revise suas informações" />
    <Input
      id="email"
      type="email"
      v-model="formData.email"
      label="Endereço de e-mail"
      :error="emailError"
    />
    <Input
      id="name"
      type="text"
      v-model="formData.name"
      :label="labels.name"
      :error="nameError"
    />
    <Input
      id="document"
      type="text"
      v-model="formData.document"
      :label="labels.document"
      :error="documentError"
    />
    <Input
      id="date"
      type="date"
      v-model="formData.date"
      :label="labels.date"
      :error="dateError"
    />
    <Input
      id="phone"
      type="tel"
      v-model="formData.phone"
      label="Telefone"
      :error="phoneError"
    />
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
import { ref, computed } from "vue"
import Title from "../common/Title.vue"
import Input from "../common/Input.vue"
import {
  validateEmail,
  validateName,
  validateDocument,
  validateDate,
  validatePhone,
  validatePassword,
} from "../../validation/formValidation"

const props = defineProps(["formData"])

const emailError = ref("")
const nameError = ref("")
const documentError = ref("")
const dateError = ref("")
const phoneError = ref("")
const passwordError = ref("")

const labels = computed(() => {
  if (props.formData.type === "PF")
    return {
      name: "Nome",
      document: "CPF",
      date: "Data de nascimento",
    }
  return {
    name: "Razão Social",
    document: "CNPJ",
    date: "Data de abertura",
  }
})

const validate = () => {
  const isEmailValid = validateEmail(
    props.formData.email,
    (value) => (emailError.value = value)
  )
  const isNameValid = validateName(
    props.formData.name,
    (value) => (nameError.value = value),
    labels.value.name
  )
  const isDocumentValid = validateDocument(
    props.formData.document,
    props.formData.type,
    (value) => (documentError.value = value),
    labels.value.document
  )
  const isDateValid = validateDate(
    props.formData.date,
    (value) => (dateError.value = value),
    labels.value.date
  )
  const isPhoneValid = validatePhone(
    props.formData.phone,
    (value) => (phoneError.value = value)
  )
  const isPasswordValid = validatePassword(
    props.formData.password,
    (value) => (passwordError.value = value)
  )

  return (
    isEmailValid &&
    isNameValid &&
    isDocumentValid &&
    isDateValid &&
    isPhoneValid &&
    isPasswordValid
  )
}

defineExpose({ validate })
</script>
