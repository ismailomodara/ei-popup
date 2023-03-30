<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  name: "App",

  components: {
    BlankLayout: defineAsyncComponent(() => import("@/layouts/BlankLayout.vue")),
    AppLayout: defineAsyncComponent(() => import("@/layouts/AppLayout.vue")),
  },

  computed: {
    layout() {
      const routeLayout = this.$route.meta.layout
      return routeLayout && routeLayout === 'app' ? 'AppLayout' : 'BlankLayout'
    }
  }
})
</script>
