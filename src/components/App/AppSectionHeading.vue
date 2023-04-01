<template>
  <div v-if='props.title'>
    <h6>{{ props.title }}</h6>
    <p>{{ props.description }}</p>
  </div>
</template>

<script setup>
const props = defineProps(['title', 'description'])
</script>

<style lang="scss" scoped>
div {
  margin-bottom: 20px;
}

h6 {
  color: var(--text-secondary);
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 1.05rem;
}

p {
  color: var(--text-tertiary);
  font-size: 0.875rem;
}
</style>
