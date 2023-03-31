<template>
  <div class="conversations">
    <h1>Yoooo</h1>
    <button @click="$router.push({ name: 'app.popups.popup', params: { id: 2 }})">To Child</button>
  </div>
</template>

<script>
export default {
  name: "AppPopups"
}
</script>

<style lang="scss" scoped></style>
