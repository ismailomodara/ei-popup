<template>
  <div class='app-empty-page'>
    <img src='@/assets/images/building.svg' alt='Building' />
    <h1>Building!</h1>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.app-empty-page {
  height: 60vh;
  width: 80%;
  margin: 50px auto;
  background-color: var(--app-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 40px;
    height: 250px;
    width: auto;
  }

  h1 {
    color: var(--text-primary);
    font-size: 3rem;
  }
}
</style>
