<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script setup>
defineProps(["title"])
</script>

<style lang="scss" scoped>
.title {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}
</style>
