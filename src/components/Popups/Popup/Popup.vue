<template>
  <div class="popup">
    <div class='popup-panel'>
      <popup-elements class='animate__animated animate__fadeIn' />
      <popup-settings class='animate__animated animate__fadeIn' />
    </div>
    <div class='popup-window'>
      <popup-design ref="panel-design" />
    </div>
  </div>
</template>

<script>
import PopupElements from "@/components/Popups/Popup/PopupElements.vue";
import PopupDesign from "@/components/Popups/Popup/PopupDesign.vue";
import PopupSettings from "@/components/Popups/Popup/PopupSettings.vue";

export default {
  name: "AppPopup",
  components: {
    PopupSettings,
    PopupElements,
    PopupDesign
  }
};
</script>

<style scoped lang="scss">
.popup {
  display: flex;
  width: 100%;
  height: 100%;

  &-panel {
    width: 350px;
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    background-color: var(--app-white);
    padding: 30px;
    overflow: hidden;
    overflow-y: scroll;
  }

  &-window {
    width: calc(100% - 320px);
  }
}
</style>
