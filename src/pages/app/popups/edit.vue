<template>
  <popup />
</template>

<script>
import Popup from "@/components/Popups/Popup/Popup.vue";
import { useAppStore } from '@/store'

export default {
  name: "AppPopupCreate",
  components: {
    Popup
  },
  data() {
    return {
      loading: true
    }
  },
  computed: {
    store() {
      return useAppStore()
    }
  },
  created() {
    const popup = this.store.popups.find(popup => popup.id === this.$route.params.id)

    if (popup) {
      this.store.setPopup(popup)
      setTimeout(() => {
        this.loading = false;
      }, 2000)
    } else {
      this.$message.error("Popup does not exist!")
      this.$router.push({ name: "app.popups" })
    }
  }
};
</script>

<style scoped lang="scss">
.page-heading {
  width: 100%;
  padding-top: calc(var(--tab-height) - var(--tab-padding));
  display: grid;
  align-content: flex-start;
  margin-bottom: 40px;
}
</style>
