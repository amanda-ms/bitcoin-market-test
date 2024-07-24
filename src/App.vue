<template>
  <div class="container">
    <StepNavigator
      :formData="formData"
      :stepsCount="steps.length"
      :component="steps[currentStep]?.component"
      :currentStep="currentStep"
      :clearFields="clearFormFields"
      @update:currentStep="updateCurrentStep"
      class="container__step-navigator"
    />
  </div>
</template>

<script setup>
import { reactive, ref, watch } from "vue"
import StepNavigator from "./components/common/StepNavigator.vue"
import StepOne from "./components/steps/StepOne.vue"
import StepTwo from "./components/steps/StepTwo.vue"
import StepThree from "./components/steps/StepThree.vue"
import StepFour from "./components/steps/StepFour.vue"

const formData = reactive({
  email: "",
  type: "PF",
  name: "",
  document: "",
  date: "",
  phone: "",
  password: "",
})

const currentStep = ref(0)

const steps = [
  { component: StepOne },
  { component: StepTwo },
  { component: StepThree },
  { component: StepFour },
]

watch(
  () => formData.type,
  (newType, oldType) => {
    if (newType !== oldType) {
      clearFormFields("personType")
    }
  }
)

const updateCurrentStep = (newStep) => {
  currentStep.value = newStep
}

const clearFormFields = (type = "all") => {
  if (type === "all") {
    formData.email = ""
    formData.name = ""
    formData.document = ""
    formData.date = ""
    formData.phone = ""
    formData.password = ""
  } else {
    formData.name = ""
    formData.document = ""
    formData.date = ""
    formData.phone = ""
    formData.password = ""
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  &__step-navigator {
    width: 100%;
    max-width: 25rem;
  }
}
</style>
