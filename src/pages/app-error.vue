<template>
  <div class="ei-error">
    <h1>Error404</h1>
    <el-button size='large' @click="$router.push('/')">Go Home</el-button>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.ei-error {
  height: 100vh;
  width: 100%;
  background: var(--app-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 40px;

  > * {
    max-width: 1280px;
    margin: 0 auto;
  }

  h1 {
    color: #ffffff;
    font-size: 8rem;
    margin-bottom: 20px;
  }

  @media (screen and max-width: 920px) {
    h1 {
      font-size: 5rem;
    }
  }
}
</style>
