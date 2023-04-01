<template>
  <popup />
</template>

<script>
import Popup from "@/components/Popups/Popup/Popup.vue";
import { defaultPopupElements } from '@/components/Popups/Popup/popup-elements';
import { useAppStore } from '@/store'

export default {
  name: "AppPopupCreate",
  components: {
    Popup
  },
  created() {
    useAppStore().setPopup({
      id: null,
      title: "",
      settings: {
        backgroundColor: "#e85e5b",
        spacing: 10,
        alignment: "center"
      },
      elements: [...defaultPopupElements]
    })
  }
};
</script>
