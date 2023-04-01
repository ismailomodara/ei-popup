<template>
  <div class='popups-empty'>
    <img src='@/assets/images/empty.svg' alt='Empty' />
    <h2>No popups created.</h2>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.popups-empty {
  height: 400px;
  width: 80%;
  margin: auto;
  background-color: var(--app-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 120px;
    width: auto;
    margin-bottom: 20px;
  }
}
</style>
