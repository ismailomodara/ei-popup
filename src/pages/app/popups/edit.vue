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
  computed: {
    store() {
      return useAppStore()
    },
    popups() {
      return this.store.popups;
    }
  },
  created() {
    const popupId = this.$route.params.id;
    const popup = this.popups.find(popup => popup.id === popupId)

    if (popup) {
      this.store.setPopup(popup)
    } else {
      this.$message.error("Popup does not exist!")
      this.$router.push({ name: "app.popups" })
    }
  }
};
</script>
