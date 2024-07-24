<template>
  <div>
    <StepIndicator :currentStep="currentStep + 1" :totalSteps="stepsCount" />
    <component :is="component" :formData="formData" ref="stepComponent" />
    <div
      :class="[
        'form-actions',
        { 'form-actions--single-button': currentStep === 0 },
      ]"
    >
      <Button
        v-if="currentStep > 0"
        name="Voltar"
        variant="outlined"
        @click="prevStep"
      />
      <Button
        v-if="!isLastStep"
        name="Continuar"
        variant="contained"
        @click="handleNext"
      />
      <Button
        v-if="isLastStep"
        name="Cadastrar"
        variant="contained"
        @click="submitForm"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import Button from "./Button.vue"

const props = defineProps({
  formData: Object,
  stepsCount: Number,
  component: Object,
  currentStep: Number,
  clearFields: Function,
})

const emit = defineEmits(["update:currentStep"])

const stepComponent = ref(null)

const isLastStep = computed(() => props.currentStep === props.stepsCount - 1)

const nextStep = () => {
  if (props.currentStep < props.stepsCount - 1) {
    emit("update:currentStep", props.currentStep + 1)
  }
}

const prevStep = () => {
  if (props.currentStep > 0) {
    emit("update:currentStep", props.currentStep - 1)
  }
}

const handleNext = async () => {
  if (stepComponent.value?.validate()) {
    nextStep()
  }
}

const submitForm = async () => {
  if (stepComponent.value?.validate())
    try {
      const response = await fetch("/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(props.formData),
      })

      if (response.status === 201) {
        alert("Cadastro realizado com sucesso!")
        props.clearFields("all")
        emit("update:currentStep", (props.currentStep = 0))
      }
    } catch (error) {
      alert("Erro ao realizar cadastro!")
    }
}

defineExpose({ nextStep, prevStep, isLastStep })
</script>

<style scoped lang="scss">
.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  .button {
    flex: 1;
  }
  &--single-button {
    .button {
      flex: none;
      width: 100%;
    }
  }
}
</style>
