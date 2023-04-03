<template>
	<div
    class="popup-design animate__animated animate__fadeIn"
    @click.self="closeEdit">
    <div class='popup-design-widget'>
      <popup-widget ref="widget" :view="view" />
    </div>
    <div class="popup-design-actions">
      <h4>Preview or save your widget</h4>
      <div>
        <el-button @click="preview = true">Preview</el-button>
        <el-button type="primary" :loading='saving' @click="save">Save</el-button>
      </div>
    </div>
	</div>
  <popup-widget-preview v-model:show='preview' />
</template>
<script>
import PopupWidget from '@/components/Popups/Popup/Widget/PopupWidget.vue';
import PopupWidgetPreview from '@/components/Popups/Popup/Widget/PopupWidgetPreview.vue';
import { useAppStore } from '@/store'

export default {
  name: "PopupDesign",
  components: {
    PopupWidget,
    PopupWidgetPreview
  },
  data() {
    return {
      view: "desktop",
      preview: false,
      saving: false,
      updating: false
    }
  },
  computed: {
    store() {
      return useAppStore()
    },
    action() {
      const route = this.$route.name;
      return route ? route.split(".")[2] : ""
    }
  },
  methods: {
    closeEdit() {
      this.store.setElementToEdit(null)
    },
    save () {
      this.saving = true;
      this.action === 'create' ? this.store.createPopup() : this.store.updatePopup()
      const messages = {
        create: "Popup created successfully",
        edit: "Popup updated successfully",
      }
      setTimeout(() => {
        this.$router.push({ name: "app.popups" })
        this.$message.success(messages[this.action])
        this.saving = false;
      }, 1500)
    }
  }
}
</script>

<style scoped lang="scss">
.popup-design {
  height: 100%;
	width: 100%;
  padding: 40px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &-widget {
    min-height: 500px;

    @media screen and (max-width: 600px) {
      display: none;
    }
  }

  &-actions {
    background-color: var(--app-white);
    margin: 50px auto 100px;
    width: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 30px 60px;

    > h4 {
      margin-right: 50px;
    }
  }
}
</style>
