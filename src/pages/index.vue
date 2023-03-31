<template>
  <div class="ei-home">
    <h1>Ei Popups</h1>
    <p>Let's get started. Create a username</p>
    <form @submit.prevent="start">
      <input v-model="form.username" type="text" />
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AppIndex",
  data() {
    return {
      form: {
        username: ""
      }
    }
  },
  methods: {
    start() {
      this.$router.push({ name: "app.popups" })
    }
  }
}
</script>

<style lang="scss" scoped>
.ei-home {
  height: 100vh;
  width: 100%;
  background: var(--brand-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: var(--brand-white);
    font-size: 5rem;
    margin-bottom: 20px;
  }

  input {
    height: 40px;
    margin-bottom: 10px;
  }

  button {
    display: block;
    background-color: var(--brand-white);
    color: var(--text-primary);
  }
}
</style>
