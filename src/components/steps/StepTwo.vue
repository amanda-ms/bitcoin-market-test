<template>
  <div class="step-container">
    <Title :title="formTitle" />
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
      :maxlength="documentMaxLength"
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
      maxlength="11"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import Title from "../common/Title.vue"
import Input from "../common/Input.vue"
import {
  validateName,
  validateDocument,
  validateDate,
  validatePhone,
} from "../../validation/formValidation"

const props = defineProps(["formData"])

const nameError = ref("")
const documentError = ref("")
const dateError = ref("")
const phoneError = ref("")

const formTitle = computed(() => {
  return props.formData.type === "PF" ? "Pessoa Física" : "Pessoa Jurídica"
})

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

const documentMaxLength = computed(() =>
  props.formData.type === "PF" ? 11 : 14
)

const validate = () => {
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

  return isNameValid && isDocumentValid && isDateValid && isPhoneValid
}

defineExpose({ validate })
</script>
