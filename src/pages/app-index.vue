<template>
  <div class="ei-home">
    <nav class='ei-home--nav'>
      <p @click='home'>EiPopups</p>
    </nav>
    <div class='ei-home--content'>
      <div class='ei-home--content-text'>
        <h1 class='animate__animated animate__bounce'>Convert visitors to leads in seconds</h1>
        <el-button class='animate__animated animate__fadeInUp' size='large' @click="start">Let's begin</el-button>
      </div>
      <div class='ei-home--content-image animate__animated animate__pulse'>
        <img src='@/assets/images/popup-illustration.svg' alt='Popup' />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const home = () => {
  router.push({ name: "home" })
}
const start = () => {
  router.push({ name: "app.popups" })
}
</script>

<style lang="scss" scoped>
.ei-home {
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

  &--nav {
    position: absolute;
    top: 0;
    padding: 30px 0;
    width: 100%;

    p {
      color: #ffffff;
      text-decoration: none;
      font-size: 24px;
      font-weight: 500;
    }
  }

  &--content {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-column-gap: 40px;
    justify-content: space-between;
    align-items: center;

    &-text {

      h1 {
        color: var(--app-white);
        font-size: 4.5rem;
        margin-bottom: 20px;
        line-height: 1.125;
      }
    }
  }

  @media screen and (max-width: 1280px) {
    &--nav {
      padding: 30px 40px;
    }
  }

  @media screen and (max-width: 1024px) {
    &--content {
      &-text {
        h1 {
          font-size: 3rem;
        }
      }
      &-image {
        img {
          height: 300px;
          width: auto;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    &--content {
      grid-template-columns: 1fr;

      &-text {
        text-align: center;
        margin-bottom: 40px;

        h1 {
          font-size: 2.5rem;
        }
      }

      &-image {
        img {
          height: 300px;
          width: auto;
        }
      }
    }
  }
}
</style>
