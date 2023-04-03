<template>
  <el-dialog
    v-model="setShow"
    class="popup-widget-preview"
    :fullscreen="true"
    :destroy-on-close="true"
    :close-on-click-modal="false"
  >
    <div class='animate__animated animate__flipInX'>
      <popup-widget :preview='true' />
    </div>
  </el-dialog>
</template>

<script>
import PopupWidget from '@/components/Popups/Popup/Widget/PopupWidget.vue'

export default {
  name: "PopupWidgetPreview",
  components: {
    PopupWidget
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    setShow: {
      get() {
        return this.show
      },
      set(value) {
        this.$emit("update:show", value)
      }
    }
  }
}
</script>

<style lang='scss'>
.el-dialog.popup-widget-preview {
  background-color: transparent;
  box-shadow: none;
  outline: none;
  backdrop-filter: blur(4px);
  overflow: hidden;

  .el-dialog__header {
     text-align: right;

    .el-dialog__headerbtn {
      position: relative;
      background-color: #ffffff;
      border-radius: 100%;

      i {
        color: var(--text-primary);
        font-weight: 700;
        font-size: 1.25rem;
      }
    }
  }

  .el-dialog__body {
    display: flex;
    justify-content: center;
  }
}
</style>
