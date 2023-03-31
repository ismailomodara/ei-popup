<template>
  <div class="conversations">
    <h1>Yoooo</h1>
    <button @click="$router.push({ name: 'app.popups.popup', params: { id: 2 }})">To Child</button>
    <div>
      <div v-for="popup in popups" :key="popup.id">
        <p>{{ popup.title }}</p>
        <p>{{ popup.created_at }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useAppStore } from '@/store'

export default {
  name: "AppPopups",
  computed: {
    popups() {
      return useAppStore().popups
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  color: #111111;
}
</style>
